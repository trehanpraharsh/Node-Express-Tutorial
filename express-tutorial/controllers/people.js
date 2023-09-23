//* Benifit of using this controller convention according to MVC is that we can have a cleaner code for the routers and distribute data so that it can be managed easily

let { people } = require("../data");

function getPeople(req, res) {
  res.status(200).json({ success: true, data: people });
}

function createPerson(req, res) {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide Name value" });
  }
  res.status(201).json({ success: true, person: name });
}

function createPersonPostman(req, res) {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide a name value" });
  }
  return res.status(200).json({ success: true, data: [...people, name] });
}

function updatePerson(req, res) {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, message: `No person with id ${id}` });
  }

  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });

  return res.status(200).json({ success: true, data: newPeople });
}

function deletePerson(req, res) {
  const { id } = req.params;

  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res.status(404).json({
      success: false,
      message: `Please provide a valid id, there's no person found with id as ${id}`,
    });
  }

  const newPeople = people.filter((person) => person.id !== Number(id));
  return res.status(200).json({ success: true, data: newPeople });
}

module.exports = {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
};
