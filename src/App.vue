<template>
  <div id="app">
    <Header />
    <router-view/>
    <br>
    <input type="button" value="Clear List" class="btn2">
  </div>
</template>

<script>
import Header from './components/layout/Header';
export default {
  name:"app",
  components: {
    Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

#nav {
  padding: 10px;
  padding-right: 5px;
}

#nav a {
  font-weight: bold;
  color: #ffffff;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#home:hover {
  color:#42b983;
}

#about:hover {
  color:#42b983;
}

.btn2 {
  font-size: 18px;
  padding: 5px;
  margin-left: 20px;
  background:#42b983;
  border-style: solid;
  color: #ffffff;
}
.btn2:hover {
  background: #000000;
}

</style>
