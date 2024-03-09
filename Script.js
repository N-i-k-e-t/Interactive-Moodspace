const moodInput = document.getElementById('moodInput');
const enterButton = document.getElementById('enterButton');
const moodscape = document.getElementById('moodscape');

enterButton.addEventListener('click', function() {
    const mood = moodInput.value;
    generateMoodscape(mood);
});

function generateMoodscape(mood) {
    // Clear any existing moodscape elements 
    moodscape.innerHTML = ''; 

    // Basic color mapping (expand this!)
    let color = 'gray';  
    if (mood === 'happy') color = 'yellow'; 
    if (mood === 'sad') color = 'blue'; 

    // Create a simple shape
    const shape = document.createElement('div');
    shape.style.backgroundColor = color;
    shape.style.width = '200px';
    shape.style.height = '150px';
    shape.style.borderRadius = '50%';
    moodscape.appendChild(shape); 
}
