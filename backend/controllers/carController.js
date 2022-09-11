const asyncHandler = require('express-async-handler')

//@desc     Get cars
//@route    GET /api/cars
//@access   Private
const getCars = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get cars'})
})

//@desc     Post cars
//@route    POST /api/cars
//@access   Private
const uploadCar = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message: 'Upload cars'})
})

//@desc     Put car
//@route    PUT /api/cars/:id
//@access   Private
const updateCar = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Updated car ${req.params.id}`})
})

//@desc     Delete car
//@route    DELETE /api/cars/:id
//@access   Private
const deleteCar = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Deleted car ${req.params.id}`})
})


module.exports = {
    getCars,
    uploadCar,
    updateCar,
    deleteCar
}