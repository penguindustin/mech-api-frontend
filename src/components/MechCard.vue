<template>
  <v-card width="300" height="100%" class="pt-6">
    <a :href="mech.link">
      <v-img class="align-end" :src="mech.imgSrc" max-height="200px" max-width="300px" contain></v-img>
    </a>

    <v-card-title>
      <a :href="mech.link">{{mech.title}}</a>
    </v-card-title>

    <v-card-text class="text--primary">
      <div>{{mech.blurb}}</div>
    </v-card-text>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  props: {
    mech: {
      type: Object,
      default: function() {
        return {
          title: "00 Gundam",
          imgSrc:
            "https://vignette.wikia.nocookie.net/gundam/images/9/98/Gn-0000.jpg/revision/latest",
          blurb: "Gundam 00",
          link:
            "https://dmendoza-jwt-visualization.s3-us-west-2.amazonaws.com/index.html"
        };
      }
    }
  },
  data: () => ({
    imgUrl: ""
  }),
  methods: {
    get_mech: function() {
      axios.get("http://127.0.0.1:5000/random").then(res => {
        self.imgUrl = "http://127.0.0.1:5000/" + res.data[0];
        console.log(self.data);
      });
    }
  },
  created: function() {
    this.get_mech();
  }
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
