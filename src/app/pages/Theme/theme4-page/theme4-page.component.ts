import { Component } from '@angular/core';

@Component({
  selector: 'app-theme4-page',
  templateUrl: './theme4-page.component.html',
  styleUrls: ['./theme4-page.component.scss']
})
export class Theme4PageComponent {
  isSubmitted = false;
  
  quiz = [
    { 
      question: 'Сембе ляйсь эиесь', 
      options: ['Твой сын ворует яблоки с магазина.'],
      correctAnswer: 'Кудонь', 
      userAnswer: null as string | null,
      isCorrect: null as boolean | null
    },
    {
      question: 'Ушеса моли пизем атяма мархма.', 
      options: ['Высокий, а глупый'],
      correctAnswer: 'Вирень',
      userAnswer: null as string | null,
      isCorrect: null as boolean | null
    },
    {
      question: 'Серец капа, а ёнец аш', 
      options: ['Зимой на улице быстро темнеет.'],
      correctAnswer: 'Ляень',
      userAnswer: null as string | null,
      isCorrect: null as boolean | null
    },
    {
      question: 'Сась тундась, сембе ловсь солась.',
      options: ['В этом году картофель не слишком крупный.'],
      correctAnswer: 'Шабань',
      userAnswer: null as string | null,
      isCorrect: null as boolean | null 
    },
    {
      question: 'Тя кизонь модамарьхне аф тяк оцюфт.',
      options: ['На улице идет дождь с грозой.'],
      correctAnswer: 'Катонь',
      userAnswer: null as string | null,
      isCorrect: null as boolean | null
    },
    {
      question: 'Тялонда ушесь курокста шобдалгоды.',
      options: ['Вся речка покрылась льдом.'],
      correctAnswer: 'Тишень',
      userAnswer: null as string | null,
      isCorrect: null as boolean | null
    },
    {
      question: 'Тонь цёраце салакшни лавкастаста марьхт',
      options: ['Пришла весна, весь снег расстаял.'],
      correctAnswer: 'Траксонь',
      userAnswer: null as string | null,
      isCorrect: null as boolean | null
    },
  ];

  selectedOption = new Array(this.quiz.length).fill(null);

  correctAnswers = 0;
  percentageResult = 0;

  showResult = false;
  resultColor = '';
  resultMessage = '';

  checkAnswer() {
    // Проверяем каждый выбранный ответ на правильность
    this.isSubmitted = true;
    this.correctAnswers = 0;
    for (let i = 0; i < this.quiz.length; i++) {
      if (this.quiz[i].userAnswer === this.quiz[i].correctAnswer) {
        this.correctAnswers++;
        this.quiz[i].isCorrect = true;
      } else {
        this.quiz[i].isCorrect = false;
      }
    }

    // Вычисляем процентное соотношение правильных ответов
    this.percentageResult = (this.correctAnswers / this.quiz.length) * 100;

    // Определение цвета в зависимости от процентного результата
    if (this.percentageResult <= 51) {
      this.resultColor = '#902537';
    } else if (this.percentageResult <= 74) {
      this.resultColor = '#b87e14';
    } else {
      this.resultColor = '#005a24 ';
    }

    // Создание сообщения результата с процентом
    this.resultMessage = 'Ваш результат: ' + this.percentageResult + '%.';

    this.showResult = true;
    this.isSubmitted = true;
  }}
