<template>
    <v-expansion-panel>
        <v-expansion-panel-header>References and quality of product</v-expansion-panel-header>
        <v-expansion-panel-content>
            <h1>{{type}}</h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </v-expansion-panel-content>
    </v-expansion-panel>
</template>

<script>
    export default {
        name: "ReferencesSection",

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