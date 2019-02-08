<template>
    <div id="lista">
        <h3><i>{{ title }}</i></h3>
        <ul>
            <li v-for="(ninja, index) in ninjas" :key="index" >{{ ninja }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Lista',
            ninjas: ['Mario','Luigui','Warrior','Peach','Toad','Yoshi']
        }
    },
}
</script>

<style>
#lista {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
