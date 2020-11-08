<template>
  <div class="pa-2 pt-5 background">
    <div class="text-center">
      <img width="200px" height="auto" src="@/assets/chicken.webp" alt="Chicken">
      <p class="overline mt-2" style="font-size: 20px !important;">Chicken 20 pcs</p>
    </div>
    <v-timeline
        class="mr-4"
        align-top
        :dense="$vuetify.breakpoint.smAndDown"
    >
      <v-timeline-item
          color="blue lighten-2"
          icon="mdi-water">
        <v-card class="elevation-2">
          <v-card-title class="heading">
            Water
          </v-card-title>
          <v-card-text class="caption">
            <v-chip color="green lighten-2">
              {{product.waterPrint}} m<sup>3</sup>
            </v-chip>
          </v-card-text>
        </v-card>
      </v-timeline-item>

      <v-timeline-item
          color="black lighten-2"
          icon="mdi-cloud">
        <v-card class="elevation-2">
          <v-card-title class="heading">
            CO<sub>2</sub>
          </v-card-title>
          <v-card-text class="caption">
            <v-chip color="red lighten-3">
              {{product.carbonDioxidePrint}} kg
            </v-chip>
          </v-card-text>
        </v-card>
      </v-timeline-item>

      <v-timeline-item
          color="green lighten-1"
          icon="mdi-google-maps">
        <v-card class="elevation-2">
          <v-card-title class="heading">
            Origin
          </v-card-title>
          <v-card-text class="caption">
            <v-chip>
              {{product.location}}
            </v-chip>
          </v-card-text>
        </v-card>
      </v-timeline-item>

      <v-timeline-item
          color="red lighten-1"
          icon="mdi-nutrition">
        <v-card class="elevation-2">
          <v-card-title class="heading">
            Nutrition
          </v-card-title>
          <v-card-text class="caption">
            <v-row class="mx-2">
              <span><b>Cholesterol</b></span>
              <v-spacer></v-spacer>
              <span>55mg</span>
            </v-row>
            <v-row class="mx-2">
              <span><b>Sodium</b></span>
              <v-spacer></v-spacer>
              <span>40g</span>
            </v-row>
            <v-row class="mx-2">
              <span><b>Protein</b></span>
              <v-spacer></v-spacer>
              <span>8g</span>
            </v-row>
            <v-row class="mx-2">
              <span><b>Fat</b></span>
              <v-spacer></v-spacer>
              <span>14g</span>
            </v-row>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
export default {
  name: "ProductDetails",
  data: () => ({
    items: [
      {
        color: 'blue lighten-2',
        icon: 'mdi-water',
        title: 'Water',
        text: ''
      },
      {
        color: 'black lighten-2',
        icon: 'mdi-cloud',
      },
      {
        color: 'green lighten-1',
        icon: 'mdi-google-maps',
      },

    ],
  }),
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.background {
  background-image: url('../../assets/background.jpg');
  background-size: cover;
  height: 100%;
}
</style>