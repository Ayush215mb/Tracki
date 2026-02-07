// modules/calendar/calendar.controller.ts
import {Body, Controller, Get, Param, Patch, Post} from '@nestjs/common';
import { CompletionService } from './completion.service.js';
import {CreateCompletionDto} from "./dto/create-completion.dto.js";
import {UpdateCompletionDto} from "./dto/update-completion.dto.js";
import {Completion} from "./completion.entity.js";

@Controller('completion')
export class CompletionController {
    constructor(private readonly CompletionService: CompletionService) {}

    @Get()
    getAllCompletions(){
        return this.CompletionService.getAllCompletions()
    }

    @Get(':id')
    getCompletionById(@Param('id') id: string):Promise<Completion | null> {
        return this.CompletionService.getCompletionById({id})
    }

    @Post()
    createCompletion(@Body() CreateCompletionDto: CreateCompletionDto):Promise<Completion> {
        return this.CompletionService.createCompletion(CreateCompletionDto);
    }

    @Patch(':id')
    updateCompletion(@Param('id') id:string,@Body() UpdateCompletionDto: UpdateCompletionDto):Promise<Completion> {
        return this.CompletionService.updateCompletion({
            where: {id},
            data: UpdateCompletionDto,
        })
    }

}
