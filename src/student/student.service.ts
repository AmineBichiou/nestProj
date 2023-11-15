import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student } from './students.model';

@Injectable()
export class StudentService {
    getSingleProduct(prodId: string) {
        throw new Error('Method not implemented.');
    }
    constructor( @InjectModel('Student') private readonly studentModel : Model<Student>,) {}
    async insertStudent(name: string){
        const newStudent = new this.studentModel({
            name,
        });
        const result = await newStudent.save();
        console.log(result);
        return result
    }
    async getStudents(){
        const students = await this.studentModel.find().exec();
        return students.map(student => ({
            id: student.id,
            name: student.name,
        }));
    }
    async getSingleStudent(Id: string) {
        const student = await this.findStudent(Id);
        return {
          id: student.id,
            name: student.name,
          
        };
      }
    async updateStudent(Id: string, name: string){
        const updatedStudent = await this.findStudent(Id);
        if (name) {
            updatedStudent.name = name;
          }
        updatedStudent.save();
    }
    findStudent(Id: string): Promise<Student> {
        let student;
        try {
          student = this.studentModel.findById(Id).exec();
        } catch (error) {
          throw new Error('Could not find student.');
        }
        if (!student) {
          throw new Error('Could not find student.');
        }
        return student;
        
    }
    async deleteStudent(Id: string){
        const result = await this.studentModel.deleteOne({_id: Id}).exec();
        if (result.deletedCount === 0) {
            throw new Error('Could not find student.');
          }
    }
    
}
