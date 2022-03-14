import { createStore } from "vuex";
import getters from "@/store/getters";
import user from "@/store/modules/user";
import permission from "@/store/modules/permission";

export default createStore({
  modules: {
    user,
    permission,
  },
  getters,
});
