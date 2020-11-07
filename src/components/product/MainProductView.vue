<template>
    <div>
        <sub-company-logo/>
        <product-title v-bind:title='json.data.title' class="title"/>
        <product-data v-bind:co2='json.data.co2' v-bind:distance='json.data.distance' v-bind:energy-cost=2000 v-bind:manufacturer='json.data.manufacturer' v-bind:water-cost='json.data.water'/>
        <expandable-section v-bind:description='json.data.description' v-bind:type='json.data.title'/>
        <p> The json response is here: {{json}}</p>
    </div>
</template>

<script>
    import ProductTitle from "@/components/product/components/ProductTitle";
    import ProductData from "@/components/product/components/ProductData";
    import ExpandableSection from "@/components/product/components/ExpandableSections";
    import axios from "axios";
    import SubCompanyLogo from "@/components/product/components/SubCompanyLogo";
    export default {
        name: "MainProductView",

        components: {SubCompanyLogo, ExpandableSection, ProductData, ProductTitle},

        data: () => ({
            json: null,
        }),

        mounted () {
            axios
                .get('http://127.0.0.1:5000/products' )
                .then(response => ( this.json = response))
        },
    }
</script>

<style scoped>
    .title{
        margin-top: 50px;
        margin-bottom: 20px;
    }
</style>