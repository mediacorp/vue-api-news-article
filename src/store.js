import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        contents: []
    },
    mutations: {
        SET_CONTENTS(state, payload) {
            state.contents = payload;
        },
    },
    actions: {
        fetchContents({ commit }) {
            axios({
                method: "get",
                url: "./data.json",
                params: {
                    order: "name",
                },
            })
                .then((response) => (commit("SET_CONTENTS", response.data)))
                .catch((error) => console.log(error));
        },
    }
});