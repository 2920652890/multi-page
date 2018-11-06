<template>
    <div class="switch__wrap" :class="{'is-checked':value}" @click="isChecked">
        <div class="switch__core"></div>
    </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    props:{
      value:{
        type:Boolean,
        default:false
      },
      open:{
        type:Function,
        default: undefined,
        required: false
      }
    },
    mounted() {
    },
    methods: {
      isChecked(){
        let flag = this.value
        this.$emit('input',!flag)
        if(this.open){
          this.open()
        }
      }
    },
    components: {}
  }
</script>
<style>
    .is-checked .switch__core{
        border-color: #409eff;
        background-color: #409eff;
    }
    .is-checked .switch__core:after{
        left: 100%;
        margin-left: -17px
    }
    .switch__core{
        position: relative;
        width: 40px;
        height: 20px;
        border: 1px solid #dcdfe6;
        outline: none;
        border-radius: 10px;
        box-sizing: border-box;
        background: #dcdfe6;
        cursor: pointer;
        transition: border-color .3s,background-color .3s;
        vertical-align: middle;
    }
    .switch__core:after{
        content: "";
        position: absolute;
        top: 1px;
        left: 1px;
        border-radius: 100%;
        transition: all .3s;
        width: 16px;
        height: 16px;
        background-color: #fff;
    }
</style>