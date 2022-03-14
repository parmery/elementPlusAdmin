import { login } from "@/api/user";

export default {
  namespaced: true,
  state: () => ({
    demo: "12123",
  }),
  actions: {
    login() {
      login({ name: "1123" }).then((res) => {
        console.log(res);
      });
    },
  },
  mutations: {
    add() {
      console.log(1212313);
    },
  },
};
