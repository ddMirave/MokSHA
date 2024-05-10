import { Component } from '@angular/core';

@Component({
  selector: 'app-theme3-page',
  templateUrl: './theme3-page.component.html',
  styleUrls: ['./theme3-page.component.scss']
})
export class Theme3PageComponent {
  isSubmitted = false;
  
  quiz = [
    { 
      question: 'Куд', 
      options: ['Домашний'],
      correctAnswer: 'Кудонь', 
      userAnswer: null as string | null,
      isCorrect: null as boolean | null
    },
    {
      question: 'Вирь', 
      options: ['Лесной'],
      correctAnswer: 'Вирень',
      userAnswer: null as string | null,
      isCorrect: null as boolean | null
    },
    {
      question: 'Ляй', 
      options: ['Речной'],
      correctAnswer: 'Ляень',
      userAnswer: null as string | null,
      isCorrect: null as boolean | null
    },
    {
      question: 'Шаба',
      options: ['Детский'],
      correctAnswer: 'Шабань',
      userAnswer: null as string | null,
      isCorrect: null as boolean | null 
    },
    {
      question: 'Ката',
      options: ['Кошачий'],
      correctAnswer: 'Катонь',
      userAnswer: null as string | null,
      isCorrect: null as boolean | null
    },
    {
      question: 'Тише',
      options: ['Травный'],
      correctAnswer: 'Тишень',
      userAnswer: null as string | null,
      isCorrect: null as boolean | null
    },
    {
      question: 'Тракс',
      options: ['Коровий'],
      correctAnswer: 'Траксонь',
      userAnswer: null as string | null,
      isCorrect: null as boolean | null
    },
    {
      question: 'Пиче',
      options: ['Сосновый'],
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