import { v4 as uuidv4 } from "uuid";

let users = [];

export const getAllUsers = (req, res) => {
  res.send(users);
};

export const createNewUser = (req, res) => {
  const newUser = req.body;
  users.push({ id: uuidv4(), ...newUser });
  res.status(200).send("User registered successfully");
};

export const loginUser = (req, res) => {
  const { email, password } = req.body;
  const user = users.find(
    (member) => member.email === email && member.password === password
  );

  if (user) {
    res.status(200).json({
      message: "Login Success",
      username: user.username,
    });
  } else {
    res.status(401).json({ message: "Invalid email or password." });
  }
};
