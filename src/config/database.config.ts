import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3"
import { DATABASE_URL } from "./env.config"
export const databaseConfig = {
  url: DATABASE_URL,
  adapter: new PrismaBetterSqlite3({ url: DATABASE_URL }),
}