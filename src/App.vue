<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h2>Pots</h2>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <PotList />
    </v-content>
  </v-app>
</template>

<script>
import PotList from "./components/PotList";
export default {
  name: "App",
  components: {
    PotList,
  },
  data: () => ({}),
};
</script>