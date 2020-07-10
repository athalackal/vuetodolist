

<template>
  <div>
    <h1 class="text">Countdown Timer</h1>
    <br />
    <h3 class="text">Select a date and time to complete to-do by:</h3>
    <br />
    <div>
      <span> 
        <input type="datetime-local" class="datetime" :value="datetime" @input="handleDateTimeInput" />
        <button class="startTimer" @click="startTimerHandler()"> Start Timer </button>
      </span>
    </div>
    <br />
    <br />
    <h3 class="text">{{timeLeftText}}</h3>
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
      showTimeLeft: false,
      timeLeft: 0,
      timer: null
    }
  },
  methods: {
    handleDateTimeInput(e) {
      this.datetime = e.target.value,
      this.showTimeLeft = true
      console.log(e);
    },
    startTimerHandler () {
      let vm = this
      if (this.timer) clearInterval(this.timer)
      const timeDifference = this.$moment(this.datetime).diff(this.$moment(), "seconds");
      this.timeLeft = timeDifference
      this.timer = setInterval(function () {
        vm.timeLeft--
        if (vm.timeLeft <= 0)  clearInterval(vm.timer)
      }, 1000)

      // console.log('this.timer', this.timer);
      // clearInterval(this.timer)
            // console.log('this.timer after', this.timer);


    }
  },
  computed: {
    timeLeftText () {
      if (this.timeLeft < 1) return "No time left."
      else return `You have ${this.timeLeft} seconds left.`
    }
  }
};
</script>

<style scoped>
.startTimer {
  margin-left: 20px;
  padding: 7px;
  background-color: #42b983;
  border: none;
  font-weight: bold;
  border-radius: 5px;
  color: white;


}
.datetime {
  margin-left: 10px;
}
.text {
  margin-left: 10px;
}
</style>