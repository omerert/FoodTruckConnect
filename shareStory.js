// New shareStory.js module
import { foodTruckSchedule } from './calendarData.js';

// Helper: get unique truck names with basic info
function getUniqueTrucks() {
    const seen = new Set();
    const trucks = [];
    Object.values(foodTruckSchedule).forEach(entry => {
        if (!seen.has(entry.truckName)) {
            seen.add(entry.truckName);
            trucks.push({ name: entry.truckName, flag: entry.flag || '' });
        }
    });
    return trucks;
}

// Render truck options
function populateTruckSelect() {
    const select = document.getElementById('truck-select');
    if (!select) return;
    const trucks = getUniqueTrucks();
    trucks.forEach(truck => {
        const opt = document.createElement('option');
        opt.value = truck.name;
        opt.textContent = `${truck.flag ? truck.flag + ' ' : ''}${truck.name}`;
        select.appendChild(opt);
    });
}

// Star rating UI
function setupRatingStars() {
    const container = document.getElementById('rating-stars');
    const hidden = document.getElementById('rating-value');
    if (!container || !hidden) return;
    container.innerHTML = '';

    for (let i = 1; i <= 5; i++) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'text-2xl text-gray-300 hover:text-yellow-400 transition-colors';
        btn.dataset.value = i;
        btn.innerText = '★';
        btn.addEventListener('click', () => {
            hidden.value = String(i);
            updateStars(i);
        });
        btn.addEventListener('mouseenter', () => updateStars(i));
        btn.addEventListener('mouseleave', () => updateStars(Number(hidden.value)));
        container.appendChild(btn);
    }

    function updateStars(active) {
        Array.from(container.children).forEach((c, idx) => {
            if (idx < active) {
                c.classList.remove('text-gray-300');
                c.classList.add('text-yellow-400');
            } else {
                c.classList.remove('text-yellow-400');
                c.classList.add('text-gray-300');
            }
        });
    }

    // initialize
    updateStars(Number(hidden.value));
}

// Photo preview
function setupPhotoInput() {
    const input = document.getElementById('photo-input');
    const preview = document.getElementById('photo-preview');
    if (!input || !preview) return;
    preview.innerHTML = '';

    input.addEventListener('change', () => {
        preview.innerHTML = '';
        const files = Array.from(input.files).slice(0, 6); // limit preview to 6
        files.forEach(file => {
            if (!file.type.startsWith('image/')) return;
            const reader = new FileReader();
            const wrap = document.createElement('div');
            wrap.className = 'w-24 h-24 mr-2 mb-2 overflow-hidden rounded-md border';
            const img = document.createElement('img');
            img.className = 'w-full h-full object-cover';
            wrap.appendChild(img);
            preview.appendChild(wrap);

            reader.onload = (e) => {
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
        });
    });
}

// Form submit
function setupForm() {
    const form = document.getElementById('share-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const truck = document.getElementById('truck-select').value;
        const story = document.getElementById('story-text').value.trim();
        const rating = Number(document.getElementById('rating-value').value || 0);
        const photos = Array.from(document.getElementById('photo-input').files).slice(0,6);

        if (!truck) {
            alert('Please select a truck.');
            return;
        }

        const stored = JSON.parse(localStorage.getItem('sharedStories') || '[]');

        // For storage, convert photos to data URLs (synchronously for small files)
        const readers = photos.map(file => new Promise((res) => {
            const r = new FileReader();
            r.onload = () => res({ name: file.name, data: r.result });
            r.readAsDataURL(file);
        }));

        Promise.all(readers).then(photoData => {
            const entry = {
                id: Date.now(),
                truck,
                story,
                rating,
                photos: photoData,
                createdAt: new Date().toISOString()
            };
            stored.unshift(entry);
            localStorage.setItem('sharedStories', JSON.stringify(stored));
            // simple feedback then navigate home
            alert('Thanks! Your story was saved locally.');
            // reset form
            form.reset();
            document.getElementById('photo-preview').innerHTML = '';
            // navigate back to home
            const views = {
                home: document.getElementById('home-view')
            };
            // mimic existing app's navigation
            document.getElementById('share-back-btn')?.click();
        });
    });
}

// Cancel/back buttons already wired in main.js; ensure they reset the form when shown
function resetForm() {
    const form = document.getElementById('share-form');
    if (!form) return;
    form.reset();
    document.getElementById('rating-value').value = '0';
    document.getElementById('photo-preview').innerHTML = '';
    setupRatingStars();
}

// Initialize when DOM ready
document.addEventListener('DOMContentLoaded', () => {
    populateTruckSelect();
    setupRatingStars();
    setupPhotoInput();
    setupForm();

    // Reset when share view is shown
    const shareView = document.getElementById('share-view');
    const observer = new MutationObserver(() => {
        if (shareView && !shareView.classList.contains('hidden')) {
            resetForm();
        }
    });
    if (shareView) observer.observe(shareView, { attributes: true, attributeFilter: ['class'] });
});
