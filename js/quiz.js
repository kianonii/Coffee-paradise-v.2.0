const DATA = [
    {
        question: 'Вопрос 1',
        answers: [
            {
                id: '1',
                value: 'Ответ 1',
                correct: true,
            },
            {
                id: '2',
                value: 'Ответ 2',
                correct: false,
            },
            {
                id: '3',
                value: 'Ответ 3',
                correct: false ,
            },
        ]
    },
    {
        question: 'Вопрос 2',
        answers: [
            {
                id: '4',
                value: 'Ответ 1',
                correct: false,
            },
            {
                id: '5',
                value: 'Ответ 2',
                correct: true,
            },
            {
                id: '6',
                value: 'Ответ 3',
                correct: false ,
            },
        ]
    },
];

let localResults = {};

const quiz = document.getElementById('quiz');
const questions = document.getElementById('questions');
const indicator = document.getElementById('indicator');
const results = document.getElementById('results');
const btnNext = document.getElementById('button-next');

const renderQuestions = (index) => {
    renderIndicator(index + 1);

    questions.dataset.currentStep = index;

    const renderAnswers = () => DATA[index].answers.
    map((answer) => `
        <li>
            <label>
                <input class="answer__input" type="radio" name="${index}" value=${answer.id}>
                ${answer.value}
            </label>
        </li>
    `)
    .join('');

    questions.innerHTML = `
        <div class="questions__item">
            <div class="questions__item-question">${DATA[index].question}</div>

            <ul class="questions__item-answers">${renderAnswers()}</ul>
        </div>
    `;
};

const renderResults = () => {
    let content = '';

    const getClassname = (answer, qustionIndex) => {
        let classname = '';

        if (!answer.correct && answer.id === localResults[qustionIndex]) {
            classname = 'answer--invalid';
        } else if (answer.correct) {
            classname = 'answer--valid';
        }

        return classname;
    }

    const getAnswers = (qustionIndex) => DATA[qustionIndex].answers.
    map((answer) => `<li class=${getClassname(answer, qustionIndex)}>${answer.value}</li>`)
    .join('');

    DATA.forEach((question, index) => {
        content += `
        <div class="results__item">
            <div class="results__item-question">${question.question}</div>
            <ul class="results__item-answers">${getAnswers(index)}</ul>
        </div>
        `
    })

    results.innerHTML = content;
};

const renderIndicator = (currentStep) => {
    indicator.innerHTML = `${currentStep}/${DATA.length}`
};

quiz.addEventListener('change', (event) => {
    // *логика ответа

    if(event.target.classList.contains('answer__input')) {
        localResults [event.target.name] = event.target.value;
        btnNext.disabled = false;
    }
});

quiz.addEventListener('click', (event) => {
    // !*клик на кнопку

    if(event.target.classList.contains('quiz__btn-next')) {
        const nextQuestionIndex = Number(questions.dataset.currentStep) + 1;
            // *переход к результатам
        if(DATA.length === nextQuestionIndex) {
            questions.classList.add('questins-hidden');
            indicator.classList.add('indicator-hidden');
            results.classList.add('results-visible');
            btnNext.classList.add('btnNext-hidden');
            renderResults();
        }else {
             // *переход к след.вопросу
             renderQuestions(nextQuestionIndex);
        }


        btnNext.disabled = true;
    }
});

renderQuestions(0);