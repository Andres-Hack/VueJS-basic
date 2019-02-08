<template>
    <footer>
        <span>{{ ubicacion }} {{ title }}</span>
    </footer>
</template>

<script>
import {bus} from '../main';

export default {
    data() {
        return {
            ubicacion: ' VICEPRESIDENCIA DEL ESTADO PLURINACIONAL DE BOLIVIA PRESIDENCIA DE LA ASAMBLEA LEGISLATIVA PLURINACIONAL CALLE AYACUCHO ESQUINA MERCADO, TELF. (591) 2142000 LA PAZ, BOLIVIA ',
            title: ''
        }
    },
    created() {
        bus.$on('titleChanged', (data) => {
            this.title = data;
        })
    },
}
</script>

<style>
footer{
    background-color: #06325a;
    color: white;
    padding: 6px;
}
span{
    margin: 5%;
}
</style>
