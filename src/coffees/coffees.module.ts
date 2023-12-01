import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffieeService } from 'src/coffiee/coffiee.service';

@Module({controllers: [CoffeesController] , providers: [CoffieeService]})
export class CoffeesModule {}
