import router from "@/router";
import store from "@/store";
// import { ElMessage } from "element-plus";
import { getToken } from "@/utils/auth";

const whiteList = ["/login", "/auth-redirect"];

router.beforeEach(async (to, from, next) => {
  // 判断账号是否登陆
  const hasToken = getToken();
  console.log(hasToken);

  if (hasToken) {
    if (to.path === "/login") {
      //如果已登录，则重定向到主页
      next({ path: "/" });
    } else {
      // 判断用户是否通过getInfo获取了自己的权限角色
      const hasRoles = store.getters.roles && store.getters.roles.length > 0;
      console.log("============");
      console.log(hasRoles);
      if (hasRoles) {
        next();
      } else {
        try {
          // 获取用户信息
          // 注意：角色必须是对象数组！ 如：['admin'] 或 ,['developer','editor']
          const { roles } = await store.dispatch("user/getInfo");
          console.log(roles);

          // 根据角色生成可访问的路由
          const accessRoutes = await store.dispatch(
            "permission/generateRoutes",
            roles
          );

          // // 动态添加可访问路由
          router.addRoute(accessRoutes);

          next({ ...to, replace: true });
        } catch (error) {
          // 删除令牌并转到登录页面重新登录
          // await store.dispatch("user/resetToken");
          // ElMessage.error(error || "Has Error");
          // next(`/login?redirect=${to.path}`);
        }
      }
    }
  } else {
    // 没有token
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next(`/login?redirect=${to.path}`);
    }
  }
});
