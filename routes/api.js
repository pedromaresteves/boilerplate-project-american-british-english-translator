'use strict';

const Translator = require('../components/translator.js');
const validLocales = require("../components/valid-locales.js");

module.exports = function (app) {

  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      let translatedText = "Everything looks good to me!";
      if (!req.body.text) return res.send({ error: 'No text to translate' });
      if (!validLocales.includes(req.body.locale)) return res.send({ error: 'Invalid value for locale field' });
      const translation = translator.translate(req.body);
      if (req.body.text !== translation) translatedText = translation
      return res.send({ text: req.body.text, translation: translatedText })
    });
};
