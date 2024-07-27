import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { BreedsModule } from './breeds/breeds.module';

@Module({
  imports: [CatsModule, BreedsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
