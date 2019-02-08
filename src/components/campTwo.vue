<template>
  <div class="card" style="width:400px">
    <img class="card-img-top" src="../assets/personal.jpg" alt="Card image">
    <div class="card-body">
      <h4 class="card-title">{{ titulo }}</h4>
      <p class="card-text">{{ contenido }}</p>
      <a href="#" class="btn btn-primary">{{ referencia }}</a>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            titulo: 'La CARD 2',
            contenido: 'este es otro personal donde ira el segundo card',
            referencia: 'ir a la empresa'
        }
    },
};
</script>

<style>
.card {
  text-align: center;
  bottom: 1em;
}
</style>
