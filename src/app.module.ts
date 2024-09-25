import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WelcomeModule } from './welcome/welcome.module';
import { WelcomeController } from './welcome/welcome.controller';
import { WelcomeService } from './welcome/welcome.service';

@Module({
  imports: [WelcomeModule],
  controllers: [AppController, WelcomeController],
  providers: [AppService, WelcomeService],
})
export class AppModule { }
