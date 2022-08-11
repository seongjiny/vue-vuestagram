import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
    state() {
        return {
            name: "Jim Yoon",
            likes: 30,
            liked: false,
            more: {},
        }
    },
    mutations: {
        liked(state) {
            if (state.liked) {
                state.likes--;
                state.liked = false;
            } else {
                state.likes++;
                state.liked = true;
            }
        },
        setMore(state, data) {
            state.more = data;
        },
    },
    actions: {
        getData(context) {
            axios.get(`https://codingapple1.github.io/vue/more0.json`).then((x) => {
                console.log(x.data);
                context.commit('setMore', x.data);
                // this.commit('setMore', x.data);
            });
        }
    },
})

export default store