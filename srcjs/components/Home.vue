<template>
  <v-container fluid>
    <h1 class="mainTitle">
      <span class="shinyTitle">Shiny</span> with
      <span class="vueTitle">Vue</span> !
    </h1>
    <v-col cols="2" offset="5">
      <v-row>
        <v-img :src="shinyImage" contain class="img" />
        <v-img :src="vueImage" contain class="img" />
      </v-row>
    </v-col>
    <br />
    <h3 class="mainTitle">
      With a little help from
      <a href="https://packer.john-coene.com/">{packer}</a>,
      <a href="https://github.com/ThinkR-open/golem">{golem}</a> and
      <a href="https://vuetifyjs.com/en/">vuetify</a>
    </h3>
    <br />
    <v-col cols="8" offset="2">
      <v-card>
        <v-card-text class="white--text">
          <p>
            A small shiny app exploring the possibilities of using vue as a
            front end.
          </p>
          <p>Each tab demos the ability to send data between R and vue.</p>
          <p>
            The app is built using {golem} and {packer} and heavily inspired by
            <a href="https://github.com/FrissAnalytics/shiny-vue-r">this app</a>
            by Kent Russell and Herman Sontrop.
          </p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-container>
</template>

<script>
import vueImage from "../assets/vue.png";
import shinyImage from "../assets/shiny-logo.png";
export default {
  data: function () {
    return {
      vueImage: vueImage,
      shinyImage: shinyImage,
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 60px;
}

p {
  text-align: center;
  color: #ffffff;
  font-size: 16px;
}

.img {
  height: 100px;
  width: 100px;
  display: flex;
  object-fit: scale-down;
}

.containter {
  max-width: 200px;
}

.shinyTitle {
  color: #428bca;
}

.vueTitle {
  color: #42b883;
}

.mainTitle {
  margin: auto;
  width: 50%;
  text-align: center;
}
</style>
