<template>
  <v-navigation-drawer
    app
    disable-route-watcher
    v-model="drawerState"
    class="teal darken-1"
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6"> Choices! </v-list-item-title>
        <v-list-item-subtitle>
          <p>A few examples of things...</p>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        dense
        router
        :to="item.route"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "sidebar",
  data() {
    return {
      items: [
        {
          title: "Home",
          route: "/",
          icon: "mdi-home",
        },
        {
          title: "Cars",
          route: "/mtcars",
          icon: "mdi-car",
        },
        {
          title: "Old Faithful",
          route: "/histogram",
          icon: "mdi-chart-box-outline",
        },
        {
          title: "Penguins",
          route: "/penguins",
          icon: "mdi-penguin",
        },
      ],
      localDrawer: this.value,
    };
  },
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

<style scoped></style>
