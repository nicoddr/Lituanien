// State
let currentLevel = 'A1';
let currentMainModule = null;
let currentSubModule = null;
let currentExerciseIndex = 0;

let currentVocabCategory = null;
let currentVocabWords = [];
let currentFlashcardIndex = 0;

// DOM Elements
const views = document.querySelectorAll('.view');
const homeView = document.getElementById('home-view');
const submoduleView = document.getElementById('submodule-view');
const lessonView = document.getElementById('lesson-view');
const exerciseView = document.getElementById('exercise-view');
const successView = document.getElementById('success-view');

const vocabCategoriesView = document.getElementById('vocab-categories-view');
const vocabDetailView = document.getElementById('vocab-detail-view');
const vocabCategoriesList = document.getElementById('vocab-categories-list');
const vocabCategoryTitle = document.getElementById('vocab-category-title');
const vocabListContainer = document.getElementById('vocab-list-container');
const vocabWordsList = document.getElementById('vocab-words-list');
const vocabFlashcardContainer = document.getElementById('vocab-flashcard-container');

const btnListMode = document.getElementById('btn-list-mode');
const btnFlashcardMode = document.getElementById('btn-flashcard-mode');
const currentFlashcard = document.getElementById('current-flashcard');
const flashcardFront = document.getElementById('flashcard-front');
const flashcardBack = document.getElementById('flashcard-back');
const flashcardProgress = document.getElementById('flashcard-progress');

const mainModuleList = document.getElementById('main-module-list');
const submoduleList = document.getElementById('submodule-list');
const submoduleHeaderTitle = document.getElementById('submodule-header-title');
const theoryContent = document.getElementById('theory-content');
const exerciseContainer = document.getElementById('exercise-container');
const feedbackMessage = document.getElementById('feedback-message');
const nextBtn = document.getElementById('next-btn');
const progressFill = document.getElementById('progress-fill');

// Initialization
function initApp() {
    renderMainModules();
}

function switchLevel(level) {
    if (level === currentLevel) return;
    
    currentLevel = level;
    
    // Update body class for styling
    document.body.className = `level-${level.toLowerCase()}`;
    
    // Update active tab styling
    document.getElementById('btn-level-a1').classList.toggle('active', level === 'A1');
    document.getElementById('btn-level-a2').classList.toggle('active', level === 'A2');
    document.getElementById('btn-level-b1').classList.toggle('active', level === 'B1');
    
    // Update document title and header subtitle
    const subtitle = document.getElementById('main-header-subtitle');
    if (level === 'A1') {
        document.title = "Apprendre le Lituanien A1 ✨";
        if (subtitle) subtitle.innerText = "Maîtrisez les bases avec style";
    } else if (level === 'A2') {
        document.title = "Apprendre le Lituanien A2 🚀";
        if (subtitle) subtitle.innerText = "Élargissez vos horizons en lituanien";
    } else if (level === 'B1') {
        document.title = "Apprendre le Lituanien B1 🏆";
        if (subtitle) subtitle.innerText = "Devenez autonome et parlez avec assurance";
    }
    
    // Rerender main modules
    renderMainModules();
}

function showView(viewElement) {
    views.forEach(v => v.classList.remove('active'));
    viewElement.classList.add('active');
}

function goHome() {
    currentMainModule = null;
    currentSubModule = null;
    showView(homeView);
}

// Render Main Modules
function renderMainModules() {
    mainModuleList.innerHTML = '';
    appData[currentLevel].modules.forEach(mod => {
        const card = document.createElement('div');
        card.className = 'module-card';
        card.onclick = () => openMainModule(mod);
        
        card.innerHTML = `
            <img src="${mod.image}" alt="Icone ${mod.title}" class="module-icon">
            <div class="module-info">
                <h2>${mod.id} - ${mod.title}</h2>
                <p>${mod.description}</p>
            </div>
        `;
        mainModuleList.appendChild(card);
    });
}

function openMainModule(mod) {
    currentMainModule = mod;
    submoduleHeaderTitle.innerText = mod.id + " - " + mod.title;
    
    submoduleList.innerHTML = '';
    mod.subModules.forEach((sub, index) => {
        const card = document.createElement('div');
        card.className = 'module-card submodule-card';
        card.onclick = () => openSubModule(sub);
        
        card.innerHTML = `
            <div class="sub-number">${index + 1}</div>
            <div class="module-info">
                <h2>${sub.title}</h2>
                <p>Ouvrir la leçon</p>
            </div>
        `;
        submoduleList.appendChild(card);
    });
    
    showView(submoduleView);
}

function backToSubModules() {
    currentSubModule = null;
    showView(submoduleView);
}

function openSubModule(sub) {
    currentSubModule = sub;
    theoryContent.innerHTML = sub.theory;
    showView(lessonView);
}

// Exercises
function startExercises() {
    currentExerciseIndex = 0;
    showView(exerciseView);
    renderExercise();
}

function updateProgress() {
    const total = currentSubModule.exercises.length;
    const progress = (currentExerciseIndex / total) * 100;
    progressFill.style.width = `${progress}%`;
}

function renderExercise() {
    updateProgress();
    feedbackMessage.innerText = '';
    nextBtn.style.display = 'none';
    
    const ex = currentSubModule.exercises[currentExerciseIndex];
    
    // Clear container
    exerciseContainer.innerHTML = '';
    
    // Create question
    const questionDiv = document.createElement('div');
    questionDiv.className = 'exercise-question';
    questionDiv.innerText = ex.question;
    exerciseContainer.appendChild(questionDiv);
    
    if (ex.type === 'qcm' || ex.type === 'fill') {
        const grid = document.createElement('div');
        grid.className = 'options-grid';
        
        ex.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerText = opt;
            btn.onclick = () => checkAnswer(opt, btn);
            grid.appendChild(btn);
        });
        
        exerciseContainer.appendChild(grid);
    }
}

function checkAnswer(selectedOpt, btnElement) {
    const ex = currentSubModule.exercises[currentExerciseIndex];
    const allBtns = document.querySelectorAll('.option-btn');
    allBtns.forEach(b => b.disabled = true);
    
    if (selectedOpt === ex.correctAnswer) {
        btnElement.classList.add('selected');
        feedbackMessage.innerText = ex.feedback;
        feedbackMessage.style.color = 'var(--primary-shadow)';
        nextBtn.style.display = 'block';
    } else {
        btnElement.classList.add('wrong');
        feedbackMessage.innerText = "Neteisingai! 😕 Essaie encore.";
        feedbackMessage.style.color = 'var(--error-color)';
        
        setTimeout(() => {
            btnElement.classList.remove('wrong');
            allBtns.forEach(b => b.disabled = false);
            feedbackMessage.innerText = '';
        }, 1000);
    }
}

function nextExercise() {
    currentExerciseIndex++;
    if (currentExerciseIndex >= currentSubModule.exercises.length) {
        updateProgress(); // 100%
        setTimeout(() => {
            showView(successView);
        }, 500);
    } else {
        renderExercise();
    }
}

// ==========================================
// VOCABULARY & FLASHCARDS
// ==========================================

function showVocab() {
    openVocabCategories();
}

function openVocabCategories() {
    vocabCategoriesList.innerHTML = '';
    
    // Group vocabData by Catégorie
    const grouped = {};
    vocabData.forEach(item => {
        const cat = item.Catégorie || 'Autre';
        if (!grouped[cat]) grouped[cat] = [];
        grouped[cat].push(item);
    });
    
    const categories = Object.keys(grouped).sort();
    
    categories.forEach(cat => {
        const card = document.createElement('div');
        card.className = 'module-card submodule-card';
        card.onclick = () => openVocabCategory(cat, grouped[cat]);
        
        const count = grouped[cat].length;
        card.innerHTML = `
            <div class="sub-number" style="background:var(--secondary-color); color:var(--text-dark); box-shadow: 0 4px 0 var(--secondary-shadow);">📚</div>
            <div class="module-info">
                <h2>${cat}</h2>
                <p>${count} mots à apprendre</p>
            </div>
        `;
        vocabCategoriesList.appendChild(card);
    });
    
    showView(vocabCategoriesView);
}

function openVocabCategory(categoryName, wordsArray) {
    currentVocabCategory = categoryName;
    currentVocabWords = wordsArray;
    currentFlashcardIndex = 0;
    
    vocabCategoryTitle.innerText = categoryName;
    
    // Default to list mode
    setVocabMode('list');
    renderVocabList();
    renderFlashcard();
    
    showView(vocabDetailView);
}

function setVocabMode(mode) {
    if (mode === 'list') {
        btnListMode.classList.add('active');
        btnFlashcardMode.classList.remove('active');
        vocabListContainer.style.display = 'block';
        vocabFlashcardContainer.style.display = 'none';
    } else {
        btnFlashcardMode.classList.add('active');
        btnListMode.classList.remove('active');
        vocabListContainer.style.display = 'none';
        vocabFlashcardContainer.style.display = 'block';
    }
}

function renderVocabList() {
    vocabWordsList.innerHTML = '';
    currentVocabWords.forEach(word => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="vocab-lt">${word.Lituanien}</span> <span class="vocab-fr">${word.Français}</span>`;
        vocabWordsList.appendChild(li);
    });
}

function renderFlashcard() {
    if (currentVocabWords.length === 0) return;
    
    // Reset flip
    currentFlashcard.classList.remove('is-flipped');
    
    const word = currentVocabWords[currentFlashcardIndex];
    flashcardFront.innerText = word.Lituanien;
    flashcardBack.innerText = word.Français;
    
    flashcardProgress.innerText = `${currentFlashcardIndex + 1} / ${currentVocabWords.length}`;
}

function flipFlashcard() {
    currentFlashcard.classList.toggle('is-flipped');
}

function nextFlashcard() {
    if (currentFlashcardIndex < currentVocabWords.length - 1) {
        currentFlashcardIndex++;
        currentFlashcard.classList.remove('is-flipped');
        setTimeout(renderFlashcard, 150); // slight delay to hide text swap during unflip
    }
}

function prevFlashcard() {
    if (currentFlashcardIndex > 0) {
        currentFlashcardIndex--;
        currentFlashcard.classList.remove('is-flipped');
        setTimeout(renderFlashcard, 150);
    }
}

// Start
document.addEventListener('DOMContentLoaded', initApp);
