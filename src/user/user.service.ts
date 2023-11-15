import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';

@Injectable()
export class UserService {
    getSingleProduct(prodId: string) {
        throw new Error('Method not implemented.');
    }
    
    constructor( @InjectModel('User') private readonly userModel : Model<User>,) {}
    async insertUser(nom: string, email: string, password: string){
        const newUser = new this.userModel({
            nom,
            email,
            password,
            
        });
        const result = await newUser.save();
        console.log(result);
        return result
    }
    async findOne(username: string): Promise<User | undefined> {
      return this.userModel.findOne({ email: username }).exec();
    }
    async getUsers(){
        const users = await this.userModel.find().exec();
        return users.map(user => ({
            id: user.id,
            nom: user.nom,
            email: user.email,
            password: user.password,
        }));
    }
    async getSingleUser(Id: string) {
        const user = await this.findUser(Id);
        return {
          id: user.id,
          nom: user.nom,
          email: user.email,
          password: user.password,
          
        };
      }
    async updateUser(Id: string, nom: string, email: string, password: string){
        const updatedUser = await this.findUser(Id);
        if (nom) {
            updatedUser.nom = nom;
          }
        if (email) {
            updatedUser.email = email;
          }
        if (password) {
            updatedUser.password = password;
          }
        updatedUser.save();
    }
    findUser(Id: string): Promise<User> {
        let user;
        try {
          user = this.userModel.findById(Id).exec();
        } catch (error) {
          throw new Error('Could not find user.');
        }
        if (!user) {
          throw new Error('Could not find user.');
        }
        return user;
        
    }
    async deleteUser(Id: string){
        const result = await this.userModel.deleteOne({_id: Id}).exec();
        if (result.deletedCount === 0) {
            throw new Error('Could not find user.');
          }
    }


}

