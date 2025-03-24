class Submarine {
  constructor(totalTorpedos, torpedosFired) {
    this.isSubmerged = false;
    this.totalTorpedos = totalTorpedos;
    this.torpedosFired = torpedosFired;
  }
  PropertyDescriptionisSubmergedIt(Submerged) {
    this.isSubmerged = Submerged;
  }
  dive() {
    this.PropertyDescriptionisSubmergedIt(true);
    console.log('Submarine Submerged');
  }
  surface() {
    this.PropertyDescriptionisSubmergedIt(false);
    console.log('Submarine Surfaced');
  }
  fireTorpedos() {
    console.log(`${this.torpedosFired} Torpedos Fired, ${this.totalTorpedos - this.torpedosFired} Left`);
  }
}

class WeaponUnit extends Submarine {
  dive() {
    super.dive();
  }
  surface() {
    super.surface();
  }
  fireTorpedos() {
    super.fireTorpedos();
  }
}