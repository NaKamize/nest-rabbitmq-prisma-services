import { Body, Controller, Get, Param, ParseIntPipe, Post, Req } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {

    }

    @Post('add')
    create(@Body('email') email: string, @Body('name') name: string, @Body('age', ParseIntPipe) age: number) {
        console.log({
            email,
            name,
            age,
            typeOfAge: typeof age
        })
        return this.userService.create(email, name, age)
    }

    @Get(':email')
    findOne(@Param('email') email: string) {
        console.log(email)
        return this.userService.findOne(email)
    }

    @Get()
    findall(@Req() req: Request) {
        return this.userService.findall()
    }
}