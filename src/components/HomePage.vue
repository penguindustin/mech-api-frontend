<template>
  <div class="mt-5" id="homePage">
    <h1 class="ma-10" id="pageTitle">The Mech API</h1>

    <v-container>
      <v-row md="9" xs="12" justify="space-around">
        <v-col v-for="(value, idx) in mechData" :key="idx" lg="3" md="3" sm="6" xs="12">
          <MechCard :class="cardWidth" :mech="value" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import MechCard from "./MechCard";
import axios from "axios";
const numCards = 8;

export default {
  components: {
    MechCard
  },
  data: function() {
    return {
      mechData: []
    };
  },
  computed: {
    cardWidth() {
      if (this.$vuetify.breakpoint.name in ["xs", "sm"]) return "mx-auto";
      return "mx-5";
    }
  },
  methods: {
    getMechUrls: async function() {
      let p = await axios.get("http://127.0.0.1:5000/v1/random/" + numCards);
      this.mechData = p.data.map(mech => {
        mech.imgPath = "http://127.0.0.1:5000/" + mech.imgPath
        return mech
      });
      console.log(this.mechData)
    }
  },
  mounted: function() {
    this.getMechUrls();
  }
};
</script>

<style>
#pageTitle {
  height: 15vh;
  text-align: center;
}

</style>
