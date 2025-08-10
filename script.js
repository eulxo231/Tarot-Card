// Tarot card data with all 22 Major Arcana cards
const tarotCards = [
    {
        name: "The Fool",
        symbol: "✨",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=300&fit=crop&crop=center",
        meanings: {
            overall: "New beginnings and spontaneous adventures await you. Trust your instincts and embrace the unknown with childlike wonder.",
            business: "A fresh start in your career is possible. Don't be afraid to take calculated risks and trust your innovative ideas.",
            relationship: "A new relationship or phase in your current relationship is beginning. Approach with openness and innocence.",
            financial: "New financial opportunities are on the horizon. Be open to unconventional investment strategies."
        }
    },
    {
        name: "The Magician",
        symbol: "🔮",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=200&h=300&fit=crop&crop=center",
        meanings: {
            overall: "You have all the tools and resources you need. Your willpower and determination will manifest your desires.",
            business: "Your skills and talents are at their peak. Use your creativity and resourcefulness to achieve success.",
            relationship: "You have the power to create the relationship you desire. Communication and intention are key.",
            financial: "Your financial skills are strong. Use your resources wisely and trust your ability to create abundance."
        }
    },
    {
        name: "The High Priestess",
        symbol: "🌙",
        image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=200&h=300&fit=crop&crop=center",
        meanings: {
            overall: "Your intuition is heightened. Listen to your inner voice and trust your subconscious wisdom.",
            business: "Trust your gut instincts in decisions. Some knowledge comes from within, not from external sources.",
            relationship: "Intuition guides your heart. Pay attention to subtle signs and trust your feelings.",
            financial: "Your financial intuition is strong. Trust your instincts about investments and money matters."
        }
    },
    {
        name: "The Empress",
        symbol: "👑",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&h=300&fit=crop&crop=center",
        meanings: {
            overall: "Abundance and nurturing energy surround you. Fertility of ideas and creative growth are prominent.",
            business: "Your nurturing approach to business will bring success. Focus on growth and development.",
            relationship: "Love and nurturing energy flow in your relationships. Fertility and abundance in love.",
            financial: "Financial abundance and growth are on the horizon. Your nurturing approach to money brings prosperity."
        }
    },
    {
        name: "The Emperor",
        symbol: "⚡",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=300&fit=crop&crop=center",
        meanings: {
            overall: "Authority and structure guide your path. Take charge and establish order in your life.",
            business: "Your leadership skills are strong. Establish authority and create solid foundations.",
            relationship: "Take charge in relationships. Establish healthy boundaries and create stability.",
            financial: "Your financial authority is strong. Take control of your money and create solid foundations."
        }
    },
    {
        name: "The Hierophant",
        symbol: "📖",
        image: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=200&h=300&fit=crop&crop=center",
        meanings: {
            overall: "Traditional wisdom and spiritual guidance light your way. Follow established paths and seek knowledge.",
            business: "Follow proven methods and seek mentorship. Traditional approaches will serve you well.",
            relationship: "Seek guidance from trusted sources. Traditional values and commitment are important.",
            financial: "Follow proven financial strategies. Seek advice from trusted financial advisors."
        }
    },
    {
        name: "The Lovers",
        symbol: "💕",
        image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=200&h=300&fit=crop&crop=center",
        meanings: {
            overall: "Love and harmony fill your life. Important choices about relationships and values are highlighted.",
            business: "Partnerships and collaborations are favored. Choose your business relationships wisely.",
            relationship: "Deep love and connection are possible. Important choices about love and commitment.",
            financial: "Financial partnerships and joint ventures are favorable. Choose your financial partners wisely."
        }
    },
    {
        name: "The Chariot",
        symbol: "🏆",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=300&fit=crop&crop=center",
        meanings: {
            overall: "Victory and determination drive you forward. Control and willpower lead to success.",
            business: "Your determination will bring success. Control your direction and stay focused on goals.",
            relationship: "Take control of your love life. Determination and willpower in relationships.",
            financial: "Financial victory through determination. Control your spending and stay focused on goals."
        }
    },
    {
        name: "Strength",
        symbol: "🦁",
        image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=200&h=300&fit=crop&crop=center",
        meanings: {
            overall: "Inner strength and courage guide you. Gentleness and patience overcome obstacles.",
            business: "Your inner strength will overcome challenges. Use patience and gentleness in business.",
            relationship: "Inner strength sustains your relationships. Patience and gentleness in love.",
            financial: "Financial strength through patience. Use gentle but firm control over money."
        }
    },
    {
        name: "The Hermit",
        symbol: "🕯️",
        image: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=200&h=300&fit=crop&crop=center",
        meanings: {
            overall: "Solitude brings wisdom and guidance. Inner reflection and spiritual seeking are important.",
            business: "Take time for reflection and planning. Solitude can bring business insights.",
            relationship: "Time alone can bring clarity about relationships. Reflect on your heart's desires.",
            financial: "Financial wisdom comes through reflection. Take time to plan your financial future."
        }
    },
    {
        name: "Wheel of Fortune",
        symbol: "🎡",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&h=300&fit=crop&crop=center",
        meanings: {
            overall: "Change and cycles are in motion. Embrace the ups and downs of life's journey.",
            business: "Business cycles bring change and opportunity. Adapt to changing circumstances.",
            relationship: "Relationships go through cycles of change. Embrace the natural flow of love.",
            financial: "Financial cycles bring change. Adapt to changing financial circumstances."
        }
    },
    {
        name: "Justice",
        symbol: "⚖️",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=300&fit=crop&crop=center",
        meanings: {
            overall: "Balance and fairness guide your decisions. Truth and justice prevail in your life.",
            business: "Fair business practices bring success. Balance work and personal life.",
            relationship: "Fairness and balance in relationships. Truth and honesty in love.",
            financial: "Fair financial decisions bring balance. Justice in money matters."
        }
    },
    {
        name: "The Hanged Man",
        symbol: "🙃",
        image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=200&h=300&fit=crop&crop=center",
        meanings: {
            overall: "Sacrifice and new perspectives bring enlightenment. Surrender to gain wisdom.",
            business: "Sacrifice short-term gains for long-term success. New perspectives in business.",
            relationship: "Sacrifice ego for deeper love. New perspectives on relationships.",
            financial: "Sacrifice immediate spending for long-term financial security."
        }
    },
    {
        name: "Death",
        symbol: "💀",
        image: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=200&h=300&fit=crop&crop=center",
        meanings: {
            overall: "Transformation and endings lead to new beginnings. Change is necessary for growth.",
            business: "End old business methods to embrace new opportunities. Transformation in career.",
            relationship: "End old relationship patterns to find true love. Transformation in love.",
            financial: "End old financial habits to create new prosperity. Transformation in money matters."
        }
    },
    {
        name: "Temperance",
        symbol: "🕊️",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&h=300&fit=crop&crop=center",
        meanings: {
            overall: "Balance and moderation bring harmony. Patience and self-control guide your path.",
            business: "Balance work and rest for success. Moderation in business decisions.",
            relationship: "Balance in relationships brings harmony. Patience and moderation in love.",
            financial: "Balance spending and saving for financial harmony. Moderation in money matters."
        }
    },
    {
        name: "The Devil",
        symbol: "😈",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=300&fit=crop&crop=center",
        meanings: {
            overall: "Material attachments and illusions may cloud your judgment. Break free from limiting beliefs.",
            business: "Don't let material success cloud your judgment. Break free from limiting business beliefs.",
            relationship: "Don't let attachment cloud your judgment in love. Break free from limiting relationship beliefs.",
            financial: "Don't let money cloud your judgment. Break free from limiting financial beliefs."
        }
    },
    {
        name: "The Tower",
        symbol: "⚡",
        image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=200&h=300&fit=crop&crop=center",
        meanings: {
            overall: "Sudden change and revelation shatter old structures. Embrace the chaos for growth.",
            business: "Sudden changes in business bring revelation. Embrace disruption for growth.",
            relationship: "Sudden changes in relationships bring revelation. Embrace disruption for growth.",
            financial: "Sudden financial changes bring revelation. Embrace disruption for growth."
        }
    },
    {
        name: "The Star",
        symbol: "⭐",
        image: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=200&h=300&fit=crop&crop=center",
        meanings: {
            overall: "Hope and inspiration guide your path. Keep faith in your dreams and aspirations.",
            business: "Your creative vision will lead to success. Stay optimistic about your business goals.",
            relationship: "Hope and healing in relationships. Trust that love will find its way.",
            financial: "Financial recovery and growth are possible. Keep hope alive for better times."
        }
    },
    {
        name: "The Moon",
        symbol: "🌙",
        image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=200&h=300&fit=crop&crop=center",
        meanings: {
            overall: "Your intuition is heightened today. Pay attention to your dreams and subconscious messages.",
            business: "Trust your gut instincts in business decisions. Some things may not be as they appear.",
            relationship: "Emotions and intuition play a key role in relationships today. Listen to your heart.",
            financial: "Be cautious with financial decisions. Some investments may be deceptive."
        }
    },
    {
        name: "The Sun",
        symbol: "🌞",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=300&fit=crop&crop=center",
        meanings: {
            overall: "Joy, success, and vitality fill your day. Embrace the positive energy around you.",
            business: "Success and recognition in your career. Your hard work is paying off.",
            relationship: "Happiness and harmony in relationships. Love brings warmth and joy.",
            financial: "Financial prosperity and abundance. Your investments will bear fruit."
        }
    },
    {
        name: "Judgment",
        symbol: "👼",
        image: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=200&h=300&fit=crop&crop=center",
        meanings: {
            overall: "Rebirth and awakening bring clarity. Listen to your higher calling and purpose.",
            business: "Business awakening brings clarity and purpose. Follow your higher calling.",
            relationship: "Relationship awakening brings clarity. Follow your heart's higher calling.",
            financial: "Financial awakening brings clarity. Follow your higher financial purpose."
        }
    },
    {
        name: "The World",
        symbol: "💎",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&h=300&fit=crop&crop=center",
        meanings: {
            overall: "Completion and fulfillment of your goals. You've reached a significant milestone.",
            business: "Achievement of major career goals. Your business endeavors are successful.",
            relationship: "A relationship reaches its full potential. Love is complete and fulfilling.",
            financial: "Financial goals are achieved. You've reached a state of abundance."
        }
    }
];

// Game state
let flippedCards = [];
let selectedIntuitionType = '';

// DOM elements
const intuitionOptions = document.getElementById('intuition-options');
const intuitionButtons = document.querySelectorAll('.intuition-btn');
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const selectedCardsDisplay = document.getElementById('selected-cards-display');
const intuitionTitle = document.getElementById('intuition-title');
const intuitionText = document.getElementById('intuition-text');
const backBtn = document.getElementById('back-btn');

// Initialize the game
document.addEventListener('DOMContentLoaded', function() {
    generateCards();
    shuffleCards();
    setupEventListeners();
    preloadImages();
    addMysticalEffects();
});

// Generate all 22 cards dynamically
function generateCards() {
    const cardsContainer = document.querySelector('.cards-container');
    cardsContainer.innerHTML = '';
    
    for (let i = 0; i < 22; i++) {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.dataset.index = i;
        
        cardElement.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <div class="card-background"></div>
                    <div class="card-symbol">✨</div>
                </div>
                <div class="card-back">
                    <div class="card-image">
                        <img src="" alt="">
                    </div>
                    <div class="card-content">
                        <div class="card-name">Card ${i + 1}</div>
                        <div class="card-meaning">Loading...</div>
                    </div>
                </div>
            </div>
        `;
        
        cardsContainer.appendChild(cardElement);
    }
}

// Preload images to ensure they're available
function preloadImages() {
    tarotCards.forEach(card => {
        const img = new Image();
        img.onload = function() {
            console.log(`Image loaded: ${card.name}`);
        };
        img.onerror = function() {
            console.log(`Image failed to load: ${card.name}`);
            // Set a fallback gradient background if image fails
            const cardElements = document.querySelectorAll(`[data-index]`);
            cardElements.forEach(element => {
                const cardName = element.querySelector('.card-name');
                if (cardName && cardName.textContent === card.name) {
                    const cardBack = element.querySelector('.card-back');
                    if (cardBack) {
                        cardBack.style.background = `linear-gradient(145deg, rgba(142, 68, 173, 0.9), rgba(155, 89, 182, 0.9))`;
                    }
                }
            });
        };
        img.src = card.image;
    });
}

function setupEventListeners() {
    // Card click events - get cards after they're generated
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', handleCardClick);
    });

    // Intuition button events
    intuitionButtons.forEach(btn => {
        btn.addEventListener('click', handleIntuitionSelection);
    });

    // Back button event
    backBtn.addEventListener('click', resetGame);
}

function handleCardClick(event) {
    const card = event.currentTarget;
    const cardIndex = parseInt(card.dataset.index);
    
    console.log('Card clicked:', cardIndex, card.dataset.index);
    
    // Check if card is already flipped
    if (card.classList.contains('flipped')) {
        console.log('Card already flipped');
        return;
    }
    
    // Flip the card
    card.classList.add('flipped');
    flippedCards.push(cardIndex);
    
    console.log('Card flipped:', cardIndex, 'Total flipped:', flippedCards.length);
    
    // Add flip animation sound effect (optional)
    playFlipSound();
    
    // Check if all cards are flipped (now 22 cards)
    if (flippedCards.length === 22) {
        console.log('All cards flipped!');
        setTimeout(() => {
            showIntuitionOptions();
        }, 1000);
    }
}

function showIntuitionOptions() {
    intuitionOptions.classList.remove('hidden');
    intuitionOptions.scrollIntoView({ behavior: 'smooth' });
}

function handleIntuitionSelection(event) {
    const button = event.currentTarget;
    selectedIntuitionType = button.dataset.type;
    
    // Add selection animation
    button.style.transform = 'scale(1.1)';
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 200);
    
    // Navigate to results page
    setTimeout(() => {
        showResultsPage();
    }, 500);
}

function showResultsPage() {
    page1.classList.remove('active');
    page2.classList.add('active');
    
    // Update intuition title
    const intuitionTitles = {
        overall: 'Overall Intuition',
        business: 'Business Intuition',
        relationship: 'Relationship Intuition',
        financial: 'Financial Intuition'
    };
    
    intuitionTitle.textContent = intuitionTitles[selectedIntuitionType];
    
    // Display selected cards
    displaySelectedCards();
    
    // Generate and display intuition reading
    generateIntuitionReading();
}

function displaySelectedCards() {
    selectedCardsDisplay.innerHTML = '';
    
    flippedCards.forEach(cardIndex => {
        const card = tarotCards[cardIndex];
        const cardElement = document.createElement('div');
        cardElement.className = 'selected-card';
        cardElement.innerHTML = `
            <div class="selected-card-image">
                <img src="${card.image}" alt="${card.name}">
            </div>
            <div class="selected-card-name">${card.name}</div>
            <div class="selected-card-meaning">${card.meanings[selectedIntuitionType].split('.')[0]}.</div>
        `;
        selectedCardsDisplay.appendChild(cardElement);
    });
}

function generateIntuitionReading() {
    // Select 3-5 key cards for a focused reading instead of all 22
    const keyCardCount = Math.min(5, flippedCards.length);
    const shuffledCards = [...flippedCards].sort(() => Math.random() - 0.5);
    const keyCards = shuffledCards.slice(0, keyCardCount);
    
    // Create a focused, meaningful reading
    let combinedReading = '';
    
    keyCards.forEach((cardIndex, index) => {
        const card = tarotCards[cardIndex];
        const meaning = card.meanings[selectedIntuitionType];
        
        if (index === 0) {
            combinedReading += `The ${card.name} reveals that ${meaning.toLowerCase()}`;
        } else if (index === keyCards.length - 1) {
            combinedReading += ` Finally, the ${card.name} suggests that ${meaning.toLowerCase()}`;
        } else {
            combinedReading += ` The ${card.name} indicates that ${meaning.toLowerCase()}`;
        }
    });
    
    // Add a personalized conclusion
    const conclusions = {
        overall: "Trust your inner wisdom and let the cards guide your path forward.",
        business: "Your professional intuition is strong today. Follow your instincts in all business matters.",
        relationship: "Your heart knows the way. Listen to its whispers in matters of love and connection.",
        financial: "Your financial intuition is heightened. Trust your judgment in all monetary decisions."
    };
    
    combinedReading += ` ${conclusions[selectedIntuitionType]}`;
    
    // Limit reading length to prevent overwhelming text
    if (combinedReading.length > 800) {
        combinedReading = combinedReading.substring(0, 800) + '...';
    }
    
    // Display the reading with typing animation
    typeWriter(intuitionText, combinedReading);
}

function typeWriter(element, text) {
    element.textContent = '';
    let i = 0;
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            // Faster typing for better readability
            setTimeout(type, 20);
        }
    }
    
    type();
}

function resetGame() {
    // Reset game state
    flippedCards = [];
    selectedIntuitionType = '';
    
    // Reset cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.classList.remove('flipped');
    });
    
    // Hide intuition options
    intuitionOptions.classList.add('hidden');
    
    // Navigate back to page 1
    page2.classList.remove('active');
    page1.classList.add('active');
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Shuffle cards again
    shuffleCards();
}

function shuffleCards() {
    // Create a copy of tarot cards and shuffle them
    const shuffledCards = [...tarotCards];
    for (let i = shuffledCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
    }
    
    console.log('Shuffled cards:', shuffledCards.map(card => card.name));
    
    // Update card content with shuffled data
    const cards = document.querySelectorAll('.card');
    console.log('Found cards:', cards.length);
    
    cards.forEach((card, index) => {
        const cardData = shuffledCards[index];
        const symbolElement = card.querySelector('.card-symbol');
        const nameElement = card.querySelector('.card-name');
        const meaningElement = card.querySelector('.card-meaning');
        const imageElement = card.querySelector('.card-image img');
        
        symbolElement.textContent = cardData.symbol;
        nameElement.textContent = cardData.name;
        meaningElement.textContent = cardData.meanings.overall.split('.')[0] + '.';
        imageElement.src = cardData.image;
        imageElement.alt = cardData.name;
        
        console.log(`Card ${index}: ${cardData.name}`);
    });
}

function playFlipSound() {
    // Optional: Add sound effect for card flip
    // You can implement actual sound effects here if desired
    console.log('Card flipped!');
}

// Add some mystical effects
function addMysticalEffects() {
    // Add particle effects or other mystical elements
    const particles = document.createElement('div');
    particles.className = 'mystical-particles';
    particles.innerHTML = '✨ 🌙 ⭐ 🌞 💎';
    particles.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        opacity: 0.1;
        font-size: 2rem;
        animation: float 10s ease-in-out infinite;
    `;
    document.body.appendChild(particles);
}

// Initialize mystical effects
// addMysticalEffects(); // Moved to DOMContentLoaded 