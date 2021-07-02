
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {profile_pic: 'www.google.com', first_name: 'Rodrigo', last_name: 'Cabreiro', email: 'pacocassada123@coxinha.com', password: 'xixixexelento723', endereco: 'Rua Tupac', cep: '25486-698', cpf:'26589658745' },
      ]);
    });
};
