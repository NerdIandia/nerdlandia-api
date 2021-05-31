let users = [{
    "name": "Daniel",
    "email": "danielbenicio123@gmail.com",
    "password": "jacamole",
    "cpf": "03266598877",
    "cep": "36585642"
}];

module.exports = {
    get() {
        return users;
    },
    update(updatedUsers) {
        users = updatedUsers;
    },
}

