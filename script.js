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
        },
        reversed_meanings: {
            love: "경솔함과 방향성 부족. 관계에서 속도를 늦추고 신중함을 더하세요.",
            money: "성급한 투자·결정 주의. 기본기를 점검하고 계획을 세우세요."
        }
    },
    {
        id: 1,
        name: "The Magician",
        image: "assets/the magician.webp",
        meanings: {
            love: "당신의 매력과 능력을 활용하여 사랑을 만들어가세요. 자신감을 가지고 적극적으로 행동하세요.",
            money: "당신의 재능과 기술을 활용하여 성공을 만들어가세요. 모든 도구가 준비되어 있습니다."
        },
        reversed_meanings: {
            love: "의사소통 왜곡·조작적 태도 경계. 진정성 회복이 필요합니다.",
            money: "계획 미흡·분산된 에너지. 우선순위를 정하고 실행력을 개선하세요."
        }
    },
    {
        id: 2,
        name: "The High Priestess",
        image: "assets/high priest.webp",
        meanings: {
            love: "직감을 믿고 내면의 소리에 귀 기울이세요. 숨겨진 진실이 드러날 수 있습니다.",
            money: "직감과 내면의 지혜를 활용하여 결정을 내리세요. 숨겨진 기회를 발견할 수 있습니다."
        },
        reversed_meanings: {
            love: "직감 무시·비밀과 혼란. 감정을 숨기지 말고 사실을 확인하세요.",
            money: "정보 비대칭·모호함. 데이터 기반 판단과 검증이 필요합니다."
        }
    },
    {
        id: 3,
        name: "The Empress",
        image: "assets/the empress.webp",
        meanings: {
            love: "풍부한 사랑과 성장이 기다리고 있습니다. 창조적이고 따뜻한 마음으로 관계를 발전시키세요.",
            money: "풍요와 성장의 시기입니다. 창의적인 아이디어를 통해 부를 창조하세요."
        },
        reversed_meanings: {
            love: "과보호·의존 경향. 건강한 거리두기와 자기돌봄이 핵심입니다.",
            money: "창의 정체·낭비. 효율과 수익성에 집중하세요."
        }
    },
    {
        id: 4,
        name: "The Emperor",
        image: "assets/the emperor.webp",
        meanings: {
            love: "안정적이고 구조적인 관계를 만들어가세요. 리더십을 발휘하여 관계를 이끌어가세요.",
            money: "체계적이고 계획적인 접근으로 성공을 만들어가세요. 권위와 통제력을 활용하세요."
        },
        reversed_meanings: {
            love: "경직·통제 과다. 유연성과 상호존중을 회복하세요.",
            money: "권위주의·과도한 통제. 위임과 구조 개선이 필요합니다."
        }
    },
    {
        id: 5,
        name: "The Hierophant",
        image: "assets/hierophant.webp",
        meanings: {
            love: "전통적이고 안정적인 관계를 추구하세요. 가치관이 일치하는 파트너를 찾으세요.",
            money: "기존의 시스템과 규칙을 따르며 성공을 만들어가세요. 멘토의 조언을 받아보세요."
        },
        reversed_meanings: {
            love: "형식주의·관습의 압박. 두 사람만의 규칙을 찾으세요.",
            money: "구식 규범 고수. 혁신과 실용으로 전환하세요."
        }
    },
    {
        id: 6,
        name: "The Lovers",
        image: "assets/lovers.webp",
        meanings: {
            love: "진정한 사랑과 조화로운 관계가 기다리고 있습니다. 중요한 선택의 순간입니다.",
            money: "좋은 파트너십과 협력을 통해 성공을 만들어가세요. 중요한 결정을 신중하게 하세요."
        },
        reversed_meanings: {
            love: "불협화음·우유부단. 가치 재정렬과 명료한 선택이 필요합니다.",
            money: "파트너십 균열. 역할·계약을 명확히 하세요."
        }
    },
    {
        id: 7,
        name: "The Chariot",
        image: "assets/the chariot.webp",
        meanings: {
            love: "의지와 결단력으로 사랑을 이끌어가세요. 장애물을 극복하고 목표를 향해 나아가세요.",
            money: "의지와 결단력으로 목표를 달성하세요. 장애물을 극복하고 전진하세요."
        },
        reversed_meanings: {
            love: "조급함·통제 집착. 속도 조절과 공감을 우선하세요.",
            money: "방향 혼란·무리한 추진. 목표를 재정의하세요."
        }
    },
    {
        id: 8,
        name: "Strength",
        image: "assets/strength.webp",
        meanings: {
            love: "내면의 힘과 용기로 관계를 발전시키세요. 부드러운 힘으로 상대방의 마음을 얻으세요.",
            money: "내면의 힘과 인내심으로 도전을 극복하세요. 부드러운 접근으로 성공을 만들어가세요."
        },
        reversed_meanings: {
            love: "감정 폭주·자존 저하. 부드러운 절제와 자기연민이 필요합니다.",
            money: "지속성 부족·흔들림. 루틴과 꾸준함을 복원하세요."
        }
    },
    {
        id: 9,
        name: "The Hermit",
        image: "assets/the hermit.webp",
        meanings: {
            love: "혼자 있는 시간을 통해 자신을 이해하세요. 내면의 지혜를 활용하여 관계를 발전시키세요.",
            money: "혼자 있는 시간을 통해 깊이 있는 통찰을 얻으세요. 내면의 지혜를 활용하여 성공하세요."
        },
        reversed_meanings: {
            love: "고립·회피. 도움과 연결을 받아들이세요.",
            money: "단절·독단. 멘토·데이터와의 연결을 회복하세요."
        }
    },
    {
        id: 10,
        name: "The Wheel of Fortune",
        image: "assets/the wheel.webp",
        meanings: {
            love: "운명의 바퀴가 돌아가고 있습니다. 변화를 받아들이고 새로운 기회를 잡으세요.",
            money: "운명의 바퀴가 돌아가고 있습니다. 변화를 받아들이고 새로운 기회를 잡으세요."
        },
        reversed_meanings: {
            love: "타이밍 불리·정체. 흐름이 바뀔 때까지 유연하게 대기하세요.",
            money: "운의 역풍·변동성 확대. 리스크를 분산하세요."
        }
    },
    {
        id: 11,
        name: "Justice",
        image: "assets/justice.webp",
        meanings: {
            love: "공정하고 균형 잡힌 관계를 만들어가세요. 진실과 정직함을 바탕으로 관계를 발전시키세요.",
            money: "공정하고 균형 잡힌 결정을 내리세요. 진실과 정직함을 바탕으로 성공하세요."
        },
        reversed_meanings: {
            love: "불공정·편파를 경계하고 사실 기반으로 대화하세요.",
            money: "규정 위반·왜곡을 피하고 투명성과 책임을 강화하세요."
        }
    },
    {
        id: 12,
        name: "The Hanged Man",
        image: "assets/hanged man.webp",
        meanings: {
            love: "새로운 관점에서 관계를 바라보세요. 희생과 인내를 통해 깊이 있는 사랑을 얻으세요.",
            money: "새로운 관점에서 상황을 바라보세요. 희생과 인내를 통해 깊이 있는 통찰을 얻으세요."
        },
        reversed_meanings: {
            love: "집착·지연. 시각 전환과 내려놓기가 필요합니다.",
            money: "멈춤의 의미 상실. 인사이트를 행동으로 옮기세요."
        }
    },
    {
        id: 13,
        name: "Death",
        image: "assets/death.webp",
        meanings: {
            love: "오래된 관계의 끝과 새로운 시작이 있습니다. 변화를 받아들이고 새로운 사랑을 찾으세요.",
            money: "오래된 방식의 끝과 새로운 시작이 있습니다. 변화를 받아들이고 새로운 기회를 찾으세요."
        },
        reversed_meanings: {
            love: "변화 저항. 끝맺고 새 출발을 준비하세요.",
            money: "정체·미련. 비효율을 과감히 정리하세요."
        }
    },
    {
        id: 14,
        name: "Temperance",
        image: "assets/temperance.webp",
        meanings: {
            love: "균형과 조화를 유지하며 관계를 발전시키세요. 인내와 절제를 통해 완벽한 조화를 이루세요.",
            money: "균형과 조화를 유지하며 성공을 만들어가세요. 인내와 절제를 통해 완벽한 조화를 이루세요."
        },
        reversed_meanings: {
            love: "불균형·과함. 조율·타협으로 균형을 회복하세요.",
            money: "과투자·과소비. 포트폴리오를 리밸런싱하세요."
        }
    },
    {
        id: 15,
        name: "The Devil",
        image: "assets/the devil.webp",
        meanings: {
            love: "유혹과 집착에서 벗어나 자유로운 사랑을 찾으세요. 진정한 사랑의 본질을 파악하세요.",
            money: "물질적 욕망에서 벗어나 진정한 가치를 찾으세요. 자유와 해방을 통해 성공하세요."
        },
        reversed_meanings: {
            love: "집착 해소·의존 탈피. 건강한 경계를 세우세요.",
            money: "과소비·욕망의 굴레에서 벗어나기. 미니멀 전략을 취하세요."
        }
    },
    {
        id: 16,
        name: "The Tower",
        image: "assets/the tower.webp",
        meanings: {
            love: "갑작스러운 변화와 깨달음이 있습니다. 오래된 믿음과 구조를 허물고 새로운 사랑을 찾으세요.",
            money: "갑작스러운 변화와 깨달음이 있습니다. 오래된 믿음과 구조를 허물고 새로운 성공을 찾으세요."
        },
        reversed_meanings: {
            love: "충돌 회피·변화 지연. 작은 붕괴로 큰 위험을 방지하세요.",
            money: "리스크 축적. 점진적 구조조정으로 충격을 분산하세요."
        }
    },
    {
        id: 17,
        name: "The Star",
        image: "assets/the star.webp",
        meanings: {
            love: "희망과 영감을 바탕으로 새로운 사랑을 찾으세요. 꿈을 향해 나아가면 사랑이 기다리고 있습니다.",
            money: "희망과 영감을 바탕으로 새로운 성공을 찾으세요. 꿈을 향해 나아가면 성공이 기다리고 있습니다."
        },
        reversed_meanings: {
            love: "희망 저하·의심. 회복과 셀프케어가 선행되어야 합니다.",
            money: "목표 희석·현실 괴리. 비전을 재정렬하고 현실을 점검하세요."
        }
    },
    {
        id: 18,
        name: "The Moon",
        image: "assets/the moon.webp",
        meanings: {
            love: "직감과 상상력을 활용하여 숨겨진 진실을 발견하세요. 환상과 현실을 구분하세요.",
            money: "직감과 상상력을 활용하여 숨겨진 기회를 발견하세요. 환상과 현실을 구분하세요."
        },
        reversed_meanings: {
            love: "오해 해소·진실 드러남. 감정을 명료화하세요.",
            money: "불확실성 축소. 데이터로 안개를 걷어내세요."
        }
    },
    {
        id: 19,
        name: "The Sun",
        image: "assets/the sun.webp",
        meanings: {
            love: "밝고 따뜻한 사랑이 기다리고 있습니다. 자신감과 낙관적인 마음으로 사랑을 찾으세요.",
            money: "밝고 따뜻한 성공이 기다리고 있습니다. 자신감과 낙관적인 마음으로 성공을 찾으세요."
        },
        reversed_meanings: {
            love: "과한 낙관·피로. 소소한 기쁨을 회복하세요.",
            money: "번아웃·현실 점검. 휴식과 리셋이 필요합니다."
        }
    },
    {
        id: 20,
        name: "Judgement",
        image: "assets/judgement.webp",
        meanings: {
            love: "새로운 깨달음과 부활의 시기입니다. 과거를 용서하고 새로운 사랑을 시작하세요.",
            money: "새로운 깨달음과 부활의 시기입니다. 과거를 용서하고 새로운 성공을 시작하세요."
        },
        reversed_meanings: {
            love: "자기의심·용서 필요. 관계의 소명을 재확인하세요.",
            money: "결단 회피. 학습을 통합해 재도전하세요."
        }
    },
    {
        id: 21,
        name: "The World",
        image: "assets/the world.webp",
        meanings: {
            love: "완성과 성취의 시기입니다. 모든 경험을 통합하여 완벽한 사랑을 이루세요.",
            money: "완성과 성취의 시기입니다. 모든 경험을 통합하여 완벽한 성공을 이루세요."
        },
        reversed_meanings: {
            love: "미완·정체. 마무리 과제를 해결하세요.",
            money: "프로젝트 미완료. 마감·인도까지 끝내세요."
        }
    }
];

// Attach reversed meanings directly into tarotCards
tarotCards.forEach((c) => {
  switch (c.name) {
    case 'The Fool':
      c.meanings.reversedLove = '경솔함과 방향성 부족. 관계에서 속도를 늦추고 신중함을 더하세요.';
      c.meanings.reversedMoney = '성급한 투자·결정 주의. 기본기를 점검하고 계획을 세우세요.';
      break;
    case 'The Magician':
      c.meanings.reversedLove = '의사소통 왜곡·조작적 태도 경계. 진정성 회복이 필요.';
      c.meanings.reversedMoney = '계획 미흡·분산된 에너지. 우선순위를 정하고 실행력을 개선.';
      break;
    case 'The High Priestess':
      c.meanings.reversedLove = '직감 무시·비밀과 혼란. 감정을 숨기지 말고 사실 확인.';
      c.meanings.reversedMoney = '정보 비대칭·모호함. 데이터 기반 판단과 검증이 필요.';
      break;
    case 'The Empress':
      c.meanings.reversedLove = '과보호·의존. 건강한 거리두기와 자기돌봄이 핵심.';
      c.meanings.reversedMoney = '창의 정체·낭비. 효율과 수익성에 집중.';
      break;
    case 'The Emperor':
      c.meanings.reversedLove = '경직·통제 과다. 유연성과 상호존중을 회복.';
      c.meanings.reversedMoney = '권위주의·과도한 통제. 위임과 구조 개선 필요.';
      break;
    case 'The Hierophant':
      c.meanings.reversedLove = '형식주의·관습의 압박. 두 사람만의 규칙을 찾기.';
      c.meanings.reversedMoney = '구식 규범 고수. 혁신과 실용으로 전환.';
      break;
    case 'The Lovers':
      c.meanings.reversedLove = '불협화음·우유부단. 가치 재정렬과 명료한 선택.';
      c.meanings.reversedMoney = '파트너십 균열. 역할·계약을 명확히.';
      break;
    case 'The Chariot':
      c.meanings.reversedLove = '조급·통제 집착. 속도 조절과 공감 우선.';
      c.meanings.reversedMoney = '방향 혼란·무리한 추진. 목표 재정의.';
      break;
    case 'Strength':
      c.meanings.reversedLove = '감정 폭주·자존 저하. 부드러운 절제와 자기연민.';
      c.meanings.reversedMoney = '마음 흔들림·지속성 부족. 루틴과 꾸준함 복원.';
      break;
    case 'The Hermit':
      c.meanings.reversedLove = '고립·회피. 도움과 연결을 받아들이기.';
      c.meanings.reversedMoney = '단절·독단. 멘토·데이터와의 연결 회복.';
      break;
    case 'The Wheel of Fortune':
      c.meanings.reversedLove = '타이밍 불리·정체. 흐름 바뀔 때까지 유연하게 대기.';
      c.meanings.reversedMoney = '운의 역풍·변동성 확대. 리스크 분산.';
      break;
    case 'Justice':
      c.meanings.reversedLove = '불공정·편파. 사실 기반 대화와 책임 공유.';
      c.meanings.reversedMoney = '규정 위반·왜곡. 투명성과 컴플라이언스 강화.';
      break;
    case 'The Hanged Man':
      c.meanings.reversedLove = '집착·지연. 시각 전환과 내려놓기.';
      c.meanings.reversedMoney = '멈춤의 의미 상실. 인사이트를 행동으로.';
      break;
    case 'Death':
      c.meanings.reversedLove = '변화 저항. 끝맺고 새 출발을 준비.';
      c.meanings.reversedMoney = '정체·미련. 비효율을 과감히 정리.';
      break;
    case 'Temperance':
      c.meanings.reversedLove = '불균형·과함. 조율·타협으로 균형 회복.';
      c.meanings.reversedMoney = '과투자·과소비. 포트폴리오 리밸런싱.';
      break;
    case 'The Devil':
      c.meanings.reversedLove = '집착 해소·의존 탈피. 경계 재설정.';
      c.meanings.reversedMoney = '과소비·욕망의 굴레 탈피. 미니멀 전략.';
      break;
    case 'The Tower':
      c.meanings.reversedLove = '충돌 회피·변화 지연. 작은 붕괴로 큰 위험 방지.';
      c.meanings.reversedMoney = '리스크 축적. 점진적 구조조정.';
      break;
    case 'The Star':
      c.meanings.reversedLove = '희망 저하·의심. 회복·셀프케어가 선행.';
      c.meanings.reversedMoney = '목표 희석. 비전 재정렬과 현실 점검.';
      break;
    case 'The Moon':
      c.meanings.reversedLove = '오해 해소·진실 드러남. 감정 명료화.';
      c.meanings.reversedMoney = '불확실성 축소. 데이터로 안개 걷기.';
      break;
    case 'The Sun':
      c.meanings.reversedLove = '과한 낙관·피로. 소소한 기쁨 회복.';
      c.meanings.reversedMoney = '번아웃·현실 점검. 휴식과 리셋.';
      break;
    case 'Judgement':
      c.meanings.reversedLove = '자기의심·용서 필요. 관계의 소명 재확인.';
      c.meanings.reversedMoney = '결단 회피. 학습을 통합해 재도전.';
      break;
    case 'The World':
      c.meanings.reversedLove = '미완·정체. 마무리와 이별 과제 해결.';
      c.meanings.reversedMoney = '프로젝트 미완료. 마감·인도까지 끝내기.';
      break;
    default:
      c.meanings.reversedLove = '역방향: 관계를 천천히 재정렬하세요.';
      c.meanings.reversedMoney = '역방향: 보수적으로 리스크를 관리하세요.';
  }
});

// Ensure schema matches requested shape: reversed_meanings: { love, money }
tarotCards.forEach((c) => {
  if (!c.reversed_meanings) {
    c.reversed_meanings = {
      love: c.meanings.reversedLove || '',
      money: c.meanings.reversedMoney || ''
    };
  }
});

// Game state
let selectedFortuneType = null;
let drawnCards = []; // entries: { card, reversed }
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
        !drawnCards.some(drawn => drawn.card.id === card.id)
    );
    
    if (availableCards.length === 0) return;
    
    const randomIndex = Math.floor(Math.random() * availableCards.length);
    const selectedCard = availableCards[randomIndex];
    // 50% chance reversed
    const isReversed = Math.random() < 0.5;
    
    // Add to drawn cards
    drawnCards.push({ card: selectedCard, reversed: isReversed });
    
    // Create wrapper element containing the card and its name
    const drawnItem = createCardElement(selectedCard, isReversed, drawnCards.length - 1);
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
function createCardElement(card, isReversed, index) {
    // Wrapper for layout and name
    const wrapper = document.createElement('div');
    wrapper.className = 'drawn-card' + (isReversed ? ' reversed' : '');

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
    cardImage.alt = card.name + (isReversed ? ' (Reversed)' : '');
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
    nameEl.textContent = card.name + (isReversed ? ' (Reversed)' : '');
    
    wrapper.appendChild(cardDiv);
    wrapper.appendChild(nameEl);
    
    // Removed badge per request; visual handled via background tint in CSS
    
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
    
    drawnCards.forEach(entry => {
        const { card, reversed } = entry;
        const resultCard = document.createElement('div');
        resultCard.className = 'result-card' + (reversed ? ' reversed' : '');
        
        resultCard.innerHTML = `
            <img src="${encodeURI(card.image)}" alt="${card.name}${reversed ? ' (Reversed)' : ''}">
            <h4>${card.name}</h4>
        `; // Removed badge; reversed is indicated by overlay & rotation
        
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
    const [e1, e2, e3] = drawnCards; // {card, reversed}

    let html = '';
    html += `<strong>${label} 종합 해석</strong><br><br>`;
    html += `이번 조합은 <em>${e1.card.name}${e1.reversed ? ' (R)' : ''}</em>, <em>${e2.card.name}${e2.reversed ? ' (R)' : ''}</em>, <em>${e3.card.name}${e3.reversed ? ' (R)' : ''}</em> 입니다. `;

    const m1 = e1.reversed ? e1.card.reversed_meanings[type] : e1.card.meanings[type];
    const m2 = e2.reversed ? e2.card.reversed_meanings[type] : e2.card.meanings[type];
    const m3 = e3.reversed ? e3.card.reversed_meanings[type] : e3.card.meanings[type];

    html += `${e1.card.name}${e1.reversed ? ' 역방향은' : ' 는'} "${getShortMeaning(m1)}"의 출발을 알리고, `;
    html += `${e2.card.name}${e2.reversed ? ' 역방향은' : ' 는'} "${getShortMeaning(m2)}"로 흐름을 이어가며, `;
    html += `마지막 ${e3.card.name}${e3.reversed ? ' 역방향은' : ' 는'} "${getShortMeaning(m3)}"로 방향을 마무리합니다.`;

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
