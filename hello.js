// Select the <div> element with id "message"
const messageElement = document.getElementById('message');

// Define the text to display
const text = `
    Dear Zhao, I hope this letter finds you well.\n
    I write to inform you of an inheritance that has befallen\n
    you by your great ancestor Ghengis Khan.\n
    You are now the owner of a humble yet storied establishment in Karakorum.\n
    The shop, known to all as NAME, has long been a pillar of Mongolia,\n
    offering goods and wares for generations.\n
    However, in recent times, its fortunes have waned, and its shelves lie barren,\n
    yearning to be replenished with the treasures of old.\n
    It is said that with great responsibility comes great opportunity.\n
    The townspeople eagerly await your arrival, believing that under your stewardship\n
    NAME can once again thrive and reclaim its former glory.\n
      `;

// Initialize a variable to keep track of the current letter index
let letterIndex = 0;

// Create an interval that will update the text content of the <div> element every 100 milliseconds
const intervalId = setInterval(() => {
    // Add the next letter to the text content of the <div> element
    messageElement.innerText += text[letterIndex];

    // Increment the letter index
    letterIndex++;

    // Check if we have reached the end of the text
    if (letterIndex >= text.length) {
        // If so, clear the interval to stop the animation
        clearInterval(intervalId);
    }
}, 100);
