

<template>
  <div>
    <h1 class="text">Countdown Timer</h1>
    <br />
    <h3 class="text">Select a date and time to complete to-do by:</h3>
    <br />
		{{ time }}
    <input type="date" class="date" v-model="date"/>
    <input type="time" class="time" v-model="time" />
    <br />
    <br />
    <h3 class="text">Time left to complete: {{$moment()}}</h3>
		{{ $moment()}}
    <br />
  </div>
</template>

<script>
/*
	Use date time local input
	Then calculate the difference between the selected datetime and now as a computed property
	then format and display it in the html
*/
export default {
    data() {
			console.log('Original Moment: ', this.$moment().toString())
			setInterval(function() {
				this.seconds--
			}, 1)
			return {
				date: this.$moment().format('YYYY-MM-DD'),
				time: this.$moment().format('HH:MM')
			}
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
  margin-left: 10px;
}
</style>