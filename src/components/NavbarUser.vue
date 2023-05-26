<template>
  <div class="navbar">
    <button v-if="isLoggedIn" @click="goToInsert" class="btn-add-navbar">Add User</button>
    <button @click="goToList" class="btn-navbar">List User</button>
    <button v-if="isLoggedIn" @click="Logout" class="btn-logout-navbar">Logout</button>
    <button v-else @click="Login" class="btn-navbar">Login</button>
  </div>
</template>

<script lang="ts">
const itemToken = localStorage.getItem('token') || false;
// console.log(itemToken)
interface Data {
    isLoggedIn: string | boolean
}

export default {
  data() : Data{
    return {
      isLoggedIn: itemToken
    }
  },
  methods:{
    restartHalaman() {
      window.location.reload();
    },
    goToInsert(){
       this.$router.push('/insert')
    },
    goToList(){
      this.$router.push('/listUsers')
    },
    Login(){
      this.$router.push('/login')
    },
    Logout(){
      localStorage.removeItem('token');
      this.restartHalaman()
    },
  },
  updated(){
    this.restartHalaman()
  },
}
</script>

<style>
  .navbar {
  background-color: #e7e7e7;
  width: 100%;
  border-radius: 8px;
  padding: 20px 5%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 35px;
  }
  .btn-navbar{
    margin: 0 10px;
  }
  .btn-add-navbar{
    margin-right: auto;
    background-color: rgb(129, 129, 129);
  }
  .btn-logout-navbar{
    background-color: rgb(191, 8, 8);
  }

</style>