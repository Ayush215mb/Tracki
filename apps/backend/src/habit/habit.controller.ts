/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { HabitService } from './habit.service';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth/jwt-auth.guard';
import { Profile } from '../../prisma/generated/prisma';

@Controller('habit')
export class HabitController {
  constructor(private readonly habitService: HabitService) {}

  @UseGuards(JwtAuthGuard)
  @Post('create')
  createhabit(@Req() req, @Body() createHabitDto: CreateHabitDto) {
    return this.habitService.createHabit({
      user: req.user as Profile,
      createHabitDto: createHabitDto,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get('')
  gethabits(@Req() req) {
    return this.habitService.getHabits(req.user as Profile);
  }

  @UseGuards(JwtAuthGuard)
  @Get('active')
  getActiveHabits(@Req() req) {
    return this.habitService.getActiveHabits(req.user as Profile);
  }

  @UseGuards(JwtAuthGuard)
  @Post('activate/:id')
  activateHabit(@Req() req, @Param('id') id: string) {
    return this.habitService.activateHabit({
      user: req.user as Profile,
      habitId: id,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  gethabit(@Req() req, @Param('id') id: string) {
    return this.habitService.getHabit({
      user: req.user as Profile,
      habitId: id,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Patch('update/:id')
  updatehabit(
    @Req() req,
    @Param('id') id: string,
    @Body() updateHabitDto: UpdateHabitDto,
  ) {
    return this.habitService.updateHabit({
      user: req.user as Profile,
      habitId: id,
      body: updateHabitDto,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Patch('deactivate/:id')
  deactivatehabit(@Req() req, @Param('id') id: string) {
    return this.habitService.deactivateHabit({
      user: req.user as Profile,
      habitId: id,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Delete('delete/:id')
  deletehabit(@Req() req, @Param('id') id: string) {
    return this.habitService.deleteHabit({
      user: req.user as Profile,
      habitId: id,
    });
  }
}
