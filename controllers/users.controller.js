const User = require("../models/Users");
const { hashPassword } = require("../utils/bcrypt.util");

async function getAllUsers(req, res) {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

async function getUserById(req, res) {
  try {
    const user = await User.findByPk(req.params.userId);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

async function createUser(req, res) {
  try {
    // TODO: add authorization here--⚠️⚠️

    const hashedPassword = hashPassword(req.body.password);

    const user = await User.create({
      ...req.body,
      password: hashedPassword,
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

// users need to fill in all required fields to update
async function updateUser(req, res) {
  try {
    // TODO: add authorization here---⚠️⚠️

    const hashedPassword = hashPassword(req.body.password);
    const updatedUser = await User.update(
      {
        ...req.body,
        password: hashedPassword,
      },
      {
        where: {
          id: parseInt(req.params.userId),
        },
      }
    );
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

async function deleteUser(req, res) {
  try {
    // TODO: add authorization here---⚠️⚠️

    const deletedUser = await User.destroy({
      where: {
        id: parseInt(req.params.userId),
      },
    });
    res.json(deletedUser);a
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

module.export = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};
