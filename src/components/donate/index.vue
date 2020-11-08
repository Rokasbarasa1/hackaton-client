<template>
  <div class="text-center background">
    <div class="mx-4 pt-10">
      <span class="headline">A Big Thank You!</span>
      <p class="caption">Money from your purchases were efficiently used to improve environment around us. What would not be possible without you!</p>
    </div>
    <v-row class="mx-4">
      <v-col cols="12" md="4">
        <v-divider class="my-4"></v-divider>
        <div class="text-center">
          <img width="60%" src="@/assets/plant.png">
          <p class="heading">2.53 mil trees planted</p>
          <p class="text-caption">Thanks to you purchases, more will be saved.</p>
        </div>
      </v-col>
      <v-col cols="12" md="4">
        <div class="text-center">
          <v-divider class="my-4"></v-divider>
          <img width="60%" src="@/assets/windmill.png">
          <p class="heading">254 Wind Mills build</p>
          <p class="text-caption">From every piece of product we sell, 0.24€ is invested to reduce CO<sub>2</sub>
            consumption and build carbon-free energy solutions such as windmills</p>
        </div>
      </v-col>
      <v-col cols="12" md="4">
        <v-divider class="my-4"></v-divider>
        <div class="text-center">
          <img width="60%" src="@/assets/recycle.png">
          <p class="heading">146 tons of CO<sub>2</sub> emissions saved monthly</p>
          <p class="text-caption">We value environment and therefore our products are manufactured and recycled with
            high efficiency. As a result, emissions are decreased as much as possible without influencing customer's
            taste</p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Environment"
}
</script>

<style scoped>
.background {
  background-image: url('../../assets/donate_bg.jpg');
  background-size: cover;
}
</style>