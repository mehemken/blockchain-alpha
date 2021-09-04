import { createStore } from 'vuex'
import Web3 from 'web3'

export const store = new createStore({
    state: {
        count: 0
    },
    mutations: {
        increment (state) {
            state.count++
        }
    }
})
