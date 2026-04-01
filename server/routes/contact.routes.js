const express = require('express')
<<<<<<< HEAD
const { createContact, getContacts } = require('../controller/contact.controller')
=======
const { createContact, getContactById, getContacts, deleteContact, markAsRead, updateContact } = require('../controller/contact.controller')
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
const { adminProtected } = require('../middleware/Protected')
const router = express.Router()

router.post('/create', createContact)
<<<<<<< HEAD
router.get('/fetch', adminProtected, getContacts)
=======
router.post('/fetch/:id', adminProtected, getContactById)
router.post('/mark-as-read/:id', adminProtected, markAsRead)
router.get('/fetch', adminProtected, getContacts)
router.post('/update/:id', adminProtected, updateContact)
router.delete('/delete/:id', adminProtected, deleteContact)
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567

module.exports = router