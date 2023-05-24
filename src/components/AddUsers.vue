<template>
  <form @submit.prevent="sendData">
    <div class="formAddUser">
    <div class="wrapperInput">
      <p>Name :</p>
      <input class="inputUser" v-model="name" type="text" placeholder="Write your name." />
    </div>     
    <div class="wrapperInput">
      <p>Email :</p>
      <input class="inputUser" v-model="email" type="email" placeholder="Write your email." />
    </div>  
     <div class="wrapperSelect">
      <p>Please select one :</p>
      <select class="selectUser" v-model="gender">
       <option value="male">Male</option>
       <option value="female">Female</option>
     </select>
    </div>
    <button class="buttonUser">Add User</button>
   </div>
  </form>
</template>
 
<script lang="ts">
  interface DataUsers {
        name: string
        gender:"male" | "female"
        email: string
        status:"active" | "inactive"
  }

 
 export default {
   data() : DataUsers{
     return {
        name: '',
        gender: "male",
        email: '',
        status: "active",
     }
   },
   methods:{
    clearData(){
      this.name=  ''
      this.gender= "male"
      this.email=''
      this.status= "active"
    },
    sendData(){
      if(this.name === '' || this.email === ''){
        alert('Please fill all the input')
        return false;
      }
      // $emit = mengirimkan acara dengan nama dan data ke komponen induk.
      this.$emit("dataAddUser", this.$data);
      this.clearData()
    }
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
 </style>