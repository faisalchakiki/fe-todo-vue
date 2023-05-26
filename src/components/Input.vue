<template>
  <div class="wrapperInput">
      <p>{{label}} :</p>
      <input class="inputUser" :type="type" :name="name" v-model="onInput" :placeholder="placeholder"/>
  </div>  
</template>

<script lang="ts">
export default {
  props:{
    label:{
      type:String,
      required: true,
    },
    placeholder:{
      type:String,
      required: true,
    },
    defaultValue:{
      type:String,
      required: false,
    },
    name:{
      type:String,
      required: true,
    },
    type: {
      type:String,
      required: true,
      default : 'text'
    }
  },
  data () {
    return {
      inputValue: this.defaultValue 
    }
  },
  computed:{
    onInput: {
      set(val : string){
        this.inputValue = val
        this.$emit('data-change', {
          name:this.name,
          value: this.inputValue
        })
      },
      get(){
        return this.inputValue
      }
    }
  }
}
</script>

<style >
  .wrapperInput{
  text-align: left;
  margin-bottom: 5px;
 }
 .wrapperInput p{
  margin: 0 0 5px 0;
  font-weight: 500;
 }

 .inputUser {
  width: 100%;
}
  .selectUser {
  width: 50%;
}
</style>