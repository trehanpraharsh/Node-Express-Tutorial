//* After this we need to set a middleware where we set that for the path starting with '/api/people' use this router

//* Now after setting up a middleware in the main file, we need to remove the path here as we have already passed down the path in the middleware

//* Now for the controllers, we send each of the function to a seperate file and just use the functions here

const express = require("express");

const router = express.Router();

// Importing the controllers to be passed and used here
const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require("../controllers/people");

router.get("/", getPeople);
router.post("/", createPerson);
router.post("/postman", createPersonPostman);
router.put("/:id", updatePerson);
router.delete("/:id", deletePerson);

//* Another alternate way of setting up the router
// router.route('/').get(getPeople).post(createPerson);
// router.route('/postman').post(createPersonPostman);
// router.route('/:id').put(updatePerson).delete(deletePerson);

module.exports = router;
