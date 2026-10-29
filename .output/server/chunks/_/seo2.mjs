import { sql } from 'drizzle-orm';
import { b as db } from '../nitro/nitro.mjs';
import 'node:crypto';
import 'crypto';
import 'fs';
import 'path';
import 'node:path';
import '@nuxthub/blob';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:async_hooks';
import 'postgres';
import 'drizzle-orm/postgres-js';
import 'drizzle-orm/d1';
import 'node:module';
import 'mysql2/promise';
import 'drizzle-orm/mysql2';
import 'drizzle-orm/pg-core';
import 'drizzle-orm/sqlite-core';
import 'drizzle-orm/mysql-core';
import 'maxmind';
import 'node:os';
import 'node:url';
import 'zod';
import '@iconify/utils';
import 'consola';
import 'node:zlib';
import 'ioredis';
import 'jose';
import 'node:child_process';
import 'process';
import 'buffer';
import 'node:dns/promises';
import 'node:net';
import 'node:fs/promises';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';

const SOURCE_CONTENT_TYPE = {
  "fishing-videos": "video",
  "fishing-articles": "article",
  "fishing-baike": "baike",
  "fishing-pictures": "picture"
};
const rowsToEntries = (rows) => rows.filter((row) => row && typeof row.path === "string" && row.path.startsWith("/")).map((row) => ({
  path: row.path,
  lastmod: row.lastmod ? new Date(row.lastmod).toISOString() : void 0
}));
const resolvePagination = (options, fallbackLimit = 1e4) => {
  const limit = Math.max(1, Math.floor(Number(options == null ? void 0 : options.pageSize) || fallbackLimit));
  const page = Math.max(1, Math.floor(Number(options == null ? void 0 : options.page) || 1));
  const offset = (page - 1) * limit;
  return { limit, offset };
};
const getSitemapCount = async (source) => {
  var _a, _b, _c, _d, _e, _f;
  if (source === "fishing-pages") {
    const res2 = await db.execute(sql`
      SELECT COUNT(*) AS count
      FROM posts p JOIN fishing_content_ref r ON r.post_id = p.id
      WHERE p.is_active = true AND p.type = 'page'
    `);
    const row2 = ((res2 == null ? void 0 : res2.rows) || res2 || [])[0];
    return { count: Math.max(0, Number((_a = row2 == null ? void 0 : row2.count) != null ? _a : 0)) };
  }
  if (source === "fishing-freelist") {
    const res2 = await db.execute(sql`
      SELECT COUNT(*) AS count FROM fishing_freelist WHERE ishtml = 1 AND url <> ''
    `);
    const row2 = ((res2 == null ? void 0 : res2.rows) || res2 || [])[0];
    return { count: Math.max(0, Number((_b = row2 == null ? void 0 : row2.count) != null ? _b : 0)) };
  }
  if (source === "fishing-categories") {
    const res2 = await db.execute(sql`
      SELECT COUNT(*) AS count
      FROM fishing_category
      WHERE url <> '' AND type = 0
    `);
    const row2 = ((res2 == null ? void 0 : res2.rows) || res2 || [])[0];
    return { count: Math.max(0, Number((_c = row2 == null ? void 0 : row2.count) != null ? _c : 0)) };
  }
  if (source === "fishing-tags") {
    const res2 = await db.execute(sql`
      SELECT COUNT(*) AS count
      FROM fishing_tag
      WHERE is_show = 1 AND pinyin <> ''
    `);
    const row2 = ((res2 == null ? void 0 : res2.rows) || res2 || [])[0];
    return { count: Math.max(0, Number((_d = row2 == null ? void 0 : row2.count) != null ? _d : 0)) };
  }
  const contentType = source ? SOURCE_CONTENT_TYPE[source] : void 0;
  if (contentType) {
    const res2 = await db.execute(sql`
      SELECT COUNT(*) AS count, MAX(COALESCE(p.updated_at, p.created_at)) AS lastmod
      FROM fishing_content_ref r
      JOIN posts p ON p.id = r.post_id
      WHERE p.is_active = true AND r.content_type = ${contentType}
    `);
    const row2 = ((res2 == null ? void 0 : res2.rows) || res2 || [])[0];
    return {
      count: Math.max(0, Number((_e = row2 == null ? void 0 : row2.count) != null ? _e : 0)),
      lastmod: (row2 == null ? void 0 : row2.lastmod) ? new Date(row2.lastmod).toISOString() : void 0
    };
  }
  const res = await db.execute(sql`
    SELECT COUNT(*) AS count, MAX(COALESCE(p.updated_at, p.created_at)) AS lastmod
    FROM fishing_content_ref r
    JOIN posts p ON p.id = r.post_id
    WHERE p.is_active = true
  `);
  const row = ((res == null ? void 0 : res.rows) || res || [])[0];
  return {
    count: Math.max(0, Number((_f = row == null ? void 0 : row.count) != null ? _f : 0)),
    lastmod: (row == null ? void 0 : row.lastmod) ? new Date(row.lastmod).toISOString() : void 0
  };
};
const contentByType = async (contentType, options) => {
  const { limit, offset } = resolvePagination(options, 1e4);
  const res = await db.execute(sql`
    SELECT r.legacy_url AS path, COALESCE(p.updated_at, p.created_at) AS lastmod
    FROM fishing_content_ref r
    JOIN posts p ON p.id = r.post_id
    WHERE p.is_active = true AND r.content_type = ${contentType}
    ORDER BY p.id ASC
    LIMIT ${limit} OFFSET ${offset}
  `);
  return rowsToEntries((res == null ? void 0 : res.rows) || res || []);
};
const getSitemapEntries = async (source, options) => {
  if (source === "fishing-pages") {
    const { limit: limit2, offset: offset2 } = resolvePagination(options, 1e4);
    const res2 = await db.execute(sql`
      SELECT r.legacy_url AS path, COALESCE(p.updated_at, p.created_at) AS lastmod
      FROM posts p JOIN fishing_content_ref r ON r.post_id = p.id
      WHERE p.is_active = true AND p.type = 'page'
      ORDER BY p.id ASC
      LIMIT ${limit2} OFFSET ${offset2}
    `);
    return rowsToEntries((res2 == null ? void 0 : res2.rows) || res2 || []);
  }
  if (source === "fishing-freelist") {
    const { limit: limit2, offset: offset2 } = resolvePagination(options, 1e4);
    const res2 = await db.execute(sql`
      SELECT url AS path
      FROM fishing_freelist
      WHERE ishtml = 1 AND url <> ''
      ORDER BY tid ASC
      LIMIT ${limit2} OFFSET ${offset2}
    `);
    return rowsToEntries((res2 == null ? void 0 : res2.rows) || res2 || []);
  }
  if (source === "fishing-categories") {
    const { limit: limit2, offset: offset2 } = resolvePagination(options, 1e4);
    const res2 = await db.execute(sql`
      SELECT url AS path
      FROM fishing_category
      WHERE url <> '' AND type = 0
      ORDER BY id ASC
      LIMIT ${limit2} OFFSET ${offset2}
    `);
    return rowsToEntries(((res2 == null ? void 0 : res2.rows) || res2 || []).map((r) => ({ path: r.path })));
  }
  if (source === "fishing-tags") {
    const { limit: limit2, offset: offset2 } = resolvePagination(options, 1e4);
    const res2 = await db.execute(sql`
      SELECT '/tags/' || pinyin AS path
      FROM fishing_tag
      WHERE is_show = 1 AND pinyin <> ''
      ORDER BY id ASC
      LIMIT ${limit2} OFFSET ${offset2}
    `);
    return rowsToEntries((res2 == null ? void 0 : res2.rows) || res2 || []);
  }
  const contentType = source ? SOURCE_CONTENT_TYPE[source] : void 0;
  if (contentType) {
    return contentByType(contentType, options);
  }
  const { limit, offset } = resolvePagination(options, 1e4);
  const res = await db.execute(sql`
    SELECT r.legacy_url AS path, COALESCE(p.updated_at, p.created_at) AS lastmod
    FROM fishing_content_ref r
    JOIN posts p ON p.id = r.post_id
    WHERE p.is_active = true
    ORDER BY p.id ASC
    LIMIT ${limit} OFFSET ${offset}
  `);
  return rowsToEntries((res == null ? void 0 : res.rows) || res || []);
};

export { getSitemapCount, getSitemapEntries };
//# sourceMappingURL=seo2.mjs.map
