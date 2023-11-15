"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let StudentService = class StudentService {
    getSingleProduct(prodId) {
        throw new Error('Method not implemented.');
    }
    constructor(studentModel) {
        this.studentModel = studentModel;
    }
    async insertStudent(name) {
        const newStudent = new this.studentModel({
            name,
        });
        const result = await newStudent.save();
        console.log(result);
        return result;
    }
    async getStudents() {
        const students = await this.studentModel.find().exec();
        return students.map(student => ({
            id: student.id,
            name: student.name,
        }));
    }
    async getSingleStudent(Id) {
        const student = await this.findStudent(Id);
        return {
            id: student.id,
            name: student.name,
        };
    }
    async updateStudent(Id, name) {
        const updatedStudent = await this.findStudent(Id);
        if (name) {
            updatedStudent.name = name;
        }
        updatedStudent.save();
    }
    findStudent(Id) {
        let student;
        try {
            student = this.studentModel.findById(Id).exec();
        }
        catch (error) {
            throw new Error('Could not find student.');
        }
        if (!student) {
            throw new Error('Could not find student.');
        }
        return student;
    }
    async deleteStudent(Id) {
        const result = await this.studentModel.deleteOne({ _id: Id }).exec();
        if (result.deletedCount === 0) {
            throw new Error('Could not find student.');
        }
    }
};
exports.StudentService = StudentService;
exports.StudentService = StudentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Student')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], StudentService);
//# sourceMappingURL=student.service.js.map