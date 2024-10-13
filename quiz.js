// Function to check the user's answer
function checkAnswer() {
    // Declare the correct answer
    const correctAnswer = "4";
    
    // Retrieve the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');
    
    // Get the feedback element
    const feedbackElement = document.getElementById('feedback');
    
    // Check if the user has selected an option
    if (userAnswer) {
        // Compare the user's answer with the correct answer
        if (userAnswer.value === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
        }
    } else {
        // If no option is selected, prompt the user to select an answer
        feedbackElement.textContent = "Please select an answer before submitting.";
    }
}

// Add an event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
