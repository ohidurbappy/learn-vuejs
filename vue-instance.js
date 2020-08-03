var app=new Vue(
  {
    el:"#intro",
    data:{
      message:"Hello",
      firstname:"Ohidur Rahman",
      lastname:"Bappy",
      profession:"Coder"
    },
    methods:{
      about: function(){
        return "My name is "+this.firstname+" I am a python developer currently learning vueJS"
      }
    }
  }
)

console.log(v.$data)
