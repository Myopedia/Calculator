# Myopedia.org Calculator 1.0 – BMI, MMR & Recipe Calorie Calculator

The **Myopedia.org Calculator** is an open-source suite of **fitness, bodybuilding, and nutrition calculators** developed by [Myopedia](https://myopedia.org). It provides scientifically grounded, command-line tools to compute essential **health and performance metrics** — including calorie needs, macronutrient breakdowns, body composition, and recipe calorie estimates.

Built with **Node.js**, the project emphasizes accuracy, transparency, and portability. Each calculator is a small, focused module you can run directly or via a unified CLI. Whether you’re preparing for a physique show, optimizing nutrition for performance, or building a wellness product, Myopedia Calculator delivers reliable numbers without the bloat.

---

## Overview

With Myopedia Calculator, you can:

- Determine daily calorie needs (**BMR** and **TDEE**)
- Design goal-aligned **macronutrient targets**
- Estimate **body fat percentage** from circumference measurements
- Compute **calories in your own recipes** and per‑serving breakdowns
- Set **cutting, maintenance, or bulking** calorie targets with reasoned adjustments

All modules are CLI-based, scriptable, and easy to integrate into build pipelines or backend services.

---

## Features

- **BMI (Body Mass Index) Calculator**
- **BMR (Basal Metabolic Rate) Calculator**
- **TDEE (Total Daily Energy Expenditure) Calculator**
- **Macronutrient Split Recommendations**
- **Body Fat Percentage Estimator (U.S. Navy method)**
- **Goal-Based Calorie Adjustment** (cutting, maintenance, bulking)
- **Recipe Calorie Calculator** (total and per‑serving calories)

Each calculator can run independently or through the unified `main.js` interface.

---

## Getting Started

### Installation

~~~bash
git clone https://github.com/Myopedia/Myopedia-Calculator.git
cd Myopedia-Calculator
~~~

Ensure **Node.js v18+** is installed.

Optionally initialize a package and enable ES modules:

~~~bash
npm init -y
~~~

Add this to `package.json`:

~~~json
{ "type": "module" }
~~~

### Run

Use the unified CLI:

~~~bash
node main.js
~~~

Or run any calculator directly, for example:

~~~bash
node bmr_calculator.js
~~~

---

## Calculator Modules (Detailed)

Below are detailed, SEO-friendly explanations for each calculator — what it does, why it matters, and how to use it effectively.

### 1. BMI Calculator — Understanding Body Mass Index

**File:** `bmi_calculator.js`  
**Purpose:** Computes **Body Mass Index**, a quick screening tool to categorize weight relative to height (e.g., underweight, normal weight, overweight, obesity). While BMI does not directly measure body fat, it offers a standardized, population-level risk indicator useful for broad comparisons and public health guidance.

**Formula:**  
`BMI = weight (kg) ÷ [height (m)]²`

**How it helps:**
- Fast health-risk screening for general populations
- Commonly referenced in clinical guidelines and research
- A starting point before moving into more individualized measures like body fat percentage

**Usage:**
- Run `node bmi_calculator.js`
- Provide weight (kg) and height (m)

**Example:** Weight: 75 kg, Height: 1.78 m → `BMI ≈ 23.67 (Normal weight)`

**Keywords:** body mass index calculator, BMI fitness calculator, BMI categories, BMI for athletes

---

### 2. BMR Calculator — Measuring Resting Metabolic Rate

**File:** `bmr_calculator.js`  
**Purpose:** **Basal Metabolic Rate (BMR)** represents the calories your body burns at rest to maintain vital functions (respiration, circulation, cellular maintenance). Uses the **Mifflin–St Jeor equation**, a widely trusted estimator in contemporary nutrition science.

**Formulas:**  
- Men: `BMR = 10 × weight(kg) + 6.25 × height(cm) − 5 × age(y) + 5`  
- Women: `BMR = 10 × weight(kg) + 6.25 × height(cm) − 5 × age(y) − 161`

**How it helps:**
- Establishes your **baseline calorie requirement**
- Feeds into **TDEE** (total daily energy expenditure)
- Informs calorie targets for fat loss, maintenance, or muscle gain

**Usage:**
- Run `node bmr_calculator.js`
- Provide gender (M/F), weight (kg), height (cm), age (years)

**Example:** M, 75 kg, 180 cm, 30 y → `BMR ≈ 1730 kcal/day`

**Keywords:** BMR calculator, basal metabolic rate, calculate resting calories, Mifflin St Jeor

---

### 3. TDEE Calculator — Total Daily Energy Expenditure

**File:** `tdee_calculator.js`  
**Purpose:** **TDEE** estimates the **total** calories you burn per day by combining BMR with your **activity level**. It’s the key metric for deciding how many calories to eat to **maintain** weight, or how much to adjust for **cutting** or **bulking**.

**Activity multipliers:**  
1) Sedentary (little or no exercise): `×1.20`  
2) Lightly active (1–3 days/week): `×1.375`  
3) Moderately active (3–5 days/week): `×1.55`  
4) Very active (6–7 days/week): `×1.725`  
5) Extra active (physical job or intense training): `×1.90`

**How it helps:**
- Determines **maintenance calories**
- Directly informs **goal-based calorie adjustments**
- Vital for periodization and physique recomposition plans

**Usage:**
- Run `node tdee_calculator.js`
- Provide your BMR and select activity level (1–5)

**Example:** BMR 1730, Moderately active → `TDEE ≈ 2681 kcal/day`

**Keywords:** TDEE calculator, daily calorie needs, maintenance calories, total daily energy expenditure

---

### 4. Macronutrient Split — Designing Targeted Nutrition

**File:** `macronutrient_split.js`  
**Purpose:** Converts a calorie target into **protein, fat, and carbohydrate** grams using a practical default split inspired by bodybuilding and performance nutrition: **30% protein, 25% fat, 45% carbohydrates**. Adapt ratios for high‑protein cuts, endurance blocks, or lower‑carb approaches as needed.

**Macro energy values:** Protein = 4 kcal/g; Carbohydrates = 4 kcal/g; Fat = 9 kcal/g

**How it helps:**
- Aligns calorie intake with **macros that support your goal**
- Provides structured, trackable targets for meal planning
- Simplifies coach–athlete communication

**Usage:**
- Run `node macronutrient_split.js`
- Provide daily calories

**Example:** 2500 kcal/day → `Protein ≈ 187.5 g`, `Fat ≈ 69.4 g`, `Carbs ≈ 281.2 g`

**Keywords:** macronutrient calculator, macros for muscle gain, protein fat carb ratios, macro targets for cutting

---

### 5. Body Fat Percentage Estimator — Practical Composition Tracking

**File:** `bodyfat_estimator.js`  
**Purpose:** Estimates **body fat percentage** using the **U.S. Navy method**, which relies on circumference measurements (neck, waist, and hips for women; neck and waist for men) plus height. While not as precise as DEXA, it’s a **practical and repeatable** method for home use and trend tracking.

**Formulas (summary):**  
- Men: `%BF = 495 / [1.0324 − 0.19077·log10(waist − neck) + 0.15456·log10(height)] − 450`  
- Women: `%BF = 495 / [1.29579 − 0.35004·log10(waist + hip − neck) + 0.22100·log10(height)] − 450`

**How it helps:**
- Tracks **body composition** beyond scale weight
- Provides consistent at‑home progress monitoring
- Informs more nuanced macro and calorie planning

**Usage:**
- Run `node bodyfat_estimator.js`
- Provide gender, height (cm), and the required circumferences (cm)

**Example:** M, 180 cm, waist 85 cm, neck 38 cm → `Body Fat ≈ 15.7%`

**Keywords:** body fat percentage calculator, navy body fat method, estimate body composition at home

---

### 6. Goal‑Based Calorie Adjustment — Cutting, Maintenance, Bulking

**File:** `goal_calorie_adjustment.js`  
**Purpose:** Translates **TDEE** into a **goal‑aligned daily calorie target**. Defaults reflect common, sustainable strategies:

- Cutting: `TDEE × 0.80` (≈20% deficit)  
- Maintenance: `TDEE × 1.00`  
- Bulking: `TDEE × 1.15` (≈15% surplus)

**How it helps:**
- Removes guesswork when setting **daily targets**
- Balances progress with recovery and sustainability
- Forms the basis for periodized nutrition programs

**Usage:**
- Run `node goal_calorie_adjustment.js`
- Provide TDEE and choose goal (1–3)

**Example:** TDEE 2700, Bulking → `Recommended ≈ 3105 kcal/day`

**Keywords:** cutting calories calculator, bulking calorie calculator, calorie goal for muscle gain, how many calories to lose fat

---

### 7. Recipe Calorie Calculator — “How to Calculate Calories in a Recipe”

**File:** `recipe_calorie_calculator.js`  
**Purpose:** Answers the high‑intent question **“how to calculate calories in a recipe”** by letting you enter ingredients with **calories per 100 g** and **grams used**, then computing both **total recipe calories** and **per‑serving** values. Ideal for meal prep, macro tracking, and sharing accurate nutrition info for homemade dishes.

**Workflow:**  
1) Enter the number of ingredients  
2) For each ingredient: name, calories per 100 g, grams used  
3) Provide servings to get **per‑serving calories**

**Usage:**
- Run `node recipe_calorie_calculator.js`
- Follow prompts to add ingredients and servings

**Example session:**  
Ingredients: chicken breast (165 kcal/100 g, 200 g), olive oil (884 kcal/100 g, 10 g), rice (130 kcal/100 g, 150 g). Servings: 2 → **Total ≈ 707 kcal**, **Per serving ≈ 353.5 kcal**.

**Keywords:** how to calculate calories in a recipe, recipe calorie calculator, calories per serving calculator, homemade meal calories

---

## About Myopedia

**Myopedia is your daily news source on muscle growth, bodybuilding, and health.** We cover evidence‑based training methods, nutrition science, recovery strategies, and industry developments — distilling peer‑reviewed research and expert practice into **daily, practical insights**. Beyond reporting, we build tools like the **Myopedia Calculator** to help athletes and developers turn knowledge into action. Explore in‑depth guides, daily updates, and more at [myopedia.org](https://myopedia.org).

---

## Contributing

We welcome contributions from coaches, athletes, data scientists, and developers.

1) Fork the repository  
2) Create a feature branch describing the enhancement  
3) Open a pull request with clear notes, assumptions, and test examples

Ideas & roadmap:
- Imperial units (lbs, inches)
- Automatic food database lookups for the recipe calculator
- Export to JSON/CSV and batch‑mode scripts
- Additional modules (hydration, lean body mass, Wilks coefficient, VO₂ max estimates)
- Optional web UI (React) and desktop wrapper (Electron)

---

## License

This project is released under the **MIT License**. You’re free to use, modify, and distribute it for personal or commercial purposes with attribution. See `LICENSE` for details.



© **Myopedia.org** — Your daily news source on muscle growth, bodybuilding, and health. Visit [myopedia.org](https://myopedia.org) for research‑backed articles, practical guides, and tools that turn science into results.
