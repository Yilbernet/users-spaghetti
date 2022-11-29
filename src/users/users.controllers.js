const Users = require('../models/users.models');
let id = 0;

const findAllUsers = async() => {
   const data = await Users.findAll();
   return data;
}

const findUserById = async(id) => {
   const todo = await Users.findOne({
      where: {
         id: id,
      }
   });
   return todo;
}

const createUser = async(obj) => {
   const newTodo = await Users.create(
      {
         first_name: obj.first_name,
         last_name: obj.last_name,
         email: obj.email,
         password: obj.password,
         birthday: obj.birthday,
      }
   );
   return newTodo;
}

const updateUser = async(id, obj) => {
   const data = await Users.update(obj, {
      where: {
         id: id,
      },
   });
   return data[0];
}

const deleteUser = async(id) => {
   const data = await Users.destroy({
      where: {
         id: id,
      },
   });
   return data;
}

module.exports = {
   findAllUsers,
   findUserById,
   createUser,
   updateUser,
   deleteUser,
}
