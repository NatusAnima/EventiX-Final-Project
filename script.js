// JavaScript for dynamic content and input/output demonstration

// Display current date and time
function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    document.getElementById('js-output').textContent = `Current Date and Time: ${now.toLocaleDateString('en-US', options)}`;
}

// Call it once on load and then every second
updateDateTime();
setInterval(updateDateTime, 1000);

// Simple input/output with a greeting
document.getElementById('greetButton').addEventListener('click', function() {
    const nameInput = document.getElementById('nameInput');
    const greetingMessage = document.getElementById('greetingMessage');
    const name = nameInput.value.trim(); // Get input value and remove whitespace

    if (name) {
        greetingMessage.textContent = `Hello, ${name}! Welcome to EventiX.`;
        nameInput.value = ''; // Clear the input field
    } else {
        greetingMessage.textContent = 'Please enter your name to say hello!';
    }
});

// JavaScript for dynamic content (interactive element) on the creator page
function updateDateTimeCreator() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    document.getElementById('js-output-creator').textContent = `Current Date and Time: ${now.toLocaleDateString('en-US', options)}`;
}
updateDateTimeCreator();
setInterval(updateDateTimeCreator, 1000);

document.getElementById('greetButtonCreator').addEventListener('click', function() {
    const nameInput = document.getElementById('nameInputCreator');
    const greetingMessage = document.getElementById('greetingMessageCreator');
    const name = nameInput.value.trim();
    if (name) {
        greetingMessage.textContent = `Hello, ${name}! Thanks for visiting the Creator page.`;
        nameInput.value = '';
    } else {
        greetingMessage.textContent = 'Please enter your name to say hello!';
    }
});

// JavaScript for dynamic content (interactive element) on the team page
function updateDateTimeTeam() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    document.getElementById('js-output-team').textContent = `Current Date and Time: ${now.toLocaleDateString('en-US', options)}`;
}
updateDateTimeTeam();
setInterval(updateDateTimeTeam, 1000);

document.getElementById('greetButtonTeam').addEventListener('click', function() {
    const nameInput = document.getElementById('nameInputTeam');
    const greetingMessage = document.getElementById('greetingMessageTeam');
    const name = nameInput.value.trim();
    if (name) {
        greetingMessage.textContent = `Hello, ${name}! Thanks for visiting the Team page.`;
        nameInput.value = '';
    } else {
        greetingMessage.textContent = 'Please enter your name to say hello!';
    }
});
