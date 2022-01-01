<template>
  <v-app
    ><v-app-bar app>
      <v-app-bar-nav-icon
        v-model="drawerState"
        @click="drawerState = !drawerState"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>Shiny and vue!</v-toolbar-title>
    </v-app-bar>

    <Sidebar />

    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If usthis.$store.getters.drawerStateing vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <p>Really cool</p>
    </v-footer>
  </v-app>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";

export default {
  data() {
    return {};
  },
  components: { Sidebar },
  computed: {
    drawerState: {
      get() {
        return this.$store.getters.drawerState;
      },
      set(v) {
        return this.$store.commit("toggleDrawerState", v);
      },
    },
  },
};
</script>
