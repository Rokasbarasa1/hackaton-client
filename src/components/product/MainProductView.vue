<template>
    <div>
        <sub-company-logo/>
        <product-title title="BBq chicken wings Rose CHANGE" class="title"/>
        <product-data co2=77 distance=44 energy-cost=2000 manufacturer="Klaipedos maistas" water-cost="2344"/>
        <expandable-section description="Change description in main product viwe" type="Change type in main prodcut viwe"/>
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
                .get('http://10.152.218.0:8000/' + this.$route.params.productId)
                .then(response => (this.json = response.body))
        },
    }
</script>

<style scoped>
    .title{
        margin-top: 50px;
        margin-bottom: 20px;
    }
</style>