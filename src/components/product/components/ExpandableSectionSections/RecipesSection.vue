<template>
    <v-expansion-panel>
        <v-expansion-panel-header>Healthy recipes to do with this product</v-expansion-panel-header>
        <v-expansion-panel-content>
            <h1>All recipes that could include {{type}}</h1>

        </v-expansion-panel-content>
    </v-expansion-panel>
</template>

<script>
    export default {
        name: "RecipesSection",

        props: {
            type: {
                type: String,
                required: true
            }
        },
    }
</script>

<style scoped>

</style>