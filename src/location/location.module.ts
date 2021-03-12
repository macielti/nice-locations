import { Module } from '@nestjs/common';
import { LocationController } from './locationcontroller';

@Module({
  controllers: [LocationController],
})
export class LocationModule {}
