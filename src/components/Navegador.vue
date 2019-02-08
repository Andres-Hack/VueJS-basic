<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light navbar-dark bg-primary">
      <a class="navbar-brand" href="#">Page VueJS</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/">
              <a class="nav-link" >
                Home
              </a>
            </router-link>
          </li>
          <li class="nav-item">
              <router-link to="/show">
                <a class="nav-link">Listar</a>
              </router-link>            
          </li>
          <li class="nav-item">
              <router-link to="/form">
                <a class="nav-link">+ Nuevo</a>
              </router-link>            
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="que buscas ?"
            aria-label="Search"
          >
          <button class="btn btn-success my-2 my-sm-0" type="submit">Buscar</button>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
