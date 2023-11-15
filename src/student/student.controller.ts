
import { StudentService } from './student.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student } from './students.model';
import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete,
  } from '@nestjs/common';
@Controller('student')
export class StudentController {
    constructor( private readonly studentService : StudentService){}
    @Post()
        async addStudent(
            @Body('name') name: string,
        ){
            const generatedId = await this.studentService.insertStudent(name);
            return { id: generatedId };
        }
    @Get()
        async getAllStudents(){
            const students = await this.studentService.getStudents();
            return students;
        }
    @Get(':id')
        getStudent(@Param('id') Id: string) {
          return this.studentService.getSingleStudent(Id);
        }
    @Patch(':id')
        async updateStudent(
            @Param('id') Id: string,
            @Body('name') name: string,
        ){
            await this.studentService.updateStudent(Id, name);
            return "Updated Successfully";
        }
    @Delete(':id')
        async removeStudent(@Param('id') Id: string){
            await this.studentService.deleteStudent(Id);
            return "Deleted Successfully";
        }
    
}

