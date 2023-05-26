<template>
  <form @submit.prevent="sendData">
    <div class="formAddUser">
      <p class="text-2xl font-semibold tracking-wide mb-5 text-left">Insert User</p>
      <p v-if="alert === 'success'" class="text-sm w-full text-left font-semibold -mt-5 tracking-wide text-green-500">*Success Insert Data</p>
      <p v-if="alert === 'fail'" class="text-sm w-full text-left font-semibold -mt-5 tracking-wide text-red-500">*Please fill all the input</p>
    <InputComponent @data-change="handleInput" :label="`Name`" :name="`name`" :type="`text`" :placeholder="`Write user name`" />    
    <InputComponent @data-change="handleInput" :label="`Email`" :name="`email`" :type="`email`" :placeholder="`Write user email`" />    
    <Select @on-selected="handleSelect" :label="`Plaese select one`" :name="`gender`" :default-value="dataUser.gender" :options="optionGender" />
    <button class="buttonUser">Add User</button>
   </div>
  </form>
</template>
 
  <script lang="ts">
    import InputComponent from '../components/Input.vue'
    import Select from '../components/Select.vue'

    interface DataUsers {
        alert: 'success' | 'fail' | boolean,
        dataUser : {
          name: string
          gender:'male' | 'female' | string
          email: string
          status:'active' | 'inactive'
         },
        optionGender : IOptions[]
    }
  
    interface IOptions {
          id: number
          value: string   
    }

    export default {
      components : {
        InputComponent,
        Select
      },
      data() : DataUsers{
        return {
          alert: false,
          dataUser:{
            name: '',
            gender: 'male',
            email: '',
            status: 'active',
           },
          optionGender: [
            {
            id: 1,
            value: 'male',
            },
            {
            id: 1,
            value: 'female',
            },
          ]
        }
      },
      methods:{
        clearData(){
          this.dataUser = {
            name: '',
            gender: "male",
            email: '',
            status: "active",
           }
        },
        sendData(){
          if(this.dataUser.name === '' || this.dataUser.email === ''){
            this.alert = 'fail'
            return false;
          }
          // $emit = mengirimkan acara dengan nama dan data ke komponen induk.
          this.$emit("dataAddUser", this.dataUser);
          this.alert = 'success'
          this.clearData()
        },
        handleInput(val: any){
          if(val.name === 'name'){
            this.dataUser.name = val.value
          }else{
            this.dataUser.email = val.value
          }
          // this.dataUser[val.name] = inputValue
        },
        handleSelect(val: any){
          const genderSelected : string = val.value
          this.dataUser.gender = genderSelected
        },
      },
    }
 </script>
 
 <style scoped>
   .formAddUser {
   background-color: #e7e7e7;
   width: 50%;
   border-radius: 8px;
   padding: 20px 5%;
   box-sizing: border-box;
   margin-bottom: 35px;
   margin: auto;
 }

.buttonUser {
  margin:15px 0;
  width: 100%;
}
 </style>