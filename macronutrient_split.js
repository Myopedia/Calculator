/**
 * Myopedia Calculator - Macronutrient Split Module
 * ------------------------------------------------
 * Provides macro recommendations (Protein, Fat, Carbs) based on total calories.
 * 
 * Usage:
 *   node macronutrient_split.js
 * 
 * By Myopedia | https://myopedia.org
 */

import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("=== Myopedia Macronutrient Split ===");

rl.question("Enter your daily calorie target (kcal): ", (calInput) => {
  const calories = parseFloat(calInput);

  if (isNaN(calories) || calories <= 0) {
    console.log("Invalid calorie input.");
    rl.close();
    return;
  }

  // Typical bodybuilding macro split: 30% Protein, 25% Fat, 45% Carbs
  const protein = (calories * 0.3) / 4;
  const fat = (calories * 0.25) / 9;
  const carbs = (calories * 0.45) / 4;

  console.log(`\nRecommended Macronutrient Split:`);
  console.log(`Protein: ${protein.toFixed(1)} g`);
  console.log(`Fat: ${fat.toFixed(1)} g`);
  console.log(`Carbohydrates: ${carbs.toFixed(1)} g`);

  rl.close();
});
