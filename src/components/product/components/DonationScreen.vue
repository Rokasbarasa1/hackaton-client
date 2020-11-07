<template>
    <div>
        <h1>{{currentAmount}}{{currency}}</h1>
        <h2>So far people have contributed a total of</h2>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "DonationScreen",

        props: {
            currentAmount: {
                type: Number,
                required: true
            },
            currency: {
                type: String,
                required: true
            }
        },

        data: () => ({
            json: null,
        }),

        mounted () {
            axios
                .get('http://10.152.218.0:8000/' + 'donations')
                .then(response => (this.json = response))
        },
    }
</script>

<style scoped>

</style>