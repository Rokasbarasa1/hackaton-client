<template>
    <v-row justify="center">
        <v-expansion-panels popout>
            <donations-section/>
            <description-section v-bind:content="description" v-bind:title="type"/>
            <recipes-section v-bind:type="type"/>
            <references-section v-bind:type="type"/>
            <help-us-section/>
        </v-expansion-panels>
    </v-row>
</template>

<script>
    import DonationsSection from "@/components/product/components/ExpandableSectionSections/DonationsSection";
    import DescriptionSection from "@/components/product/components/ExpandableSectionSections/DescriptionSection";
    import RecipesSection from "@/components/product/components/ExpandableSectionSections/RecipesSection";
    import ReferencesSection from "@/components/product/components/ExpandableSectionSections/ReferencesSection";
    import HelpUsSection from "@/components/product/components/ExpandableSectionSections/HelpUsSection";
    export default {
        name: "ExpandableSection",
        components: {HelpUsSection, ReferencesSection, RecipesSection, DescriptionSection, DonationsSection},

        props: {
            description: {
                type: String,
                required: true
            },
            type: {
                type: String,
                required: true
            }
        },
    }
</script>

<style scoped>

</style>