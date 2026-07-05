import { Global, Injectable, OnModuleInit } from "@nestjs/common";
import { databaseConfig } from "src/config/database.config";
import { PrismaClient } from "src/generated/prisma/client";

@Global()
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    super({
      adapter: databaseConfig.adapter,
    })
  }
  async onModuleInit() {
    console.log('Iniciando conexão com o banco de dados...');

    try {
      await this.$connect();
      console.log('Conexão com o banco de dados estabelecida com sucesso.');
    } catch (error) {
      console.error(
        'Erro ao conectar ao banco de dados.',
        error instanceof Error ? error.stack : String(error),
      );

      throw error;
    }
  }
}