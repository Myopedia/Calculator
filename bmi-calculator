/**
 * Myopedia Calculator - BMI Module
 * ---------------------------------
 * A simple Body Mass Index (BMI) calculator.
 * 
 * Usage:
 *   node bmi_calculator.js
 * 
 * By Myopedia | https://myopedia.org
 */

import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("=== Myopedia BMI Calculator ===");

rl.question("Enter your weight (in kilograms): ", (weightInput) => {
  rl.question("Enter your height (in meters): ", (heightInput) => {
    const weight = parseFloat(weightInput);
    const height = parseFloat(heightInput);

    if (isNaN(weight) || isNaN(height) || height <= 0) {
      console.log("Invalid input. Please enter valid numeric values.");
      rl.close();
      return;
    }

    const bmi = weight / (height * height);
    console.log(`\nYour BMI is: ${bmi.toFixed(2)}`);

    if (bmi < 18.5) {
      console.log("Category: Underweight");
    } else if (bmi < 24.9) {
      console.log("Category: Normal weight");
    } else if (bmi < 29.9) {
      console.log("Category: Overweight");
    } else {
      console.log("Category: Obesity");
    }

    rl.close();
  });
});
