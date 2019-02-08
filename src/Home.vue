<template>
  <div id="app">
    <nav-vue></nav-vue>
    <header-vue></header-vue>
    <div class="jumbotron">
      <img src="./assets/logo.png">
    </div>
    <div class="container">
      <component v-bind:is="component"></component>
      <button class="btn btn-primary" v-on:click="component='form-helper'">Ver Formulario</button>
      <button class="btn btn-success" v-on:click="component='campo-one'">Mostrar formulario Uno</button>
      <button class="btn btn-warning" v-on:click="component='campo-two'">Mostrar formulario Dos</button>
      <br><br>
      <show-blogs></show-blogs>
      <br><br>
    </div>
    <footer-vue></footer-vue>
  </div>
</template>

<script>
import Ninjas from "./Ninjas.vue";
import Navegador from "./components/Navegador.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import formHelper from "./components/formHelper.vue";
import showBlogs from "./components/showBlogs.vue";
import campOne from "./components/campOne.vue";
import campTwo from "./components/campTwo.vue";

export default {
  components: {
    ninjas: Ninjas,
    "form-helper": formHelper,
    "show-blogs": showBlogs,
    "nav-vue": Navegador,
    "header-vue": Header,
    "footer-vue": Footer,
    "campo-one": campOne,
    "campo-two": campTwo
  },
  data() {
    return {
      title: "Woooow ..!! mi primer titulo",
      msg: "Bienvenido a nuestra primera App de VueJS",
      cantidad: 25,
      component: "campo-two"
    };
  },
  methods: {
    add: function() {
      this.cantidad++;
    },
    reset: function() {
      this.cantidad = 0;
    }
  }
};
</script>

<style>
.jumbotron {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
