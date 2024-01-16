import { Injectable } from '@nestjs/common';
import { CreateTextStreamDto } from './dto/create-text-stream.dto';
import { UpdateTextStreamDto } from './dto/update-text-stream.dto';
import { interval, map } from 'rxjs';

@Injectable()
export class TextStreamService {
  askService() {
    return interval(1000).pipe(
      map((_) => ({ data: { hello: 'world' } }) as MessageEvent),
    );
  }
  create(createTextStreamDto: CreateTextStreamDto) {
    return 'This action adds a new textStream';
  }

  findAll() {
    return `This action returns all textStream`;
  }

  findOne(id: number) {
    return `This action returns a #${id} textStream`;
  }

  update(id: number, updateTextStreamDto: UpdateTextStreamDto) {
    return `This action updates a #${id} textStream`;
  }

  remove(id: number) {
    return `This action removes a #${id} textStream`;
  }
}
