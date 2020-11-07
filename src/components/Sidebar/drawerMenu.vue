<template>
    <v-card class="mx-auto" height=100% width="330">
        <v-navigation-drawer permanent width="100%">
            <v-row class="fill-height" no-gutters>
                <v-list class="grow">
                    <v-list-item :key="linkItem.title" link v-for="linkItem in items">
                        <v-avatar>
                            <v-icon>{{linkItem.icon}}</v-icon>
                        </v-avatar>
                        <router-link :to="linkItem.link">{{linkItem.title}}</router-link>
                    </v-list-item>
                </v-list>
            </v-row>
        </v-navigation-drawer>
    </v-card>
</template>

<script>
    export default {
        name: "drawerMenu",
        data() {
            return {
                items: [
                    {title: 'Home', icon: 'mdi-view-dashboard', link: "/home"},
                    {title: 'About', icon: 'mdi-forum', link: "/about"},
                    {title: 'Product', icon: 'mdi-forum', link: "/product"},
                ],
            }
        },
    }
</script>

<style scoped>
    .grow {
        margin-top: 50px;
    }

</style>