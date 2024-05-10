import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-theme1-page',
  templateUrl: './theme1-page.component.html',
  styleUrls: ['./theme1-page.component.scss'] // Если вам нужен отдельный файл CSS для компонента
})
export class Theme1PageComponent {
  isSubmitted = false;

  quiz = [
    { 
      question: '', 
      options: ['Морга', 'Мор', 'Морня', 'Морак', 'Морамс'],
      correctAnswer: 'Морга', 
      userAnswer: null as string | null,
      isCorrect: null as boolean | null
    },
    {
      question: '', 
      options: ['Келуня', 'Келу', 'Келазь', 'Келунь', 'Келунят'],
      correctAnswer: 'Келазь',
      userAnswer: null as string | null,
      isCorrect: null as boolean | null
    },
    {
      question: '', 
      options: ['Пиземс', 'Пизем', 'Пиза', 'Пизепт', 'Пизему'],
      correctAnswer: 'Пиза',
      userAnswer: null as string | null,
      isCorrect: null as boolean | null
    },
    {
      question: '',
      options: ['Шабра', 'Шаба', 'Шабат', 'Шабань', 'Шабакс'],
      correctAnswer: 'Шабра',
      userAnswer: null as string | null,
      isCorrect: null as boolean | null 
    },
    {
      question: '',
      options: ['Пимень', 'Пине', 'Пинелефкс', 'Пинет', 'Пинем'],
      correctAnswer: 'Пинем',
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
