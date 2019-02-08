new Vue({
    el: '#vue-app',
    data: {
        nombre: 'Andres Mamani',
        edad: '27',
        cantidad: '30',
        sitioweb: 'https://google.com',
        ciudad: 'La paz',
        pais: 'Bolivia',
        esquema: '<a href="https://google.com">Sitio Google</a>',
        xnombre:'',
        xedad:'',
        available: false,
    },
    methods: {
        sumar: function () {
            return this.cantidad++;
        },
        restar: function () {
            return this.cantidad--;
        },
        click: function() {
            alert('Usted Ira a la pagin ade GOOGLE');
        },
        logNombre: function(){
            console.log('Usted ingreso los Nombres');
        },
        logEdad: function(){
            console.log('Usted ingreso su Edad');
        }
    },
})