exports.up = function(knex) {
    return knex.schema.createTable("users",(table) => {
        table.increments("id");
        table.text("profile_pic").notNullable();
        table.text("first_name").notNullable();
        table.text("last_name").notNullable();
        table.text("email").unique().notNullable();
        table.text("password").notNullable();
        table.text("endereco").notNullable();
        table.text("cep").notNullable();
        table.text("cpf").unique().notNullable();
    });
    
};

exports.down = function(knex) {
    return knex.schema.dropTable("users");
};
