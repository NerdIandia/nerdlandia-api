const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const knex = require("../database/database");

module.exports = {
  register: async (req, res) => {
    const { first_name, last_name, email, password, endereco, cpf, cep } = req.body;

    try {
      const hashedPassword = await bcrypt.hash(password, 8);

      const user = { first_name, last_name, email, password: hashedPassword, endereco, cpf, cep };

      await knex("users").insert(user);

      const token = await jwt.sign(user, "secret");

      return res.status(200).json({user, token});
    } catch (error) {
      console.log(error);
      return res.json({ error: error });
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;

    try {
      const [user] = await knex("users").where({ email });

      console.log(user);

      const correctlyPass = await bcrypt.compare(password, user.password);

      if(!correctlyPass) {
        throw new Error('Password is not correctly');
      }

      delete user.password;

      const token = await jwt.sign({...user}, "secret");

      return res.status(200).json({user: user, token});
    } catch(err) {
      console.log(err);
      return res.status(400).json({error: err});
    }
  }
};
