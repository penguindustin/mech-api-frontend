<template>
  <v-card width="300" height="100%" class="pt-6">
    <v-img class="align-end" :src="mech.imgPath" max-height="200px" max-width="300px" contain></v-img>

    <v-card-title>
      {{mech.name}}
    </v-card-title>

    <v-card-text class="text--primary">
      <div>{{mech.anime}}</div>
      <div>{{mech.pilot}}</div>
    </v-card-text>
  </v-card>
</template>

<script>

export default {
  props: {
    mech: {
      type: Object,
      default: function() {
        return {
          name: "00 Gundam",
          imgPath:
            "https://vignette.wikia.nocookie.net/gundam/images/9/98/Gn-0000.jpg/revision/latest",
          anime: "Gundam 00",
          pilot: "Setsuna"
        };
      }
    }
  },
  data: () => ({
    imgUrl: ""
  }),
  methods: {  },
  created: function() {
  }
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
