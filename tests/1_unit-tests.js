const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

suite('American to British Unit Tests', () => {
    test('Mangoes are my favorite fruit. to British English', function () {
        const text = "Mangoes are my favorite fruit.";
        const locale = 'american-to-british';
        const solution = 'Mangoes are my <span class="highlight">favourite</span> fruit.'
        const translation = translator.translate({ locale, text });
        assert.equal(translation, solution, "Correct translation")
    });
    test('I ate yogurt for breakfast. to British English', function () {
        const text = "I ate yogurt for breakfast.";
        const locale = 'american-to-british';
        const solution = 'I ate <span class="highlight">yoghurt</span> for breakfast.'
        const translation = translator.translate({ locale, text });
        assert.equal(translation, solution, "Correct translation")
    });
    test("We had a party at my friend's condo. to British English", function () {
        const text = "We had a party at my friend's condo.";
        const locale = 'american-to-british';
        const solution = `We had a party at my friend's <span class=\"highlight\">flat</span>.`
        const translation = translator.translate({ locale, text });
        assert.equal(translation, solution, "Correct translation")
    });
    test("Can you toss this in the trashcan for me? to British English", function () {
        const text = "Can you toss this in the trashcan for me?";
        const locale = 'american-to-british';
        const solution = `Can you toss this in the <span class=\"highlight\">bin</span> for me?`
        const translation = translator.translate({ locale, text });
        assert.equal(translation, solution, "Correct translation")
    });
    test("The parking lot was full. to British English", function () {
        const text = "The parking lot was full.";
        const locale = 'american-to-british';
        const solution = `The <span class=\"highlight\">car park</span> was full.`
        const translation = translator.translate({ locale, text });
        assert.equal(translation, solution, "Correct translation")
    });
    test("Like a high tech Rube Goldberg machine. to British English", function () {
        const text = "Like a high tech Rube Goldberg machine.";
        const locale = 'american-to-british';
        const solution = `Like a high tech <span class=\"highlight\">Heath Robinson device</span>.`
        const translation = translator.translate({ locale, text });
        assert.equal(translation, solution, "Correct translation")
    });
    test("To play hooky means to skip class or work. to British English", function () {
        const text = "To play hooky means to skip class or work.";
        const locale = 'american-to-british';
        const solution = `To <span class=\"highlight\">bunk off</span> means to skip class or work.`
        const translation = translator.translate({ locale, text });
        assert.equal(translation, solution, "Correct translation")
    });
    test("No Mr. Bond, I expect you to die. to British English", function () {
        const text = "No Mr. Bond, I expect you to die.";
        const locale = 'american-to-british';
        const solution = `No <span class=\"highlight\">Mr</span> Bond, I expect you to die.`
        const translation = translator.translate({ locale, text });
        assert.equal(translation, solution, "Correct translation")
    });
    test("Dr. Grosh will see you now. to British English", function () {
        const text = "Dr. Grosh will see you now.";
        const locale = 'american-to-british';
        const solution = `<span class=\"highlight\">Dr</span> Grosh will see you now.`
        const translation = translator.translate({ locale, text });
        assert.equal(translation, solution, "Correct translation")
    });
    test("Lunch is at 12:15 today. to British English", function () {
        const text = "Lunch is at 12:15 today.";
        const locale = 'american-to-british';
        const solution = `Lunch is at <span class=\"highlight\">12.15</span> today.`
        const translation = translator.translate({ locale, text });
        assert.equal(translation, solution, "Correct translation")
    });
});

suite('American to British Unit Tests', () => {
    test('We watched the footie match for a while. to American English', function () {
        const text = "We watched the footie match for a while.";
        const locale = 'british-to-american';
        const solution = 'We watched the <span class=\"highlight\">soccer</span> match for a while.'
        const translation = translator.translate({ locale, text });
        assert.equal(translation, solution, "Correct translation")
    });
    test('Paracetamol takes up to an hour to work. to American English', function () {
        const text = "Paracetamol takes up to an hour to work.";
        const locale = 'british-to-american';
        const solution = '<span class=\"highlight\">Tylenol</span> takes up to an hour to work.'
        const translation = translator.translate({ locale, text });
        assert.equal(translation, solution, "Correct translation")
    });
    test('First, caramelise the onions. to American English', function () {
        const text = "First, caramelise the onions.";
        const locale = 'british-to-american';
        const solution = 'First, <span class=\"highlight\">caramelize</span> the onions.'
        const translation = translator.translate({ locale, text });
        assert.equal(translation, solution, "Correct translation")
    });
    test('I spent the bank holiday at the funfair. to American English', function () {
        const text = "I spent the bank holiday at the funfair.";
        const locale = 'british-to-american';
        const solution = 'I spent the <span class=\"highlight\">public holiday</span> at the <span class=\"highlight\">carnival</span>.'
        const translation = translator.translate({ locale, text });
        assert.equal(translation, solution, "Correct translation")
    });
    test('I had a bicky then went to the chippy. to American English', function () {
        const text = "I had a bicky then went to the chippy.";
        const locale = 'british-to-american';
        const solution = 'I had a <span class=\"highlight\">cookie</span> then went to the <span class=\"highlight\">fish-and-chip shop</span>.'
        const translation = translator.translate({ locale, text });
        assert.equal(translation, solution, "Correct translation")
    });
    test("I've just got bits and bobs in my bum bag. to American English", function () {
        const text = "I've just got bits and bobs in my bum bag.";
        const locale = 'british-to-american';
        const solution = "I've just got <span class=\"highlight\">odds and ends</span> in my <span class=\"highlight\">fanny pack</span>."
        const translation = translator.translate({ locale, text });
        assert.equal(translation, solution, "Correct translation")
    });
    test("The car boot sale at Boxted Airfield was called off. to American English", function () {
        const text = "The car boot sale at Boxted Airfield was called off.";
        const locale = 'british-to-american';
        const solution = "The <span class=\"highlight\">swap meet</span> at Boxted Airfield was called off."
        const translation = translator.translate({ locale, text });
        assert.equal(translation, solution, "Correct translation")
    });
    test("Have you met Mrs Kalyani? to American English", function () {
        const text = "Have you met Mrs Kalyani?";
        const locale = 'british-to-american';
        const solution = "Have you met <span class=\"highlight\">Mrs.</span> Kalyani?"
        const translation = translator.translate({ locale, text });
        assert.equal(translation, solution, "Correct translation")
    });
    test("Prof Joyner of King's College, London. to American English", function () {
        const text = "Prof Joyner of King's College, London.";
        const locale = 'british-to-american';
        const solution = "<span class=\"highlight\">Prof.</span> Joyner of King's College, London.";
        const translation = translator.translate({ locale, text });
        assert.equal(translation, solution, "Correct translation")
    });
    test("Tea time is usually around 4 or 4.30. to American English", function () {
        const text = "Tea time is usually around 4 or 4.30.";
        const locale = 'british-to-american';
        const solution = "Tea time is usually around 4 or <span class=\"highlight\">4:30</span>.";
        const translation = translator.translate({ locale, text });
        assert.equal(translation, solution, "Correct translation")
    });
});