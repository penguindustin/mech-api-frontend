<template>
  <div class="mt-5">
    <h1 class="ma-10" id="pageTitle">The Mech API</h1>

    <v-container>
        <v-row md="8" xs="12" justify="space-around">
            <v-col v-for="idx in 10" :key="idx" md="4" sm="6" xs="12">
                <MechCard :class="cardWidth"/>
            </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script>
import MechCard from "./MechCard";

export default {
  components: {
    MechCard
  },

    computed: {
      cardWidth () {
        if (this.$vuetify.breakpoint.name in ['xs', 'sm'] ) return 'mx-auto'
        return 'mx-5'
      }
    },
};
</script>

<style>
#pageTitle {
    height: 15vh;
    text-align: center;
}
</style>