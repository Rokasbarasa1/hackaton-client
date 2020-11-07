<template>
    <div class="title">
        <h1>{{title}}</h1>
    </div>
</template>

<script>
    export default {
        name: "ProductTitle",

        props: {
            title: {
                type: String,
                required: true
            }
        },
    }
</script>

<style scoped>
    .title{
        text-align:center;
    }
</style>