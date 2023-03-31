import { Module } from '@nestjs/common';
import { DogModule } from './dogs/dogs.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { ToysController } from './toys/toys.controller';
import { ToysService } from './toys/toys.service';
import { ToysModule } from './toys/toys.module';

@Module({
  imports: [DogModule, UserModule, PrismaModule, ToysModule],
  controllers: [ToysController],
  providers: [ToysService],
})
export class AppModule {}
