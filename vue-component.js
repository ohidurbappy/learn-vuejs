Vue.component('profilecomponent',{
    template:"<b>This is from the component</b>"
});


var vm1=new Vue({
    el:"#profile_component1"
})

var vm2=new Vue({
    el: "#profile_component2"
})

var vm=new Vue({
    el:'#profile_component3',
    components:{
        'profilecomponent':{
            template:"<b>This is also coming from the component</b>"
        }
    }
})

