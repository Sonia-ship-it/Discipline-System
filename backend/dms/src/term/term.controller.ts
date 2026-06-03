import { Controller, Get, Post, Body, Param, Patch, UseGuards } from '@nestjs/common';
import { TermService } from './term.service';
import { CreateTermDto } from './dto/create-term.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('terms')
export class TermController {
  constructor(private readonly termService: TermService) {}

  @Get()
  findAll() {
    return this.termService.findAll();
  }

  @Get('active')
  findActive() {
    return this.termService.findActive();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.termService.findOne(+id);
  }

  @Post()
  create(@Body() data: CreateTermDto) {
    return this.termService.create(data);
  }

  @Patch(':id/activate')
  activate(@Param('id') id: string) {
    return this.termService.activate(+id);
  }
}
