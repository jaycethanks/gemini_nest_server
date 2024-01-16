import { Module } from '@nestjs/common';
import { TextStreamService } from './text-stream.service';
import { TextStreamController } from './text-stream.controller';

@Module({
  controllers: [TextStreamController],
  providers: [TextStreamService],
})
export class TextStreamModule {}
