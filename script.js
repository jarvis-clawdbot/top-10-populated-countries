// Country Data - Top 10 Most Populated Countries (2026 Estimates)
const countriesData = [
    {
        rank: 1,
        name: "India",
        flag: "🇮🇳",
        population: 1494000000,
        growthRate: 0.89,
        area: 3287263,
        density: 454,
        capital: "New Delhi",
        continent: "asia",
        description: "The world's largest democracy and most populous nation. India has surpassed China as the most populated country, with a young workforce driving its tech and service sectors. Known for its rich cultural heritage, spicy cuisine, and Bollywood film industry.",
        funFacts: [
            "India invented chess (Chaturanga)",
            "Home to the world's largest postal network",
            "Has the world's largest democracy with 900+ million voters"
        ]
    },
    {
        rank: 2,
        name: "China",
        flag: "🇨🇳",
        population: 1416000000,
        growthRate: 0.12,
        area: 9596961,
        density: 148,
        capital: "Beijing",
        continent: "asia",
        description: "The world's second-most populous country and the fastest-growing major economy. China is known for its ancient civilization, the Great Wall, and its rapid technological advancement leading the world in 5G, EVs, and solar energy production.",
        funFacts: [
            "The Great Wall is over 13,000 miles long",
            "China gifted pandas to 40+ countries",
            "Paper, gunpowder, printing invented here"
        ]
    },
    {
        rank: 3,
        name: "United States",
        flag: "🇺🇸",
        population: 340000000,
        growthRate: 0.52,
        area: 9833520,
        density: 35,
        capital: "Washington D.C.",
        continent: "americas",
        description: "The world's third-largest economy and a global cultural superpower. The USA is known for Hollywood, Silicon Valley, jazz, blues, and being a hub for innovation in tech, entertainment, and higher education.",
        funFacts: [
            "Yellowstone was the first national park (1872)",
            "Has the most Nobel Prize winners",
            "Blue jeans were invented in 1873"
        ]
    },
    {
        rank: 4,
        name: "Indonesia",
        flag: "🇮🇩",
        population: 283000000,
        growthRate: 0.83,
        area: 1904569,
        density: 149,
        capital: "Jakarta",
        continent: "asia",
        description: "The world's largest archipelago with over 17,000 islands. Indonesia is famous for its stunning beaches, ancient temples like Borobudur, diverse wildlife including orangutans, and vibrant cultural traditions.",
        funFacts: [
            "Second highest biodiversity after Brazil",
            "Komodo dragons found only here",
            "Largest Muslim population in the world"
        ]
    },
    {
        rank: 5,
        name: "Pakistan",
        flag: "🇵🇰",
        population: 251000000,
        growthRate: 1.92,
        area: 881912,
        density: 285,
        capital: "Islamabad",
        continent: "asia",
        description: "A South Asian nation with a rich history dating back to the Indus Valley Civilization. Pakistan is known for its mountain ranges, ancient archaeological sites, and contributions to cricket and literature.",
        funFacts: [
            "Home to K2, world's 2nd highest mountain",
            "Largest irrigation system in the world",
            "First Islamic country to develop nuclear power"
        ]
    },
    {
        rank: 6,
        name: "Brazil",
        flag: "🇧🇷",
        population: 217000000,
        growthRate: 0.68,
        area: 8515767,
        density: 25,
        capital: "Brasília",
        continent: "americas",
        description: "South America's largest country and a global leader in agriculture and energy. Brazil is famous for the Amazon rainforest, Carnival festival, samba music, football legends, and its vibrant mixed-culture heritage.",
        funFacts: [
            "Contains the Amazon River (largest by volume)",
            "Produces 80% of the world's orange juice",
            "Haviana sandals originated here"
        ]
    },
    {
        rank: 7,
        name: "Nigeria",
        flag: "🇳🇬",
        population: 224000000,
        growthRate: 2.38,
        area: 923768,
        density: 242,
        capital: "Abuja",
        continent: "africa",
        description: "Africa's most populous nation and its largest economy. Nigeria is known as the 'Giant of Africa' with a vibrant tech scene in Lagos (Africa's Silicon Valley), rich musical traditions, and massive oil reserves.",
        funFacts: [
            "Largest oil producer in Africa",
            "Nollywood is 2nd largest film industry",
            "Has 500+ languages spoken"
        ]
    },
    {
        rank: 8,
        name: "Bangladesh",
        flag: "🇧🇩",
        population: 176000000,
        growthRate: 1.01,
        area: 147570,
        density: 1193,
        capital: "Dhaka",
        continent: "asia",
        description: "A densely populated South Asian nation that transformed from one of the poorest to a middle-income country. Bangladesh is renowned for its textile industry, green energy initiatives, and Cox's Bazar beach.",
        funFacts: [
            "Largest mangrove forest (Sundarbans)",
            "Pioneer in microfinance banking",
            "More people speak Bengali than French"
        ]
    },
    {
        rank: 9,
        name: "Russia",
        flag: "🇷🇺",
        population: 144000000,
        growthRate: -0.15,
        area: 17098242,
        density: 8,
        capital: "Moscow",
        continent: "europe",
        description: "The world's largest country by landmass spanning 11 time zones. Russia is famous for its rich literary heritage, classical music (Tchaikovsky, Stravinsky), space exploration achievements, and diverse landscapes from tundra to subtropical beaches.",
        funFacts: [
            "Covers 1/8 of Earth's land surface",
            "Lake Baikal is world's deepest & oldest",
            "First country to launch satellite (Sputnik)"
        ]
    },
    {
        rank: 10,
        name: "Mexico",
        flag: "🇲🇽",
        population: 132000000,
        growthRate: 0.93,
        area: 1964375,
        density: 67,
        capital: "Mexico City",
        continent: "americas",
        description: "North America's second-largest country with a blend of indigenous and Spanish cultures. Mexico is famous for its cuisine (UNESCO intangible heritage), ancient pyramids, vibrant festivals, and beautiful beaches along two oceans.",
        funFacts: [
            "Chocolate was invented here 3000+ years ago",
            "Has 35 UNESCO World Heritage Sites",
            "First Nobel Prize for literature (Octavio Paz)"
        ]
    }
];

// DOM Elements
const chartBars = document.getElementById('chartBars');
const countryCards = document.getElementById('countryCards');
const tableBody = document.getElementById('tableBody');
const factsGrid = document.getElementById('factsGrid');
const cursorGlow = document.querySelector('.cursor-glow');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initCursorGlow();
    initChartBars();
    initCountryCards();
    initComparisonTable();
    initFunFacts();
    animateHeroStats();
    initFilterTabs();
});

// Cursor Glow Effect
function initCursorGlow() {
    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
    });
}

// Hero Stats Animation
function animateHeroStats() {
    const counters = document.querySelectorAll('.stat-number[data-count]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.dataset.count);
                animateCounter(counter, target);
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target) {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    const stepDuration = duration / steps;
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = formatNumber(target) + 'M';
            clearInterval(timer);
        } else {
            element.textContent = formatNumber(Math.floor(current)) + 'M';
        }
    }, stepDuration);
}

function formatNumber(num) {
    return num.toLocaleString();
}

// Chart Bars
function initChartBars() {
    const maxPopulation = Math.max(...countriesData.map(c => c.population));
    
    countriesData.forEach((country, index) => {
        const percentage = (country.population / maxPopulation) * 100;
        
        const bar = document.createElement('div');
        bar.className = 'chart-bar';
        bar.style.animationDelay = `${index * 0.1}s`;
        bar.innerHTML = `
            <div class="country-rank">${country.rank}</div>
            <div class="country-name">
                <span class="country-flag">${country.flag}</span>
                ${country.name}
            </div>
            <div class="bar-container">
                <div class="bar-fill" style="width: 0%" data-width="${percentage}%"></div>
            </div>
            <div class="population-value">${formatNumber(country.population / 1000000)}M</div>
        `;
        
        bar.addEventListener('click', () => scrollToCard(country.rank));
        chartBars.appendChild(bar);
        
        // Animate bar after a delay
        setTimeout(() => {
            bar.querySelector('.bar-fill').style.width = percentage + '%';
        }, 100 + index * 100);
    });
}

// Scroll to Card
function scrollToCard(rank) {
    const card = document.querySelector(`.country-card[data-rank="${rank}"]`);
    if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        card.style.boxShadow = '0 0 0 4px #6366f1';
        setTimeout(() => {
            card.style.boxShadow = '';
        }, 2000);
    }
}

// Country Cards
function initCountryCards() {
    countriesData.forEach((country, index) => {
        const card = document.createElement('div');
        card.className = 'country-card';
        card.dataset.rank = country.rank;
        card.dataset.continent = country.continent;
        
        card.innerHTML = `
            <div class="card-header">
                <span class="card-flag" style="font-size: 3rem;">${country.flag}</span>
                <div class="card-title">
                    <h3>${country.rank}. ${country.name}</h3>
                    <span>${country.capital}</span>
                </div>
            </div>
            <div class="card-stats">
                <div class="card-stat">
                    <div class="card-stat-label">Population</div>
                    <div class="card-stat-value">${formatNumber(country.population / 1000000)}M</div>
                </div>
                <div class="card-stat">
                    <div class="card-stat-label">Growth Rate</div>
                    <div class="card-stat-value ${country.growthRate >= 0 ? 'growth-positive' : 'growth-negative'}">
                        ${country.growthRate >= 0 ? '+' : ''}${country.growthRate}%
                    </div>
                </div>
                <div class="card-stat">
                    <div class="card-stat-label">Area</div>
                    <div class="card-stat-value">${formatNumber(country.area)} km²</div>
                </div>
                <div class="card-stat">
                    <div class="card-stat-label">Density</div>
                    <div class="card-stat-value">${country.density}/km²</div>
                </div>
            </div>
            <p class="card-description">${country.description}</p>
        `;
        
        countryCards.appendChild(card);
        
        // Animate in
        setTimeout(() => {
            card.classList.add('visible');
        }, 500 + index * 150);
    });
}

// Comparison Table
function initComparisonTable() {
    countriesData.forEach(country => {
        const row = document.createElement('tr');
        row.dataset.continent = country.continent;
        row.innerHTML = `
            <td><span class="rank-badge">${country.rank}</span></td>
            <td>
                <span style="font-size: 1.5rem; margin-right: 0.5rem;">${country.flag}</span>
                ${country.name}
            </td>
            <td><strong>${formatNumber(country.population)}</strong></td>
            <td class="${country.growthRate >= 0 ? 'growth-positive' : 'growth-negative'}">
                ${country.growthRate >= 0 ? '+' : ''}${country.growthRate}%
            </td>
            <td>${formatNumber(country.area)} km²</td>
            <td>${country.density}</td>
            <td>${country.capital}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Filter Tabs
function initFilterTabs() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter cards
            document.querySelectorAll('.country-card').forEach(card => {
                if (filter === 'all' || card.dataset.continent === filter) {
                    card.style.display = 'block';
                    setTimeout(() => card.classList.add('visible'), 50);
                } else {
                    card.classList.remove('visible');
                    setTimeout(() => card.style.display = 'none', 400);
                }
            });
            
            // Filter table rows
            document.querySelectorAll('.comparison-table tbody tr').forEach(row => {
                if (filter === 'all' || row.dataset.continent === filter) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    });
}

// Fun Facts
function initFunFacts() {
    const allFacts = [];
    countriesData.forEach(country => {
        country.funFacts.forEach((fact, index) => {
            allFacts.push({
                country: country.name,
                fact: fact,
                number: index + 1
            });
        });
    });
    
    // Shuffle facts
    const shuffledFacts = allFacts.sort(() => Math.random() - 0.5).slice(0, 8);
    
    shuffledFacts.forEach((item, index) => {
        const factCard = document.createElement('div');
        factCard.className = 'fact-card';
        factCard.style.animationDelay = `${index * 0.1}s`;
        factCard.innerHTML = `
            <div class="fact-number">${item.number}</div>
            <div class="fact-title">${item.country}</div>
            <div class="fact-description">${item.fact}</div>
        `;
        factsGrid.appendChild(factCard);
    });
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
