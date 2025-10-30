/**
 * Myopedia Calculator - TDEE Module
 * ---------------------------------
 * Calculates Total Daily Energy Expenditure (TDEE) based on BMR and activity level.
 * 
 * Usage:
 *   node tdee_calculator.js
 * 
 * By Myopedia | https://myopedia.org
 */

import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("=== Myopedia TDEE Calculator ===");

rl.question("Enter your BMR (kcal/day): ", (bmrInput) => {
  console.log("\nSelect your activity level:");
  console.log("1. Sedentary (little or no exercise)");
  console.log("2. Lightly active (1–3 days/week)");
  console.log("3. Moderately active (3–5 days/week)");
  console.log("4. Very active (6–7 days/week)");
  console.log("5. Extra active (hard exercise or physical job)");

  rl.question("\nEnter activity level (1–5): ", (levelInput) => {
    const bmr = parseFloat(bmrInput);
    const level = parseInt(levelInput);
    const multipliers = [1.2, 1.375, 1.55, 1.725, 1.9];
    const multiplier = multipliers[level - 1];

    if (isNaN(bmr) || !multiplier) {
      console.log("Invalid input. Please try again.");
      rl.close();
      return;
    }

    const tdee = bmr * multiplier;
    console.log(`\nYour Total Daily Energy Expenditure (TDEE) is: ${tdee.toFixed(2)} kcal/day`);
    rl.close();
  });
});
