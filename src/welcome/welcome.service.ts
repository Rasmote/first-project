import { Injectable } from '@nestjs/common';

@Injectable()
export class WelcomeService {
    getWelcome(): string {
        return 'Welcome!';
    }
}

