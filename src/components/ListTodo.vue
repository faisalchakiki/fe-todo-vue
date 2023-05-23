<template>
  <div v-if="dataTasks.length >= 1" v-for="(item, index) in dataTasks" :key="index">
    <div v-if="item?.levelTask === 'Easy'" class="wrapper-card">
      <div class="card easy">
        <p>{{item?.taskTitle}}</p>
      </div>
      <button @click="deleteTask(item?.id)" class="delete">Delete</button>
    </div>
    <div v-else-if="item?.levelTask === 'Medium'" class="wrapper-card">
      <div class="card medium">
        <p>{{item?.taskTitle}}</p>
      </div>
      <button @click="deleteTask(item?.id)" class="delete">Delete</button>
    </div>
    <div v-else-if="item?.levelTask === 'Hard'" class="wrapper-card">
      <div class="card hard">
        <p>{{item?.taskTitle}}</p>
      </div>
      <button @click="deleteTask(item?.id)" class="delete">Delete</button>
    </div>
  </div>
  <div v-else class="center">
    <p>-- Task Not Found --</p>
  </div>
</template>

<script lang="ts">
export default {
  props:{
    dataTasks:{
      type: Array,
      required: false,
      default: []
    },   
  },
  methods:{
    deleteTask(id : number){
      if(confirm('Are you sure want to remove task?')){
        return this.$emit("deleteId", id);
      }
      return alert('Good Luck')
    }
  }
}
</script>

<style scoped>

.wrapper-card{
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.card {
  width: 75%;
  color: #fefefe;
  padding: 0 2rem;
  text-align: left;
  border-radius: 8px;
  letter-spacing: 1.5px;
  text-transform: capitalize;
  font-size: 20px;
  font-weight: 500;
}

.delete {
  background-color: #939393;
  font-size: 20px;
  width: 15%;
}

.easy {
  background-color:#5dda1e ;
}

.medium {
  background-color:#cfe909 ;
}

.hard{
  background-color:#ff5653 ;
}

.center{
  width: 100%;
  font-weight: 600;
  text-align: center;
  font-size: 18px;
}
</style>