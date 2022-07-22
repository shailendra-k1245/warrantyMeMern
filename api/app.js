require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const app = express();
app.use(express.json());
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("./model/user");
const axios = require("axios");

// const { TOKEN_KEY } = process.env;

//REGISTER
app.post("/register", async (req, res) => {
  try {
    const { author, fun, password, status, employed, email } = req.body;

    if (!(author && fun && password && status && employed)) {
      res.status(400).send("All input is required");
    }
    const response = await axios.get(
      `https://isitarealemail.com/api/email/validate?email=${email}`
    );
    // console.log("response", response.data);

    if (response.data.status !== "valid") {
      return res.status(200).send("Invalid email");
    }

    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.status(409).send("User already exist");
    }
    const encPwd = await bcrypt.hash(password, 10);
    const user = await User.create({
      author: author,
      email,
      fun: fun,
      status: status,
      password: encPwd,
      employed: employed,
    });

    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "5h",
      }
    );
    user.token = token;
    return res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
});

//LOGIN
app.post("/login", async (req, res) => {
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    const response = await axios.get(
      `https://isitarealemail.com/api/email/validate?email=${email}`
    );
    // console.log("response", response.data);

    if (response.data.status !== "valid") {
      return res.status(200).send("Invalid email");
    }
    // Validate if user exist in our database
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "5h",
        }
      );

      // save user token
      user.token = token;

      // user
      return res.status(200).json(user);
    }
  } catch (err) {
    return res.status(400).send("Invalid Credentials");
  }
});

module.exports = app;
