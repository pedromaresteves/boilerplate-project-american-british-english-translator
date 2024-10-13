const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
    test('Correct request', function (done) {
        const text = "You're my favorite";
        const locale = "american-to-british";
        const expectedTranslation = `You're my <span class="highlight">favourite</span>`;
        chai.request(server).post("/api/translate").send({ locale, text })
            .then(res => {
                assert.equal(res.body.translation, expectedTranslation, "Correct translation")
            });
        done();
    });
    test('Invalid locale request', function (done) {
        const text = "You're my favorite";
        const locale = "invalid";
        const expectedError = `Invalid value for locale field`;
        chai.request(server).post("/api/translate").send({ locale, text })
            .then(res => {
                assert.equal(res.body.error, expectedError, "Correct translation")
            });
        done();
    });
    test('Empty text request', function (done) {
        const text = "";
        const locale = "american-to-british";
        const expectedError = `No text to translate`;
        chai.request(server).post("/api/translate").send({ locale, text })
            .then(res => {
                assert.equal(res.body.error, expectedError, "Correct translation")
            });
        done();
    });
    test('Missing text field request', function (done) {
        const locale = "american-to-british";
        const expectedError = `No text to translate`;
        chai.request(server).post("/api/translate").send({ locale })
            .then(res => {
                assert.equal(res.body.error, expectedError, "Correct translation")
            });
        done();
    });
    test('Missing locale field request', function (done) {
        const text = "You're my favorite";
        const expectedError = `Invalid value for locale field`;
        chai.request(server).post("/api/translate").send({ text })
            .then(res => {
                assert.equal(res.body.error, expectedError, "Correct translation")
            });
        done();
    });
    test('No translation needed', function (done) {
        const text = "You're my favourite";
        const locale = "american-to-british";
        const expectedTranslation = `Everything looks good to me!`;
        chai.request(server).post("/api/translate").send({ locale, text })
            .then(res => {
                assert.equal(res.body.translation, expectedTranslation, "Correct translation")
            });
        done();
    });
});
