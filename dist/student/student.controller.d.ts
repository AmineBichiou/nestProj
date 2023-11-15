/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { StudentService } from './student.service';
import { Student } from './students.model';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    addStudent(name: string): Promise<{
        id: import("mongoose").Document<unknown, {}, Student> & Student & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    getAllStudents(): Promise<{
        id: any;
        name: string;
    }[]>;
    getStudent(Id: string): Promise<{
        id: string;
        name: string;
    }>;
    updateStudent(Id: string, name: string): Promise<string>;
    removeStudent(Id: string): Promise<string>;
}
