import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; 

// otras formas de agregar bootstrap@5 que al parecer hacen lo mismo
// import "bootstrap"; // tambien funciona: import "bootstrap/dist/js/bootstrap.js";
// import "bootstrap/dist/css/bootstrap.css";

// bootstrap-icons
import 'bootstrap-icons/font/bootstrap-icons.css'

Vue.config.productionTip = false;

new Vue({
   router,
   render: (h) => h(App),
}).$mount("#app");
