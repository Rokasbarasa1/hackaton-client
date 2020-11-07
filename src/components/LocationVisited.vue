<template>
    <div class="text-center">
        <v-avatar
                color="primary"
                size="111"
        ></v-avatar>
        <h3>{{title}}</h3>
    </div>
</template>

<script>
    export default {
        name: "LocationVisited",

        data: () => ({
        }),

        props: {
            title: {
                type: String,
                required: true
            }
        },
    }
</script>

<style scoped>
    .text-center {
        margin-top: 20px;
    }

</style>