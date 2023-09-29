import catchAsyncMiddleware from '../middleware/catchAsyncMiddleware.js'
import Car from '../models/carModel.js'

// @desc fetch all cars
// @route GET /api/cars/
// @access Public
export const getCars = catchAsyncMiddleware(async (req, res) => {
  const cars = await Car.find({})
  res.json(cars)
})

// @desc fetch a car
// @route GET /api/cars/:id
// @access Public
export const getCarById = catchAsyncMiddleware(async (req, res) => {
  const car = await Car.findById(req.params.id)

  if (car) {
    return res.json(car)
  } else {
    res.status(404)
    throw new Error('Resource not found')
  }
})
