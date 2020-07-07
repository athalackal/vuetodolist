<template>
    <header class="header">
        <h1>TODO LIST</h1>
        <div id="nav">
            <router-link to="/" id="home">Home</router-link>|  
            <router-link to="/about" id="about">About</router-link>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>
    .header {
        font-family: Arial, Helvetica, sans-serif;
        background: #333;
        color: #ffffff;
        text-align: center;
        padding: 1px;
        padding-top: 20px;
    }

    .header a {
        color: #fff;
        padding-right: 5px;
        text-decoration: none;
    }
</style>