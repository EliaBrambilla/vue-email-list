const { createApp } = Vue

createApp({

    data() {
        return {
            title: 'Axios Mail',
            listaMail: []
        }
    },
    methods:{
        getApis(){

            for(let i = 1; i <= 10; i++){

                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(result => {
                    console.log(result.data.response);
                    this.listaMail.push(result.data.response);
                })
            }

        }
    },
    mounted(){
        this.getApis();
    }

}).mount('#app')