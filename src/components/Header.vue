<template>
    <header>
        <h1 v-on:click="changeTitle">{{ title }}</h1>
    </header>
</template>

<script>
import {bus} from '../main';

export default {
    data() {
        return {
            title: 'woooow vuejs'
        }
    },
    methods: {
        changeTitle: function(){
            this.title = 'Vue Wizards';
            bus.$emit('titleChanged','Vue Wizards');
        }
    },
}
</script>

<style>

header {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
