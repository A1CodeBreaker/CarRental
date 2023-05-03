// wait for the DOM to finish loading
document.addEventListener("DOMContentLoaded", function () {
    // get references to form elements
    var pickupDateInput = document.getElementById("pickupDate");
    var numOfDaysInput = document.getElementById("numOfDays");
    var eTollCheckbox = document.getElementById("eToll");
    var gpsCheckbox = document.getElementById("GPS");
    var roadsideCheckbox = document.getElementById("roadside");
    var yesRadioBtn = document.getElementById("yesRadioBtn");
    var noRadioBtn = document.getElementById("noRadioBtn");
    var costBtn = document.getElementById("costBtn");
    var carRentalBaseCostEl = document.getElementById("carRentalBaseCost");
    var optionsCostEl = document.getElementById("optionsCost");
    var ageSurchargeEl = document.getElementById("ageSurcharge");
    var totalRentalCostEl = document.getElementById("totalRentalCost");
  
    // set up event listener for cost button
    costBtn.addEventListener("click", function () {
      // get the selected options and input values
      var pickupDate = new Date(pickupDateInput.value);
      var numOfDays = Number(numOfDaysInput.value);
      var eToll = eTollCheckbox.checked;
      var gps = gpsCheckbox.checked;
      var roadside = roadsideCheckbox.checked;
      var ageUnder25 = yesRadioBtn.checked;
  
      // calculate base rental cost
      var baseCostPerDay = 50;
      var baseRentalCost = numOfDays * baseCostPerDay;
  
      // calculate options cost
      var optionsCost = 0;
      if (eToll) {
        optionsCost += 3.95 * numOfDays;
      }
      if (gps) {
        optionsCost += 2.95 * numOfDays;
      }
      if (roadside) {
        optionsCost += 2.95 * numOfDays;
      }
  
      // calculate under 25 surcharge
      var ageSurcharge = 0;
      if (ageUnder25) {
        ageSurcharge = 10 * numOfDays;
      }
  
      // calculate total rental cost
      var totalRentalCost = baseRentalCost + optionsCost + ageSurcharge;
  
      // update the table with the calculated costs
      carRentalBaseCostEl.innerHTML = baseRentalCost.toFixed(2);
      optionsCostEl.innerHTML = optionsCost.toFixed(2);
      ageSurchargeEl.innerHTML = ageSurcharge.toFixed(2);
      totalRentalCostEl.innerHTML = totalRentalCost.toFixed(2);
    });
  });