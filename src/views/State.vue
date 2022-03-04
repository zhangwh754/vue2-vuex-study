<template>
  <div class="home">
    <h1>1、state相关的学习</h1>
    <p>count: {{ count }}</p>
    <p>countAlias: {{ countAlias }}</p>
    <p>myCount: {{ myCount }}</p>
    <button @click="addCount">addCount</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Home',
  data() {
    return {
      num: 100,
    }
  },
  computed: {
    // 别名的混入写法(对象)
    ...mapState({
      countAlias: 'count',
    }),
    // 不用别名的混入写法(数组)
    ...mapState([
      'count'
    ]),
    myCount() {
      return this.num + this.$store.state.count
    },
  },
  methods: {
    /**
     * @description: 调用vuex的increment
     */
    addCount() {
      this.$store.commit('INCREMENT')
    },
  },
}
</script>
