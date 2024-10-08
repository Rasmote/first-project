import { Controller, Get } from '@nestjs/common';
import { WelcomeService } from './welcome.service';

@Controller('welcome')
export class WelcomeController {
    private readonly welcomeService: WelcomeService
    constructor(welcomeService: WelcomeService) {
        this.welcomeService = welcomeService;
    }

    @Get()
    getWelcome(): string {
        const result = this.welcomeService.getWelcome()
        return result;
    }
}
