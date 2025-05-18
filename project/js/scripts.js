const quotes = [
    { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
    { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
    { text: "Be humble, be hungry, and always be the hardest worker in the room.", author: "Dwayne Johnson"}
  ];
  
  function getRandomQuote() {
    const index = Math.floor(Math.random() * quotes.length);

    
    return quotes[index];
  }
  

  function clearQuoteBox() {
    document.getElementById("quote-text").textContent = "";
    document.getElementById("quote-author").textContent = "";
  }
  

  function displayQuote(quote) {

    document.getElementById("quote-text").textContent = quote.text;
    document.getElementById("quote-author").textContent = quote.author ? `- ${quote.author}` : "- Unknown";
  }
  
  function generateNewQuote() {
    clearQuoteBox();
    const quote = getRandomQuote();
    displayQuote(quote);
  }
  
  function listAllQuotes() {
    const container = document.getElementById("all-quotes");
    container.innerHTML = "";

    const list = document.createElement("ul");

    for (let i = 0; i < quotes.length; i++) {
      const item = document.createElement("li");
      const quote = quotes[i];
      const text = `${quote.text} — ${quote.author || "Unknown"}`;
      item.textContent = text;
      list.appendChild(item);
    }
    container.appendChild(list);
    container.classList.remove("hidden");
    container.classList.add("visible");
  }
  
  function hideAllQuotes() {
    const container = document.getElementById("all-quotes");

    container.classList.remove("visible");
    container.classList.add("hidden");
    container.innerHTML = "";
  }
  
  function setupEventListeners() {
    document.getElementById("generate-quote").addEventListener("click", generateNewQuote);
    
    document.getElementById("show-all").addEventListener("click", listAllQuotes);
    document.getElementById("hide-all").addEventListener("click", hideAllQuotes);
  }
  
  function initializeApp() {
    setupEventListeners();
    generateNewQuote();
  }
  
  initializeApp();
  