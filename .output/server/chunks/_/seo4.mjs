import { fy as defaultShoparkCases } from '../nitro/nitro.mjs';
import 'drizzle-orm';
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

const shoparkAppSeeds = [
  { kind: "app", packageKind: "extension", runtimeKind: "payment", slug: "stripe", name: "Stripe", category: "payment", mark: "S", accent: "#635bff", version: "0.3.1", publishedAt: "2024-06-22", updatedAt: "2026-10-13", downloads: 12 },
  { kind: "app", packageKind: "extension", runtimeKind: "payment", slug: "paddle", name: "Paddle", category: "payment", mark: "P", accent: "#7357ff", version: "0.0.2", publishedAt: "2024-06-22", updatedAt: "2026-10-13", downloads: 1 },
  { kind: "app", packageKind: "extension", runtimeKind: "ui", slug: "google-translate", name: "Google Translate", category: "localization", mark: "G", accent: "#4285f4", version: "0.0.2", publishedAt: "2024-07-02", updatedAt: "2026-10-13", downloads: 0 },
  { kind: "app", packageKind: "extension", runtimeKind: "payment", slug: "paypal", name: "PayPal", category: "payment", mark: "P", accent: "#0070ba", version: "2.2.5", publishedAt: "2024-06-22", updatedAt: "2026-10-13", downloads: 9 },
  { kind: "app", packageKind: "extension", runtimeKind: "importer", slug: "fastdatas", name: "FastDatas", category: "data", mark: "F", accent: "#0ea5e9", version: "0.0.1", publishedAt: "2024-06-22", updatedAt: "2026-10-13", downloads: 0 },
  { kind: "app", packageKind: "extension", runtimeKind: "payment", slug: "coin-gate", name: "CoinGate", category: "payment", mark: "C", accent: "#16a34a", version: "1.0.0", publishedAt: "2024-08-26", updatedAt: "2026-10-13", downloads: 0 },
  { kind: "app", packageKind: "extension", runtimeKind: "messaging", slug: "mailer", name: "Mailer", category: "communication", mark: "M", accent: "#f97316", version: "1.0.1", publishedAt: "2024-08-26", updatedAt: "2026-10-13", downloads: 8 },
  { kind: "app", packageKind: "extension", runtimeKind: "messaging", slug: "wechat", name: "WeChat", category: "communication", mark: "W", accent: "#07c160", version: "0.0.5", publishedAt: "2024-08-26", updatedAt: "2026-10-13", downloads: 2 },
  { kind: "app", packageKind: "extension", runtimeKind: "messaging", slug: "alisms", name: "Alibaba SMS", category: "communication", mark: "A", accent: "#ff6a00", version: "0.0.4", publishedAt: "2024-08-26", updatedAt: "2026-10-13", downloads: 10 },
  { kind: "app", packageKind: "extension", runtimeKind: "ui", artifactId: "example-tools", slug: "test", name: "Shopark Test", category: "utility", mark: "T", accent: "#64748b", version: "0.0.3", publishedAt: "2024-08-27", updatedAt: "2026-10-13", downloads: 34 },
  { kind: "app", packageKind: "extension", runtimeKind: "importer", slug: "shopifyimport", name: "Shopify Import", category: "commerce", mark: "S", accent: "#95bf47", version: "1.1.0", publishedAt: "2024-11-04", updatedAt: "2026-10-13", downloads: 14 },
  { kind: "app", packageKind: "extension", runtimeKind: "payment", slug: "receive", name: "Cash on Delivery", category: "payment", mark: "C", accent: "#0891b2", version: "0.0.3", publishedAt: "2024-11-04", updatedAt: "2026-10-13", downloads: 8 },
  { kind: "app", packageKind: "extension", runtimeKind: "ui", slug: "qrcode", name: "QR Code", category: "utility", mark: "QR", accent: "#111827", version: "0.0.2", publishedAt: "2024-11-04", updatedAt: "2026-10-12", downloads: 0 },
  { kind: "app", packageKind: "extension", runtimeKind: "messaging", slug: "bird", name: "Bird", category: "communication", mark: "B", accent: "#2563eb", version: "0.0.4", publishedAt: "2026-03-16", updatedAt: "2026-10-13", downloads: 1 },
  { kind: "app", packageKind: "extension", runtimeKind: "auth", slug: "apple", name: "Sign in with Apple", category: "identity", mark: "A", accent: "#111827", version: "0.0.2", publishedAt: "2026-03-18", updatedAt: "2026-10-13", downloads: 3 }
];
const shoparkThemeSeeds = [
  { kind: "theme", packageKind: "theme", artifactId: "shopark", slug: "shopark-website", name: "Shopark Website", category: "business", mark: "SW", accent: "#2563eb", version: "1.0.0", publishedAt: "2024-05-21", updatedAt: "2026-10-13" },
  { kind: "theme", packageKind: "theme", slug: "outdoor-equipment-mall", name: "Outdoor Equipment", category: "outdoor", mark: "OE", accent: "#0f766e", version: "1.0.0", publishedAt: "2024-05-21", updatedAt: "2024-08-25" },
  { kind: "theme", packageKind: "theme", slug: "audio-headphones-mall", name: "Audio & Headphones", category: "electronics", mark: "AH", accent: "#7c3aed", version: "1.2.1", publishedAt: "2024-05-21", updatedAt: "2026-10-13" },
  { kind: "theme", packageKind: "theme", slug: "clothing-shoes-mall", name: "Clothing & Shoes", category: "fashion", mark: "CS", accent: "#db2777", version: "1.0.0", publishedAt: "2024-05-22", updatedAt: "2024-08-25" },
  { kind: "theme", packageKind: "theme", slug: "beauty-skin-care-mall", name: "Beauty & Skin Care", category: "beauty", mark: "BS", accent: "#e11d48", version: "1.0.0", publishedAt: "2024-05-22", updatedAt: "2024-08-25" },
  { kind: "theme", packageKind: "theme", slug: "underwear-clothing-mall", name: "Intimates & Apparel", category: "fashion", mark: "IA", accent: "#be185d", version: "1.0.0", publishedAt: "2024-05-22", updatedAt: "2024-08-25" },
  { kind: "theme", packageKind: "theme", slug: "pet-equipment-mall", name: "Pet Supplies", category: "pets", mark: "PS", accent: "#ea580c", version: "1.0.0", publishedAt: "2024-05-22", updatedAt: "2024-08-25" },
  { kind: "theme", packageKind: "theme", slug: "home-textiles-mall", name: "Home Textiles", category: "home", mark: "HT", accent: "#a16207", version: "1.0.0", publishedAt: "2024-05-22", updatedAt: "2024-08-25" },
  { kind: "theme", packageKind: "theme", slug: "cycling-accessories-mall", name: "Cycling Accessories", category: "sports", mark: "CA", accent: "#0284c7", version: "1.0.0", publishedAt: "2024-05-22", updatedAt: "2024-08-25" },
  { kind: "theme", packageKind: "theme", slug: "jewelry-accessories", name: "Jewelry & Accessories", category: "jewelry", mark: "JA", accent: "#ca8a04", version: "1.0.0", publishedAt: "2024-05-22", updatedAt: "2024-08-25" },
  { kind: "theme", packageKind: "theme", slug: "medical-equipment", name: "Medical Equipment", category: "medical", mark: "ME", accent: "#0d9488", version: "1.0.0", publishedAt: "2024-05-22", updatedAt: "2024-08-25" },
  { kind: "theme", packageKind: "theme", slug: "furniture-mattress-mall", name: "Furniture & Mattress", category: "home", mark: "FM", accent: "#92400e", version: "1.0.0", publishedAt: "2024-05-23", updatedAt: "2024-08-25" },
  { kind: "theme", packageKind: "theme", slug: "children-toys-mall", name: "Children & Toys", category: "kids", mark: "CT", accent: "#4f46e5", version: "1.0.0", publishedAt: "2024-05-23", updatedAt: "2024-08-25" },
  { kind: "theme", packageKind: "theme", slug: "wig-mall", name: "Wigs & Hair", category: "beauty", mark: "WH", accent: "#c026d3", version: "1.0.0", publishedAt: "2024-05-23", updatedAt: "2024-08-25" },
  { kind: "theme", packageKind: "theme", slug: "shoes-mall", name: "Footwear", category: "fashion", mark: "FW", accent: "#dc2626", version: "1.0.0", publishedAt: "2024-05-23", updatedAt: "2024-08-25" },
  { kind: "theme", packageKind: "theme", slug: "fitness-equipment-mall", name: "Fitness Equipment", category: "sports", mark: "FE", accent: "#16a34a", version: "1.0.0", publishedAt: "2024-05-23", updatedAt: "2024-08-25" },
  { kind: "theme", packageKind: "theme", slug: "handbags-mall", name: "Handbags", category: "fashion", mark: "HM", accent: "#db2777", version: "1.0.0", publishedAt: "2024-05-23", updatedAt: "2024-08-25" },
  { kind: "theme", packageKind: "theme", slug: "women-clothing-mall", name: "Women's Clothing", category: "fashion", mark: "WC", accent: "#e11d48", version: "1.0.0", publishedAt: "2024-05-23", updatedAt: "2024-08-25" },
  { kind: "theme", packageKind: "theme", slug: "wedding-dress-mall", name: "Wedding Dress", category: "fashion", mark: "WD", accent: "#be185d", version: "1.0.0", publishedAt: "2024-05-23", updatedAt: "2024-08-25" },
  { kind: "theme", packageKind: "theme", slug: "men-clothing-mall", name: "Men's Clothing", category: "fashion", mark: "MC", accent: "#2563eb", version: "1.0.0", publishedAt: "2024-05-23", updatedAt: "2024-08-25" },
  { kind: "theme", packageKind: "theme", slug: "cosmetic-perfume-mall", name: "Cosmetic & Perfume", category: "beauty", mark: "CP", accent: "#ec4899", version: "1.0.0", publishedAt: "2024-05-23", updatedAt: "2024-08-25" },
  { kind: "theme", packageKind: "theme", slug: "phone-accessories-mall", name: "Phone Accessories", category: "electronics", mark: "PA", accent: "#0284c7", version: "1.0.0", publishedAt: "2024-05-23", updatedAt: "2024-08-26" },
  { kind: "theme", packageKind: "theme", slug: "apparelx", name: "ApparelX", category: "fashion", mark: "AX", accent: "#0ea5e9", version: "1.0.0", publishedAt: "2026-10-13", updatedAt: "2026-10-13" }
];
const shoparkMarketplaceSeeds = [...shoparkAppSeeds, ...shoparkThemeSeeds];

const getSitemapEntries = (source) => {
  if (source === "shopark-cases") {
    return defaultShoparkCases.filter((item) => item.status === 1).map((item) => {
      var _a;
      return {
        path: `/cases/${item.id}`,
        lastmod: item.updatedAt || item.createdAt,
        title: item.title,
        section: "Customer Case Studies",
        description: item.summary || item.subtitle || item.title,
        markdown: [
          `- Client: ${item.clientName}`,
          `- Category: ${item.categoryLabel || item.category}`,
          ...item.industry ? [`- Industry: ${item.industry}`] : [],
          `- Primary Outcome: ${item.metricValue} (${item.metricLabel})`,
          ...item.secondaryMetricValue && item.secondaryMetricLabel ? [`- Secondary Outcome: ${item.secondaryMetricValue} (${item.secondaryMetricLabel})`] : [],
          ...item.deliveryPeriod ? [`- Delivery Period: ${item.deliveryPeriod}`] : [],
          ...((_a = item.tags) == null ? void 0 : _a.length) ? [`- Tags: ${item.tags.join(", ")}`] : [],
          ...item.content ? ["", item.content] : []
        ].join("\n")
      };
    });
  }
  const kind = source === "shopark-apps" ? "app" : "theme";
  const prefix = kind === "app" ? "/apps" : "/themes";
  const section = kind === "app" ? "Shopark Apps" : "Shopark Themes";
  return shoparkMarketplaceSeeds.filter((item) => item.kind === kind).map((item) => ({
    path: `${prefix}/${item.slug}`,
    lastmod: item.updatedAt ? `${item.updatedAt}T00:00:00.000Z` : void 0,
    title: item.name,
    section,
    description: `${item.name} (${item.category}) \u2014 Shopark ${kind === "app" ? `${item.runtimeKind || "extension"} app` : "storefront theme"} v${item.version}.`,
    markdown: [
      `- Name: ${item.name}`,
      `- Category: ${item.category}`,
      `- Package Kind: ${item.packageKind}${item.runtimeKind ? ` (${item.runtimeKind})` : ""}`,
      `- Version: ${item.version}`,
      ...item.publishedAt ? [`- Published: ${item.publishedAt}`] : [],
      ...item.updatedAt ? [`- Updated: ${item.updatedAt}`] : []
    ].join("\n")
  }));
};

export { getSitemapEntries };
//# sourceMappingURL=seo4.mjs.map
