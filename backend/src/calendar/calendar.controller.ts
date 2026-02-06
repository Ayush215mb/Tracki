// modules/calendar/calendar.controller.ts
import {Body, Controller, Get, Param, Patch, Post} from '@nestjs/common';
import { CalendarService } from './calendar.service.js';
import {CreateCompletionDto} from "./dto/create-completion.dto.js";
import {UpdateCompletionDto} from "./dto/update-completion.dto.js";
import {Completion} from "./completion.entity.js";

@Controller('calendar')
export class CalendarController {
    constructor(private readonly calendarService: CalendarService) {}

    @Post()
    getCompleted(@Body() CreateCompletionDto: CreateCompletionDto):Promise<Completion> {
        return this.calendarService.createCompletion(CreateCompletionDto);
    }

    @Patch(':id')
    updateCompletion(@Param('id') id:string,@Body() UpdateCompletionDto: UpdateCompletionDto):Promise<Completion> {
        return this.calendarService.updateCompletion({
            where: {id},
            data: UpdateCompletionDto,
        })
    }

}
