import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { INCREMENT } from './mutation-types'

export default new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 1, text: '事件1', done: true },
      { id: 2, text: '事件2', done: false },
      { id: 3, text: '事件3', done: true },
      { id: 4, text: '事件4', done: true },
    ],
  },
  getters: {
    doneToDo: state => state.todos.filter(todo => todo.done === true),
    doneTodosCount: (_state, getters) => getters.doneToDo.length,
  },
  mutations: {
    /**
     * @description: 让state + 1
     * @return {void}
     */
    [INCREMENT](state, payload = { num: 1 }) {
      state.count = state.count + payload.num
    },
  },
  actions: {
    /**
     * @description: 等待3s才调用INCREMENT
     */    
    asyncAdd({ commit }) {
      return new Promise(resolve => {
        setTimeout(() => {
          commit('INCREMENT', {num: 10})
          resolve()
        }, 1000)
      })
    },
  },
  modules: {},
})
