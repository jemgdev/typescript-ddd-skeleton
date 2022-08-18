import UserEntity from './user.entity'
import userId from './user.id'

export default class User implements UserEntity {
  userId: string
  name: string
  lastname: string
  email: string
  age: number
  
  constructor({ name, lastname, email, age }: { name: string, lastname: string, email: string, age: number }) {
    this.userId = userId()
    this.name = name
    this.lastname = lastname
    this.email = email
    this.age = age
  }
}