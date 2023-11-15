import * as mongoose from 'mongoose';
export declare const StudentSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name: string;
}>> & mongoose.FlatRecord<{
    name: string;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
export interface Student extends mongoose.Document {
    id: string;
    name: string;
}
