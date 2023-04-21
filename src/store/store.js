import Vue from "vue";
import Vuex from "vuex";

import componentModule from "./modules/componentModule";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        componentModule
    }
})