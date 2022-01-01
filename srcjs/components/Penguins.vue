<template>
  <div>
    <div class="text-center">
      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
            p-p-pick a pengin
          </v-btn>
        </template>

        <v-card>
          <v-card-title class="text-h3"> Penguin selectooor </v-card-title>

          <v-card-text>
            Pick a penguin from the list to return some information about the
            penguin.
            <v-select
              v-model="selectedPenguin"
              :items="items"
              item-text="species"
              label="Penguins"
              return-object
            ></v-select>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="getPenguin"> Go </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>

    <v-container fluid>
      <v-row>
        <v-col cols="4" offset="4">
          <v-card v-if="isShown">
            <v-img
              :src="penguinImages[selectedPenguinText]"
              height="200px"
            ></v-img>
            <v-card-title class="subheading font-weight-bold">
              {{ showPenguin[0].species }}
            </v-card-title>
            <v-card-subtitle>
              Mean values for selected penguin
            </v-card-subtitle>
            <v-divider></v-divider>

            <v-list dense>
              <v-list-item>
                <v-list-item-content>Bill length (mm):</v-list-item-content>
                <v-list-item-content class="align-end">
                  {{ showPenguin[0].bill_length_mm }}
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>Bill depth (mm):</v-list-item-content>
                <v-list-item-content class="align-end">
                  {{ showPenguin[0].bill_depth_mm }}
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>Flipper length (mm):</v-list-item-content>
                <v-list-item-content class="align-end">
                  {{ showPenguin[0].flipper_length_mm }}
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>Bodymass (g):</v-list-item-content>
                <v-list-item-content class="align-end">
                  {{ showPenguin[0].body_mass_g }}
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import adelie from "../assets/penguins/adellie.jpg";
import chinstrap from "../assets/penguins/chinstrap.jpg";
import gentoo from "../assets/penguins/gentoo.jpg";

export default {
  data: () => ({
    items: [
      { species: "Adelie", value: "adelie" },
      { species: "Gentoo", value: "gentoo" },
      { species: "Chinstrap", value: "chinstrap" },
    ],
    selectedPenguinText: null,
    selectedPenguin: null,
    dialog: false,
    isShown: false,
    penguinImages: {
      Adelie: adelie,
      Chinstrap: chinstrap,
      Gentoo: gentoo,
    },
  }),
  methods: {
    getPenguin() {
      this.dialog = false; // close dialog
      this.isShown = true; // show card now penguin is selected
      this.selectedPenguinText = this.selectedPenguin.species;
      Shiny.setInputValue("penguin", this.selectedPenguin.species);
    },
  },
  computed: {
    showPenguin() {
      return this.$store.state.penguin;
    },
  },
};
</script>
