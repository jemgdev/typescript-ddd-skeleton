import mongoose from 'mongoose'

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Database is connected'))
  .catch(error => console.log(error))