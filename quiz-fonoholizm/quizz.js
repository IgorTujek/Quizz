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

let currentQuestion = 0;
let score = 0;

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const scoreElement = document.getElementById("score");

startBtn.onclick = function () {
    startScreen.style.display = "none";
    quizScreen.style.display = "block";
    showQuestion();
};





function showQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    answersElement.innerHTML = "";
    const correctBtn = document.createElement("button");
    correctBtn.textContent = question.correct;
    correctBtn.onclick = function () {
        score++;
        scoreElement.textContent = "Punkty: " + score;
        nextBtn.style.display = "block";
    };

    const wrongBtn = document.createElement("button");
    wrongBtn.textContent = question.wrong;
    wrongBtn.onclick = function () {
        nextBtn.style.display = "block";
    };
    answersElement.appendChild(correctBtn);
    answersElement.appendChild(wrongBtn);
}
nextBtn.onclick = function () {
    currentQuestion++;
    nextBtn.style.display = "none";
    if (currentQuestion < questions.length) {
        showQuestion();
    }
    else {
        showResult();
    }

};
function showResult() {
    questionElement.textContent = "Koniec quizu!";
    answersElement.innerHTML =
        "<h2>Twój wynik: " + score + " / " + questions.length + "</h2>";

}