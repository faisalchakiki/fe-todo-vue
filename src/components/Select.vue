<template>
  <div class="wrapperSelect">
      <p>{{label}} :</p>
      <select v-model="onInput" :name="name" class="selectUser itemSelect">
       <option v-for="(item, index) in options" :key="index" :value="item.value" :selected="item.value === defaultValue">{{item.value}}</option>
     </select>
    </div>
</template>

<script lang="ts">
  import { PropType } from 'vue';

  interface IOptions {
    id: number
    value: string
  }

  export default {
    props: {
      label: {
        type: String,
        required : true
      },
      name: {
        type: String,
        required : true
      },
      defaultValue: {
        type: String,
        required : true
      },
      options: {
        type: Array as PropType<IOptions[]>,
        required : true
      },
    },
    data () {
      return {
        selectValue: this.defaultValue 
      }
    },
    computed:{
      onInput: {
        set(val : any){
          this.selectValue = val
          this.$emit('on-selected', {
            name:this.name,
            value: this.selectValue
          })
        },
        get(){
          return this.selectValue
        }
      }
    },
  }
</script>

<style>
  .itemSelect{
    text-transform: capitalize;
  }
  .wrapperSelect{
  text-align: left;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
 }
 .wrapperSelect p{
  margin: 0 0 5px 0;
  font-weight: 500;
 }
 .selectUser {
  width: 50%;
}
</style>