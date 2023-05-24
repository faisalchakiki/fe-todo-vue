<template >
  <AddUsers @dataAddUser="postDataNewUser" />
  <ListUsers :data-users="dataUsers" @deleteId="deleteDataUser" />
</template>

<script lang="ts">
  import axios from 'axios';
  import AddUsers from '../components/AddUsers.vue'
  import ListUsers from '../components/ListUsers.vue'

  const token = 'ff59547831b86a21854646454b438a7551706b76aac946d38f9b611a3affe273'
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  interface Data {
    dataUsers : IUsers[]
  }

  interface IUsers {
        id: number
        name: string
        gender:"male" | "female"
        email: string
        status:"active" | "inactive"
  }

  export default {
    components: {
        AddUsers,
        ListUsers
    },
    data(): Data {
        return{
          dataUsers: []
        }
    },
    mounted() {
      this.fetchData()
    },
    methods:{
      async fetchData() {
        const response = await axios.get('https://gorest.co.in/public/v2/users', config)
        this.dataUsers = response.data
      },
      async postDataNewUser(newData : any){
        const response = await axios.post('https://gorest.co.in/public/v2/users', newData, config)
        if(response.data) {
          this.fetchData()
        }
      },
      async deleteDataUser(id : number){
        const response = await axios.delete(`https://gorest.co.in/public/v2/users/${id}`,config)
        if(response.status === 204) {
          alert('Success Delete')
          this.fetchData()
        }
      }
    }
  }
</script>

<style scoped>
 
</style>