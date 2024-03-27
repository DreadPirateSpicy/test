// Select the <div> element with id "message"
const messageElement = document.getElementById('message');

// Define the text to display
const text = `
    Dear  Zhao, I hope this letter finds you well.
    I write to inform you of an inheritance that has befallen
    you by your great ancestor Ghengis Khan.
    You are now the owner of a humble yet storied establishment in Karakorum.
    The shop, known to all as NAME, has long been a pillar of Mongolia,
    offering goods and wares for generations.
    However, in recent times, its fortunes have waned, and its shelves lie barren,
    yearning to be replenished with the treasures of old.
    It is said that with great responsibility comes great opportunity.
    The townspeople eagerly await your arrival, believing that under your stewardship
    NAME can once again thrive and reclaim its former glory.
      `;

// Initialize a variable to keep track of the current letter index
let letterIndex = 0;

const intervalId = setInterval(() => {
    // If the next character is a space, add a non-breaking space (&nbsp;) to maintain the space
    if (text[letterIndex] === ' ') {
        messageElement.innerHTML += '&nbsp;';
    } else {
        // Add the next character to the text content of the <div> element
        messageElement.innerText += text[letterIndex];
    }

    // Increment the letter index
    letterIndex++;

    // Check if we have reached the end of the text
    if (letterIndex >= text.length) {
        // If so, clear the interval to stop the animation
        clearInterval(intervalId);
    }
}, 50);
