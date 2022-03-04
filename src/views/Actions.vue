<template>
  <div class="actions">
    <h1>4、actions相关的学习</h1>
    <p>count: {{ count }}</p>
    <button @click="asyncAdd">异步加</button>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'actions',
  computed: {
    ...mapState(['count']),
  },
  created() {
    this.asyncAdd2().then(() => {
      alert('等待1s后的输出')
    })
  },
  methods: {
    asyncAdd() {
      this.$store.dispatch('asyncAdd').then(() => {
        alert('等待1s后的输出')
      })
    },
    ...mapActions({
      asyncAdd2: 'asyncAdd'
    })
  },
}
</script>
