

<template>
  <div>
    <h1 class="text">Countdown Timer</h1>
    <br />
    <h3 class="text">Select a date and time to complete to-do by:</h3>
    <br />
    <input type="datetime-local" class="datetime" :value="datetime" @input="handleDateTimeInput" />
    <br />
    <br />
    <h3 class="text" v-if="showTimeLeft">Time left to complete: {{countdownTimer}}</h3>
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
    console.log("Original Moment: ", this.$moment().format("YYYY-MM-DDTHH:mm"));
    setInterval(function() {
      this.seconds--;
    }, 1);
    return {
      datetime: this.$moment().format("YYYY-MM-DDTHH:mm"),
      showTimeLeft: false
    }
  },
  methods: {
    handleDateTimeInput(e) {
      this.datetime = e.target.value,
      this.showTimeLeft = true
      console.log(e);
    }
  },
  computed: {
    countdownTimer() {
      const timeDifferece = this.$moment(this.datetime).diff(this.$moment(), "seconds");
      return timeDifferece;
    }
  }
};
</script>

<style scoped>
.datetime {
  margin-left: 10px;
}
.text {
  margin-left: 10px;
}
</style>