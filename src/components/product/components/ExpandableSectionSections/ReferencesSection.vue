<template>
    <v-expansion-panel>
        <v-expansion-panel-header>Quality of product</v-expansion-panel-header>
        <v-expansion-panel-content>
            <h1>We deliver the best product</h1>
            <p>Fresh and high quality meat that you can find close to you. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </v-expansion-panel-content>
    </v-expansion-panel>
</template>

<script>
    export default {
        name: "ReferencesSection",

        props: {
            title: {
                type: String,
                required: true
            }
        },
    }
</script>

<style scoped>

</style>