import express from "express";
import UserService from "../../service/UserService";
var userRouter = express.Router();

const service = new UserService();

userRouter.get("/", async function (req, res, next) {
  const users = await service.getAll();
  res.json({ users: users });
});

userRouter.get("/:name", async function (req, res, next) {
  const { name } = req.params;
  const targetUser = await service.getByName(name);
  res.json({ targetUser: targetUser });
});

export default userRouter;
