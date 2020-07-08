<template>
    <div>
        <div v-bind:key="todo.id" v-for="(todo, index) in todos">
            <TodoItem :todo="todo" 
            @del-todo="$emit('del-todo', index)"/>
        </div>
    </div>
</template>

<script>
import TodoItem from './Todoitem.vue';

export default {
    name: "Todos",
    components: {
        TodoItem
    },
    props: ["todos"]
}
</script>

<style scoped>

</style>