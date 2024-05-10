import { Component } from '@angular/core';

@Component({
  selector: 'app-theme5-page',
  templateUrl: './theme5-page.component.html',
  styleUrls: ['./theme5-page.component.scss']
})
export class Theme5PageComponent {
  isSubmitted = false;
  
  quiz = [
    { 
      question: 'Кафта + Колма сядт нильгемонь  фкя =', 
      options: [''],
      correctAnswer: '343', 
      userAnswer: null as string | null,
      isCorrect: null as boolean | null
    },
    {
      question: 'Сисем * Ведьгемонь =', 
      options: [''],
      correctAnswer: '350',
      userAnswer: null as string | null,
      isCorrect: null as boolean | null
    },
    {
      question: 'Кемонь - Вете =', 
      options: [''],
      correctAnswer: '5',
      userAnswer: null as string | null,
      isCorrect: null as boolean | null
    },
    {
      question: 'Сяда / Вете',
      options: [''],
      correctAnswer: '20',
      userAnswer: null as string | null,
      isCorrect: null as boolean | null 
    },
    {
      question: 'Сизьгемонь кафта / Вейхса = ',
      options: [''],
      correctAnswer: '8',
      userAnswer: null as string | null,
      isCorrect: null as boolean | null
    },
    {
      question: 'Кафксагемонь ниле + Кота =',
      options: [''],
      correctAnswer: '90',
      userAnswer: null as string | null,
      isCorrect: null as boolean | null
    },
    {
      question: 'Ниле сядт кодгемонь вете + Колмагемонь сисем',
      options: [''],
      correctAnswer: '502',
      userAnswer: null as string | null,
      isCorrect: null as boolean | null
    },
    {
      question: 'Вейхсагемонь кафта + Сяда нильгемонь  фкя =',
      options: [''],
      correctAnswer: '233',
      userAnswer: null as string | null,
      isCorrect: null as boolean | null
    },
    {
      question: 'Тёжень * Кафта =',
      options: [''],
      correctAnswer: '2000',
      userAnswer: null as string | null,
      isCorrect: null as boolean | null
    },
    {
      question: 'Тёжень / Кафта =',
      options: [''],
      correctAnswer: '500',
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
