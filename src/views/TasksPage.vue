<template>
  <Navbar @dataToParent="handleDataFromChild"/>
  <ListTodo :dataTasks="dataTasks" @deleteId="deleteAction" />
</template>

<script lang="ts">
  import Navbar from '../components/Navbar.vue'
  import ListTodo from '../components/ListTodo.vue'

  interface DataTask {
    id : number
    taskTitle: string
    levelTask : 'Easy' | 'Medium' | 'Hard'
  }

  export default {

  components: {
    Navbar,
    ListTodo
  },

  data() {
    return {
      dataTasks : [] as DataTask[]
    }
  },

  methods: {
    handleDataFromChild(data: DataTask) {
      const newTask = {id : data.id, taskTitle: data.taskTitle, levelTask: data.levelTask}
      this.dataTasks.push(newTask);
    },
    deleteAction(id: number) {
      const indexData = this.dataTasks.findIndex((el) => el.id === id)
      this.dataTasks.splice(indexData, 1)
      alert("Success Delete");
    }
  }

}
</script>
