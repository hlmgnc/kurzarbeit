<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    type: String,
    count: Number
  },
  methods: {
    ...mapActions(['increment', 'decrement'])
  },
  computed: {
    ...mapState(['count'])
  }
}
</script>

<template lang="pug">
.hello
   p {{ msg }}
   .counter {{ count }}
   button.increment(@click="increment") Increment
   button.decrement(@click="decrement") Decrement
</template>

<style scoped lang="scss">
</style>
