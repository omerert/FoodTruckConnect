// --- our fake data ---
// this is all the info for our food trucks
// we'll eventually load this from a database, but for now, it lives here
// we added the 'cuisineinfo' for the popup modal
const foodTruckSchedule = {
    "2025-10-01": {
        truckName: "Borscht Bus",
        location: "Old Quad",
        time: "11 AM - 2 PM",
        flag: "🇺🇦",
        cuisineInfo: {
            name: "Eastern European",
            description: "Hearty soups and pierogi-style dumplings with comforting, savory flavors — a perfect fall treat.",
            link: "https://en.wikipedia.org/wiki/Ukrainian_cuisine",
            img1: "https://placehold.co/300x200/8A2BE2/FFFFFF?text=Borscht",
            img2: "https://placehold.co/300x200/FFE4C4/000000?text=Pierogi"
        }
    },
    "2025-10-04": {
        truckName: "Arepa Alley",
        location: "Library Front",
        time: "10 AM - 2 PM",
        flag: "🇻🇪",
        cuisineInfo: {
            name: "Venezuelan",
            description: "Stuffed arepas with a variety of fillings — cheesy, meaty, and vegetarian options that are quick and satisfying.",
            link: "https://en.wikipedia.org/wiki/Venezuelan_cuisine",
            img1: "https://placehold.co/300x200/FFD700/000000?text=Arepa",
            img2: "https://placehold.co/300x200/FFFFFF/000000?text=Pabellon"
        }
    },
    "2025-10-06": {
        truckName: "Mediterraneo",
        location: "Riverside",
        time: "5 PM - 8 PM",
        flag: "🇪🇸",
        cuisineInfo: {
            name: "Spanish Tapas",
            description: "Small plates, bold flavors, and shareable dishes — from patatas bravas to grilled seafood.",
            link: "https://en.wikipedia.org/wiki/Spanish_cuisine",
            img1: "https://placehold.co/300x200/FF4500/FFFFFF?text=Tapas",
            img2: "https://placehold.co/300x200/FFFFFF/000000?text=Paella"
        }
    },
    "2025-10-07": {
        truckName: "Grecian Grill",
        location: "Campus Green",
        time: "11 AM - 3 PM",
        flag: "🇬🇷",
        cuisineInfo: {
            name: "Greek",
            description: "Fresh salads, grilled meats, and classic flavors like lemon, oregano, and olive oil.",
            link: "https://en.wikipedia.org/wiki/Greek_cuisine",
            img1: "https://placehold.co/300x200/2E8B57/FFFFFF?text=Souvlaki",
            img2: "https://placehold.co/300x200/FFD700/000000?text=Salad"
        }
    },
    "2025-10-10": {
        truckName: "Pizza & Pasta",
        location: "321 Sunny St",
        time: "11 AM - 2 PM",
        flag: "🇮🇹",
        cuisineInfo: {
            name: "Italian Cuisine",
            description: "Italian food is characterized by its simplicity, with many dishes having only a few high-quality ingredients. It's a celebration of regional diversity, from the rich pastas of the north to the sun-baked pizzas and seafood of the south.",
            link: "https://en.wikipedia.org/wiki/Italian_cuisine",
            img1: "https://placehold.co/300x200/008C45/FFFFFF?text=Pasta",
            img2: "https://placehold.co/300x200/CD212A/FFFFFF?text=Pizza"
        }
    },
    "2025-10-12": {
        truckName: "Bao & Beyond",
        location: "Innovation Hub",
        time: "12 PM - 3 PM",
        flag: "🇹🇼",
        cuisineInfo: {
            name: "Taiwanese",
            description: "Steamed buns, savory fillings, and street snacks packed with umami and texture.",
            link: "https://en.wikipedia.org/wiki/Taiwanese_cuisine",
            img1: "https://placehold.co/300x200/FFE4E1/000000?text=Bao",
            img2: "https://placehold.co/300x200/FFFFFF/000000?text=Bubble+Tea"
        }
    },
    "2025-10-15": {
        truckName: "Tandoori Trail",
        location: "South Quad",
        time: "5 PM - 9 PM",
        flag: "🇵🇰",
        cuisineInfo: {
            name: "Pakistani/Indian",
            description: "Tandoori-grilled favorites and fragrant breads — smoky, spicy, and satisfying.",
            link: "https://en.wikipedia.org/wiki/South_Asian_cuisine",
            img1: "https://placehold.co/300x200/FF7F50/FFFFFF?text=Tandoor",
            img2: "https://placehold.co/300x200/FFF5EE/000000?text=Naan"
        }
    },
    "2025-10-17": {
        truckName: "Panda Potstickers",
        location: "457 Shady Rd",
        time: "5 PM - 9 PM",
        flag: "🇨🇳",
        cuisineInfo: {
            name: "Chinese Cuisine",
            description: "With thousands of years of history, Chinese cuisine is incredibly diverse. It balances the five key flavors: sweet, sour, salty, bitter, and spicy. Dumplings, like potstickers, are a beloved part of celebrations, symbolizing wealth and togetherness.",
            link: "https://en.wikipedia.org/wiki/Chinese_cuisine",
            img1: "https://placehold.co/300x200/EE1C25/FFFFFF?text=Dumplings",
            img2: "https://placehold.co/300x200/FFFF00/000000?text=Noodles"
        }
    },
    "2025-10-20": {
        truckName: "Sushi Sprint",
        location: "East Courtyard",
        time: "11 AM - 2 PM",
        flag: "🇯🇵",
        cuisineInfo: {
            name: "Japanese",
            description: "Hand-rolled sushi and quick bento options — light, fresh, and made to order.",
            link: "https://en.wikipedia.org/wiki/Japanese_cuisine",
            img1: "https://placehold.co/300x200/BC002D/FFFFFF?text=Sushi",
            img2: "https://placehold.co/300x200/FFFFFF/000000?text=Onigiri"
        }
    },
    "2025-10-22": {
        truckName: "Soulful Sides",
        location: "Parking Lot B",
        time: "12 PM - 4 PM",
        flag: "🇺🇸",
        cuisineInfo: {
            name: "Southern Comfort",
            description: "Comfort food classics with a modern twist — mac & cheese, collards, and slow-roasted meats.",
            link: "https://en.wikipedia.org/wiki/Southern_United_States_cuisine",
            img1: "https://placehold.co/300x200/FFE4B5/000000?text=Mac+%26+Cheese",
            img2: "https://placehold.co/300x200/8B4513/FFFFFF?text=Collards"
        }
    },
    "2025-10-24": {
        truckName: "Halal Heaven",
        location: "842 Trinity Rd",
        time: "5 PM - 9 PM",
        flag: "🇵🇰",
        cuisineInfo: {
            name: "Pakistani Cuisine",
            description: "Pakistani food is rich with aromatic spices and herbs. It features a blend of influences from South Asia and the Middle East. Signature dishes often include slow-cooked meats, flavorful curries, and fragrant biryanis, all prepared according to Halal traditions.",
            link: "https://en.wikipedia.org/wiki/Pakistani_cuisine",
            img1: "https://placehold.co/300x200/006600/FFFFFF?text=Biryani",
            img2: "https://placehold.co/300x200/FFFFFF/000000?text=Kebab"
        }
    },
    "2025-10-26": {
        truckName: "Pan-Asian",
        location: "Science Plaza",
        time: "11 AM - 3 PM",
        flag: "🌏",
        cuisineInfo: {
            name: "Pan-Asian",
            description: "A rotating menu featuring flavors from across Asia — noodles, bao, and rice bowls.",
            link: "https://en.wikipedia.org/wiki/Asian_cuisine",
            img1: "https://placehold.co/300x200/FFDEAD/000000?text=Noodles",
            img2: "https://placehold.co/300x200/FFF0F5/000000?text=Bowl"
        }
    },
    "2025-10-28": {
        truckName: "Empanada Express",
        location: "Fountain Plaza",
        time: "10 AM - 2 PM",
        flag: "🇦🇷",
        cuisineInfo: {
            name: "Argentinian",
            description: "Hand-held empanadas with savory fillings and chimichurri dips — great for breakfast or lunch.",
            link: "https://en.wikipedia.org/wiki/Argentine_cuisine",
            img1: "https://placehold.co/300x200/FFB6C1/000000?text=Empanada",
            img2: "https://placehold.co/300x200/FFFFFF/000000?text=Chimichurri"
        }
    },
    "2025-10-31": {
        truckName: "Kim's Kimchi",
        location: "987 Smith Dr",
        time: "11 AM - 2 PM",
        flag: "🇰🇷",
        cuisineInfo: {
            name: "Korean Cuisine",
            description: "Korean cuisine is known for its bold, spicy, and savory flavors. Fermented foods like kimchi are a staple at every meal. Barbecue (gogi-gui) and shared side dishes (banchan) highlight the communal and interactive nature of Korean dining.",
            link: "https://en.wikipedia.org/wiki/Korean_cuisine",
            img1: "https://placehold.co/300x200/CD2E3A/FFFFFF?text=Kimchi",
            img2: "https://placehold.co/300x200/0047A0/FFFFFF?text=Bibimbap"
        }
    },
    "2025-11-04": {
        truckName: "Curry in a Hurry",
        location: "North Lot",
        time: "11 AM - 3 PM",
        flag: "🇮🇳",
        cuisineInfo: {
            name: "Indian Cuisine",
            description: "Indian cuisine is known for its bold spices, slow-cooked curries, and a wide variety of vegetarian and meat dishes. It emphasizes layered flavors, regional techniques, and communal dining.",
            link: "https://en.wikipedia.org/wiki/Indian_cuisine",
            img1: "https://placehold.co/300x200/FF9933/FFFFFF?text=Curry",
            img2: "https://placehold.co/300x200/FFFFFF/000000?text=naan"
        }
    },
    "2025-11-07": {
        truckName: "La Vita è Bella",
        location: "Tech Park Courtyard",
        time: "11:30 AM - 2:30 PM",
        flag: "🇮🇹",
        cuisineInfo: {
            name: "Italian Cuisine",
            description: "Italian food is characterized by its simplicity, with many dishes having only a few high-quality ingredients. It's a celebration of regional diversity, from the rich pastas of the north to the sun-baked pizzas and seafood of the south.",
            link: "https://en.wikipedia.org/wiki/Italian_cuisine",
            img1: "https://placehold.co/300x200/008C45/FFFFFF?text=Pasta",
            img2: "https://placehold.co/300x200/CD212A/FFFFFF?text=Pizza"
        }
    },
    "2025-11-10": {
        truckName: "BBQ Brothers",
        location: "South Field",
        time: "5 PM - 9 PM",
        flag: "🇺🇸",
        cuisineInfo: {
            name: "American Barbecue",
            description: "Slow-smoked meats, tangy sauces, and classic sides. Barbecue brings bold smoky flavors and hearty portions ideal for evening events.",
            link: "https://en.wikipedia.org/wiki/Barbecue",
            img1: "https://placehold.co/300x200/8B0000/FFFFFF?text=Brisket",
            img2: "https://placehold.co/300x200/DAA520/000000?text=Ribs"
        }
    },
    "2025-11-12": {
        truckName: "Crepes & Co",
        location: "West Walk",
        time: "10 AM - 2 PM",
        flag: "🇫🇷",
        cuisineInfo: {
            name: "French Street Food",
            description: "Simple, buttery crepes and savory galettes served with classic French fillings. A delightful stop for breakfast or lunch.",
            link: "https://en.wikipedia.org/wiki/French_cuisine",
            img1: "https://placehold.co/300x200/0055A4/FFFFFF?text=Crepe",
            img2: "https://placehold.co/300x200/FFFFFF/000000?text=Galette"
        }
    },
    "2025-11-14": {
        truckName: "Tokyo Drift Tastes",
        location: "Main Plaza (East Side)",
        time: "11:00 AM - 2:00 PM",
        flag: "🇯🇵",
        cuisineInfo: {
            name: "Japanese Cuisine",
            description: "Japanese cuisine is based on 'washoku', or harmony in food. It emphasizes seasonality, quality of ingredients, and presentation. From delicate sushi to savory ramen, it respects the natural flavors of each component.",
            link: "https://en.wikipedia.org/wiki/Japanese_cuisine",
            img1: "https://placehold.co/300x200/BC002D/FFFFFF?text=Sushi",
            img2: "https://placehold.co/300x200/FFFFFF/000000?text=Ramen"
        }
    }
};

// --- app state ---
// this just keeps track of what month we're looking at
let currentDisplayDate = new Date();
// let's set the calendar to october 2025 so it matches the screenshot
currentDisplayDate = new Date(2025, 9, 1);

// determine a base date for the "every other day" schedule
// we pick the earliest date in the foodTruckSchedule keys as the base
const scheduleDates = Object.keys(foodTruckSchedule).slice().sort();
const baseEventDate = scheduleDates.length ? new Date(scheduleDates[0]) : new Date();

// --- dom elements ---
// here we're just grabbing all the html parts we need to work with
// we declare them here, but we'll assign them *after* the dom loads
let views = {};
let calendarGrid;
let calendarTitle;
let modalTitle;
let modalDescription;
let modalLink;
let modalImg1;
let modalImg2;

// --- navigation functions ---

/**
 * hides all views and shows just the one we want
 * @param {string} viewname - 'home' or 'calendar'
 */
function showView(viewName) {
    // first, hide everything
    Object.values(views).forEach(view => {
        if (view) view.classList.add('hidden');
    });
    // then, show the one we asked for (as long as it's not the modal)
    if (views[viewName] && viewName !== 'modal') {
        views[viewName].classList.remove('hidden');

        // If showing calendar view, ensure correct subview is shown
        if (viewName === 'calendar') {
            const calendarContainer = document.getElementById('calendar-container');
            const listContainer = document.getElementById('list-container');
            const showingCalendar = !calendarContainer.classList.contains('hidden');

            document.getElementById('show-calendar-view').classList.toggle('active', showingCalendar);
            document.getElementById('show-list-view').classList.toggle('active', !showingCalendar);
        }
    }
}

/**
 * Switch between calendar and list views within the calendar page
 * @param {string} viewType - 'calendar' or 'list'
 */
function switchCalendarView(viewType) {
    const calendarContainer = document.getElementById('calendar-container');
    const calendarHeader = document.getElementById('calendar-header');
    const listContainer = document.getElementById('list-container');
    const calendarBtn = document.getElementById('show-calendar-view');
    const listBtn = document.getElementById('show-list-view');

    if (viewType === 'calendar') {
        calendarContainer.classList.remove('hidden');
        calendarHeader.classList.remove('hidden');
        listContainer.classList.add('hidden');
        calendarBtn.classList.add('active');
        listBtn.classList.remove('active');
    } else {
        calendarContainer.classList.add('hidden');
        calendarHeader.classList.add('hidden');
        listContainer.classList.remove('hidden');
        calendarBtn.classList.remove('active');
        listBtn.classList.add('active');
    }
}
// simple functions to show or hide the modal
function showModal() {
    if (views.modal) views.modal.classList.remove('hidden');
}
function hideModal() {
    if (views.modal) views.modal.classList.add('hidden');
}

// --- calendar logic ---

/**
 * builds and displays the calendar for a given month and year
 * @param {number} year - the full year (e.g., 2025)
 * @param {number} month - the month (0-indexed, 0=jan)
 */
function buildCalendar(year, month) {
    // exit if the calendar grid element isn't ready yet
    if (!calendarGrid) {
        console.error("calendarGrid is not initialized.");
        return;
    }

    // clear out the old calendar days before we build new ones
    calendarGrid.innerHTML = '';

    // set the "october 2025" title
    const monthName = new Date(year, month).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    calendarTitle.textContent = monthName.toUpperCase();

    // get all the info we need to build the month grid
    const firstDay = new Date(year, month, 1).getDay(); // 0=sun, 1=mon...
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // 1. create empty cells for the days before the 1st
    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.className = "calendar-day border-b border-r bg-gray-50";
        calendarGrid.appendChild(emptyCell);
    }

    // 2. create cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const dayCell = document.createElement('div');
        dayCell.className = "calendar-day border-b border-r p-2";

        const currentDate = new Date(year, month, day);
        const dayOfWeek = currentDate.getDay(); // 5 = friday

        // add the day number (1, 2, 3...)
        const dayNumber = document.createElement('div');
        dayNumber.className = "text-sm font-semibold text-gray-700";
        dayNumber.textContent = day;
        dayCell.appendChild(dayNumber);

        const dateString = currentDate.toISOString().split('T')[0];
        const eventData = foodTruckSchedule[dateString];

        if (eventData) {
            // visually mark event days that have scheduled trucks
            dayCell.classList.add('has-event');

            const eventDiv = document.createElement('div');
            eventDiv.className = "mt-1 text-xs";

            const truckName = document.createElement('p');
            truckName.className = "font-bold text-gray-900";
            truckName.textContent = eventData.truckName;

            const flag = document.createElement('button');
            flag.className = "text-lg hover:opacity-75 transition-opacity";
            flag.textContent = eventData.flag;
            flag.addEventListener('click', () => {
                populateAndShowModal(eventData);
            });

            const location = document.createElement('p');
            location.className = "text-gray-600";
            location.textContent = eventData.location || '';

            const time = document.createElement('p');
            time.className = "text-gray-600";
            time.textContent = eventData.time || '';

            eventDiv.appendChild(truckName);
            eventDiv.appendChild(flag);
            if (location.textContent) eventDiv.appendChild(location);
            if (time.textContent) eventDiv.appendChild(time);

            dayCell.appendChild(eventDiv);
        }

        calendarGrid.appendChild(dayCell);
    }
}

/**
 * fills the modal with event data and shows it
 * @param {object} eventdata - the event object from foodtruckschedule
 */
function populateAndShowModal(eventData) {
    const info = eventData.cuisineInfo;
    // check if modal elements are ready before trying to set them
    if (modalTitle) modalTitle.textContent = info.name;
    if (modalDescription) modalDescription.textContent = info.description;
    if (modalLink) modalLink.href = info.link;
    if (modalImg1) modalImg1.src = info.img1;
    if (modalImg2) modalImg2.src = info.img2;

    // just in case the images don't load, show a placeholder
    if (modalImg1) modalImg1.onerror = () => { modalImg1.src = 'https://placehold.co/300x200/E2E8F0/4A5568?text=Food+Photo'; };
    if (modalImg2) modalImg2.onerror = () => { modalImg2.src = 'https://placehold.co/300x200/E2E8F0/4A5568?text=Food+Photo'; };

    showModal();
}

/**
 * Build the upcoming list view: shows the next N upcoming event days (based on every-other-day rule)
 * and maps any known trucks from foodTruckSchedule.
 * @param {number} daysAhead - how many days ahead to search (defaults to 30)
 */
function buildUpcomingList(daysAhead = 30) {
    const listEl = document.getElementById('upcoming-list-ul');
    if (!listEl) return;
    listEl.innerHTML = '';

    // Get all scheduled dates from today forward
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const scheduledDates = Object.keys(foodTruckSchedule)
        .filter(dateString => {
            const [year, month, day] = dateString.split('-').map(Number);
            const d = new Date(year, month - 1, day);
            return d >= today; // keep only upcoming
        })
        .sort()
        .slice(0, daysAhead);

    scheduledDates.forEach(dateString => {
        const eventData = foodTruckSchedule[dateString];

        const li = document.createElement('li');
        li.className = 'bg-white p-3 rounded-lg shadow-sm';

        const row = document.createElement('div');
        row.className = 'flex justify-between items-start gap-3';

        const left = document.createElement('div');
        const dateLabel = document.createElement('div');
        dateLabel.className = 'text-sm text-gray-500';

        // Calculate days from today
        const eventDate = new Date(dateString);
        const todayStart = new Date();
        //Increment by one say since convertion didnt work out
        eventDate.setDate(eventDate.getDate() + 1);
        todayStart.setHours(0, 0, 0, 0);
        const diffDays = Math.floor((eventDate - todayStart) / (1000 * 60 * 60 * 24));

        // Format the relative date
        let relativeDate;
        if (diffDays === 0) {
            relativeDate = 'Today';
        } else if (diffDays === 1) {
            relativeDate = 'Tomorrow';
        } else {
            relativeDate = `In ${diffDays} days`;
        }

        dateLabel.textContent = `${relativeDate} - ${eventDate.toLocaleDateString()}`;
        const title = document.createElement('div');
        title.className = 'font-semibold text-gray-800';
        title.textContent = eventData.truckName;

        left.appendChild(dateLabel);
        left.appendChild(title);

        const right = document.createElement('div');
        right.className = 'text-right';
        const flagBtn = document.createElement('button');
        flagBtn.className = 'text-xl';
        flagBtn.textContent = eventData.flag;
        right.appendChild(flagBtn);

        row.appendChild(left);
        row.appendChild(right);

        li.appendChild(row);

        // make item clickable to show modal
        li.style.cursor = 'pointer';
        li.addEventListener('click', () => populateAndShowModal(eventData));

        listEl.appendChild(li);
    });
}
// --- initial app setup ---
// this runs once all the html is loaded
document.addEventListener('DOMContentLoaded', () => {

    // --- assign dom elements ---
    // now that the dom is loaded, we can safely grab our elements
    views = {
        home: document.getElementById('home-view'),
        calendar: document.getElementById('calendar-view'),
        modal: document.getElementById('modal-view')
    };
    calendarGrid = document.getElementById('calendar-days-grid');
    calendarTitle = document.getElementById('calendar-month-year');
    modalTitle = document.getElementById('modal-title');
    modalDescription = document.getElementById('modal-description');
    modalLink = document.getElementById('modal-link');
    modalImg1 = document.getElementById('modal-img-1');
    modalImg2 = document.getElementById('modal-img-2');

    // build the calendar for the first time
    // now calendarGrid will be a valid element
    buildCalendar(currentDisplayDate.getFullYear(), currentDisplayDate.getMonth());

    // build the upcoming list for the first time
    buildUpcomingList(30);

    // --- navigation event listeners ---
    // set up all our buttons

    // home -> calendar
    document.getElementById('view-calendar-btn').addEventListener('click', () => {
        showView('calendar');
    });

    // calendar -> home
    document.getElementById('back-to-home-btn').addEventListener('click', () => {
        showView('home');
    });

    // modal close button
    document.getElementById('modal-close-btn').addEventListener('click', hideModal);

    // let's also close the modal if you click the dark background
    if (views.modal) {
        views.modal.addEventListener('click', (e) => {
            if (e.target === views.modal) {
                hideModal();
            }
        });
    }

    // calendar month navigation
    document.getElementById('prev-month-btn').addEventListener('click', () => {
        currentDisplayDate.setMonth(currentDisplayDate.getMonth() - 1);
        buildCalendar(currentDisplayDate.getFullYear(), currentDisplayDate.getMonth());
    });

    document.getElementById('next-month-btn').addEventListener('click', () => {
        currentDisplayDate.setMonth(currentDisplayDate.getMonth() + 1);
        buildCalendar(currentDisplayDate.getFullYear(), currentDisplayDate.getMonth());
    });

    // calendar/list view switching
    document.getElementById('show-calendar-view').addEventListener('click', () => {
        switchCalendarView('calendar');
    });

    document.getElementById('show-list-view').addEventListener('click', () => {
        switchCalendarView('list');

        document.getElementById("calendar-month-year").classList.remove("active");
    });

});