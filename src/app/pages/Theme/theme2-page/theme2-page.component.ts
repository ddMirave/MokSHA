import { Component } from '@angular/core';

@Component({
  selector: 'app-theme2-page',
  templateUrl: './theme2-page.component.html',
  styleUrls: ['./theme2-page.component.scss']
})
export class Theme2PageComponent {
  isSubmitted = false;
  
  quiz = [
    { 
      question: 'Именительнай', 
      options: ['Куд'],
      correctAnswer: '', 
      correctAnswer2: '', 
      userAnswer: null as string | null,
      isCorrect: null as boolean | null
    },
    {
      question: 'Родительнай', 
      options: ['Куд'],
      correctAnswer: 'онь',
      correctAnswer2: 'Онь', 
      userAnswer: null as string | null,
      isCorrect: null as boolean | null
    },
    {
      question: 'Дательнай', 
      options: ['Куд'],
      correctAnswer: 'онди',
      correctAnswer2: 'Онди', 
      userAnswer: null as string | null,
      isCorrect: null as boolean | null
    },
    {
      question: 'Отложительнай',
      options: ['Куд'],
      correctAnswer: 'та',
      correctAnswer2: 'Та', 
      userAnswer: null as string | null,
      isCorrect: null as boolean | null 
    },
    {
      question: 'Местнай',
      options: ['Куд'],
      correctAnswer: 'са',
      correctAnswer2: 'Cа', 
      userAnswer: null as string | null,
      isCorrect: null as boolean | null
    },
    {
      question: 'Исходнай',
      options: ['Куд'],
      correctAnswer: 'ста',
      correctAnswer2: 'Ста', 
      userAnswer: null as string | null,
      isCorrect: null as boolean | null
    },
    {
      question: 'Направительно-вносительнай',
      options: ['Куд'],
      correctAnswer: 'у',
      correctAnswer2: 'У', 
      userAnswer: null as string | null,
      isCorrect: null as boolean | null
    },
    {
      question: 'Переместительнай',
      options: ['Куд'],
      correctAnswer: 'га',
      correctAnswer2: 'Га', 
      userAnswer: null as string | null,
      isCorrect: null as boolean | null
    },
    {
      question: 'Сравнительнай',
      options: ['Куд'],
      correctAnswer: 'шка',
      correctAnswer2: 'Шка', 
      userAnswer: null as string | null,
      isCorrect: null as boolean | null
    },
    {
      question: 'Изъяснительнай',
      options: ['Куд'],
      correctAnswer: 'фтома',
      correctAnswer2: 'Фтома', 
      userAnswer: null as string | null,
      isCorrect: null as boolean | null
    },
    {
      question: 'Превратительнай',
      options: ['Куд'],
      correctAnswer: 'кс',
      correctAnswer2: 'Кс', 
      userAnswer: null as string | null,
      isCorrect: null as boolean | null
    },
    {
      question: 'Причиннай',
      options: ['Куд'],
      correctAnswer: 'онкса',
      correctAnswer2: 'Онкса', 
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
      if (this.quiz[i].userAnswer === this.quiz[i].correctAnswer  || this.quiz[i].userAnswer === this.quiz[i].correctAnswer2) {
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