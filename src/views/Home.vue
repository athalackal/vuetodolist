<template>
  <div id="app">
    {{test}}
    <button @click="test=5">Click</button>
    <AddTodo @add-todo="addTodo" />
    <Todos :todos="todos" @del-todo="deleteTodo" />
  </div>
</template>

<script>
import Todos from '../components/Todos';
import AddTodo from '../components/AddTodo';
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    Todos,
    AddTodo
  },
  data() {
    return {
      todos: [],
      test: 3
    }
  },
  methods: {
    deleteTodo(id) {
      axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(() => this.todos = this.todos.filter(todo => todo.id !== id))
      .catch(err => console.log(err));
    },
    addTodo(newTodo) {
      const { title, completed } = newTodo;

      axios.post('https://jsonplaceholder.typicode.com/todos', { 
          title,
          completed
         })
          .then(res => this.todos = [...this.todos, res.data])
          .catch(err => console.log(err));
    }
  },
  created() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=0')
    .then(res => this.todos = res.data)
    .catch(err => console.log(err));
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
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