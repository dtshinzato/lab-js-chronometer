class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
    // ... your code goes here
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    return value.toString().padStart(2, "0");
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
    // this.currentTime = 0;
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    return (
      this.getMinutes().toString().padStart(2, "0") +
      ":" +
      this.getSeconds().toString().padStart(2, "0")
    );
  }
}
