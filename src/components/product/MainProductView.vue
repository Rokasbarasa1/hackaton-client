<template>
    <div>
        <sub-company-logo/>
        <product-title :title="json.name" class="title"/>
        <product-data :co2='json.carbonDioxidePrint' :location='json.location' :water-cost='json.waterPrint'/>
        <expandable-section :type='json.name'/>
    </div>
</template>

<script>
    import ProductTitle from "@/components/product/components/ProductTitle";
    import ProductData from "@/components/product/components/ProductData";
    import ExpandableSection from "@/components/product/components/ExpandableSections";
    import SubCompanyLogo from "@/components/product/components/SubCompanyLogo";
    import axios from "axios"

    export default {
        name: "MainProductView",

        components: {SubCompanyLogo, ExpandableSection, ProductData, ProductTitle},
        data: () => ({
            json: {},
        }),
        mounted () {
            axios.get('https://hackathon-db-api.azurewebsites.net/product/get/' + this.$route.params.productId)
                .then(response => {
                    this.json = response.data
                    console.log(response.data)
                })
        },
    }
</script>

<style scoped>
    .title{
        margin-top: 50px;
        margin-bottom: 20px;
    }
</style>