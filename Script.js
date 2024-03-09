const moodInput = document.getElementById('moodInput');
const enterButton = document.getElementById('enterButton');
const moodscape = document.getElementById('moodscape');

enterButton.addEventListener('click', function() {
    const mood = moodInput.value.toLowerCase(); // Convert input to lowercase for easier matching 
    generateMoodscape(mood);
});

function generateMoodscape(mood) {
    moodscape.innerHTML = ''; // Clear previous moodscape

    // Expanded mood and color mapping
    const moodColors = {
        happy: 'yellow',
        sad: 'blue',
        angry: 'red',
        calm: '#90EE90', // Light green
        energetic: 'orange',
        // Add more moods and colors here!
    };

    // Determine shape based on mood
    let shapeType = 'circle';
    if (mood === 'angry') shapeType = 'triangle'; 
    if (mood === 'energetic') shapeType = 'star'; 
    // Add more shape variations

    createShape(moodColors[mood] || 'gray', shapeType); // Use default gray for unknown moods
}

function createShape(color, shapeType) {
    const shape = document.createElement('div');
    shape.style.backgroundColor = color;

    // Basic shape styling (you can customize this)
    if (shapeType === 'circle') {
        shape.style.width = '200px';
        shape.style.height = '200px';
        shape.style.borderRadius = '50%';
    } else if (shapeType === 'triangle') {
        // ... add triangle styling
    } else if (shapeType === 'star') {
        // ... add star styling
    }

    // ... add more shape styles as needed

    moodscape.appendChild(shape);
}
