const express = require("express")
const { addUserArt, getUserArtById, getAllUserArt, deleteUserArtById, updateUserArtById } = require("../controller/artRoutesController")
const router = express.Router()

router.post('/add-art', addUserArt)

router.get("/get-art/:_id", getUserArtById)

router.get("/get-all", getAllUserArt)

router.delete("/delete-art/:_id", deleteUserArtById)

router.put("/update-art/:_id", updateUserArtById)

module.exports = router