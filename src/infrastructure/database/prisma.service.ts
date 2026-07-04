import { Injectable } from "@nestjs/common";
import { databaseConfig } from "src/config/database.config";
import { PrismaClient } from "src/generated/prisma/client";

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      adapter: databaseConfig.adapter,
    })
  }
}