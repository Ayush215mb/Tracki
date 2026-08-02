import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Req,
  Query,
  Patch,
  Delete,
  Param,
} from '@nestjs/common';
import { Request } from 'express';
import { HabitLogsService } from './habit-logs.service';
import { CreateHabitLogDto } from './dto/create-habit-log.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth/jwt-auth.guard';
import { Profile } from '../../prisma/generated/prisma';
import { FindHabitLogsDto } from './dto/find-habit-logs.dto';

@Controller('habit-logs')
export class HabitLogsController {
  constructor(private readonly habitLogsService: HabitLogsService) {}

  // used directly with log date to manually add completion if necessary
  @UseGuards(JwtAuthGuard)
  @Post()
  createLog(
    @Req() req: Request & { user: Profile },
    @Body() createHabitLogDto: CreateHabitLogDto,
  ) {
    return this.habitLogsService.createManualCompletion({
      createHabitLogDto: createHabitLogDto,
      user: req.user,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get('today')
  todayLogs(@Req() req: Request & { user: Profile }) {
    return this.habitLogsService.getTodaysLogs(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Query() query: FindHabitLogsDto, @Req() req: { user: Profile }) {
    return this.habitLogsService.getAllLogs({ query, user: req.user });
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getHabitLogs(@Req() req: Request & { user: Profile }, @Param() id: string) {
    return this.habitLogsService.getLogById({ habitlogId: id, user: req.user });
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id/complete')
  completeHabit(
    @Req() req: Request & { user: Profile },
    @Param('id') id: string,
  ) {
    return this.habitLogsService.habitCompletion({
      habitlogId: id,
      user: req.user,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id/uncomplete')
  uncompleteHabit(
    @Req() req: Request & { user: Profile },
    @Param('id') id: string,
  ) {
    return this.habitLogsService.habitUncompletion({
      habitlogId: id,
      user: req.user,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  deleteHabit(
    @Req() req: Request & { user: Profile },
    @Param('id') id: string,
  ) {
    return this.habitLogsService.deleteLog({
      user: req.user,
      habitlogId: id,
    });
  }
}
