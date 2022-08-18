import { Schema, model } from 'mongoose'
import UserEntity from '../../../domain/user.entity'

const UserSchema = new Schema<UserEntity>({
  userId: {
    type: String,
    unique: true
  },
  email: String,
  age: Number,
  lastname: String,
  name: String
}, {
  versionKey: false,
  _id: false
})

export default model('User', UserSchema)
