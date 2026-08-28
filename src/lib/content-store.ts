import { promises as fs } from "fs";
import path from "path";
import { Redis } from "@upstash/redis";
import type { ContentStore, ContentSection } from "./types";
import { getDefaultContent } from "./defaults";

const STORE_PATH = path.join(process.cwd(), "content", "store.json");
const STORE_KEY = "portfolio:content";

function getRedis(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  return url && token ? new Redis({ url, token }) : null;
}

async function getInitialContent(): Promise<ContentStore> {
  try {
    const raw = await fs.readFile(STORE_PATH, "utf-8");
    return JSON.parse(raw) as ContentStore;
  } catch {
    return getDefaultContent();
  }
}

async function ensureStore(): Promise<ContentStore> {
  const redis = getRedis();
  if (redis) {
    const stored = await redis.get<ContentStore>(STORE_KEY);
    if (stored) return stored;
    const initialContent = await getInitialContent();
    await redis.set(STORE_KEY, initialContent);
    return initialContent;
  }

  if (process.env.VERCEL) {
    throw new Error(
      "Content storage is not configured. Set UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN."
    );
  }

  try {
    return await getInitialContent();
  } catch {
    const defaults = getDefaultContent();
    await fs.mkdir(path.dirname(STORE_PATH), { recursive: true });
    await fs.writeFile(STORE_PATH, JSON.stringify(defaults, null, 2), "utf-8");
    return defaults;
  }
}

async function writeStore(data: ContentStore): Promise<void> {
  const redis = getRedis();
  if (redis) {
    await redis.set(STORE_KEY, data);
    return;
  }

  if (process.env.VERCEL) {
    throw new Error(
      "Content storage is not configured. Set UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN."
    );
  }

  await fs.mkdir(path.dirname(STORE_PATH), { recursive: true });
  await fs.writeFile(STORE_PATH, JSON.stringify(data, null, 2), "utf-8");
}

export async function getContent(): Promise<ContentStore> {
  return ensureStore();
}

export async function getContentSection<K extends ContentSection>(
  section: K
): Promise<ContentStore[K]> {
  const store = await ensureStore();
  return store[section];
}

export async function updateContentSection<K extends ContentSection>(
  section: K,
  data: ContentStore[K]
): Promise<ContentStore> {
  const store = await ensureStore();
  store[section] = data;
  await writeStore(store);
  return store;
}

export async function addMessage(
  message: Omit<ContentStore["messages"][0], "id" | "createdAt" | "read">
): Promise<ContentStore["messages"][0]> {
  const store = await ensureStore();
  const entry = {
    ...message,
    id: `msg-${Date.now()}`,
    createdAt: new Date().toISOString(),
    read: false,
  };
  store.messages.unshift(entry);
  await writeStore(store);
  return entry;
}

export async function deleteMessage(id: string): Promise<boolean> {
  const store = await ensureStore();
  const before = store.messages.length;
  store.messages = store.messages.filter((m) => m.id !== id);
  if (store.messages.length === before) return false;
  await writeStore(store);
  return true;
}

export async function markMessageRead(id: string): Promise<boolean> {
  const store = await ensureStore();
  const msg = store.messages.find((m) => m.id === id);
  if (!msg) return false;
  msg.read = true;
  await writeStore(store);
  return true;
}

export async function resetContent(): Promise<ContentStore> {
  const defaults = getDefaultContent();
  const store = await ensureStore();
  defaults.messages = store.messages;
  await writeStore(defaults);
  return defaults;
}
