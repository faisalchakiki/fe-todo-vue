<template>
 <form @submit.prevent="onSubmit">
  <div class="navbar">
    <input v-model="taskTitle" type="text" placeholder="Add a task." />
    <select v-model="levelTask">
      <option disabled value="">Please select one</option>
      <option>Easy</option>
      <option>Medium</option>
      <option>Hard</option>
    </select>
    <button>Add Task</button>
  </div>
 </form>
</template>

<script lang="ts">

interface DataTask {
    id : number
    taskTitle: string
    levelTask : 'Easy' | 'Medium' | 'Hard'
}

export default {
  data() : DataTask{
    return {
      id : Date.now(),
      taskTitle: '',
      levelTask: 'Easy',
    }
  },
  methods:{
    clearData(){
        this.id = Date.now();
        this.taskTitle = '';
        this.levelTask = 'Easy';
    },
    onSubmit(){
      if(this.taskTitle === ''){
        alert('Please fill all the input')
        return false;
      }
      // $emit = mengirimkan acara dengan nama dan data ke komponen induk.
      this.$emit("dataToParent", this.$data);
      this.clearData()
    }
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
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 35px;
}

</style>