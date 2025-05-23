const quotes = [
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "We are what our thoughts have made us; so take care about what you think. Words are secondary. Thoughts live; they travel far.- Swami Vivekananda",
    "The only way to do great work is to love what you do. – Steve Jobs",
    "You are never too old to set another goal. – C.S. Lewis",
    "It's important to learn and not repeat the same mistakes. What's done is done- MS Dhoni",
   "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
   "Even death is not to be feared by one who has lived wisely- Buddha", 
   "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    "Do what you can, with what you have, where you are. – Theodore Roosevelt",
    "It always seems impossible until it's done. – Nelson Mandela"
];

function generateQuote() {
    // Smooth fade out effect
    const quoteElement = document.getElementById("quote");
    quoteElement.style.opacity = 0;
    
    setTimeout(() => {
        // Randomly select a quote
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteElement.textContent = quotes[randomIndex];
        
        // Randomly change colors (more subtle and pleasing)
        const hue = Math.floor(Math.random() * 360);
        const pastelColor = `hsl(${hue}, 70%, 60%)`;
        const bgColor = `hsl(${hue}, 30%, 95%)`;
        
        quoteElement.style.color = pastelColor;
        quoteElement.style.borderLeftColor = pastelColor;
        document.body.style.backgroundColor = bgColor;
        
        // Smooth fade in effect
        quoteElement.style.opacity = 1;
    }, 500);
}
function confirmRedirect() {
    const userConfirmed = confirm("You're about to visit BrainyQuote.com for more inspirational quotes. Do you want to continue?");
    if (userConfirmed) {
        window.open("https://www.brainyquote.com/", "_blank");
    }
   }