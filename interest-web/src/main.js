import Vue from "vue";
import App from "./app.vue";
import router from "./router";
import Button from "ant-design-vue/lib/button";
import "ant-design-vue/dist/antd.css";
import iView from "iview";
import Antd from 'ant-design-vue'
import { DatePicker } from 'ant-design-vue';
// import VueRouter from "vue-router";
import axios from "./axios";
import VueAxios from "vue-axios";
import store from "./store/store";
import VueQuillEditor from "vue-quill-editor";

import "./styles/common.css";
// import "iview/dist/styles/iview.css";
// import "quill/dist/quill.core.css";
// import "quill/dist/quill.snow.css";
// import "quill/dist/quill.bubble.css";

import base from "./base";
Vue.use(base);
Vue.use(Antd)
Vue.use(VueAxios, axios);
Vue.use(iView);
Vue.use(VueQuillEditor);
Vue.use(DatePicker);
Vue.component(Button.name, Button);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
