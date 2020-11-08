<template>
  <v-app id="inspire">
    <v-navigation-drawer
        v-model="drawer"
        :mini-variant.sync="mini"
        permanent
        app
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="@/assets/avatar.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>David Franko</v-list-item-title>

        <v-btn
            icon
            @click.stop="mini = !mini"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>
      <v-list dense>
        <v-list-item
            v-for="item in items"
            :key="item.title"
            link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <router-link :to="item.path" class="text-decoration-none">
              <v-list-item-title style="color: black">{{ item.title }}</v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>


        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-augmented-reality</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
              <v-list-item-title style="color: black" @click="arLink()">AR</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container style="height: 100%" class="pa-0">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    drawer: true,
    items: [
      {title: 'Home', icon: 'mdi-home-city', path: "/home"},
      {title: 'About', icon: 'mdi-account', path: "/about"},
      {title: 'Product', icon: 'mdi-room-service', path: "/product/1"},
      {title: 'Donate', icon: 'mdi-bitcoin', path: "/donate"},
    ],
    mini: true,
  }),
  methods: {
    arLink() {
      console.log("works")
      window.location = 'https://prebiusta.github.io/test/'
    }
  }
};
</script>

<style>
.logo {
  height: 75%;
  width: auto;
}

</style>
