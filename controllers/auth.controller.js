// User Registration and Authentication
//  - Implement user registration ✅
//  - Implement user login (with token) ✅
//  - Implement email verification upon registration

const jwt = require("jsonwebtoken");
const User = require("../models/Users");
const { hashPassword, comparePassword } = require("../utils/bcrypt.util");

// user registration function
async function register(req, res) {
  try {
    // 1. Layer to check if user with same email already exist
    const isUserExist = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (isUserExist) {
      throw `User already exists !`;
    }

    // 2. Here to create user using data from request body. Request body must contain all required fields defined in User model.

    const hashedPassword = hashPassword(req.body.password);
    const newUser = await User.create({
      ...req.body,
      password: hashedPassword,
    });

    // 3. Here to create registration verification token using email data(since it's unique)
    const token = jwt.sign(
      {
        email: newUser.email,
      },
      process.env.SECRET_KEY
    );
    console.log(`token:`, token);

    res.json({
      message: `Your account is successfully created`,
      newUser: newUser,
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

// user login function
async function login(req, res) {
  try {
    // 1. Getting user input
    const { email, password } = req.body;

    // 2. validate user input
    if (!email && !password) {
      throw `Please fill both email and password`;
    }

    const loginUser = await User.findOne({
      where: {
        email: email,
      },
      // 3. Include password field. By default, password field is excluded in every query. See User model.
      attributes: { include: "password" },
    });

    console.log(`checkpoint 1`);

    if (!loginUser) {
      console.log(`checkpoint 2`);

      throw `User does not exists. Let's go sign up !`;
    }

    console.log(`checkpoint 3`);
    console.log(`login password:`, password);
    console.log(`db user password:`, loginUser.password);

    // 4. validate user password
    const checkPassword = comparePassword(password, loginUser.password);

    console.log(`checkpoint 4`);

    if (!checkPassword) throw `Wrong password / Password does not match !`;

    // 5. if both email and password match, generate login token using several user properties
    console.log(`checkpoint 5`);

    const loginToken = jwt.sign(
      {
        id: loginUser.id,
        email: loginUser.email,
        role: loginUser.role,
      },
      process.env.SECRET_KEY
    );
    console.log(`checkpoint 6`);

    res.json({ message: `You're in !`, accessToken: loginToken });
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

module.exports = {
  register,
  login,
};
