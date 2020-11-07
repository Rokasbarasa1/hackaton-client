<template>
  <v-app>
    <v-app-bar app elevation="1">
      <v-spacer></v-spacer>
      <img class="logo" src="@/assets/logo.png" alt="Logo"/>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
};
</script>

<style>
.logo {
  height: 80%;
  width: auto;
}

</style>
