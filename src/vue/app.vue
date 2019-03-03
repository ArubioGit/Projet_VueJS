<template>
    <v-app dark>

        <div class="header">
            <img v-bind:src="'../static/img/logo.png'" />
        </div>   

        <router-view></router-view>
    </v-app>
</template>

<script>
    export default {}
</script>

<style>
    .header {
        min-height: 150px;
        background-color: #303030;
    }
    img {
        width: 630px;
        margin-left: 35%;
        margin-top: 18px;
    }
</style>