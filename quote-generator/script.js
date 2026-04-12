const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');

// Using a free quoting API
const api_url = "https://api.quotable.io/random";

async function getQuote() {
  try {
    quoteElement.textContent = "Loading...";
    authorElement.textContent = "";
    
    const response = await fetch(api_url);
    const data = await response.json();
    
    quoteElement.textContent = data.content;
    authorElement.textContent = `- ${data.author}`;
  } catch (error) {
    quoteElement.textContent = "An error occurred fetching the quote.";
    authorElement.textContent = "";
  }
}

newQuoteBtn.addEventListener('click', getQuote);

// Load initial quote
getQuote();
