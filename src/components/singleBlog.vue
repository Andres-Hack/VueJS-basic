<template>
  <div id="single-blog">
    <nav-vue></nav-vue>
    <div class="container">
      <h1>Ingreso</h1>
      <div class="col-md-4">
        <img src="../assets/user.png" class="w-100">
      </div>
      <div class="col-md-8 px-3">
        <div class="card-block px-3">
          <h4 class="card-title" v-rainbow>{{ blog.name }}</h4>
          <p>{{ blog.username }}</p>
          <p>{{ blog.email }}</p>
          <p>{{ blog.website }}</p>
          <p>{{ blog.phone }}</p>
          <h5>Direccion :</h5>
          <p>{{ direccion.street }}</p>
          <p>{{ direccion.suite }}</p>
          <p>{{ direccion.city }}</p>
          <router-link to="/show"><a class="btn btn-success" style="color: white">Regresar</a></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navegador from "./Navegador.vue";

export default {
  components: {
    "nav-vue": Navegador
  },
  data() {
    return {
      id: this.$route.params.id,
      blog: [],
      direccion: []
    };
  },
  methods: {
    single: function() {
      this.$http
        .get("http://jsonplaceholder.typicode.com/users/" + this.id)
        .then(function(data) {
          this.blog = data.body;
          this.direccion = this.blog.address;
        });
    }
  },
  created() {
    this.single();
  }
};
</script>

<style>
</style>
