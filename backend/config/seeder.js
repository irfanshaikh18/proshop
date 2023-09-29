import dotenv from 'dotenv'
import colors from 'colors'

import users from '../data/users.js'
import cars from '../data/cars.js'
import User from '../models/userModel.js'
import Car from '../models/carModel.js'
import Order from '../models/orderModel.js'
import connectDB from './db.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Order.deleteMany()
    await Car.deleteMany()
    await User.deleteMany()

    const createdUsers = await User.insertMany(users)

    const adminUser = createdUsers[0]._id

    const sampleCars = cars.map((car) => {
      return { ...car, user: adminUser }
    })

    await Car.insertMany(sampleCars)
    console.log('Data Imported!'.green.inverse)
    process.exit()
  } catch (error) {
    console.log(`${error}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Order.deleteMany()
    await Car.deleteMany()
    await User.deleteMany()

    console.log('Data Destroyed!'.red.inverse)
    process.exit()
  } catch (error) {
    console.log(`${error}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
