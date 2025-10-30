/**
 * Myopedia Calculator - Body Fat Estimator
 * ----------------------------------------
 * Estimates body fat percentage using the U.S. Navy formula.
 * 
 * Usage:
 *   node bodyfat_estimator.js
 * 
 * By Myopedia | https://myopedia.org
 */

import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("=== Myopedia Body Fat Estimator ===");

rl.question("Enter your gender (M/F): ", (genderInput) => {
  const gender = genderInput.trim().toUpperCase();

  rl.question("Enter your height (in cm): ", (heightInput) => {
    const height = parseFloat(heightInput);

    if (gender === "M") {
      rl.question("Enter your neck circumference (in cm): ", (neckInput) => {
        rl.question("Enter your waist circumference (in cm): ", (waistInput) => {
          const neck = parseFloat(neckInput);
          const waist = parseFloat(waistInput);
          const bodyFat =
            495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450;

          console.log(`\nEstimated Body Fat: ${bodyFat.toFixed(2)}%`);
          rl.close();
        });
      });
    } else if (gender === "F") {
      rl.question("Enter your neck circumference (in cm): ", (neckInput) => {
        rl.question("Enter your waist circumference (in cm): ", (waistInput) => {
          rl.question("Enter your hip circumference (in cm): ", (hipInput) => {
            const neck = parseFloat(neckInput);
            const waist = parseFloat(waistInput);
            const hip = parseFloat(hipInput);
            const bodyFat =
              495 /
                (1.29579 -
                  0.35004 * Math.log10(waist + hip - neck) +
                  0.22100 * Math.log10(height)) -
              450;

            console.log(`\nEstimated Body Fat: ${bodyFat.toFixed(2)}%`);
            rl.close();
          });
        });
      });
    } else {
      console.log("Invalid gender input.");
      rl.close();
    }
  });
});
