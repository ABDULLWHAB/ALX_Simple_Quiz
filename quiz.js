// Function to check the user's answer
function checkAnswer() {
    // Declare the correct answer
    const correctAnswer = "4";  // Correct answer to the quiz question
    
    // Retrieve the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');  // Get the selected radio button
    
    // Get the feedback element where the result will be displayed
    const feedbackElement = document.getElementById('feedback');
    
    // Check if the user has selected an option
    if (userAnswer) {
        // Compare the userAnswer (selected radio button) itself with the correctAnswer
        if (userAnswer.value === correctAnswer) {  
            feedbackElement.textContent = "Correct! Well done.";  // Display success message
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";  // Display error message
        }
    } else {
        // If no option is selected, prompt the user to select an answer
        feedbackElement.textContent = "Please select an answer before submitting.";  // Prompt to select an option
    }
}

// Add an event listener to the submit button to trigger the checkAnswer function when clicked
document.getElementById('submit-answer').addEventListener('click', checkAnswer);

