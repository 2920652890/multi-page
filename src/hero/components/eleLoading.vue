<template>
    <transition name="load">
        <div class="load-wrap" v-if="show">
            <div class="load-img">
                <div class="load-icon" :style="{backgroundPositionY: -(positionY%7)/18*50 + 'rem'}"></div>
                <svg class="load_ellipse" xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <ellipse cx="20" cy="10" rx="20" ry="10" style="fill:#ddd;stroke:none;"></ellipse>
                </svg>
            </div>
        </div>
    </transition>
</template>
<script>
    export default {
      data(){
        return{
          positionY: 0,
          timer: null
        }
      },
      props:{
        show:{
          type:Boolean,
          default:true
        },
        hasfooter:{
          type:Boolean,
          default:true,
        },
        hasheader:{
          type:Boolean,
          default:true,
        }
      },
      watch:{
        show(val){
          if(!val){
            clearInterval(this.timer);
          }
        }
      },
      mounted(){
        this.timer = setInterval(() => {
          this.positionY ++
        }, 600)
      }
    }
</script>
<style lang="less">
    @keyframes load{
        0%   {transform: translateY(0px);}
        50%  {transform: translateY(-50px);}
        100% {transform: translateY(0px);}
    }
    @keyframes ellipse{
        0%   {transform: scale(1);}
        50%  {transform: scale(0.3);}
        100% {transform: scale(1);}
    }
.load-wrap{
    position: absolute;
    z-index: 260;
    top: 0;
    left: 0;
    right: 0;
    bottom:0;
    width: 100%;
    height: 100%;
    background-color: white;
}
.load-icon{
    width: 100%;
    height: 100%;
    background: url('../img/icon_loading.png') no-repeat 0 0;
    animation: load .6s infinite ease-in-out;
    background-size: 100% auto;
}
.load-img{
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 261;
    transform: translate(-50%,-50%);
    width: 1rem;
    height: 1rem;
}
.load_ellipse{
    position: absolute;
    top: 100%;
    z-index: 261;
    left: .1rem;
    width: 1rem;
    height: .8rem;
    animation: ellipse .6s infinite ease-in-out;
}
.load-enter-active, .load-leave-active {
    transition: opacity .3s ease;
}
.load-enter, .load-leave-to {
    opacity: 0;
}
</style>
