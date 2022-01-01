<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="5">
        <v-card>
          <v-card-title>
            <h3>To R and back again</h3>
          </v-card-title>
          <v-card-text class="white--text">
            <p>
              Click the button to update the table with random rows sent from R
            </p>
            <p class="selection">You selected: {{ selected }}</p>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="updateTable($event)" elevation="2" color="#428bca"
              >Update table
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="6">
        <v-data-table
          v-model="selected"
          dense
          show-select
          checkbox-color="#42b883"
          item-key="all_cars"
          :items="allCars"
          :headers="headers"
          :items-per-page="10"
          :single-select="true"
          class="elevation-1"
        ></v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: "Cars", value: "all_cars" },
        { text: "mpg", value: "mpg" },
        { text: "cyl", value: "cyl" },
        { text: "disp", value: "disp" },
      ],
      buttonValue: 0,
      selected: [],
    };
  },
  methods: {
    updateTable(e) {
      this.buttonValue = this.buttonValue += 1;
      this.selected = [];
      console.log(this.buttonValue);
      Shiny.setInputValue("updateTable", this.buttonValue);
    },
  },
  computed: {
    allCars() {
      console.log(this.$store.state.mtcars);
      return this.$store.state.mtcars;
    },
  },
};
</script>

<style scoped>
.selection {
  margin-top: 10px;
}
</style>
