const express = require('express')
const router = express.Router()
const  {getCars, uploadCar, updateCar, deleteCar} = require('../controllers/carController')

router.route('/').get(getCars).post(uploadCar)
router.route('/:id').put(updateCar).delete(deleteCar)


module.exports = router