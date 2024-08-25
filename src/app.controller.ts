import { Controller, Get, Param, Post } from '@nestjs/common';
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
  @Get('/api/user/info/:id')
  getthing2(@Param('id') id: string): object {
    return {
      username: 'test',
      email: 'asdasd',
      id: id,
    };
  }
  @Post('/api/user/info/:id')
  postthing(@Param('id') id: string): object {
    const data = [
      {
        username: 'test',
        email: 'asdasd',
        id: '1',
      },
      {
        username: 'test',
        email: 'asdasd',
        id: '2',
      }
    ]
    const user = data.find(user => user.id === id);
    if (user) {
      return user;
    } else {
      return { error: 'User not found' };
    }
  }
}
