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

@Controller('text-stream')
export class TextStreamController {
  constructor(private readonly textStreamService: TextStreamService) {}

  @Sse('sse')
  sse(): Observable<MessageEvent> {
    return this.textStreamService.askService();
  }

  @Post()
  create(@Body() createTextStreamDto: CreateTextStreamDto) {
    return this.textStreamService.create(createTextStreamDto);
  }

  @Get()
  findAll() {
    return this.textStreamService.findAll();
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
