
const app = new Vue({
    el:"#app",
    data:{
        Petter:{
            name: 'Petter Griffin',
            age:55
        },
        glen:{
            name: 'Glen Quagmire',
            age:70
        }
    },
    template: '<div><h1>{{Petter.name}}</h1><h1>{{Petter.age}}</h1><h1>{{glen.name}}</h1><h1>{{glen.age}}</h1></div>'
})