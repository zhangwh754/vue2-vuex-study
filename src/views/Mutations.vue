<template>
  <div class="mutations">
    <h1>3、mutations相关的学习</h1>
    <p>count: {{ count }}</p>
    <button @click="addCount">addCount</button>
    <button @click="INCREMENT({num: 8})">addCount2</button>
    <button @click="addCount2({num: 4})">addCount3</button>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'mutations',
  computed: {
    ...mapState(['count']),
  },
  methods: {
    /* 载荷的使用 */
    addCount() {
      // this.$store.commit('INCREMENT', { num: 5 })
      this.$store.commit({
        type: 'INCREMENT',
        num: 6
      })
    },
    ...mapMutations([
      'INCREMENT'
    ]),
    ...mapMutations({
      addCount2: 'INCREMENT'
    })
  },
}
</script>
