import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TextStreamModule } from './text-stream/text-stream.module';

@Module({
  imports: [TextStreamModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
