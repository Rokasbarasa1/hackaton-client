<template>
  <v-app>
    <v-app-bar color="orange" app>
      <div >
        <h1>Will you show logo pls</h1>
        <v-img src="assets/logo.svg" class="image"/>
      </div>
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
  .image{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 5%;
    height: auto;
  }
</style>
