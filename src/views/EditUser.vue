<template>
  <button class='buttonBack' @click="$router.push(`/listUsers`)
" >Back</button>
  <form @submit.prevent="updateUser">
    <div class="formAddUser">
      <p class="text-2xl font-semibold tracking-wide mb-5 text-left">Edit User</p>
      <p v-if="alert === 'success'" class="text-sm w-full text-left font-semibold -mt-5 tracking-wide text-green-500">*Success Update Data</p>
      <p v-if="alert === 'fail'" class="text-sm w-full text-left font-semibold -mt-5 tracking-wide text-red-500">*Error Email Duplicate</p>
      <InputComponent v-if="isReady" @data-change="handleInput" :default-value="dataUser.name" :label="`Name`" :name="`name`" :type="`text`" :placeholder="`Write user name`" />        
      <InputComponent v-if="isReady" @data-change="handleInput" :default-value="dataUser.email" :label="`Email`" :name="`email`" :type="`text`" :placeholder="`Write user email`" />        
      <Select v-if="isReady" @on-selected="handleSelect" :label="`Gender`" :name="`gender`" :default-value="dataUser.gender" :options="optionGender" />
      <Select v-if="isReady" @on-selected="handleSelect" :label="`Status`" :name="`status`" :default-value="dataUser.status" :options="optionStatus" />
      <button class='buttonUser'>Update Task</button>
      <!-- <button :disabled="btnDisabled" :class="btnDisabled ? 'buttonUser disabled' : 'buttonUser'">Update Task</button> -->
   </div>
  </form>
</template>

<script lang="ts">
  import InputComponent from '../components/Input.vue'
  import Select from '../components/Select.vue'
  import axios from 'axios';

  const token = 'ff59547831b86a21854646454b438a7551706b76aac946d38f9b611a3affe273'
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  interface DataDetails {
        id: number
        isReady: boolean
        dataUser: IUser,
        alert: 'success' | 'fail' | boolean,
        optionGender : IOptions[]
        optionStatus : IOptions[]
  }

  interface IUser {
        id: number
        name: string
        gender:"male" | "female" | string
        email: string
        status:"active" | "inactive" | string
  }

  interface IOptions {
          id: number
          value: string   
    }

  export default {
    components:{
      InputComponent,
      Select
    },

    data(): DataDetails{
      return{
        id: Number(this.$route.params.id),
        isReady: false,
        alert: false,
        dataUser: {
          id : 0,
          name: '',
          gender: "",
          email:'',
          status:"" 
        },
        optionGender: [
            {
            id: 1,
            value: 'male',
            },
            {
            id: 2,
            value: 'female',
            },
          ],
        optionStatus: [
            {
            id: 1,
            value: 'active',
            },
            {
            id: 2,
            value: 'inactive',
            },
          ]
      }
    },

    methods: {
      async fetchDetails() {
        const response = await axios.get(`https://gorest.co.in/public/v2/users/${this.id}`, config)
        this.dataUser = response.data
        this.isReady = true
      },
      async updateUser(){
        try{
          const response = await axios.patch(`https://gorest.co.in/public/v2/users/${this.id}`, this.dataUser, config)
        if(response.data) {
          this.alert = 'success'
          setTimeout(()=>{
          this.$router.push('/listUsers')
          },2000)
          return true
        }
        }catch(err){
          console.log(err)
          return this.alert = 'fail'
        }
      },
      handleInput(val: any){
        console.log(val)
          if(val.name === 'name'){
            this.dataUser.name = val.value
          }else{
            this.dataUser.email = val.value
          }
          // this.dataUser[val.name] = inputValue
        },
        handleSelect(val: any){
          const valueSelected : string = val.value
          console.log(val)
          if(val.name === 'gender'){
            this.dataUser.gender = valueSelected
          }else{
            this.dataUser.status = valueSelected
          }
          // this.dataUser.gender = genderSelected
        },
    },
    mounted(){
      this.fetchDetails()
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
    .wrapperInput{
    text-align: left;
    margin-bottom: 5px;
    }
    .wrapperSelect{
    text-align: left;
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    }
    .wrapperInput p , .wrapperSelect p{
    margin: 0 0 5px 0;
    font-weight: 500;
    }

    .inputUser {
    width: 100%;
    }
    .selectUser {
    width: 50%;
    }

    .buttonUser {
      margin:15px 0;
      width: 100%;
    }

    .buttonBack {
      margin:15px auto;
      background-color: rgb(194, 194, 194);
      width: 40%;
    }
    .disabled{
     background-color: rgb(194, 194, 194);
    }
</style>