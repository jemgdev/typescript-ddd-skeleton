import { Schema, model } from 'mongoose'
import User from '../../../domain/IUser'

const userSchema = new Schema<User> ({
  age: Number,
  lastname: String,
  name: String
})

export default model('User', userSchema)