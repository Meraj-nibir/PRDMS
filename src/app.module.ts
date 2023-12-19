import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemModule } from './search/search.module';
import { ProfileModule } from './profile/profile.module';
import { ProfileController } from './profile/profile.controller';
import { ProfileService } from './profile/profile.service';
import { ItemService } from './search/search.service';
import { ItemController } from './search/search.controller';
import { FeedbackModule } from './feedback/feedback.module';
import { FeedbackController } from './feedback/feedback.controller';
import { FeedbackService } from './feedback/feedback.service';


@Module({
  imports: [TypeOrmModule.forRoot(),
    ProfileModule,ItemModule,FeedbackModule],
  controllers: [AppController,ProfileController, ItemController,FeedbackController],
  providers: [AppService,ProfileService,ItemService,FeedbackService],
})
export class AppModule {}
