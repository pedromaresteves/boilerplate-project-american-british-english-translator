const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
    translate(input) {
        const { locale, text } = input;
        if (locale === 'american-to-british') return this.translatingFromAmericanToBritish(text);
        if (locale === 'british-to-american') return this.translatingFromBritishToAmerican(text);
    }
    translatingFromAmericanToBritish(text) {
        const americanWordsAndSpellingArray = [americanOnly, americanToBritishSpelling];
        americanWordsAndSpellingArray.forEach(data => {
            for (let key in data) {
                let regex = new RegExp(`(?<=\\s|^)(${key})\\b`, "gi");
                text = text.replaceAll(regex, `<span class="highlight">${data[key]}</span>`);
            }
        });
        for (let key in americanToBritishTitles) {
            let regex = new RegExp(`(${key.replace(".", "\\.")})`, "gi");
            const britishTitle = americanToBritishTitles[key][0].toUpperCase() + americanToBritishTitles[key].substring(1);
            text = text.replaceAll(regex, `<span class="highlight">${britishTitle}</span>`)
        }
        text = this.getAmericanTimeAndFormatToBritish(text)
        return this.capitalize(text);
    }
    translatingFromBritishToAmerican(text) {
        for (let key in britishOnly) {
            let regex = new RegExp(`(?<=\\s|^)(${key})\\b`, "gi");
            text = text.replaceAll(regex, `<span class="highlight">${britishOnly[key]}</span>`);
        }
        for (let key in americanToBritishSpelling) {
            let regex = new RegExp(`(${americanToBritishSpelling[key]})\\b`, "gi");
            text = text.replaceAll(regex, `<span class="highlight">${key}</span>`);
        }
        for (let key in americanToBritishTitles) {
            let regex = new RegExp(`(${americanToBritishTitles[key]})\\b`, "gi");
            const americanTitle = key[0].toUpperCase() + key.substring(1);
            text = text.replaceAll(regex, `<span class="highlight">${americanTitle}</span>`);
        }
        text = this.getBritishTimeAndFormatToAmerican(text)
        return this.capitalize(text);
    }
    capitalize(text) {
        return text[0].toUpperCase() + text.substring(1);
    }
    getAmericanTimeAndFormatToBritish(text) {
        const regex = /(?!\d):(?=\d)/gi;
        const allTimeMatches = Array.from(text.matchAll(regex));
        if (!allTimeMatches.length) return text;
        const allTimes = allTimeMatches.map(item => {
            return text.substring(item.index - 2, item.index + 3)
        });
        allTimes.forEach(item => {
            let formattedTime = item.replace(":", ".")
            text = text.replace(item, `<span class="highlight">${formattedTime}</span>`)
        });
        return text;
    }
    getBritishTimeAndFormatToAmerican(text) {
        const regex = /(?!\d)\.(?=\d)/gi;
        const allTimeMatches = Array.from(text.matchAll(regex));
        if (!allTimeMatches.length) return text;
        const allTimes = allTimeMatches.map(item => {
            let digitsBeforeDot = 1;
            if (Number(text[item.index - 2])) digitsBeforeDot += 1
            return text.substring(item.index - digitsBeforeDot, item.index + 3)
        });

        allTimes.forEach(item => {
            let formattedTime = item.replace(".", ":")
            text = text.replace(item, `<span class="highlight">${formattedTime}</span>`)
        });
        return text;
    }
}

module.exports = Translator;