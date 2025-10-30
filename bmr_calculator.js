/**
 * Myopedia Calculator - BMR Module
 * ---------------------------------
 * Calculates Basal Metabolic Rate (BMR) using the Mifflin-St Jeor Equation.
 * 
 * Usage:
 *   node bmr_calculator.js
 * 
 * By Myopedia | https://myopedia.org
 */

import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("=== Myopedia BMR Calculator ===");

rl.question("Enter your gender (M/F): ", (genderInput) => {
  rl.question("Enter your weight (in kilograms): ", (weightInput) => {
    rl.question("Enter your height (in centimeters): ", (heightInput) => {
      rl.question("Enter your age (in years): ", (ageInput) => {
        const gender = genderInput.trim().toUpperCase();
        const weight = parseFloat(weightInput);
        const height = parseFloat(heightInput);
        const age = parseFloat(ageInput);

        if (!["M", "F"].includes(gender) || isNaN(weight) || isNaN(height) || isNaN(age)) {
          console.log("Invalid input. Please enter valid values.");
          rl.close();
          return;
        }

        let bmr;
        if (gender === "M") {
          bmr = 10 * weight + 6.25 * height - 5 * age + 5;
        } else {
          bmr = 10 * weight + 6.25 * height - 5 * age - 161;
        }

        console.log(`\nYour Basal Metabolic Rate (BMR) is: ${bmr.toFixed(2)} kcal/day`);
        rl.close();
      });
    });
  });
});
