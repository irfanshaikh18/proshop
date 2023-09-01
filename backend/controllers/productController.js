import catchAsyncMiddleware from '../middleware/catchAsyncMiddleware.js'
import Product from '../models/productModel.js'

// @desc fetch all products
// @route GET /api/products/
// @access Public
export const getProducts = catchAsyncMiddleware(async (req, res) => {
  const products = await Product.find({})
  res.json(products)
})

// @desc fetch a product
// @route GET /api/products/:id
// @access Public
export const getProductById = catchAsyncMiddleware(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    return res.json(product)
  } else {
    res.status(404)
    throw new Error('Resource not found')
  }
})
