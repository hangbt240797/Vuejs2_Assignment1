const app = Vue.createApp({
    data(){
        return {
            name:'',
            age: '',
            imgLink: 'https://blog.haposoft.com/content/images/2021/12/Logo-Vuejs.png',
            numberRandom: 0
        }
    },
    methods:{
        getRandom(){
            this.numberRandom = Math.random()*1;
        }
    }
});

app.mount('#assignment1');