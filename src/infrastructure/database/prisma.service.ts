import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { databaseConfig } from "src/config/database.config";

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      adapter: databaseConfig.adapter,
    })
  }
}