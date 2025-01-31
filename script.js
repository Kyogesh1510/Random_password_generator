// Wait until the document is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Generate first password when page loads
    generatePassword();
    
    // Add click events to buttons
    document.getElementById('generate-btn').addEventListener('click', generatePassword);
    document.getElementById('copy-btn').addEventListener('click', copyPassword);
});

// Main password generation function
function generatePassword() {
    // 1. Get all user selections
    const passwordLength = document.getElementById('length').value;
    const useLowercase = document.getElementById('lowercase').checked;
    const useUppercase = document.getElementById('uppercase').checked;
    const useNumbers = document.getElementById('numbers').checked;
    const useSymbols = document.getElementById('symbols').checked;

    // 2. Create character pools based on selections
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    // 3. Build available characters string
    let availableCharacters = '';
    if (useLowercase) availableCharacters += lowercaseChars;
    if (useUppercase) availableCharacters += uppercaseChars;
    if (useNumbers) availableCharacters += numberChars;
    if (useSymbols) availableCharacters += symbolChars;

    // 4. Check if at least one character type is selected
    if (availableCharacters.length === 0) {
        alert('Please select at least one character type!');
        return;
    }

    // 5. Generate password by randomly picking characters
    let password = '';
    for (let i = 0; i < passwordLength; i++) {
        const randomPosition = Math.floor(Math.random() * availableCharacters.length);
        password += availableCharacters[randomPosition];
    }

    // 6. Display the generated password
    document.getElementById('password').value = password;
}

// Copy password to clipboard
function copyPassword() {
    // Get password field element
    const passwordField = document.getElementById('password');
    
    // Select the text in the password field
    passwordField.select();
    
    // Copy selected text to clipboard
    navigator.clipboard.writeText(passwordField.value);
    
    // Show confirmation message
    alert('Password copied to clipboard!');
}