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
  getuser(@Param('id') id: string): object {
    const data = [
      {
        username: 'adminbig',
        email: 'asdasd',
        id: '1',
      },
      {
        username: 'adminbig2',
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
