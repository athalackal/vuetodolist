<template>
  <div id="app">
    <p> {{counterText}} </p>
    <br>
    <AddTodo @add-todo="addTodo" /> 
    <Todos :todos="todos" @del-todo="deleteTodo" />
    <br>
    <button class="btn2" @click="todos= []" v-show="todos.length > 0">Clear List</button>
  </div>
</template>

<script>
import Todos from '../components/Todos';
import AddTodo from '../components/AddTodo';

export default {
  name: 'Home',
  components: {
    Todos,
    AddTodo
  },
  data() {
    return {
      todos: []
    }
  },
  methods: {
    deleteTodo(index) {
      this.todos.splice(index, 1)
    },
    addTodo(newTodo) {
      const { title, completed } = newTodo;
      this.todos.push({
        title,
        completed
      });
    }
  },
  computed: {
    incompletedTodos: function() {
      return this.todos.filter(function(complete) {
        return complete.completed !== true;
      });
    },
    counterText: function() {
      if (this.incompletedTodos.length == 0) return "You currently have nothing to do."
      
      else if (this.incompletedTodos.length == 1) return "You have 1 thing left to do today."
      else return `You have ` + this.incompletedTodos.length + ` things to do today.`
   }
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  p {
    font-weight: bold;
    margin-top: 10px;
    margin-left: 10px;
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }
  .btn {
    display: inline-block;
    border: none;
    background: #42b983;
    color: #fff;
    padding: 7px 20px;
    cursor:pointer;
  }
  .btn:hover {
    background: rgb(12, 12, 12);
  }
  .btn2 {
  font-size: 18px;
  padding: 5px;
  margin-left: 20px;
  background:#42b983;
  border-style: solid;
  color: #ffffff;
  }
  .btn2:hover {
  background: #000000;
  }
</style>