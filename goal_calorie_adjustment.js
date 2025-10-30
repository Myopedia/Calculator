/**
 * Myopedia Calculator - Goal-Based Calorie Adjustment
 * ---------------------------------------------------
 * Adjusts calorie intake for cutting, maintenance, or bulking.
 * 
 * Usage:
 *   node goal_calorie_adjustment.js
 * 
 * By Myopedia | https://myopedia.org
 */

import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("=== Myopedia Goal-Based Calorie Adjustment ===");

rl.question("Enter your TDEE (kcal/day): ", (tdeeInput) => {
  const tdee = parseFloat(tdeeInput);

  console.log("\nChoose your goal:");
  console.log("1. Cutting (fat loss)");
  console.log("2. Maintenance");
  console.log("3. Bulking (muscle gain)");

  rl.question("\nEnter goal (1–3): ", (goalInput) => {
    const goal = parseInt(goalInput);
    let targetCalories;

    switch (goal) {
      case 1:
        targetCalories = tdee * 0.8; // 20% deficit
        break;
      case 2:
        targetCalories = tdee;
        break;
      case 3:
        targetCalories = tdee * 1.15; // 15% surplus
        break;
      default:
        console.log("Invalid goal selected.");
        rl.close();
        return;
    }

    console.log(`\nRecommended daily calories for your goal: ${targetCalories.toFixed(2)} kcal`);
    rl.close();
  });
});
