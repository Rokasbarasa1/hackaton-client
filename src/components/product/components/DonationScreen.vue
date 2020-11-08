<template>
    <div>
        <div style="text-align:center;">
            <h1  class="donations">30222€</h1>
        </div>
        <div >
            <h2>For each product sale half a euro is being put into the pool.</h2>
            <p>Everyone can contribute. This money is used to build sustainable projects</p>
            <br>
            <button type="button" class="button">Contribute!</button>
            <h2>Recent projects</h2>
            <ul>
                <li>
                    Wind mill. Completed
                </li>
                <li>
                    Wind mill. Completed
                </li>
                <li>
                    Solar farm. Completed
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DonationScreen",
    }
</script>

<style scoped>
    .button {
        alignment: center;
        border: black solid 2px;
    }
    .donate{
        float: left;
        width: 20%;
        height: 40%;
    }
    .donations{
        color: greenyellow;
    }
</style>