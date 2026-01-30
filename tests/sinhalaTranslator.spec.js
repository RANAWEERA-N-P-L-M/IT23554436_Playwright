import { test, expect } from '@playwright/test';

// Navigate before each test
test.beforeEach(async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
});

//POSITIVE TEST DATA
const positiveTests = [
{
    id: "Pos_1",
    description: "greeting",
    input:"karuNaakaralaa mata podi udhavvak karanna puluvandha mokadha mama adha office yanna kalin mee documents tika balanna oona",
    expected:"කරුණාකරලා මට පොඩි උදව්වක් කරන්න පුලුවන්ද මොකද මම අද office යන්න කලින් මේ documents ටික බලන්න ඕන"
},
{
    id: "Pos_2",
    description: "mixed English request",
    input:"machan mata adha office meeting ekata Zoom link eka email karanna puluvandha?",
    expected:"මචන් මට අද office meeting එකට Zoom link එක email කරන්න පුලුවන්ද?" 
},
{
    id: "Pos_3",
    description: "daily paragraph",
    input:"mama adha gedhara inne mokada vaessa loku vidhihata vahina nisaa saha office yanna amaru unaa ehema nisaa heta meeting eka thiyaganna kiyala hithan inne.",
    expected:"මම අද ගෙදර ඉන්නේ මොකඩ වැස්ස ලොකු විදිහට වහින නිසා සහ office යන්න අමරු උනා එහෙම නිසා හෙට meeting එක තියගන්න කියල හිතන් ඉන්නේ." 
},

{
  id: "Pos_4",
  description: "polite request",
  input: "karuNaakarala enna apita godak dhura yanna thiyanavaa",
  expected: "කරුණාකරල එන්න අපිට ගොඩක් දුර යන්න තියනවා"
},
{
  id: "Pos_5",
  description: "question form",
  input: "oyaa monavadha karanne",
  expected: "ඔයා මොනවද කරන්නේ"
},
{
  id: "Pos_6",
  description: "future plan",
  input: "api heta yamu",
  expected: "අපි හෙට යමු"
},
{
  id: "Pos_7",
  description: "need help",
  input: "mata help ekak oona",
  expected: "මට help එකක් ඕන"
},
{
  id: "Pos_8",
  description: "compliment",
  input: "karuNaakaralaa mata podi udhavvak karanna puluvandha?",
  expected: "කරුණාකරලා මට පොඩි උදව්වක් කරන්න පුලුවන්ද?"
},
{
  id: "Pos_9",
  description: "daily routine",
  input: "mama adha office yanavaa",
  expected: "මම අද office යනවා"
},
{
  id: "Pos_10",
  description: "ability",
  input: "mata eeka karanna puLuvan",
  expected: "මට ඒක කරන්න පුළුවන්"
},
{
  id: "Pos_11",
  description: "Convert long mixed technical paragraph",
  input: "mama adha Zoom meeting ekata join venna kalin WiFi check karalaa documents tika download karalaa email tika balalaa managerta report ekak send karanna oona mokadha heta presentation eka thiyenavaa",
  expected: "මම අද Zoom meeting එකට join වෙන්න කලින් WiFi check කරලා documents ටික download කරලා email ටික බලලා මනගෙර්ට report එකක් send කරන්න ඕන මොකද හෙට presentation එක තියෙනවා"
},
{
  id: "Pos_12",
  description: "Convert long informal slang paragraph",
  input: "ela machan api heta trip ekak yamu mokadha api godak kaalayak passee hamuvunee nae saha api loku sathutak ganna puluvan kiyalaa hithenavaa ehema unoth api beach ekata yamu",
  expected: "එල මචන් අපි හෙට trip එකක් යමු මොකද අපි ගොඩක් කාලයක් පස්සේ හමුවුනේ නැ සහ අපි ලොකු සතුටක් ගන්න පුලුවන් කියලා හිතෙනවා එහෙම උනොත් අපි beach එකට යමු"
},
{
  id: "Pos_13",
  description: "medium response paragraph",
  input: "hari mama ehema karannam saha heta udhee oyaata call ekak gannam mokadha mata oyaagee idea eka hari lassanayi kiyalaa hithenavaa",
  expected: "හරි මම එහෙම කරන්නම් සහ හෙට උදේ ඔයාට call එකක් ගන්නම් මොකද මට ඔයාගේ idea එක හරි ලස්සනයි කියලා හිතෙනවා"
},
{
  id: "Pos_14",
  description: "medium time and date sentence",
  input: "api meeting eka 2026-05-21 udhee 7.30 AM patan ganna hithan innee saha Zoom link eka email karannam",
  expected: "අපි meeting එක 2026-05-21 උදේ 7.30 AM පටන් ගන්න හිතන් ඉන්නේ සහ Zoom link එක email කරන්නම්"
},
{
  id: "Pos_15",
  description: "work emphasis",
  input: "mama loku vaeda karanavaa",
  expected: "මම ලොකු වැඩ කරනවා"
},
{
  id: "Pos_16",
  description: "appreciation",
  input: "oyaa hari hodhatama karalaa",
  expected: "ඔයා හරි හොදටම කරලා"
},
{
  id: "Pos_17",
  description: "together plan",
  input: "api ekka yamu",
  expected: "අපි එක්ක යමු"
},
{
  id: "Pos_18",
  description: "help received",
  input: "oyaa mata udhav kaLaa",
  expected: "ඔයා මට උදව් කළා"
},
{
  id: "Pos_19",
  description: "happiness",
  input: "mama hari sathutuyi",
  expected: "මම හරි සතුටුයි"
},
{
  id: "Pos_20",
  description: "permission",
  input: "mata yanna puluvandha",
  expected: "මට යන්න පුලුවන්ද"
},
{
  id: "Pos_21",
  description: "weather",
  input: "adha vahinavadha",
  expected: "අද වහිනවද"
},
{
  id: "Pos_22",
  description: "reminder",
  input: "heta udhee ennam",
  expected: "හෙට උදේ එන්නම්"
},
{
  id: "Pos_23",
  description: "encouragement",
  input: "oyaa hari lassanayi me aedhuumata",
  expected: "ඔයා හරි ලස්සනයි මෙ ඇදූමට"
},
{
  id: "Pos_24",
  description: "time mention",
  input: "7 venakan inna",
  expected: "7 වෙනකන් ඉන්න"
},
{
  id: "Pos_25",
  description: "location",
  input: "puluvannam mata eka evanna",
  expected: "පුලුවන්නම් මට එක එවන්න"
},
{
  id: "Pos_26",
  description: "instruction",
  input: "eka balalaa kiyanna hodha narakadha kiyala haridha",
  expected: "එක බලලා කියන්න හොද නරකද කියල හරිද"
},
{
  id: "Pos_27",
  description: "long response paragraph",
  input: "hari mata oyaagee idea eka hari hodhaa kiyalaa hithenavaa saha mama heta udhee oyaata call ekak gannam mokadha api mee project eka harita karanna oona kiyalaa mata hithenavaa",
  expected: "හරි මට ඔයාගේ idea එක හරි හොදා කියලා හිතෙනවා සහ මම හෙට උදේ ඔයාට call එකක් ගන්නම් මොකද අපි මේ project එක හරිට කරන්න ඕන කියලා මට හිතෙනවා"
},
{
  id: "Pos_28",
  description: "long emotional paragraph",
  input: "mata hari sathutuyi oyaata mee dhee kiyanna puluvan vuNa nisaa oyaagee udhav nisaa godak dheeval harita karanna ganna puluvan unaa kiyalaa mata hithenavaa",
  expected: "මට හරි සතුටුයි ඔයාට මේ දේ කියන්න පුලුවන් වුණ නිසා ඔයාගේ උදව් නිසා ගොඩක් දේවල් හරිට කරන්න ගන්න පුලුවන් උනා කියලා මට හිතෙනවා"
}

];

//NEGATIVE TEST DATA
const negativeTests = [
{
    id: "Neg_1",
    description: "Random symbols affect conversion",
    input: "#gedhara##yanavaa",
    expected: "මම ගෙදර යනවා"
},
{
    id: "Neg_2",
    description: "English dominant mixed input",
    input: "today I will go to office mokada mama meeting eka attend karanna thiyanavaa because manager call kala",
    expected: "today I will go to office මොකද මම meeting එක attend කරන්න තියනවා because manager call කළා"
},
{
    id: "Neg_3",
    description: "mixed junk input",
    input: "123@@@ mama test qwerty yanavaa ### oyagedharainnavahetaapiColomboyamu",
    expected: "මම test එකට යනවා ඔයට එනවද මාත් එක්ක එතකොට ලේසී"
},
{
  id: "Neg_4",
  description: "Slang and abbreviations in medium input",
  input: "mama gdr inne machan dn mokak hari karamu api clg yamu",
  expected: "මම ගෙදර ඉන්නේ මචං දැන් මොනවහරි කරමු අපි college යමු"
},
{
  id: "Neg_5",
  description: "Excess punctuation in medium text",
  input: "mama... gedhara... yanavaa!!! mokada??? oyaa ennee nae???",
  expected: "මම ගෙදර යනවා මොකද ඔයා එන්නේ නැ"
},
{
  id: "Neg_6",
  description: " input with repeated punctuation",
  input: "mata eka epa nam mama ehema karanne nae mokada hari narakai",
  expected: "මට ඒක එපා නම් මම එහෙම කරන්නේ නැ මොකද හරි නරකයි"
},
{
  id: "Neg_7",
  description: "Negative meaning lost in medium sentence",
  input: "mata eka epa nam mama ehema karanne nae mokada hari narakai",
  expected: "මට ඒක එපා නම් මම එහෙම කරන්නේ නැ මොකද හරි නරකයි"
},

{
  id: "Neg_8",
  description: "Long input without spaces",
  input: "oyatekkanedaapikattiyamahetacarekaofficeyannainneoyaenawanedaheta",
  expected: "ඔයත් එක්ක නේද අපි කට්ටියම හෙට car ඒකේ office යන්න ඉන්නේ ඔයා එනවා නේද"
},

{
  id: "Neg_9",
  description: "short form typing",
  input: "mama gdr ",
  expected: "මම ගෙදර"
},

{
  id: "Neg_10",
  description: "short form typing",
  input: "MK",
  expected: "මොකද කරන්නේ"
},

{
  id: "Neg_11",
  description: "Long slang-heavy paragraph",
  input: "machan mama gdr inne dn api clg yamu ela ela hari poddak inna mokda class eka cancel wela",
  expected: "මචන් මම ගෙදර ඉන්නේ දැන් අපි collage යමු එල එල හරි පොඩ්ඩක් ඉන්න මොකද්ද class එක cancel වෙලා"
},

{
  id: "Neg_12",
  description: "Long numeric mixed input",
  input: "mata eka epa nam mama ehema karanne nae mokada hari narakai",
  expected: "මට ඒක එපා නම් මම එහෙම කරන්නේ නැ මොකද හරි නරකයි"
},

];

//POSITIVE TEST EXECUTION
for (const data of positiveTests) {
  test(`Positive | ${data.id} | ${data.description}`, async ({ page }) => {
    // Use correct selectors for the website
    const inputBox = page.locator('textarea[placeholder*="Singlish"]');
    const outputBox = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

    await inputBox.fill(data.input);
    await page.waitForTimeout(3000);

    const actualOutput = await outputBox.textContent();

    console.log(`POSITIVE TEST: ${data.id}`);
    console.log(`Expected: ${data.expected}`);
    console.log(`Actual: ${actualOutput}`);

    expect(actualOutput).toContain(data.expected);
  });
}

//NEGATIVE TEST EXECUTION
for (const data of negativeTests) {
  test(`Negative | ${data.id} | ${data.description}`, async ({ page }) => {
    
    const inputBox = page.locator('textarea[placeholder*="Singlish"]');
    const outputBox = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

    await inputBox.fill(data.input);
    await page.waitForTimeout(3000); 

    const actualOutput = await outputBox.textContent();

    console.log(`NEGATIVE TEST: ${data.id}`);
    console.log(`Ideal Expected: ${data.expected}`);
    console.log(`Actual Output: ${actualOutput}`);

    
    expect(actualOutput.length).toBeGreaterThan(0);     
    expect(actualOutput).not.toBe(data.input);
  });
}
