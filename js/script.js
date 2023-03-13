//A Random Quote Generator


// This array stores quote objects. 
// Each object has a quote, source, citation, and year property.

var quotes = [
  {
    quote: `Do not go gentle into that good night,
            Old age should burn and rave at close of day;\n
            Rage, rage against the dying of the light.`,
    source: "Dylan Thomas",
    citation: "Do Not Go Gentle Into That Good Night",
    year: "1951",
  },
  {
    quote: `Is Pious pious 'cause God loves pious?
            Socrates asks, "Whose bias do y'all seek?`,
    source: "Jay-Z",
    citation: "No Church in The Wild",
    year: "2011"
  },
  {
    quote:  `I sometimes have nightmares about a world of echoes 
            in which there are only echoes, and echoes of echoes, 
            and echoes of echoes of echoes—reverberating forever down 
            the empty corridors of my mind.`,
    source: "Alan Watts",
    citation: "Individual and the World",
    year: "n.d."
  },
  {
    quote:  `The nitrogen in our DNA, the calcium in our teeth, 
            the iron in our blood, the carbon in our apple pies were 
            made in the interiors of collapsing stars. We are made of starstuff.`,
    source: "Carl Sagan",
    citation: "Cosmos",
    year: "1980"
  },
  {
    quote: `What can be asserted without evidence can also be dismissed without evidence.`,
    source: "Christopher Hitchens",
    citation: "Slate Magazine",
    year: "2003"
  },
  {
    quote: `And these children that you spit on
            As they try to change their worlds
            Are immune to your consultations
            They're quite aware of what they're goin' through...`,
    source: "David Bowie",
    citation: "Changes",
    year: "1972"
  },
  {
    quote: `He who fights with monsters should look to it that he 
            himself does not become a monster. And if you gaze long into an abyss, 
            the abyss also gazes into you`,
    source: "Friedrich Nietzsche",
    citation: "Beyond Good and Evil",
    year: "1886"

  }
];



// This function returns a random index of the list of quotes
function getRandomQuote(){
  let randomQuoteIndex = Math.floor(Math.random() * quotes.length);
  return randomQuoteIndex;
}


// Stores current quote index
let currentQuoteIndex;

// This function prints a random quote to screen.
function printQuote(e){
  let newQuoteIndex = getRandomQuote();

  while(newQuoteIndex == currentQuoteIndex){
    newQuoteIndex = getRandomQuote();
  }

  currentQuoteIndex = newQuoteIndex;

  let html = `<p class="quote">`;
  html += quotes[currentQuoteIndex].quote + '<p>';
  html += `<p class="source">${quotes[currentQuoteIndex].source}`;
  if (quotes[currentQuoteIndex].hasOwnProperty('citation')){
    html += `<span class="citation">${quotes[currentQuoteIndex].citation}</span>`;
  }

  if (quotes[currentQuoteIndex].hasOwnProperty('year')){
    html += `<span class="year">${quotes[currentQuoteIndex].year}</span>`;
  }
  html += "</p>";
  document.querySelector('.quote-box').innerHTML = html;
}

//click event listener for the print quote button
document.getElementById('load-quote').addEventListener("click", printQuote, false);
