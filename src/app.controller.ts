import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/test/:id')
  getHello(@Param('id') id: string): string {
    return `Hello World! - ${id}`;
  }

  @Get('/api/user/info')
  getthing(): object {
    return {
      username: 'test',
      email: '1@1.com',
    };
  }
}
