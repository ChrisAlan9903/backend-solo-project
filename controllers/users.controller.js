const User = require("../models/Users");
const { hashPassword } = require("../utils/bcrypt.util");

async function getAllUsers(req, res) {
  try {
    if (req.user.role === "admin") {
      const users = await User.findAll();

      console.log(`CP: passed GET All User`);
      res.json(users);
    } else if (req.user.role === "customer") {
      const vendorsArr = req.query.ids.split(",").map((id) => parseInt(id, 10));
      console.log(`vendorsArr:`, vendorsArr);

      const users = await User.findAll({
        where: {
          id: vendorsArr,
        },
      });
      res.json(users);
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

async function getUserById(req, res) {
  try {
    console.log(`CP: trying to GET User by Id`);
    const user = await User.findByPk(req.params.userId);
    console.log(`CP: passed GET User by Id`);

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

async function getCurrentUser(req, res) {
  try {
    console.log(`req.user.id:`, req.user.id);
    const user = await User.findByPk(req.user.id);

    console.log(`res.user:`, user);

    console.log(`CP: passed GET Current User`);

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

async function createUser(req, res) {
  try {
    // TODO: add authorization here--⚠️⚠️

    if (!req.body.username || !req.body.email || !req.body.password)
      throw "please fill in all the details";

    const hashedPassword = hashPassword(req.body.password);

    const user = await User.create({
      ...req.body,
      password: hashedPassword,
    });

    // console.log(`user: `, user);

    // const userRespondObject = user
    // console.log(`userRespondObject: `, userRespondObject);
    // delete userRespondObject.password // to delete the password property from the object
    // console.log(`userRespondObject after delete: `, userRespondObject);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

// users need to fill in all required fields to update
async function updateUser(req, res) {
  try {
    // TODO: add authorization here---⚠️⚠️
    // Permission: User can only update their own user data

    const userId = req.user.id;
    console.log(`userId:`, userId);
    const userRole = req.user.role;
    const paramsUserId = parseInt(req.params.userId);
    console.log(`params:`, req.params.userId);
    if (userRole !== "admin") {
      if (paramsUserId !== userId) throw `Update denied: Not your user data`;
    }

    // console.log(`CP 1`);
    if (req.body.password) {
      const hashedPassword = hashPassword(req.body.password);
    }
    // console.log(`CP 2`);
    const updatedUser = await User.update(
      {
        ...req.body,
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
    // Permission: User can only delete their own user data

    const userId = req.user.id;
    console.log(`userId:`, userId);
    const userRole = req.user.role;
    const paramsUserId = parseInt(req.params.userId);
    console.log(`params:`, req.params.userId);
    if (userRole !== "admin") {
      if (paramsUserId !== userId) throw `Delete denied: Not your user data`;
    }

    const deletedUser = await User.destroy({
      where: {
        id: parseInt(req.params.userId),
      },
    });
    res.json(deletedUser);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  getCurrentUser,
  createUser,
  updateUser,
  deleteUser,
};
