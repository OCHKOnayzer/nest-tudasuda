import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('auth')
export class AuthController {
//   constructor(private readonly appService: AppService) {}

  @Post('/createUserData')
  getHello(@Body() body:{data:number}): string {
    console.log(body)
    return `Body data: ${body.data}`
  }
}
