import {
  registerMicroApps,
  start,
} from "qiankun";

// 子应用注册信息
import apps from "./app";

/**
 * 注册子应用
 * 第一个参数 - 子应用的注册信息
 * 第二个参数 - 全局生命周期钩子
 */
 registerMicroApps(apps, {
  // qiankun 生命周期钩子 - 加载前
  beforeLoad: (app) => {
    console.log("before load", app.name);
    return Promise.resolve()
  },
  // qiankun 生命周期钩子 - 挂载后
  afterMount: (app) => {
    console.log("after mount", app.name);
    return Promise.resolve();
  }
});

export default start