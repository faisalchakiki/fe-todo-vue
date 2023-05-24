<template>
  <button class='buttonBack' @click="$router.push(`/listUsers`)
" >Back</button>
  <form @submit.prevent="updateUser">
    <div class="formAddUser">
      <div class="wrapperInput">
        <p>Name :</p>
        <input class="inputUser" v-model="dataUser.name" type="text" placeholder="Write your name." />
      </div>     
      <div class="wrapperInput">
        <p>Email :</p>
        <input class="inputUser" v-model="dataUser.email" type="email" placeholder="Write your email." />
      </div>  
      <div class="wrapperSelect">
        <p>Gender :</p>
        <select class="selectUser" v-model="dataUser.gender">
        <option value="male">Male</option>
        <option value="female">Female</option>
        </select>
      </div>
      <div class="wrapperSelect">
        <p>Status :</p>
        <select class="selectUser" v-model="dataUser.status">
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
        </select>
      </div>
      <button class='buttonUser'>Update Task</button>
      <!-- <button :disabled="btnDisabled" :class="btnDisabled ? 'buttonUser disabled' : 'buttonUser'">Update Task</button> -->
   </div>
  </form>
</template>

<script lang="ts">
  import axios from 'axios';

  const token = 'ff59547831b86a21854646454b438a7551706b76aac946d38f9b611a3affe273'
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  interface DataDetails {
        id: number
        // btnDisabled: boolean
        dataUser: IUser
        // dataUserConstant: IUser
  }

  interface IUser {
        id: number
        name: string
        gender:"male" | "female"
        email: string
        status:"active" | "inactive"
  }

  export default {
    data(): DataDetails{
      return{
        id: Number(this.$route.params.id),
        // btnDisabled: true,
        dataUser: {
          id : 0,
          name: '',
          gender: "male",
          email:'',
          status:"active" 
        },
        // dataUserConstant: {
        //   id : 0,
        //   name: '',
        //   gender: "male",
        //   email:'',
        //   status:"active" 
        // },
      }
    },

    methods: {
      async fetchDetails() {
        const response = await axios.get(`https://gorest.co.in/public/v2/users/${this.id}`, config)
        this.dataUser = response.data
        // this.dataUserConstant = response.data
      },
      async updateUser(){
        const response = await axios.patch(`https://gorest.co.in/public/v2/users/${this.id}`, this.dataUser, config)
        if(response.data) {
          alert('Success Update Data')
        }else{
          alert('Internal server error')
        }
      },
    },

    mounted(){
      this.fetchDetails() 
    },

    // updated(){
    //   if(this.dataUser !== this.dataUserConstant){
    //     console.log('berubah')
    //   }
    // }
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
    margin:15px 0;
    background-color: rgb(194, 194, 194);
    width: 40%;
    }
    .disabled{
    background-color: rgb(194, 194, 194);
    }
</style>