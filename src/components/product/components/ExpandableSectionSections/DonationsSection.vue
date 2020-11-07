<template>
    <v-expansion-panel>
        <v-expansion-panel-header>How you helped contribute</v-expansion-panel-header>
        <v-expansion-panel-content>
            <div>
                <h1>You viewing these products helps fundraisers</h1>
                <p>For every scan of our product we give money to build projects that help the enviorment.</p>
                <donation-screen current-amount="884.22" currency="$"/>
            </div>
        </v-expansion-panel-content>
    </v-expansion-panel>
</template>

<script>
    import DonationScreen from "@/components/product/components/DonationScreen";
    export default {
        name: "DonationsSection",
        components: {DonationScreen}
    }
</script>

<style scoped>

</style>