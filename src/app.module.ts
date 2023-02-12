import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';


@Module({
  imports: [
    /* MongooseModule.forRoot('mongodb://localhost/nest'), */
    MongooseModule.forRoot(
      'mongodb://kamilaipdec:49119@localhost:27017/admin'
    ),
    UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
