let restaurant = {
  name: "Wild Oat",
  guestCapacity: 75,
  guestCount: 0,
  checkAvailbilty: function (partySize) {
    let amountThatCanBeSeated = this.guestCapacity - this.guestCount;
    if (partySize <= amountThatCanBeSeated) {
      console.log("right this way");
    } else {
      console.log("It will be a moment");
    }
  },
  seatParty: function (partySize) {
    this.guestCount = this.guestCount + partySize;
  },
  removeParty: function (partySize) {
    this.guestCount = this.guestCount - partySize;
  },
};

restaurant.checkAvailbilty(5);
restaurant.seatParty(30);
restaurant.removeParty(20);

console.log(restaurant.guestCount);
console.log(restaurant.guestCount);
