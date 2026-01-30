const { test, expect } = require('@playwright/test');

//Navigate before each test
test.beforeEach(async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
});

//POSITIVE UI TEST DATA
const positiveTests = [
  {
    id: "Pos_UI_1",
    description: "Real-time Sinhala output updates while typing",
    input: "mama yanavaa",
    expected: "මම යනවා"
  },
  {
    id: "Pos_UI_2",
    description: "Clear input resets output field",
    input: "mama gedhara yanavaa mokada adha vaessa vahinavaa saha heta office yanna thiyanavaa ehema nisaa api heta meeting eka thiyaganna kiyala hithan inne saha oyata kiyanna one hari wedagath deyak thiyenavaa",
    expected: "Sinhala output should be completely displayed without UI freezing or cutting off text.Actual output: Full Sinhala paragraph is displayed correctly in the output area without truncation or delay."
  },
  {
    id: "Pos_UI_3",
    description: "UI handles medium length sentence correctly",
    input: "mama gedhara yanavaa mokada adha vaessa vahinavaa saha heta office yanna thiyanavaa",
    expected: "Sinhala output should be fully displayed without truncation."
  }
];

//NEGATIVE UI TEST DATA
const negativeTests = [
  {
    id: "Neg_UI_1",
    description: "Empty input field should not generate output",
    input: "",
    expected: "System should show no output or display a validation message."
  },
  {
    id: "Neg_UI_2",
    description: "Very long input should not crash UI",
    input: "mama gedhara yanavaa mokada adha vaessa vahinavaa saha heta office yanna thiyanavaa ".repeat(10),
    expected: "UI should remain responsive and display converted Sinhala output."
  },
];

//UI TEST EXECUTION 
for (const data of positiveTests) {
  test(`Positive_UI | ${data.id} | ${data.description}`, async ({ page }) => {

    const inputBox = page.locator('textarea[placeholder*="Singlish"]');
    const outputBox = page.locator(
      '.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50'
    );
    await inputBox.focus();
    await inputBox.fill("");
    await inputBox.type(data.input, { delay: 50 });

    
    await expect(outputBox).toBeVisible();

    console.log(`POSITIVE UI TEST: ${data.id}`);
    console.log(`Expected: ${data.expected}`);

    if (data.id === "Pos_UI_1") {
      await expect(outputBox).toContainText("මම යනවා", { timeout: 10000 });
    } else if (data.id === "Pos_UI_2") {
      
      await expect(outputBox).toHaveText(/.+/, { timeout: 10000 });
      
      const clearBtn = page.locator('button.btn[aria-label="Clear"]');
      await clearBtn.click();
      await expect(inputBox).toHaveValue("");
      const clearedText = (await outputBox.textContent()) || "";
      expect(clearedText.trim().length).toBe(0);
    } else if (data.id === "Pos_UI_3") {
      
      await expect(outputBox).toHaveText(/[\u0D80-\u0DFF]{3,}/, { timeout: 10000 });
      const actualOutput = (await outputBox.textContent()) || "";
      
      expect(actualOutput.trim().length).toBeGreaterThan(30);
    }
  });
}

//NEGATIVE UI TEST EXECUTION
for (const data of negativeTests) {
  test(`Negative_UI | ${data.id} | ${data.description}`, async ({ page }) => {

    const inputBox = page.locator('textarea[placeholder*="Singlish"]');
    const outputBox = page.locator(
      '.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50'
    );

    await inputBox.fill(data.input);
    await page.waitForTimeout(4000);

    const actualOutput = await outputBox.textContent();

    console.log(`NEGATIVE UI TEST: ${data.id}`);
    console.log(`Expected: ${data.expected}`);
    console.log(`Actual: ${actualOutput}`);

    if (data.input === "") {
      expect(actualOutput.trim().length).toBe(0);
    } else {
      expect(actualOutput.length).toBeGreaterThan(0);
      expect(actualOutput).not.toBe(data.input);
    }
  });
}
