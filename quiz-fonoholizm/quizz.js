
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



let currentQuestion = 0;

let score = 0;


const startScreen =
    document.getElementById("start-screen");

const quizScreen =
    document.getElementById("quiz-screen");

const resultScreen =
    document.getElementById("result-screen");


const startBtn =
    document.getElementById("start-btn");

const nextBtn =
    document.getElementById("next-btn");

const restartBtn =
    document.getElementById("restart-btn");


const questionElement =
    document.getElementById("question");

const answersElement =
    document.getElementById("answers");

const scoreElement =
    document.getElementById("score");


const questionNumberElement =
    document.getElementById("question-number");

const progressBar =
    document.getElementById("progress-bar");


const finalScoreElement =
    document.getElementById("final-score");

const resultMessageElement =
    document.getElementById("result-message");



startBtn.onclick = function () {

    currentQuestion = 0;

    score = 0;


    startScreen.style.display = "none";

    quizScreen.style.display = "block";

    resultScreen.style.display = "none";


    scoreElement.textContent =
        "Punkty: 0";


    showQuestion();

};


function showQuestion() {

    let question;



    if (currentQuestion < questions.length) {

        question =
            questions[currentQuestion];

    }


    else {

        question =
            expertQuestions[
                currentQuestion - questions.length
            ];

    }


    questionElement.textContent =
        question.question;


    questionNumberElement.textContent =
        "Pytanie " +
        (currentQuestion + 1) +
        " z 14";


    progressBar.style.width =
        ((currentQuestion + 1) / 14) * 100 + "%";


    answersElement.innerHTML = "";


    const correctBtn =
        document.createElement("button");


    correctBtn.textContent =
        question.correct;


    correctBtn.classList.add("answer-btn");


    const wrongBtn =
        document.createElement("button");


    wrongBtn.textContent =
        question.wrong;


    wrongBtn.classList.add("answer-btn");

    correctBtn.onclick = function () {

        answerQuestion(
            correctBtn,
            wrongBtn,
            true
        );

    };


    wrongBtn.onclick = function () {

        answerQuestion(
            wrongBtn,
            correctBtn,
            false
        );

    };


    answersElement.appendChild(correctBtn);

    answersElement.appendChild(wrongBtn);

}


function answerQuestion(
    selectedButton,
    otherButton,
    correct
) {

    selectedButton.disabled = true;

    otherButton.disabled = true;


    if (correct) {

        score++;

        selectedButton.classList.add("correct");

        scoreElement.textContent =
            "Punkty: " + score;

    }


  
    else {

        selectedButton.classList.add("wrong");

        otherButton.classList.add("correct");

    }



    nextBtn.style.display = "block";

}



nextBtn.onclick = function () {

    currentQuestion++;



    if (currentQuestion === questions.length) {

        showExpertLevel();

        return;

    }


    if (
        currentQuestion >=
        questions.length + expertQuestions.length
    ) {

        showResult();

        return;

    }


    nextBtn.style.display = "none";

    showQuestion();

};


function showExpertLevel() {

    nextBtn.style.display = "none";


    questionElement.textContent =
        "🔓 Poziom Eksperta odblokowany!";


    questionNumberElement.textContent =
        "Poziom specjalny";


    progressBar.style.width =
        "85%";


    answersElement.innerHTML = `

        <div class="expert-info">

            <h2>Gotowy na wyzwanie?</h2>

            <p>
                Ukończyłeś podstawową część quizu!
            </p>

            <p>
                Odblokowałeś 2 dodatkowe pytania
                poziomu eksperta.
            </p>

            <button id="expert-btn">
                Rozpocznij poziom eksperta
            </button>

        </div>

    `;


    const expertBtn =
        document.getElementById("expert-btn");


    expertBtn.onclick = function () {

        showQuestion();

    };

}


function showResult() {

    quizScreen.style.display = "none";

    resultScreen.style.display = "block";


    finalScoreElement.textContent =
        "Twój wynik: " +
        score +
        " / 14 punktów";


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

    const badge =
        document.createElement("p");


    badge.classList.add("badge");


    badge.textContent =
        "🏅 Odznaka zdobyta: EKSPERT ŚWIADOMEGO KORZYSTANIA";


    resultScreen.appendChild(badge);

}




restartBtn.onclick = function () {

    currentQuestion = 0;

    score = 0;


    resultScreen.style.display = "none";

    startScreen.style.display = "block";


    scoreElement.textContent =
        "Punkty: 0";


    progressBar.style.width =
        "0%";

        
    const oldBadge =
        document.querySelector(".badge");


    if (oldBadge) {

        oldBadge.remove();

    }

};