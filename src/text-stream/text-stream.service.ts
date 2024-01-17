import { Injectable } from '@nestjs/common';
import { CreateTextStreamDto } from './dto/create-text-stream.dto';
import { UpdateTextStreamDto } from './dto/update-text-stream.dto';
import { Observable, interval, map, pipe } from 'rxjs';
import { askTextStreamDto } from './dto/ask-text-stream.dto';
import { askGemini } from './core/googleGemini';

@Injectable()
export class TextStreamService {
  async askService(askPrompt: askTextStreamDto) {
    return new Observable<MessageEvent>((observer) => {
      askGemini(askPrompt).then(async (result) => {
        for await (const chunk of result.stream) {
          observer.next({ data: chunk } as MessageEvent);
        }
        observer.complete();
      });
    });
  }

  // other methods

  create(createTextStreamDto: CreateTextStreamDto) {
    return 'This action adds a new textStream';
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
