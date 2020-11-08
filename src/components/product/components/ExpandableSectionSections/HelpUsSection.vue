<template>
    <v-expansion-panel>
        <v-expansion-panel-header>News letter and more</v-expansion-panel-header>
        <v-expansion-panel-content>
            <div>
                <h1>You can help us by providing valuable data</h1>
                <p>Creating an account would help us comunicate with our customers directly. Right now were are just a distributor and we rely sales shops to provide us with information on customer satisfaction</p>
                <h2>We would be very happy if you could answer a some questions</h2>

                <ol>
                    <li>
                        Do you like this product?
                        <v-radio-group
                                v-model="row"
                                row
                        >
                            <v-radio
                                    label="Yes"
                                    value="Yes"
                            ></v-radio>
                            <v-radio
                                    label="No"
                                    value="No"
                            ></v-radio>
                        </v-radio-group>
                    </li>
                    <li>
                        Do you preffer saving money or being eco friendly?
                        <v-radio-group
                                v-model="row"
                                row
                        >
                            <v-radio
                                    label="Yes"
                                    value="Yes"
                            ></v-radio>
                            <v-radio
                                    label="No"
                                    value="No"
                            ></v-radio>
                        </v-radio-group>
                    </li>
                    <li>
                        Would you recomend our products?
                        <v-radio-group
                                v-model="row"
                                row
                        >
                            <v-radio
                                    label="Yes"
                                    value="Yes"
                            ></v-radio>
                            <v-radio
                                    label="No"
                                    value="No"
                            ></v-radio>
                        </v-radio-group>
                    </li>
                </ol>
            </div>
        </v-expansion-panel-content>
    </v-expansion-panel>
</template>

<script>
    export default {
        name: "HelpUsSection"
    }
</script>

<style scoped>

</style>