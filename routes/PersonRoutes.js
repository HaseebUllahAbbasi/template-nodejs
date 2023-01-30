const express = require('express');
const { addPerson, getAllPersons,updatePerson,findPersonByName , deletePerson} = require('../controllers/PersonController');
const router = express.Router();
router.route('/person').post(addPerson);
router.route('/person').get(getAllPersons);
router.route('/person').put(updatePerson);
router.route('/person/:name').delete(deletePerson);
router.route('/personByName/:name').get(findPersonByName);
module.exports = router;

