import { getToken, setToken } from "@/utils/auth";
import { login, getInfo } from "@/api/user";

export default {
  namespaced: true,
  state: () => ({
    token: getToken(),
    name: "",
    avatar: "",
    introduction: "",
    roles: [],
  }),
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    },
  },
  actions: {
    login({ commit }, userInfo) {
      const { username, password } = userInfo;
      return new Promise((resolve, reject) => {
        login({ username: username.trim(), password: password })
          .then((res) => {
            console.log(res);
            const { data } = res;
            commit("SET_TOKEN", data.token);
            setToken(data.token);
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    // get user info
    getInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo(state.token)
          .then((response) => {
            const { data } = response;

            if (!data) {
              reject("Verification failed, please Login again.");
            }

            const { roles, name, avatar, introduction } = data;

            // roles must be a non-empty array
            if (!roles || roles.length <= 0) {
              reject("getInfo: roles must be a non-null array!");
            }

            commit("SET_ROLES", roles);
            commit("SET_NAME", name);
            commit("SET_AVATAR", avatar);
            commit("SET_INTRODUCTION", introduction);
            resolve(data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
};
