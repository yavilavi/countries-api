import {Module} from '@nestjs/common';
import {StateService} from './state.service';
import {StateController} from './state.controller';
import {APP_GUARD} from '@nestjs/core';
import {ThrottlerGuard} from '@nestjs/throttler';

@Module({
    controllers: [StateController],
    providers: [StateService, {
        provide: APP_GUARD,
        useClass: ThrottlerGuard
    }]
})
export class StateModule {
}
