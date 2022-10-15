import { useState } from 'react';
import './index.scss';

const questions = [
  {
    title: 'Атритут lang=en располагается в элементе:',
    variants: ['doctype', 'head', 'html'],
    correct: 2,
  },
  {
    title: 'Чтобы связать label и input используют атрибуты:',
    variants: ['for + name', 'name + id', 'for + id'],
    correct: 2,
  },
  {
    title: 'Какой атрибут нужно задать элементу video, чтобы появилась панель управления видеоплеера',
    variants: ['controls', 'panel', 'buttons'],
    correct: 0,
  },
  {
    title: 'Если поместить на страницу несколько элементов списка <li> без внешнего контейнера (без ol или ul), то они будут отображаться как:',
    variants: ['элементы нумерованного списка', 'элементы маркированного списка', 'никак отличаться от базового текста не будут'],
    correct: 1,
  },
  {
    title: 'Какой атрибут указывает путь к файлу или странице, где располагается обработчик данных формы?',
    variants: ['src', 'href', 'action'],
    correct: 2,
  },
  {
    title: 'Правильной вложенностью будет считаться:',
    variants: ['ul > a > li', 'li > ul > a', 'ul > li > a'],
    correct: 2,
  },
  {
    title: 'В маркированном списке ul, без дополнительных стилей, очкарядом с элементом списка появляется благодаря использованию:',
    variants: ['элемента li', 'элемента ul', 'абсолютно любого элемента первого уровня внутри ul'],
    correct: 0,
  },
  {
    title: 'Параграфы обозначаются с помощью элемента',
    variants: ['p', 'paragraph', 'text'],
    correct: 0,
  },
  {
    title: 'Как указывается ссылка-якорь anchor в аттрибуте href',
    variants: ['#anchor', '.anchor', '_anchor'],
    correct: 0,
  },
  {
    title: 'Какой мета-тег используется для описания страницы (поле name элемента meta):',
    variants: ['content', 'about', 'description'],
    correct: 2,
  },
  {
    title: 'Текст в элементе img, который выведется вместо изображения, если оно не доступно, записывается в атрибут:',
    variants: ['title', 'alt', 'alternative'],
    correct: 1,
  },
];

function Result({ correct }) {
  const reLoad = () => {
    console.log()
    document.location.reload();
  }
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt='Тест окончен' />
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
      <button onClick={() => reLoad()}>Попробовать снова</button>      
    </div>
  );
}

function Game({ step, question, onClickVariant }) {
  const percentage = Math.round(step / questions.length * 100);
  // console.log(percentage);
  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {
          question.variants.map((text, index) => (
            <li onClick={() =>onClickVariant(index)} key={text}>{ text }</li>))
        }
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];
  
  const onClickVariant = (index) => {
    console.log(step, index);
    setStep(step + 1);
    if(index === question.correct) {
      setCorrect(correct + 1)
    }
  }

  return (
    <div className="App">
      {step !== questions.length ? (
        <Game step={step} question={question} onClickVariant={onClickVariant}/>
        ) : (
        <Result correct={correct}/>
        )}
    </div>
  );
}

export default App;
