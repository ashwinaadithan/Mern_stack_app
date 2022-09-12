const express = require('express')
const router = express.Router()
const  {getCars, uploadCar, updateCar, deleteCar} = require('../controllers/carController')

const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getCars).post(protect, uploadCar)
router.route('/:id').put(protect, updateCar).delete(protect, deleteCar)


module.exports = router