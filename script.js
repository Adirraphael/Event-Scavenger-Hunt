// Start Button Event
document.querySelector('#button1').addEventListener('click', function() {
    document.querySelector('#hint1').textContent = "Good job! Now hover over the next clue!";
    document.querySelector('#hint2').classList.remove('hidden');
  });
  
  // Hover Event for Next Hint
  document.querySelector('#hint2').addEventListener('mouseover', function() {
    document.querySelector('#hoverBox').classList.remove('hidden');
  });
  
  // Click Event on HoverBox
  document.querySelector('#hoverBox').addEventListener('click', function() {
    document.querySelector('#hoverBox').textContent = "Enter something in the input field below!";
    document.querySelector('#inputField').classList.remove('hidden');
  });
  
  // Input Field Event
  document.querySelector('#inputField').addEventListener('input', function(event) {
    const input = event.target.value.toLowerCase().trim(); // Ensures comparison is case-insensitive and removes spaces
    if (input === 'treasure') {
      document.querySelector('#finalHint').classList.remove('hidden');
      document.querySelector('#treasure').classList.remove('hidden');
      document.querySelector('#hoverBox').textContent = "Well done!";
    }
  });
  
  