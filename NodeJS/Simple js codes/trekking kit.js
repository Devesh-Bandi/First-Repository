function Trekking(kit, item) {
  this.kit = kit;
  this.item = item;
}

function main() {
  const item = readLine();
  const trekkingKit = {
    ruckSackBag: true,
    clothes: ["Shirt", "T-Shirt/Full sleeves", "Jeans"],
    firstAid: true,
    waterBottle: "2 liters",
    sunGlasses: "UV Protection",
    headTorch: true,
    medicines: true,
    footWear: "Non-skid",
    food: ["dry fruits", "nuts", "chocolate bars"]
  };

  /* Write your code here */
  Trekking.prototype.isKitContains = function (obj) {
    return Object.getOwnPropertyNames(obj).some(item => item === this.item);
  };
  const trekking = new Trekking(trekkingKit, item);
  const restTrekking = trekking.isKitContains(trekkingKit);

  console.log(restTrekking);
}