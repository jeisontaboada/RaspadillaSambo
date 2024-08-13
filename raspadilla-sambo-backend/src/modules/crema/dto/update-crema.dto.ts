import { PartialType } from '@nestjs/mapped-types';
import { CreateCremaDto } from './create-crema.dto';

export class UpdateCremaDto extends PartialType(CreateCremaDto) {}
