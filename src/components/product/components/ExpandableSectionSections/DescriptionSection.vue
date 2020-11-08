<template>
    <v-expansion-panel>
        <v-expansion-panel-header>Product description</v-expansion-panel-header>
        <v-expansion-panel-content>
            <h1>{{title}}</h1>
            <h2>Nutritional information</h2>
            <ul>
                <li>
                    Fat: 15g

                </li>
                <li>
                    Carbohydrates: 2g
                </li>
                <li>
                    Protein: 20g
                </li>
            </ul>

        </v-expansion-panel-content>
    </v-expansion-panel>
</template>

<script>
    export default {
        name: "DescriptionSection",

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