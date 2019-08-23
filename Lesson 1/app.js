
const app = new Vue({
    el:"#app",
    data:{
        Petter:{
            FirstName: 'Petter',
            LastName:'Griffin',
            Age:55
        },
        Glen:{
            FirstName: 'Glen',
            LastName:'Quagmire',
            Age:70
        }
    },
    computed:{
        PetterFullName(){
            return '${this.Petter.FirstName} ${this.Petter.LastName}'
        }
    },
    template: '<div><h1>{{PetterFullName}}</h1><h1>{{Petter.Age}}</h1><h1>{{Glen.FirstName}}</h1><h1>{{Glen.Age}}</h1></div>'
})