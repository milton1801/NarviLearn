document.addEventListener('DOMContentLoaded', () => {
  const questions = document.querySelectorAll('.question');
  let currentQuestionIndex = 0;

  // Iterate through all questions
  questions.forEach((question, index) => {
    const responseButtons = question.querySelectorAll('.response');
    const nextButton = question.querySelector('.next');

    // Add click event to response buttons
    responseButtons.forEach((button) => {
      button.addEventListener('click', () => {
        // Remove 'selected' class from all buttons in the same question
        responseButtons.forEach((btn) => btn.classList.remove('selected'));

        // Add 'selected' class to the clicked button
        button.classList.add('selected');

        // Enable the "Next" button
        if (nextButton) {
          nextButton.disabled = false;
        }
      });
    });

    // Add click event to the "Next" button
    if (nextButton) {
      nextButton.addEventListener('click', () => {
        // Hide the current question
        questions[currentQuestionIndex].style.display = 'none';

        // Show the next question if it exists
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
          questions[currentQuestionIndex].style.display = 'block';
        }
      });
    }
  });
});
// Button take survey
document.addEventListener('DOMContentLoaded', () => {
  const takeSurveyButton = document.getElementById('take');
  const surveyContainer = document.getElementById('survey');
  const questionsContainer = document.getElementById('questions');
  const nextButtons = document.querySelectorAll('.next');
  const lastParagraph = document.querySelector('#last'); // Target the #last p element
  

  // Show the first question when "Take Survey" is clicked
  takeSurveyButton.addEventListener('click', () => {
    surveyContainer.style.display = 'none';
    questionsContainer.style.display = 'block';
    document.getElementById('questions1').style.display = 'block';
  });

  // Handle "Next" button clicks
  nextButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const currentQuestion = button.parentElement;
      const nextQuestionId = button.getAttribute('data-next');

      // Hide the current question
      currentQuestion.style.display = 'none';

      // Show the next question or the final message
      if (nextQuestionId === 'end') {
        // Show the #last p element under #questions3
        if (lastParagraph && questions3) {
          lastParagraph.style.display = 'block'; // Make the #last p element visible
          questions3.appendChild(lastParagraph); // Move #last p under #questions3
        }
      } else {
        const nextQuestion = document.getElementById(nextQuestionId);
        if (nextQuestion) {
          nextQuestion.style.display = 'block';
        }
      }
    });
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const finishButton = document.getElementById('finish');
  const lastSection = document.getElementById('last');

  // Add click event listener to the "Finish" button
  finishButton.addEventListener('click', () => {
    // Show the #last element
    lastSection.style.display = 'block';

    // Start a 5-second timer
    setTimeout(() => {
      // Redirect to Home.html
      window.location.href = 'Home.html';
    }, 5000); // 5000ms = 5 seconds
      // Add a rocket under #last
      const rocket = document.createElement('div');
      rocket.innerHTML = '🚀'; // Unicode rocket emoji
      rocket.style.fontSize = '50px';
      rocket.style.marginLeft = '18%';
      rocket.style.marginTop = '20px';
  
      // Append the rocket to #last
      lastSection.appendChild(rocket);
  });
   
});
// color question
document.addEventListener('DOMContentLoaded', () => {
  // Select all containers (#questions, #questions2, #questions3)
  const containers = document.querySelectorAll('#questions, #questions2, #questions3');

  // Loop through each container
  containers.forEach(container => {
    // Add a click event listener to each container
    container.addEventListener('click', (event) => {
      // Check if the clicked element is a button
      if (event.target.tagName === 'BUTTON') {
        // Remove the 'active' class from all buttons in the container
        const buttons = container.querySelectorAll('button');
        buttons.forEach(button => button.classList.remove('active'));

        // Add the 'active' class to the clicked button
        event.target.classList.add('active');
      }
    });
  });
});