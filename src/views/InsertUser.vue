<template >
  <NavbarUser />
  <AddUsers @dataAddUser="postDataNewUser" />
</template>

<script lang="ts">
  import axios from 'axios';
  import AddUsers from '../components/AddUsers.vue'
  import NavbarUser from '../components/NavbarUser.vue';

  const token = 'ff59547831b86a21854646454b438a7551706b76aac946d38f9b611a3affe273'
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  interface Data {
    dataUsers : INewUsers
  }

  interface INewUsers {
        name: string
        gender:"male" | "female"
        email: string
        status:"active" | "inactive"
  }

  export default {
    components: {
    AddUsers,
    NavbarUser
},
    data(): Data {
        return{
          dataUsers: {} as INewUsers
        }
    },
    methods:{
      async postDataNewUser(newData : INewUsers){
        const response = await axios.post('https://gorest.co.in/public/v2/users', newData, config)
        // alert('Success Insert User')
        if(response.data) {
          this.$router.push('/listUsers')
        }
      },
    }
  }
</script>

<style scoped>
 
</style>