import Mock from "mockjs";
import { builder, getBody } from "../util";

const tokens = {
  admin: {
    token: "admin-token",
  },
  editor: {
    token: "editor-token",
  },
};

const info = (options) => {
  // console.log("options", getBody(options));
  const { username } = getBody(options);
  const token = tokens[username];
  let loginInfo;
  if (!token) {
    loginInfo = {
      code: 60204,
      message: "Account and password are incorrect.",
    };
  } else {
    loginInfo = {
      code: 20000,
      message: token,
    };
  }
  return builder(loginInfo);
};

Mock.mock("/vue-element-admin/user/login", "post", info);
