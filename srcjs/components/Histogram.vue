<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <v-card>
          <v-card-title>
            <h3>Old faithful</h3>
          </v-card-title>
          <v-card-text>
            <p>Set input from vue, compute in R and send plot back to vue!</p>
            <v-slider max="50" min="0" v-model="value"> </v-slider>
            <p>Number of bins: {{ value }}</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="8">
        <div
          @click="alertR"
          @mouseover="showMe = true"
          @mouseleave="showMe = false"
        >
          <p v-show="showMe">Click on the plot...</p>
          <shiny-plot-output id="hist_plot" height="300px" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ShinyPlotOutput from "./ShinyPlotOutput.vue";
export default {
  data() {
    return {
      value: 10,
      showMe: false,
    };
  },
  watch: {
    value: function (val) {
      console.log(val);
      Shiny.setInputValue("hist", val);
    },
  },
  methods: {
    alertR: function (event) {
      alert("I'm from R!");
    },
  },
  components: { "shiny-plot-output": ShinyPlotOutput },
};
</script>
