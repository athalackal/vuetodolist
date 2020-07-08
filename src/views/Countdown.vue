<template>
    <div>
        <h1 class="text">Countdown Timer</h1>
        <br>
        <h3 class="text">Select a date and time to complete to-do by: </h3>
        <br>
        <input type="date" class="date">
        <input type="time" class="time">
        <br>
        <br>
        <h3 class="text">Time left to complete: {{moment()}} </h3>
        <br>
    </div>
</template>

<script>
//import moment from 'moment'

export default {
    data() {
        return {}
       //var m = moment() 
       //return console.log('Original Moment: ' + $(m.toString()
      
 
    }
}
</script>

<style scoped>
.date {
    margin-left: 10px;
}
.time {
    margin-left: 15px;
}
.text {
    margin-left: 10px
}

</style>