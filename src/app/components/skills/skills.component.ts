import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills = {
    frontEndDevelopment: [
      'Angular',
      'React',
      'JavaScript/ES6',
      'TypeScript',
      'RxJS',
      'HTML',
      'CSS/SASS/SCSS/LESS',
      'Material UI',
      'Bootstrap',
      'PrimeNg',
    ],
    backEndDevelopment: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'JWT'],
    others: [
      'MEAN',
      'MERN',
      'Git',
      'Jenkins (CI/CD)',
      'Jest',
      'Jasmine',
      'Playwright',
      'API Integration',
      'Postman',
      'Swagger',
      'DSA',
      'UI/UX Design',
      'PWA',
      'SEO',
      'SSR',
      'npm',
      'REST',
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
