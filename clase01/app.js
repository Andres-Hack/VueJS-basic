Vue.component('greeting', {
    template: '<p>Este es un template desde un componente con titulo {{ titulo }}. <br><span>mi nombre es {{ nombre }}</span>. <br>Cantidad: {{ a }} <br><button v-on:click="add" >Añadir</button><button v-on:click="rest">Restar</button></p>',
    data: function() {
        return {
            titulo: 'ESTE ES UN TITULO',
            nombre: 'Andres',
            a: '20'
        };
    },
    methods: {
        add: function(){
            this.a++;
        },
        rest: function(){
            this.a--;
        }
    }
});

new Vue({
    el: '#vue-app',
    data: {
        error: false,
        success: false,
        caracteres: ['Mario','Luigi','Peach','Warrior','Toad'],
        ninjas: [
            {nombre:'Ryu', edad:'25'},
            {nombre:'Yoshi', edad:'12'},
            {nombre:'Ken', edad:'23'},
            {nombre:'Donkin', edad:'45'},
            {nombre:'Bowsser', edad:'32'}
        ]
        
    },
    methods: {
        readRefs: function(){
            console.log(this.$refs.input.value);
        }        
    },
    computed: {
        
    },
})
