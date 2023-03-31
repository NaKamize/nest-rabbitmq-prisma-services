import { Body, Controller, Get, Param, ParseUUIDPipe, Post, Req } from '@nestjs/common';
import { DogsService } from './dogs.service';

@Controller('dogs')
export class DogsController {
    constructor(private dogService: DogsService) {

    }

    @Post('add')
    create(@Body('name') name: string, @Body('birth') birth: string, @Body('breed') breed: string, @Body('uid', ParseUUIDPipe) Uid: string) {
        console.log(name, birth, breed, Uid)
        return this.dogService.create(name, birth, breed, Uid)
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.dogService.findOne(id)
    }

    @Get()
    findMany(@Req() req: Request) {
        return this.dogService.findMany()
    }
}
