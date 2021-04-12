const express = require('express')
const router = express.Router()
const StudentController = require('../controllers/StudentControll')

router.get('/', StudentController.index)
router.put('/update/:id', StudentController.update)
router.delete('/delete/:id', StudentController.destroy)


module.exports = router