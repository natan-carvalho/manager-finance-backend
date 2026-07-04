import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { IndexModules } from './modules/index.module';

@Module({
  imports: [IndexModules, InfrastructureModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
