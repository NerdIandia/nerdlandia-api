const knex = require("../database/database");
const User = require("../models/User");

module.exports = {
  index: (req, res) => {
    return res.status(200).json(User.get());
  },
  store: async (req, res) => {
    const {
      profile_pic,
      first_name,
      last_name,
      email,
      password,
      endereco,
      cpf,
      cep,
    } = req.body;
    const user = {
      profile_pic,
      first_name,
      last_name,
      email,
      password,
      endereco,
      cpf,
      cep,
    };
    try {
      await knex("users").insert(user);
      return res.status(201).json(user);
    } catch (error) {
      return res.json({ error: error });
    }
  },
  find: async (req, res) => {
    const { id } = req.params;

    const user = await knex("users").where({ id });
    console.log(user);
    if (user.length == 0 ) {
        return res.status(404).json({ error:"Usuário não existe" });
    }
    return res.status(200).json(user);
  },
  update: async (req, res) => {
    const { id } = req.user;

    try {
      const user = await knex("users").where({ id }).update(req.body);

      return res.status(200).json(user);
    } catch (error) {
      console.log(error);
      return res.json({ error: error });
    }
  }
};
