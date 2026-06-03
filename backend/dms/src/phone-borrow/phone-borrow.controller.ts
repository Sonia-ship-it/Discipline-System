import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { PhoneBorrowService } from './phone-borrow.service';
import { CreatePhoneBorrowDto } from './dto/create-phone-borrow.dto';
import { UpdatePhoneBorrowDto } from './dto/update-phone-borrow.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('phone-borrows')
@UseGuards(JwtAuthGuard)
export class PhoneBorrowController {
  constructor(private readonly phoneBorrowService: PhoneBorrowService) {}

  @Post()
  create(@Body() createPhoneBorrowDto: CreatePhoneBorrowDto) {
    return this.phoneBorrowService.create(createPhoneBorrowDto);
  }

  @Get()
  findAll() {
    return this.phoneBorrowService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.phoneBorrowService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePhoneBorrowDto: UpdatePhoneBorrowDto,
  ) {
    return this.phoneBorrowService.update(id, updatePhoneBorrowDto);
  }

  @Patch(':id/return')
  markAsReturned(@Param('id', ParseIntPipe) id: number) {
    return this.phoneBorrowService.markAsReturned(id);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.phoneBorrowService.remove(id);
  }
}
