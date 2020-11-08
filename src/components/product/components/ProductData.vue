<template>
    <div class="ProductDetails">
        <ul style="list-style-type:none;">
            <li class="text">CO2 cost: {{co2}}Kg</li>
            <li class="text">Water cost: {{waterCost}}m³</li>
            <li class="text">Location: {{location}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "ProductData",

        props: {
            co2: {
                type: String,
                required: true
            },
            waterCost: {
                type: String,
                required: true
            },
            location: {
                type: String,
                required: true
            }
        },
    }
</script>

<style scoped>
    .ProductDetails {
        margin: 2px;
        border: lightgrey solid 1px;
    }
    .text {
        margin-top: 5px;
        margin-bottom: 5px;
        font-weight: bold;
        text-size: 2em;
    }
</style>