<template>
  <div class="wrapper-card">
      <div class="card"  v-for="(item, index) in dataUsers" :key="index">
        <div>
          <p class="text-user">Name : {{item.name}}</p>
          <p class="text-user">Email : {{item.email}}</p>
        </div>
        <div class="wrap-btn">
          <button @click="goToDetails(item?.id)" class="details-btn green">Details</button>
          <button @click="deleteUser(item?.id)" class="delete-btn">Delete</button>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
  import { PropType } from 'vue';

  interface IUsers {
        id: number
        name: string
        gender:"male" | "female"
        email: string
        status:"active" | "inactive"
  }

  export default {
    props:{
      dataUsers:{
        type: Array as PropType<IUsers[]>,
        required: false,
        default: []
      },   
    },
    methods: {
      deleteUser(id : number){
        if(confirm('Are you sure want to remove user?')){
          return this.$emit("deleteId", id);
        }
        return alert('Good Luck')
      },
      goToDetails(id : number){
        this.$router.push(`/listUsers/${id}`)
      }
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
    width: 40%;
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