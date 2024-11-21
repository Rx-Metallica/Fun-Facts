const facts = [
    "I am 23 years old and have a passion for exploring new places.",
    "Traveling is my favorite hobby, and I've visited several countries so far.",
    "I enjoy immersing myself in different cultures and trying local cuisines.",
    "I love capturing my travel experiences through photography.",
    "Planning my next adventure is always on my mind."
];

document.getElementById('generate-fact').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact-display').textContent = facts[randomIndex];
});
