import mongoose from 'mongoose'

const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    name: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      required: true
    },
    comment: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

const carSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    name: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    typeCar: {
      type: String,
      required: true
    },
    capacity: {
      type: Number,
      required: true
    },
    steering: {
      type: String,
      required: true
    },
    gasoline: {
      type: Number,
      required: true
    },
    price: {
      type: Number,
      required: true,
      default: 0
    },
    discountedPrice: {
      type: Number,
      required: false,
      default: 0
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0
    }
  },
  {
    timestamps: true
  }
)

const Car = mongoose.model('Car', carSchema)

export default Car
