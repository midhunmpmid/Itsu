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
      calculateSalmonNigiri();
    });
  });
});

const products = {
  salmonAvoDragon: {
    salmon_avo_maki: 7,
  },

  spicySalmon: {
    salmon_avo_maki: 7,
  },

  veggieDragon: {
    veggie_maki: 7,
  },

  fullhouse: {
    salmon_nigiri: 5,
    baby_salmon: 4,
    salmon_avo_maki: 6,
  },

  health_happiness: {
    salmon_nigiri: 3,
    prawn_nigiri: 2,
    veggie_maki: 2,
    salmon_avo_maki: 2,
    crab_maki: 2,
  },

  classic: {
    salmon_nigiri: 3,
    prawn_nigiri: 2,
    baby_avo_maki: 4,
    salmon_avo_maki: 3,
    crab_maki: 3,
  },

  veggie_collection: {
    baby_avo_maki: 6,
    veggie_maki: 8,
  },

  avoBaby: {
    baby_avo_maki: 18,
  },

  salmonSushi: {
    salmon_nigiri: 6,
  },

  salmonLight: {
    salmon_nigiri: 3,
    salmon_avo_maki: 4,
    baby_salmon: 3,
  },

  sushiFestival: {
    salmon_nigiri: 5,
    baby_salmon: 6,
    baby_avo_maki: 6,
  },

  californiaRolls: {
    crab_maki: 6,
  },
};

function calculateSalmonNigiri() {
  document.getElementById("input-salmon-nigiri-pieces-green").value =
    document.getElementById("fullhouse-green").value *
    products.fullhouse.salmon_nigiri;
}
