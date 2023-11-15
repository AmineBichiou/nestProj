import { Module } from '@nestjs/common';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentSchema } from './students.model';

@Module({
  imports: [ MongooseModule.forFeature([{ name: 'Student', schema: StudentSchema }])],
  controllers: [StudentController],
  providers: [StudentService]
})
export class StudentModule {}
