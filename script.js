// JavaScript file

// Tarot card data with actual image paths from assets
const tarotCards = [
    {
        id: 0,
        name: "The Fool",
        image: "assets/the_fool.webp",
        meanings: {
            love: "새로운 사랑의 시작, 순수한 마음으로 연애에 임하세요. 기존의 편견을 버리고 마음을 열어보세요.",
            money: "새로운 기회를 잡을 때, 직감을 믿고 도전하세요. 과거의 실패에 얽매이지 말고 새로운 시작을 하세요."
        }
    },
    {
        id: 1,
        name: "The Magician",
        image: "assets/the magician.webp",
        meanings: {
            love: "당신의 매력과 능력을 활용하여 사랑을 만들어가세요. 자신감을 가지고 적극적으로 행동하세요.",
            money: "당신의 재능과 기술을 활용하여 성공을 만들어가세요. 모든 도구가 준비되어 있습니다."
        }
    },
    {
        id: 2,
        name: "The High Priestess",
        image: "assets/high priest.webp",
        meanings: {
            love: "직감을 믿고 내면의 소리에 귀 기울이세요. 숨겨진 진실이 드러날 수 있습니다.",
            money: "직감과 내면의 지혜를 활용하여 결정을 내리세요. 숨겨진 기회를 발견할 수 있습니다."
        }
    },
    {
        id: 3,
        name: "The Empress",
        image: "assets/the empress.webp",
        meanings: {
            love: "풍부한 사랑과 성장이 기다리고 있습니다. 창조적이고 따뜻한 마음으로 관계를 발전시키세요.",
            money: "풍요와 성장의 시기입니다. 창의적인 아이디어를 통해 부를 창조하세요."
        }
    },
    {
        id: 4,
        name: "The Emperor",
        image: "assets/the emperor.webp",
        meanings: {
            love: "안정적이고 구조적인 관계를 만들어가세요. 리더십을 발휘하여 관계를 이끌어가세요.",
            money: "체계적이고 계획적인 접근으로 성공을 만들어가세요. 권위와 통제력을 활용하세요."
        }
    },
    {
        id: 5,
        name: "The Hierophant",
        image: "assets/hierophant.webp",
        meanings: {
            love: "전통적이고 안정적인 관계를 추구하세요. 가치관이 일치하는 파트너를 찾으세요.",
            money: "기존의 시스템과 규칙을 따르며 성공을 만들어가세요. 멘토의 조언을 받아보세요."
        }
    },
    {
        id: 6,
        name: "The Lovers",
        image: "assets/lovers.webp",
        meanings: {
            love: "진정한 사랑과 조화로운 관계가 기다리고 있습니다. 중요한 선택의 순간입니다.",
            money: "좋은 파트너십과 협력을 통해 성공을 만들어가세요. 중요한 결정을 신중하게 하세요."
        }
    },
    {
        id: 7,
        name: "The Chariot",
        image: "assets/the chariot.webp",
        meanings: {
            love: "의지와 결단력으로 사랑을 이끌어가세요. 장애물을 극복하고 목표를 향해 나아가세요.",
            money: "의지와 결단력으로 목표를 달성하세요. 장애물을 극복하고 전진하세요."
        }
    },
    {
        id: 8,
        name: "Strength",
        image: "assets/strength.webp",
        meanings: {
            love: "내면의 힘과 용기로 관계를 발전시키세요. 부드러운 힘으로 상대방의 마음을 얻으세요.",
            money: "내면의 힘과 인내심으로 도전을 극복하세요. 부드러운 접근으로 성공을 만들어가세요."
        }
    },
    {
        id: 9,
        name: "The Hermit",
        image: "assets/the hermit.webp",
        meanings: {
            love: "혼자 있는 시간을 통해 자신을 이해하세요. 내면의 지혜를 활용하여 관계를 발전시키세요.",
            money: "혼자 있는 시간을 통해 깊이 있는 통찰을 얻으세요. 내면의 지혜를 활용하여 성공하세요."
        }
    },
    {
        id: 10,
        name: "The Wheel of Fortune",
        image: "assets/the wheel.webp",
        meanings: {
            love: "운명의 바퀴가 돌아가고 있습니다. 변화를 받아들이고 새로운 기회를 잡으세요.",
            money: "운명의 바퀴가 돌아가고 있습니다. 변화를 받아들이고 새로운 기회를 잡으세요."
        }
    },
    {
        id: 11,
        name: "Justice",
        image: "assets/justice.webp",
        meanings: {
            love: "공정하고 균형 잡힌 관계를 만들어가세요. 진실과 정직함을 바탕으로 관계를 발전시키세요.",
            money: "공정하고 균형 잡힌 결정을 내리세요. 진실과 정직함을 바탕으로 성공하세요."
        }
    },
    {
        id: 12,
        name: "The Hanged Man",
        image: "assets/hanged man.webp",
        meanings: {
            love: "새로운 관점에서 관계를 바라보세요. 희생과 인내를 통해 깊이 있는 사랑을 얻으세요.",
            money: "새로운 관점에서 상황을 바라보세요. 희생과 인내를 통해 깊이 있는 통찰을 얻으세요."
        }
    },
    {
        id: 13,
        name: "Death",
        image: "assets/death.webp",
        meanings: {
            love: "오래된 관계의 끝과 새로운 시작이 있습니다. 변화를 받아들이고 새로운 사랑을 찾으세요.",
            money: "오래된 방식의 끝과 새로운 시작이 있습니다. 변화를 받아들이고 새로운 기회를 찾으세요."
        }
    },
    {
        id: 14,
        name: "Temperance",
        image: "assets/temperance.webp",
        meanings: {
            love: "균형과 조화를 유지하며 관계를 발전시키세요. 인내와 절제를 통해 완벽한 조화를 이루세요.",
            money: "균형과 조화를 유지하며 성공을 만들어가세요. 인내와 절제를 통해 완벽한 조화를 이루세요."
        }
    },
    {
        id: 15,
        name: "The Devil",
        image: "assets/the devil.webp",
        meanings: {
            love: "유혹과 집착에서 벗어나 자유로운 사랑을 찾으세요. 진정한 사랑의 본질을 파악하세요.",
            money: "물질적 욕망에서 벗어나 진정한 가치를 찾으세요. 자유와 해방을 통해 성공하세요."
        }
    },
    {
        id: 16,
        name: "The Tower",
        image: "assets/the tower.webp",
        meanings: {
            love: "갑작스러운 변화와 깨달음이 있습니다. 오래된 믿음과 구조를 허물고 새로운 사랑을 찾으세요.",
            money: "갑작스러운 변화와 깨달음이 있습니다. 오래된 믿음과 구조를 허물고 새로운 성공을 찾으세요."
        }
    },
    {
        id: 17,
        name: "The Star",
        image: "assets/the star.webp",
        meanings: {
            love: "희망과 영감을 바탕으로 새로운 사랑을 찾으세요. 꿈을 향해 나아가면 사랑이 기다리고 있습니다.",
            money: "희망과 영감을 바탕으로 새로운 성공을 찾으세요. 꿈을 향해 나아가면 성공이 기다리고 있습니다."
        }
    },
    {
        id: 18,
        name: "The Moon",
        image: "assets/the moon.webp",
        meanings: {
            love: "직감과 상상력을 활용하여 숨겨진 진실을 발견하세요. 환상과 현실을 구분하세요.",
            money: "직감과 상상력을 활용하여 숨겨진 기회를 발견하세요. 환상과 현실을 구분하세요."
        }
    },
    {
        id: 19,
        name: "The Sun",
        image: "assets/the sun.webp",
        meanings: {
            love: "밝고 따뜻한 사랑이 기다리고 있습니다. 자신감과 낙관적인 마음으로 사랑을 찾으세요.",
            money: "밝고 따뜻한 성공이 기다리고 있습니다. 자신감과 낙관적인 마음으로 성공을 찾으세요."
        }
    },
    {
        id: 20,
        name: "Judgement",
        image: "assets/judgement.webp",
        meanings: {
            love: "새로운 깨달음과 부활의 시기입니다. 과거를 용서하고 새로운 사랑을 시작하세요.",
            money: "새로운 깨달음과 부활의 시기입니다. 과거를 용서하고 새로운 성공을 시작하세요."
        }
    },
    {
        id: 21,
        name: "The World",
        image: "assets/the world.webp",
        meanings: {
            love: "완성과 성취의 시기입니다. 모든 경험을 통합하여 완벽한 사랑을 이루세요.",
            money: "완성과 성취의 시기입니다. 모든 경험을 통합하여 완벽한 성공을 이루세요."
        }
    }
];

// Game state
let selectedFortuneType = null;
let drawnCards = [];
let currentCardIndex = 0;

// DOM elements
const drawBtn = document.getElementById('drawBtn');
const confirmBtn = document.getElementById('confirmBtn');
const restartBtn = document.getElementById('restartBtn');
const fortuneBtns = document.querySelectorAll('.fortune-btn');
const drawnCardsContainer = document.getElementById('drawnCards');
const resultCardsContainer = document.getElementById('resultCards');
const interpretationText = document.getElementById('interpretationText');
const fortuneTypeTitle = document.getElementById('fortuneTypeTitle');
const fortuneSelection = document.getElementById('fortuneSelection');
const remainingCounter = document.getElementById('remainingCounter');

// Event listeners
drawBtn.addEventListener('click', drawCard);
confirmBtn.addEventListener('click', showResults);
restartBtn.addEventListener('click', restartGame);

fortuneBtns.forEach(btn => {
    btn.addEventListener('click', () => selectFortuneType(btn.dataset.fortune));
});

function setDefaultFortuneIfNone() {
    if (!selectedFortuneType) {
        selectFortuneType('love');
    }
}

// Fortune type selection
function selectFortuneType(fortuneType) {
    selectedFortuneType = fortuneType;
    fortuneBtns.forEach(btn => {
        btn.classList.remove('selected');
        if (btn.dataset.fortune === fortuneType) btn.classList.add('selected');
    });
    updateConfirmButtonState();
}

function updateConfirmButtonState() {
    confirmBtn.disabled = !(drawnCards.length === 3 && !!selectedFortuneType);
}

function updateRemainingCounter() {
    const remaining = Math.max(0, 3 - drawnCards.length);
    remainingCounter.textContent = `남은 카드: ${remaining}`;
}

// Draw a single card
function drawCard() {
    if (drawnCards.length >= 3) return;
    
    // Get random card that hasn't been drawn yet
    let availableCards = tarotCards.filter(card => 
        !drawnCards.some(drawn => drawn.id === card.id)
    );
    
    if (availableCards.length === 0) return;
    
    const randomIndex = Math.floor(Math.random() * availableCards.length);
    const selectedCard = availableCards[randomIndex];
    
    // Add to drawn cards
    drawnCards.push(selectedCard);
    
    // Create wrapper element containing the card and its name
    const drawnItem = createCardElement(selectedCard, drawnCards.length - 1);
    drawnCardsContainer.appendChild(drawnItem);
    
    // Animate card appearance
    const innerCard = drawnItem.querySelector('.card');
        setTimeout(() => {
        innerCard.classList.add('drawing');
    }, 100);
    
    // Update deck appearance
    updateDeckAppearance();
    updateRemainingCounter();
    
    // If finished drawing all 3, reveal fortune selection
    if (drawnCards.length === 3) {
        drawBtn.disabled = true;
        if (fortuneSelection.classList.contains('hidden')) {
            fortuneSelection.classList.remove('hidden');
            // default select love when selection appears
            setDefaultFortuneIfNone();
        }
        updateConfirmButtonState();
    }
}

// Create card element with actual image and name label
function createCardElement(card, index) {
    // Wrapper for layout and name
    const wrapper = document.createElement('div');
    wrapper.className = 'drawn-card';

    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    cardDiv.dataset.cardId = card.id;
    
    // Card back
    const cardBack = document.createElement('div');
    cardBack.className = 'card-back';
    
    // Card front with actual image
    const cardFront = document.createElement('div');
    cardFront.className = 'card-front';
    
    const cardImage = document.createElement('img');
    cardImage.src = encodeURI(card.image);
    cardImage.alt = card.name;
    cardImage.style.width = '100%';
    cardImage.style.height = '100%';
    cardImage.style.objectFit = 'cover';
    cardImage.style.borderRadius = '12px';
    
    cardFront.appendChild(cardImage);
    
    cardDiv.appendChild(cardBack);
    cardDiv.appendChild(cardFront);

    // Name label
    const nameEl = document.createElement('div');
    nameEl.className = 'card-name';
    nameEl.textContent = card.name;
    
    wrapper.appendChild(cardDiv);
    wrapper.appendChild(nameEl);
    
    // Flip card after animation and reveal the name
    setTimeout(() => {
        cardDiv.classList.add('flipped');
        nameEl.classList.add('show');
    }, 800 + (index * 200));
    
    return wrapper;
}

// Update deck appearance as cards are drawn
function updateDeckAppearance() {
    const deck = document.getElementById('deck');
    const remainingCards = Math.max(0, 3 - drawnCards.length);

    // Always keep deck visible
    deck.innerHTML = '';

    for (let i = 0; i < Math.max(remainingCards, 1); i++) {
        const deckBack = document.createElement('div');
        deckBack.className = 'deck-back';
        deckBack.style.top = (i * 3) + 'px';
        deckBack.style.left = (i * 3) + 'px';
        deckBack.style.zIndex = (3 - i);
        deck.appendChild(deckBack);
    }

    // Toggle disabled visual state when no cards remain
    if (remainingCards === 0) {
        deck.classList.add('disabled');
    } else {
        deck.classList.remove('disabled');
    }
}

// Show results page
function showResults() {
    if (drawnCards.length !== 3 || !selectedFortuneType) return;
    
    // Update fortune type title
    const fortuneTypeText = selectedFortuneType === 'love' ? '연애운' : '금전운';
    fortuneTypeTitle.textContent = fortuneTypeText;
    
    // Display result cards
    displayResultCards();
    
    // Generate and display interpretation
    generateInterpretation();
    
    // Switch to page 2
    document.getElementById('page1').classList.remove('active');
    document.getElementById('page2').classList.add('active');
}

// Display result cards
function displayResultCards() {
    resultCardsContainer.innerHTML = '';
    
    drawnCards.forEach(card => {
        const resultCard = document.createElement('div');
        resultCard.className = 'result-card';
        
        resultCard.innerHTML = `
            <img src="${encodeURI(card.image)}" alt="${card.name}">
            <h4>${card.name}</h4>
        `; // Removed per-card meaning here to avoid duplication
        
        resultCardsContainer.appendChild(resultCard);
    });
}

// Helper: create a short snippet from a meaning
function getShortMeaning(text) {
    const trimmed = text.replace(/\s+/g, ' ').trim();
    // Try to take first sentence; fallback to first 40 chars
    const firstSentence = trimmed.split(/[.!?\n]/)[0];
    const candidate = firstSentence && firstSentence.length > 0 ? firstSentence : trimmed;
    return candidate.length > 42 ? candidate.slice(0, 42) + '…' : candidate;
}

// Generate fortune interpretation (concise, non-duplicative)
function generateInterpretation() {
    const type = selectedFortuneType;
    const label = type === 'love' ? '연애운' : '금전운';
    const [c1, c2, c3] = drawnCards;

    let html = '';
    html += `<strong>${label} 종합 해석</strong><br><br>`;
    html += `이번 조합은 <em>${c1.name}</em>, <em>${c2.name}</em>, <em>${c3.name}</em> 입니다. `;
    html += `${c1.name}는 "${getShortMeaning(c1.meanings[type])}"의 출발을 알리고, `;
    html += `${c2.name}는 "${getShortMeaning(c2.meanings[type])}"로 흐름을 이어가며, `;
    html += `마지막 ${c3.name}는 "${getShortMeaning(c3.meanings[type])}"로 방향을 마무리합니다.`;

    html += `<br><br><strong>가이드</strong><br>`;
    if (type === 'love') {
        html += `감정의 급변보다는 차분한 대화와 성숙한 선택이 중요합니다. 오늘–일주일 사이에 작은 실천부터 시작해 보세요.`;
    } else {
        html += `무리한 확장보다 리스크 관리와 선택과 집중이 유리합니다. 오늘–일주일 사이 실행할 수 있는 한 가지 행동을 정하세요.`;
    }

    interpretationText.innerHTML = html;
}

// Restart game
function restartGame() {
    // Reset game state
    selectedFortuneType = null;
    drawnCards = [];
    currentCardIndex = 0;
    
    // Reset UI
    drawnCardsContainer.innerHTML = '';
    fortuneBtns.forEach(btn => btn.classList.remove('selected'));
    drawBtn.disabled = false; // allow drawing immediately
    confirmBtn.disabled = true;
    
    // Reset deck
    const deck = document.getElementById('deck');
    deck.innerHTML = `
        <div class="deck-back"></div>
        <div class="deck-back"></div>
        <div class="deck-back"></div>
    `;
    deck.style.display = 'block';
    
    // Hide fortune selection
    if (!fortuneSelection.classList.contains('hidden')) {
        fortuneSelection.classList.add('hidden');
    }

    // Switch back to page 1
    document.getElementById('page2').classList.remove('active');
    document.getElementById('page1').classList.add('active');
    updateRemainingCounter();
}

// Initialize the game
function initGame() {
    // Preload all card images for smooth transitions
    tarotCards.forEach(card => {
        const img = new Image();
        img.src = encodeURI(card.image);
    });
    
    // Set initial button states
    drawBtn.disabled = false;
    // do not show selection yet; default will be applied when it appears
    updateConfirmButtonState();
    updateRemainingCounter();
}

// Start the game when page loads
document.addEventListener('DOMContentLoaded', initGame);
