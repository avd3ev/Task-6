
const { v4: uuidv4 } = require("uuid");

let users = [];



function createUser(req, res) {
    const user = req.body
    users.push({ ...user, id: uuidv4() });
    res.send("User add to array")

}

function getUsers(req, res) {
    return res.send(users);

}

function getOneUser(req, res) {

    const oneUser = users.filter((user) => user.id === req.params.id)
    res.send(oneUser)

}

function deleteUser(req, res) {
    users = users.filter((user) => user.id !== req.params.id)
    res.send("User deleted")
}

function updateUser(req, res) {
    const user = users.find((user) => user.id === req.params.id);
    user.name = req.body.name;
    user.age = req.body.age;

    res.send("User updated")
}

module.exports = { createUser, getUsers, getOneUser, deleteUser, updateUser }





