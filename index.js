let sentenceLength = 0;
let wordCount = 0;
let vowelCount = 0;
const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
let sentence = "my name is john olawoye";

for (let char of sentence) {
    sentenceLength++;
    if (vowels.has(char)) {
        vowelCount++;
    }

    if (char === ' ') {
        wordCount++;
    }

    if (char === '.') {
        break;
    }
}

// Increment word count for the last word if the sentence is not empty
if (sentence.trim().length > 0) {
    wordCount++;
}

console.log(`Sentence length: ${sentenceLength} characters`);
console.log(`Number of words: ${wordCount}`);
console.log(`Number of vowels: ${vowelCount}`);