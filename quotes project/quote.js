const countdownElement = document.getElementById('countdown');
const quoteElement = document.getElementById('quote');

const quotes = [
    "The best way to predict the future is to invent it. - Alan Kay",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "That which does not kill us makes us stronger. - Friedrich Nietzsche"
];


let currentQuoteIndex = 0;
let timeLeft = 30;

function updateCountdown() {
    countdownElement.textContent = timeLeft;
    if (timeLeft > 0) {
        timeLeft--;
    } else {
        showQuote();
        timeLeft = 30;
    }
}

function showQuote() {
    quoteElement.textContent = quotes[currentQuoteIndex];
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
}

setInterval(updateCountdown, 1000);
