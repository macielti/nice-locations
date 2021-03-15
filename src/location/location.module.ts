import { Module } from '@nestjs/common';
import { LocationController } from './locationcontroller';
import { LocationService } from './location.service';

@Module({
  controllers: [LocationController],
  providers: [LocationService],
})
export class LocationModule {}
