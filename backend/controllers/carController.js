const asyncHandler = require('express-async-handler')

const Car = require('../models/carModel')
const User = require('../models/carModel')


//@desc     Get cars
//@route    GET /api/cars
//@access   Private
const getCars = asyncHandler(async (req, res) => {
    const cars = await Car.find({ user: req.user.id})
    res.status(200).json(cars)
})

//@desc     Post cars
//@route    POST /api/cars
//@access   Private
const uploadCar = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const car = await Car.create({
        carName: req.body.text,
        user: req.user.id
    })
    res.status(200).json(car)
})

//@desc     Put car
//@route    PUT /api/cars/:id
//@access   Private
const updateCar = asyncHandler(async (req, res) => {
    const car = await Car.findById(req.params.id)
    if(!car){
        res.status(400)
        throw new Error('Car not found')
    }

    if(!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    if(car.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body,{
        new: true,
    })
    res.status(200).json(updatedCar)
})

//@desc     Delete car
//@route    DELETE /api/cars/:id
//@access   Private
const deleteCar = asyncHandler(async (req, res) => {
    const car = await Car.findById(req.params.id)
    if(!car){
        res.status(400)
        throw new Error('Car not found')
    }

    if(!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    if(car.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('User not authorized')
    }
    await car.remove()

    res.status(200).json({id: req.params.id})
})


module.exports = {
    getCars,
    uploadCar,
    updateCar,
    deleteCar
}