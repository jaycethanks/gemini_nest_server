import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Sse,
} from '@nestjs/common';
import { TextStreamService } from './text-stream.service';
import { CreateTextStreamDto } from './dto/create-text-stream.dto';
import { UpdateTextStreamDto } from './dto/update-text-stream.dto';
import { Observable } from 'rxjs';
import { askTextStreamDto } from './dto/ask-text-stream.dto';

@Controller('text-stream')
export class TextStreamController {
  constructor(private readonly textStreamService: TextStreamService) {}

  @Post('sse')
  @Sse()
  sse(@Body() ask: askTextStreamDto): Promise<Observable<MessageEvent>> {
    return this.textStreamService.askService(ask);
  }

  @Post()
  create(@Body() createTextStreamDto: CreateTextStreamDto) {
    return this.textStreamService.create(createTextStreamDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.textStreamService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTextStreamDto: UpdateTextStreamDto,
  ) {
    return this.textStreamService.update(+id, updateTextStreamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.textStreamService.remove(+id);
  }
}
