import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dbConnector, DbModule } from './db/db.module';

@Module({
  imports: [DbModule],
  controllers: [AppController],
  providers: [AppService, dbConnector],
})
export class AppModule {}
