const User = require("../models/User");

module.exports = {
  index: (req, res) => {
    return res.status(200).json(User.get());
  },
  store: (req, res) => {
    const { name, email, password, cpf, cep } = req.body;
    console.log(req.body)
    const user = {
      name: name,
      email: email,
      password: password,
      cpf: cpf,
      cep: cep,
    };
    const updatedUsers = [...User.get(), user];

    User.update(updatedUsers);
    
    return res.status(200).end();
  },
};
