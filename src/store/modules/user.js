export default {
  namespaced: true,
  state: () => ({
    demo: "12123",
  }),
  actions: {
    login() {
      console.log("this is login");
    },
  },
  mutations: {
    add() {
      console.log(1212313);
    },
  },
};
