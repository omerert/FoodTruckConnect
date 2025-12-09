// Initialize rotating text on homepage
export function initRotatingText() {
    const headingElement = document.querySelector('#home-view h2');
    const subtitleElement = document.querySelector('#home-view p');
    if (!headingElement || !subtitleElement) return;

    const phrases = [
        {
            heading: 'Discover Flavor & Community',
            subtitle: 'Connect with culture through food. Find your next meal, share your story, and meet new friends in a welcoming community for immigrants and locals alike.'
        },
        {
            heading: 'Where Flavor Meets Community',
            subtitle: 'Connect with others through the foods you love. Discover local trucks, share your story, and make friends in a community that welcomes immigrants and locals alike.'
        },
        {
            heading: 'Food That Brings Us Together',
            subtitle: 'Connect with culture through food. Explore new meals, share your journey, and build friendships in a welcoming space for immigrants and locals.'
        }
    ];

    let currentIndex = 0;

    // Set initial styling
    headingElement.style.transition = 'opacity 1.5s ease-in-out';
    subtitleElement.style.transition = 'opacity 1.5s ease-in-out';
    headingElement.style.opacity = '1';
    subtitleElement.style.opacity = '1';
    headingElement.textContent = phrases[currentIndex].heading;
    subtitleElement.textContent = phrases[currentIndex].subtitle;

    // Rotate text every 15 seconds
    setInterval(() => {
        // Fade out
        headingElement.style.opacity = '0';
        subtitleElement.style.opacity = '0';

        // Change text and fade in during the same fade period
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % phrases.length;
            headingElement.textContent = phrases[currentIndex].heading;
            subtitleElement.textContent = phrases[currentIndex].subtitle;
            // Trigger reflow to ensure transition works
            void headingElement.offsetWidth;
            headingElement.style.opacity = '1';
            subtitleElement.style.opacity = '1';
        }, 1500);
    }, 15000);
}