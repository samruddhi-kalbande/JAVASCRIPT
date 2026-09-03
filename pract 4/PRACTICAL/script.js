const input = document.getElementById('textInput');
const button = document.getElementById('checkBtn');
const resultBox = document.getElementById('result');

function isPalindrome(text) {
  try {
    const cleaned = text.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
  } catch (error) {
    return false;
  }
}

function showResult(message, isPalindromeText) {
  resultBox.textContent = message;
  resultBox.className = `result ${isPalindromeText ? 'success' : 'error'}`;
}

button.addEventListener('click', () => {
  const text = input.value.trim();

  if (text === '') {
    showResult('Please enter some text.', false);
    return;
  }

  const result = isPalindrome(text);
  showResult(result ? 'It is a palindrome!' : 'It is not a palindrome.', result);
});

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    const text = input.value.trim();

    if (text === '') {
      showResult('Please enter some text.', false);
      return;
    }

    const result = isPalindrome(text);
    showResult(result ? 'It is a palindrome!' : 'It is not a palindrome.', result);
  }
});
