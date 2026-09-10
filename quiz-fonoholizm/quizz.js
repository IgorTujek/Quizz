const questions = [
    {
        question: "Czym jest fonoholizm?",
        correct: "To problem związany z nadmiernym i trudnym do kontrolowania korzystaniem ze smartfona.",
        wrong: "To po prostu częste posiadanie telefonu przy sobie."
    },
    {
        question: "Jaki może być sygnał, że warto przyjrzeć się swoim nawykom korzystania z telefonu?",
        correct: "Trudność z odłożeniem telefonu, nawet gdy chcemy zrobić coś innego.",
        wrong: "Korzystanie z telefonu do kontaktu z rodziną i znajomymi."
    },
    {
        question: "Dlaczego warto robić przerwy od ekranu?",
        correct: "Przerwy mogą pomóc zadbać o koncentrację, relacje i odpoczynek.",
        wrong: "Ponieważ telefon powinien być całkowicie zakazany."
    },
    {
        question: "Co można zrobić zamiast automatycznego sięgania po telefon?",
        correct: "Porozmawiać z kimś lub zająć się inną aktywnością.",
        wrong: "Natychmiast sprawdzać wszystkie powiadomienia."
    },
    {
        question: "Czy korzystanie ze smartfona zawsze oznacza fonoholizm?",
        correct: "Nie. Ważna jest równowaga i sposób korzystania z telefonu.",
        wrong: "Tak, każdy użytkownik smartfona jest fonoholikiem."
    },
    {
        question: "Jak powiadomienia mogą wpływać na uwagę?",
        correct: "Mogą odrywać nas od nauki, rozmowy lub wykonywanego zadania.",
        wrong: "Nigdy nie mają wpływu na koncentrację."
    },
    {
        question: "Co może pomóc ograniczyć korzystanie z telefonu?",
        correct: "Wyłączenie części niepotrzebnych powiadomień.",
        wrong: "Ciągłe trzymanie telefonu w ręce."
    },
    {
        question: "Dlaczego warto rozmawiać o fonoholizmie bez oceniania?",
        correct: "Ponieważ każdy może potrzebować wsparcia w budowaniu zdrowszych nawyków.",
        wrong: "Ponieważ osoby korzystające z telefonu należy wyśmiewać."
    },
    {
        question: "Co oznacza hasło „Odłącz się!”?",
        correct: "Zachętę do świadomego robienia miejsca na życie poza ekranem.",
        wrong: "Konieczność wyrzucenia telefonu."
    },
    {
        question: "Jak telefon może wpływać na relacje z innymi?",
        correct: "Nadmierne korzystanie może utrudniać skupienie się na rozmowie.",
        wrong: "Telefon zawsze poprawia każdą relację."
    },
    {
        question: "Co zrobić, gdy telefon zajmuje nam więcej czasu, niż chcemy?",
        correct: "Spróbować stopniowo zmieniać swoje nawyki.",
        wrong: "Ignorować problem."
    },
    {
        question: "Jaki jest cel profilaktyki dotyczącej fonoholizmu?",
        correct: "Pomaganie ludziom w świadomym korzystaniu z technologii.",
        wrong: "Ocenianie i karanie osób korzystających z telefonu."
    }
];


// POZIOM EKSPERTA

const expertQuestions = [
    {
        question: "Co może pomóc sprawdzić, ile czasu rzeczywiście spędzamy ze smartfonem?",
        correct: "Skorzystanie ze statystyk czasu przed ekranem dostępnych w telefonie.",
        wrong: "Zgadywanie na podstawie tego, jak często widzimy telefon."
    },
    {
        question: "Które zachowanie najlepiej pokazuje świadome korzystanie ze smartfona?",
        correct: "Odłożenie telefonu podczas rozmowy lub nauki, gdy nie jest potrzebny.",
        wrong: "Sprawdzanie telefonu przy każdej chwili ciszy."
    }
];


// ZMIENNE

let currentQuestion = 0;
let score = 0;


// ELEMENTY HTML

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const scoreElement = document.getElementById("score");

const finalScoreElement = document.getElementById("final-score");
const resultMessageElement = document.getElementById("result-message");


// ROZPOCZĘCIE QUIZU

startBtn.onclick = function () {

    currentQuestion = 0;
    score = 0;

    startScreen.style.display = "none";
    quizScreen.style.display = "block";
    resultScreen.style.display = "none";

    scoreElement.textContent = "Punkty: 0";

    showQuestion();
};


// POKAZANIE PYTANIA

function showQuestion() {

    let question;

    if (currentQuestion < questions.length) {

        question = questions[currentQuestion];

    } else {

        question = expertQuestions[currentQuestion - questions.length];

    }


    questionElement.textContent = question.question;

    answersElement.innerHTML = "";


    // POPRAWNA ODPOWIEDŹ

    const correctBtn = document.createElement("button");

    correctBtn.textContent = question.correct;


    correctBtn.onclick = function () {

        answerQuestion(correctBtn, wrongBtn, true);

    };


    // BŁĘDNA ODPOWIEDŹ

    const wrongBtn = document.createElement("button");

    wrongBtn.textContent = question.wrong;


    wrongBtn.onclick = function () {

        answerQuestion(wrongBtn, correctBtn, false);

    };


    answersElement.appendChild(correctBtn);
    answersElement.appendChild(wrongBtn);
}


// WYBÓR ODPOWIEDZI

function answerQuestion(selectedButton, otherButton, correct) {

    // BLOKADA OBU ODPOWIEDZI

    selectedButton.disabled = true;
    otherButton.disabled = true;


    // JEŚLI DOBRA ODPOWIEDŹ

    if (correct) {

        score++;

        selectedButton.classList.add("correct");

        scoreElement.textContent = "Punkty: " + score;

    }

    // JEŚLI ZŁA ODPOWIEDŹ

    else {

        selectedButton.classList.add("wrong");

        // Pokazujemy użytkownikowi poprawną odpowiedź

        otherButton.classList.add("correct");

    }


    // POKAZUJEMY PRZYCISK DALEJ

    nextBtn.style.display = "block";
}


// NASTĘPNE PYTANIE

nextBtn.onclick = function () {

    currentQuestion++;

    nextBtn.style.display = "none";


    // KONIEC PODSTAWOWEGO QUIZU

    if (currentQuestion === questions.length) {

        showExpertLevel();

        return;
    }


    // KONIEC CAŁEGO QUIZU

    if (currentQuestion >= questions.length + expertQuestions.length) {

        showResult();

        return;
    }


    showQuestion();
};


// ODBLOKOWANIE POZIOMU EKSPERTA

function showExpertLevel() {

    questionElement.textContent = "🔓 Poziom Eksperta odblokowany!";

    answersElement.innerHTML = `
        <p>
            Udało Ci się ukończyć podstawową część quizu.
        </p>

        <p>
            Teraz możesz sprawdzić swoją wiedzę w 2 dodatkowych pytaniach.
        </p>

        <button id="expert-btn">
            Rozpocznij poziom eksperta
        </button>
    `;


    const expertBtn = document.getElementById("expert-btn");


    expertBtn.onclick = function () {

        currentQuestion++;

        showQuestion();

    };
}


// WYNIK KOŃCOWY

function showResult() {

    quizScreen.style.display = "none";

    resultScreen.style.display = "block";


    finalScoreElement.textContent =
        "Twój wynik: " + score + " / 14";


    // 3 WIADOMOŚCI ZWROTNE

    if (score <= 5) {

        resultMessageElement.textContent =
            "🌱 Początkujący — quiz pokazał Ci kilka ważnych informacji o świadomym korzystaniu ze smartfona. Warto potraktować je jako inspirację do małych zmian.";

    } else if (score <= 9) {

        resultMessageElement.textContent =
            "📱 Świadomy użytkownik — dobrze znasz wiele zasad zdrowego korzystania z technologii. Warto dalej rozwijać swoje dobre nawyki.";

    } else {

        resultMessageElement.textContent =
            "🏆 Mistrz równowagi — świetny wynik! Pokazałeś bardzo dobrą znajomość zasad świadomego korzystania ze smartfona.";

    }


    // DODATKOWA ODZNAKA ZA UKOŃCZENIE EKSPERTA

    const badge = document.createElement("p");

    badge.textContent =
        "🏅 Odznaka zdobyta: EKSPERT ŚWIADOMEGO KORZYSTANIA";


    resultScreen.appendChild(badge);
}


// RESTART

restartBtn.onclick = function () {

    currentQuestion = 0;
    score = 0;

    resultScreen.style.display = "none";
    startScreen.style.display = "block";

    scoreElement.textContent = "Punkty: 0";

};