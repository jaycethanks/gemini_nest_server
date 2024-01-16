import { PartialType } from '@nestjs/mapped-types';
import { CreateTextStreamDto } from './create-text-stream.dto';

export class UpdateTextStreamDto extends PartialType(CreateTextStreamDto) {}
