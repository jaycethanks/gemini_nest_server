import { Test, TestingModule } from '@nestjs/testing';
import { TextStreamController } from './text-stream.controller';

describe('TextStreamController', () => {
  let controller: TextStreamController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TextStreamController],
    }).compile();

    controller = module.get<TextStreamController>(TextStreamController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
