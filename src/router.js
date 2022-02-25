import Vue from "vue";
import VueRouter from "vue-router";
import FoodType from "./views/FoodType.vue";
import MainTap from "./views/MainTap.vue"
import ResultTap from "./views/ResultTap.vue"
import StoreList from "./views/StoreList.vue"

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [{
        path: "",
        component: MainTap
      },
      {
        path: "/FoodType",
        component: FoodType
      },
      {
        path: "/ResultTap",
        component: ResultTap
      },
      {
        path: "/StoreList",
        component: StoreList
      }
    ]
  });
  
  export default router