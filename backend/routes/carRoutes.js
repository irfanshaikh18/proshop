import express from 'express'

const router = express.Router()

import {
  getCars,
  getCarById
} from '../controllers/carController.js'

router.route('/').get(getCars)
router.route('/:id').get(getCarById)

export default router
