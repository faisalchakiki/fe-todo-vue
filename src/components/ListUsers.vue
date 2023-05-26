<template>
  <div class="wrapper-card">
    <p class="text-2xl w-full text-left pl-[2.5%] mb-5 font-semibold tracking-wide">LIST USER</p>
    <p v-if="isLoggedIn === false" class="text-sm w-full text-left pl-[2.5%] -mt-5 tracking-wide">limited access for admin</p>
    <div class="card"  v-for="(item, index) in dataUsers" :key="index">
      <div>
        <p class="text-user">Name : {{item.name}}</p>
        <p class="text-user">Email : {{item.email}}</p>
        <p v-if="isLoggedIn" class="text-user">Gender : {{item.gender}}</p>
        <p v-if="isLoggedIn" class="text-user">Status : {{item.status}}</p>
      </div>
      <div v-if="isLoggedIn" class="wrap-btn">
          <button @click="goToEdit(item?.id)" class="details-btn green">Update</button>
          <button @click="deleteUser(item?.id)" class="delete-btn">Delete</button>
      </div>
    </div>
  </div>
  <Modal @on-confirm="handleConfirm" v-if="modalStatus" />
</template>

<script lang="ts">
  import { PropType } from 'vue';
  import Modal from './Modal.vue';
  const keyToken = localStorage.getItem('token') || false

  interface IUsers {
        id: number
        name: string
        gender:"male" | "female"
        email: string
        status:"active" | "inactive"
  }

  export default {
    components:{
      Modal
    },
    data() {
      return {
        isLoggedIn: keyToken,
        modalStatus : false,
        id: 0
      }
    },
    props:{
      dataUsers:{
        type: Array as PropType<IUsers[]>,
        required: false,
        default: []
      },   
    },
    methods: {
      handleModal(){
        this.modalStatus = !this.modalStatus
      },
      handleConfirm(val : string){
        if(val === 'cancel'){
          this.handleModal()
        }else{
          this.handleModal()
          this.$emit('deleteId', this.id)
        }
      },
      deleteUser(id : number){
        this.handleModal()
        this.id = id
      },
      goToEdit(id : number){
        this.$router.push(`/listUsers/${id}`)
      },
    }
  }
</script>

<style scoped>
   .wrapper-card{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 20px 0;
    background-color: #e7e7e7;
    border-radius: 8px;
    padding: 2rem 0;

  }
  .wrap-btn{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 5px 0;
  }
  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 45%;
    color: #221e1e;
    padding: 5px 2rem;
    text-align: left;
    border-radius: 8px;
    letter-spacing: 1.5px;
    font-size: 14px;
    background-color: #fefefe;
    font-weight: 400;
    margin: 5px;
    position: relative;
  }
  .delete-btn, .details-btn {
    background-color: #c00000;
    font-size: 13px;
    width: 45%;
    padding: 8px;
    margin-top: 10PX;
  }
  .text-user{
    margin: 0;
  }
  .green{
    background-color: rgb(6, 141, 96);
  }
  
</style>