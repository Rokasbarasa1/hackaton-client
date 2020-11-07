<template>
    <div class="body">
        <div>
            <h1 class="IdOfProduct">Displaying product:{{$route.params.productId }}</h1>
        </div>
        <div style="margin-top: 20px">
            <v-card
                    class="d-flex flex-row mb-6"
                    flat
                    tile
            >
                <location-visited class="location" :title="getFarm()"/>
                <location-visited class="location" :title="getSlugterHouse()"/>
                <location-visited class="location" :title="getDistributionCenter()"/>
                <location-visited class="location" :title="getStore()"/>

            </v-card>
        </div>

        <h2>Chicken wings</h2>
        <ul>
            <li>
                <h3>Total carbon footprint: {{co2Total}}</h3>
            </li>
            <li>
                <h3>Total distance traveled: {{distanceTotal}}</h3>
            </li>

        </ul>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut fringilla mi.
            Donec iaculis pharetra facilisis. Aliquam eros mauris, luctus vel neque ac, feugiat convallis libero.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
            Quisque maximus diam vel ligula malesuada, in varius mauris elementum.
            Nam ligula magna, condimentum eu nisl at, faucibus cursus odio.
            Etiam iaculis leo magna, non bibendum nibh commodo eu.</p>

        <div id="kaka">
            <p>{{ info }}</p>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import LocationVisited from "@/components/LocationVisited";

    export default {
        name: "ProductInfo",
        components: {LocationVisited},
        data: () => ({
            info: null,
            co2Total: 0,
            distanceTotal: 0,
            idProduct: null,
        }),

        mounted () {
            axios
                .get('http://10.152.218.0:8000/')
                .then(response => (this.info = response))
        },

        methods: {
            getProductInformation(){
                axios.get('http://10.152.218.0:8000/' + 'this.$route.params.productId').then(response => (this.info = response))
                //this.co2Total = this.info.
            },

            setProduct: function (msg) {
                this.idProduct = msg
            },
            getFarm() {
                return "Copenhagen farms";
            },
            getSlugterHouse() {
                return "Copenhagen slaughter";
                },
            getDistributionCenter() {
                return "Copenhagen distribution";
                },
            getStore() {
                return "Rema king size ";
                },
            getDistance() {
                return 333;
            },
        },
    }
</script>

<style scoped>
    .location {
        margin-right: 4%;
        margin-left: 4%;
    }
    .body {
        margin: 30px;
    }
    .arrow {
        width: 4%;
        height: auto;
    }
    .IdOfProduct {
        text-align: center;
    }

</style>