<template>
  <v-app>
    <v-app-bar app color="primary mb-5" dark absolute>
      <div class="d-flex align-center"></div>

      <v-spacer></v-spacer>
      
      <v-btn href="" target="_blank" text class="px-2">
        <span class="mr-2 headline">Home</span>
      </v-btn>
      <v-btn href="" target="_blank" text class="px-2">
        <span class="mr-2 headline">About</span>
      </v-btn>
      <v-btn href="" target="_blank" text class="px-2">
        <span class="mr-2 headline">Documentation</span>
      </v-btn>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: "App",

  components: {
  },

  data: () => ({
    //
  })
};
</script>
