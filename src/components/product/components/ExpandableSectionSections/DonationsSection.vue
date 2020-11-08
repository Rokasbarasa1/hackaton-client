<template>
    <v-expansion-panel>
        <v-expansion-panel-header>How you helped contribute</v-expansion-panel-header>
        <v-expansion-panel-content>
            <div>
                <donation-screen/>
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