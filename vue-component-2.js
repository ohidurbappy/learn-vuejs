Vue.component('statcomponent',{
template: '<div style = "color: red;" v-on:mouseover="changestat();" v-on:mouseout="originalstat()"> <b> The total pageview is </b> {{views}} </div>',
data: function(){
 return {
     views:78,
    
 }
},

methods: {
    changestat: function(){
        this.views=90;
       
    },

    originalstat: function(){
        this.views=78;
       
    }
}

});

var statcomponent_instance=new Vue({
    el:'#stat_comp1'
})