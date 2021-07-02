const knex = require('../database/database');
const User = require("../models/User");

module.exports = {
  index: (req, res) => {
    return res.status(200).json(User.get());
  },
  store: async (req, res) => {
    const { profile_pic, first_name, last_name, email, password, endereco, cpf, cep } = req.body;
    const user = { profile_pic, first_name, last_name, email, password, endereco, cpf, cep };
    try {
      await knex("users").insert(user);  
      return res.status(201).json(user);
    } catch (error) {
      return res.json({ error:error });   
    }
  },
};
