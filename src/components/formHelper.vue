<template>
  <div>
    <nav-vue></nav-vue>
    <div class="container">
      <form action="/action_page.php" v-if="!estado">
        <div class="form-group">
          <label for="email">Nombre completo:</label>
          <input class="form-control" type="text" id="nombre" v-model="blog.nombre">
        </div>
        <div class="form-group">
          <label for="pwd">Email:</label>
          <input type="emil" class="form-control" id="email" v-model="blog.email">
        </div>
        <div class="form-group">
          <label for="pwd">Telefono/Celular:</label>
          <input type="number" class="form-control" id="telefono" v-model="blog.telefono">
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Lenguajes</label>
          <select class="form-control" id="exampleFormControlSelect1" v-model="blog.lenguaje">
            <option
              v-bind:value="opcion"
              v-for="(opcion, index) in opciones"
              :key="index"
            >{{ index+1 }} - {{ opcion }}</option>
          </select>
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" value="warrior" v-model="blog.categorias">
          <label class="form-check-label">Warrior</label>
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" value="yoshi" v-model="blog.categorias">
          <label class="form-check-label">Yoshi</label>
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" value="peach" v-model="blog.categorias">
          <label class="form-check-label">Peach</label>
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" value="mario" v-model="blog.categorias">
          <label class="form-check-label">Mario</label>
        </div>
        <br>
        <button type="button" class="btn btn-primary" v-on:click.prevent="post">Enviar</button>
      </form>
      <br>
      <div
        class="alert alert-success"
        role="alert"
        v-if="estado"
      >Se añadio este usuario SATISFACTORIAMENTE ..!!!</div>
      <br>
      <div v-if="estado">
        <h4>
          <i>FORMULARIO ENVIADO :</i>
        </h4>
        <table class="table">
          <tbody>
            <tr>
              <td>
                <p>Nombre completo:</p>
              </td>
              <td>{{ blog.nombre }}</td>
            </tr>
            <tr>
              <td>
                <p>Correo Electronico:</p>
              </td>
              <td>{{ blog.email }}</td>
            </tr>
            <tr>
              <td>
                <p>Numero de Telefono:</p>
              </td>
              <td>{{ blog.telefono }}</td>
            </tr>
            <tr>
              <td>
                <p>Lenguajes :</p>
              </td>
              <td>{{ blog.lenguaje }}</td>
            </tr>
            <tr>
              <td>
                <p>Categorias</p>
              </td>
              <td>
                <ul>
                  <li v-for="(cat, index) in blog.categorias" :key="index">{{ cat }}</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
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
      blog: {
        nombre: "",
        email: "",
        telefono: "",
        categorias: [],
        lenguaje: ""
      },
      estado: null,
      opciones: ["JAVA", "PYTHON", "PHP", "RUBY", "C#", ".NET"]
    };
  },
  methods: {
    post: function() {
      this.$http
        .post("http://jsonplaceholder.typicode.com/posts", {
          userId: 20,
          id: 1,
          title: this.blog.nombre,
          body: this.blog.categorias
        })
        .then(function(data) {
          console.log(data.ok);
          this.estado = data.ok;
        });
    }
  }
};
</script>

<style>
</style>
