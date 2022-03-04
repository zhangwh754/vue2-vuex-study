<template>
  <div class="getters">
    <h1>2、getters相关的学习</h1>
    <ul>
      <li v-for="(item, index) in doneToDo" :key="index">
        {{item.text}}的状态是{{item.done ? '已完成' : '未完成'}}
      </li>
    </ul>
    <p>doneTodosCount: {{ doneTodosCount }}</p>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'getters',
  computed: {
    ...mapGetters([
      'doneToDo',
      'doneTodosCount'
    ]),
  },
}
</script>
