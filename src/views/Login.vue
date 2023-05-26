<template>
  <NavbarUser />
  <form @submit.prevent="loginAction">
    <div class="formAddUser">
      <p class="text-2xl font-semibold tracking-wide mb-5 text-left">Sign In</p>
      <InputComponent @data-change="handleInput" :label="`Username`" :name="`username`" :type="`username`" :placeholder="`Write user username`" />    
      <InputComponent @data-change="handleInput" :label="`Password`" :name="`password`" :type="`password`" :placeholder="`Write user password`" />    
      <button class='buttonUser'>Login</button>
   </div>
  </form>
</template>

<script lang="ts">
  import NavbarUser from '../components/NavbarUser.vue'
  import InputComponent from '../components/Input.vue'
  import Select from '../components/Select.vue'

  interface Data{
        username: string
        password: string
  }

  export default {
    components : {
      NavbarUser,
      InputComponent,
      Select
    },

    data(): Data{
      return{
        username: '',
        password: ''
        }
    },

    methods: {
      handleInput(val : any) {
        if(val.name === 'username'){
          this.username = val.value
        }else{
          this.password = val.value
        }
      },
      loginAction(){
        if(this.username === 'admin' && this.password === 'admin123'){
          localStorage.setItem('token', 'key'+new Date().toISOString())
          alert('Success Login')
          // this.$router.push('/listUsers')
          window.location.href = "/listUsers"
        }else{
          alert('username or password wrong')
        }
      }
    },
  }
</script>

<style scoped>
    .formAddUser {
    background-color: #e7e7e7;
    width: 50%;
    border-radius: 8px;
    padding: 30px 5%;
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