import Mock from "mockjs";
import { builder, getBody, getQueryParameters } from "../util";

const tokens = {
  admin: {
    token: "admin-token",
  },
  editor: {
    token: "editor-token",
  },
};

const users = {
  "admin-token": {
    roles: ["admin"],
    introduction: "I am a super administrator",
    avatar:
      "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
    name: "Super Admin",
  },
  "editor-token": {
    roles: ["editor"],
    introduction: "I am an editor",
    avatar:
      "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
    name: "Normal Editor",
  },
};

const loginInfo = (options) => {
  // console.log("options", getBody(options));
  const { username } = getBody(options);
  const token = tokens[username];
  let loginInfo;
  if (!token) {
    loginInfo = {
      code: 0,
      message: "账号和密码不正确",
    };
  } else {
    loginInfo = {
      code: 20000,
      message: "成功",
      data: token,
    };
  }
  return builder(loginInfo);
};

const userInfo = (options) => {
  console.log("===axios  userInfo=====");
  const { token } = getQueryParameters(options);
  const info = users[token];
  let obj;
  if (!info) {
    obj = {
      code: 500,
      message: "Login failed, unable to get user details.",
    };
  } else {
    obj = {
      code: 0,
      data: info,
    };
  }
  return builder(obj);
};

Mock.mock(/\/vue-element-admin\/user\/login/, "post", loginInfo);
Mock.mock(/\/vue-element-admin\/user\/info/, "get", userInfo);
