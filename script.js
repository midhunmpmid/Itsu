document.addEventListener("DOMContentLoaded", function () {
  // Function to calculate and update the total for a given set
  function calculateTotalForSet(setName) {
    // Select all input fields for the given set using the data attribute
    const inputs = document.querySelectorAll(
      `input.input-field[data-set="${setName}"]`
    );
    let total = 0;
    inputs.forEach((input) => {
      total += parseFloat(input.value) || 0; // Convert input value to number; default to 0 if empty or NaN
    });
    // Find the corresponding total field by its data attribute and update its value
    const totalField = document.querySelector(
      `input[data-total-for="${setName}"]`
    );
    if (totalField) {
      totalField.value = total;
    }
  }

  // Attach an event listener to all input fields that should be summed
  document.querySelectorAll("input.input-field").forEach((input) => {
    input.addEventListener("input", function () {
      const setName = input.getAttribute("data-set");
      calculateTotalForSet(setName);
    });
  });
});
