import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { ToysService } from './toys.service';

@Controller('toys')
export class ToysController {
    constructor(private toyService: ToysService) {

    }

    @Post('add')
    create(@Body('name') name: string, @Body('dogid') dId: string) {
        console.log(name, dId)
        return this.toyService.create(name, dId)
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.toyService.findOne(id)
    }

    @Get()
    findMany(@Req() req: Request) {
        return this.toyService.findMany()
    }
}
