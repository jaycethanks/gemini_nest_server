import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TextStreamController } from './text-stream/text-stream.controller';

@Module({
  imports: [],
  controllers: [AppController, TextStreamController],
  providers: [AppService],
})
export class AppModule {}
