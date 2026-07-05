import { Module } from '@nestjs/common';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { IndexModules } from './modules/index.module';

@Module({
  imports: [IndexModules, InfrastructureModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
