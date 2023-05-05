function calculateCost() {
  const date = document.getElementById("checkIn").value;
  const children = document.getElementById("quantityC").value;
  const adults = document.getElementById("quantityA").value;
  const roomType = document.getElementById("type").value;
  const noDiscount = document.getElementById("none");
  const seniorDiscount = document.getElementById("senior");
  const militaryDiscount = document.getElementById("military");
  let surcharge = 0;
  let discount = 0;
  let occupancy = +adults + +children;
  let nightly = 0;
  let full = 0;

  //getting da date and season fee
  d = new Date(date);
  let month = d.getMonth() + 1;

  if (month >= 6 && month <= 8) {
    surcharge = 100;
  }

  //getting room type and testing for capacity

  if (roomType == "king" && occupancy <= 2) {
    full = 0;
  } else if (roomType == "queen" && occupancy <= 5) {
    full = 0;
  } else if (roomType == "twobed" && occupancy <= 6) {
    full = 0;
  } else {
    full = 1;
  }

  //getting discount type

  if (noDiscount.checked) {
    discount = 0;
  } else if (seniorDiscount.checked) {
    discount = 0.1;
  } else if (militaryDiscount.checked) {
    discount = 0.2;
  }

  //Calculating rate

  nightly = (150 + surcharge) * (1 - discount);

  //making output

  if (full == 1) {
    const messageDiv = document.getElementById("output");
    messageDiv.innerText = "The room you selected will not hold your party.";
    console.log(roomType);
  } else {
    const messageDiv = document.getElementById("output");
    messageDiv.innerText = "Your nightly rate will be: $" + nightly;
    console.log(month + " " + surcharge + " " + month);

  }
}
