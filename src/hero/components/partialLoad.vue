<template>
    <transition name="loadfade">
        <div class="partial-wrap" v-show="visible">
            <div class="loading-spinner">
                <svg class="circular" viewBox="25 25 50 50">
                    <circle class="path" cx="50" cy="50" r="20" fill="none"/>
                </svg>
            </div>
        </div>
    </transition>
</template>
<script>
  export default {
    data() {
      return {
        visible:false,
      }
    },
    mounted() {
    },
    methods: {},
    components: {}
  }
</script>
<style>
    .partial-wrap{
        position: absolute;
        z-index: 2000;
        background-color: rgba(255,255,255,.9);
        margin: 0;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
    .loading-spinner{
        top: 50%;
        margin-top: -21px;
        width: 100%;
        text-align: center;
        position: absolute;
    }
    .loading-spinner svg{
        height: 42px;
        width: 42px;
        animation: loading-rotate 2s linear infinite;
    }
    @keyframes loading-rotate {
        100%{
            transform: rotate(360deg);
        }
    }
    .loading-spinner svg circle{
        animation: loading-dash 1.5s ease-in-out infinite;
        stroke-dasharray: 90,150;
        stroke-dashoffset: 0;
        stroke-width: 2;
        stroke: #409EFF;
        stroke-linecap: round;
    }
    @keyframes loading-dash {
        0% {
            stroke-dasharray: 1,200;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 90,150;
            stroke-dashoffset: -40px;
        }
        100% {
            stroke-dasharray: 90,150;
            stroke-dashoffset: -120px;
        }
    }
    .loadfade-enter,.loadfade-leave-to{
        opacity: 0;
    }
    .loadfade-enter-active,.loadfade-leave-active{
        transition: all .3s;
    }
</style>