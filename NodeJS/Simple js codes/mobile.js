class Mobile {
  constructor(brand, ram, batteryStatus, isCallInProgress, song) {
    this.brand = brand;
    this.ram = ram;
    this.batteryStatus = batteryStatus;
    this.isCallInProgress = isCallInProgress;
    this.song = song;
  }

  playMusic() {
    console.log(`Playing ${this.song} Song`);
  }

  stopMusic() {
    console.log('Music Stopped');
  }

  fullCharge() {
    if (this.batteryStatus < 100) {
      this.batteryStatus = 100;
      console.log('Mobile Fully Charged');
    } else {
      console.log('Mobile Already Fully Charged');
    }
  }

  makeCall() {
    this.isCallInProgress = true;
    console.log('Calling...');
  }

  endCall() {
    if (this.isCallInProgress) {
      console.log('Call Ended');
      this.isCallInProgress = false;
    } else {
      console.log('No Ongoing Call to End');
    }
  }

}

const myMobile = new Mobile(brand, ram, batteryStatus, isCallInProgress, song);