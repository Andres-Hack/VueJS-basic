<template>
  <div class="card" style="width:400px">
    <img class="card-img-top" src="../assets/personal.jpg" alt="Card image" >
    <div class="card-body" style="background-color: silver">
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
            titulo: 'La CARD 1',
            contenido: 'etse es el primer card',
            referencia: 'ir a la empresa'
        }
    },
};
</script>

<style>
.card {
  padding: 20px;
  text-align: center;
}
</style>
