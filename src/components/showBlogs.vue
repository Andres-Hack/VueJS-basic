<template>
<div>
  <nav-vue></nav-vue>
  <div id="listar">
    <h1>Show List Blogs</h1>
    <br>
    <div class="active-cyan-3 active-cyan-4 mb-4">
        <input class="form-control" type="text" placeholder="Buscar por nombre" aria-label="Search" >
    </div>
    <ul>
      <li v-for="(dato, index) in datos" :key="index">
        <div class="row">
          <div class="col-md-4">
            <img src="../assets/user.png" class="w-100" >
          </div>
          <div class="col-md-8 px-3">
            <div class="card-block px-3">
              <h4 class="card-title" v-rainbow>{{ dato.name }}</h4>
              <p>{{ dato.username }}</p>
              <p>{{ dato.email | Lower }}</p>
              <p>{{ dato.website }}</p>
              <router-link v-bind:to="'/blog/'+ dato.id"><a href="#" class="btn btn-primary">Mirar mas</a></router-link>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import Navegador from "./Navegador.vue";

export default {
  name: "listar",
  components: {
    "nav-vue": Navegador
  },
  data() {
    return {
        datos: {},
        estado: null,
    };
  },
  methods: {
    getListar: function() {
      this.$http
        .get("http://jsonplaceholder.typicode.com/users")
        .then(function(data) {
            this.datos = data.body.slice(0,9);
            this.estado = data.ok;
        });
    }
  },
  created() {
      this.getListar();
  },
  filters: {
      Lower(value){
          return value.toLowerCase();
      }
  }
};
</script>

<style>
#listar h1 {
  text-align: center;
}
#listar li{
    border-top: 2px solid silver;
    padding: 1em;
}
#listar ul{
    list-style: none;
}
</style>

