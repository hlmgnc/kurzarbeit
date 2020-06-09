<script>
import { mapActions } from 'vuex'

export default {
  name: 'Clients',
  data () {
    return {
      isLoading: true,
      clients: []
    }
  },
  async mounted () {
    this.clients = await this.fetchClients()
    this.isLoading = false
  },
  methods: {
    ...mapActions(['fetchClients'])
  }
}
</script>

<template lang="pug">
  .home
    h1 Clients
    p(v-if="isLoading") Please wait...
    div(v-else)
      p There are {{clients.length}} clients are waiting...

      ol
        li(v-for="client in clients")
          a(:href="`/clients/${client._id}`") {{ client.name }}
</template>
