/**
 * Myopedia Calculator - Main CLI
 * -------------------------------
 * Unified command-line interface for Myopedia fitness tools.
 * 
 * Includes:
 *  - BMI Calculator
 *  - BMR Calculator
 *  - TDEE Calculator
 *  - Macronutrient Split
 *  - Body Fat Estimator
 *  - Goal-based Calorie Adjustment
 * 
 * Usage:
 *   node main.js
 * 
 * By Myopedia | https://myopedia.org
 */

import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("=====================================");
console.log("        Myopedia Fitness Tools        ");
console.log("=====================================");
console.log("Select a calculator to begin:");
console.log("1. BMI (Body Mass Index)");
console.log("2. BMR (Basal Metabolic Rate)");
console.log("3. TDEE (Total Daily Energy Expenditure)");
console.log("4. Macronutrient Split");
console.log("5. Body Fat Percentage Estimator");
console.log("6. Goal-Based Calorie Adjustment");
console.log("0. Exit");

rl.question("\nEnter choice (0–6): ", async (choice) => {
  switch (choice.trim()) {
    case "1":
      await import("./bmi_calculator.js");
      break;
    case "2":
      await import("./bmr_calculator.js");
      break;
    case "3":
      await import("./tdee_calculator.js");
      break;
    case "4":
      await import("./macronutrient_split.js");
      break;
    case "5":
      await import("./bodyfat_estimator.js");
      break;
    case "6":
      await import("./goal_calorie_adjustment.js");
      break;
    case "0":
      console.log("Goodbye!");
      rl.close();
      process.exit(0);
      break;
    default:
      console.log("Invalid choice. Please run again.");
      rl.close();
  }
});
