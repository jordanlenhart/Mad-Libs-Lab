//madLibs.js

// Step 2
// Boolean Example
const adjective_timeOfDay = "dark";
if (adjective_timeOfDay == "dark") {
    timeOfDay = "night"
} else if (adjective_timeOfDay == "bright") {
    timeOfDay = "morning"
} else timeOfDay = "day"

// Strings Example
const shipName= "Santa Maria";
const verb_adverb = "flowed beaautifully";
const adjective_noun = "mysterious chest";

// Object with Properties Example
const leader = {
    name: "Captain John",
    age: 32,
    description: "Captain John smells weird on the occasion."
}

// Numbers Example with a Bonus Boolean
const mathExample = 5*5;
if (mathExample == 25) {
    mathReaction = "Incredible, right?";
} else {
    mathReaction = "Oops, that was wrong, huh?";
}
    


// Step 1
const story = `One ${adjective_timeOfDay} ${timeOfDay}, I set sail on a pirate ship named ${shipName}. The endless sea ${verb_adverb} before us. Just then, we spotted a ${adjective_noun} floating in the water. 'Could it be treasure?' the ${leader.name} exclaimed. We hauled it aboard and opened it. Did you know 5 x 5 equals ${mathExample}? 
${mathReaction}`;

document.getElementById("madlibs-output").textContent = story;
console.log(story);
