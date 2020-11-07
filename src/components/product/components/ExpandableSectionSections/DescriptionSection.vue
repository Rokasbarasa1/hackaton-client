<template>
    <v-expansion-panel>
        <v-expansion-panel-header>Product description</v-expansion-panel-header>
        <v-expansion-panel-content>
            <h1>{{title}}</h1>
            <p>{{content}}</p>
            <h2>Nutritional information ....</h2>
            <p>ASDfsdgaf gfg a fdga dfg addf g F HA DGH  RTGH J J JJ H  JY J Y J</p>
        </v-expansion-panel-content>
    </v-expansion-panel>
</template>

<script>
    export default {
        name: "DescriptionSection",

        props: {
            content: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            }
        },
    }
</script>

<style scoped>

</style>