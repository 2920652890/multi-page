import Vue from 'vue'

Vue.mixin({
    data(){
      return{

      }
    },
    methods:{
      Toast(msg){
        this.$hero.msg.show({ msg })
      }
    }
})
