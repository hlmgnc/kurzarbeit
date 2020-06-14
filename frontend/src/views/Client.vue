<script>
import { mapActions } from 'vuex'

export default {
  name: 'ClientView',
  data () {
    return {
      isLoading: true,
      client: {},
      experts: [],
      destination: ''
    }
  },
  async mounted () {
    await this.updateClient()
    this.experts = await this.fetchExperts()
    this.isLoading = false
  },
  methods: {
    ...mapActions(['fetchClient', 'fetchExperts', 'matchExpert']),
    async matchExpertAndUpdateClient ({ expertId, clientId, origin, destination }) {
      await this.matchExpert({ expertId, clientId, origin, destination })
      this.updateClient()
    },
    async updateClient () {
      this.client = await this.fetchClient(this.$route.params.clientId)
    }
  },
  watch: {
    'client.matchings' (matchings) {
      console.log('matchings updated', matchings)
    }
  }
}
</script>

<template lang="pug">
  .client
    p(v-if="isLoading") Please wait...
    div(v-else)
      h1 Client Detail
      p {{ client.name }}

      h2 Matching History
      div(v-if="client.matchings.length")
        ol
          li(v-for="matching in client.matchings")
            | In {{ matching.destination }} with {{ matching.expert.name }}
      p(v-else) No matchings
      h2 Create new matching
      p Destination:&nbsp;
        input(v-model="destination")
      div(v-if="experts.length")
        h3 Experts
        ol
          li(v-for="expert in experts")
            | {{ expert.name }} is waiting at {{ expert.location }}
            button.book(@click="matchExpertAndUpdateClient({ expertId: expert._id, clientId: client._id, origin: client.location, destination })") Match expert
</template>
