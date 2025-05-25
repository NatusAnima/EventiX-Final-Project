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
