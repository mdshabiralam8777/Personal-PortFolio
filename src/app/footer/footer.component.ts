import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  currentYear = new Date().getFullYear();

  techLogos = [
    { name: 'Angular', src: 'assets/techImages/Angular.png' },
    { name: 'API', src: 'assets/techImages/API.png' },
    { name: 'Bootstrap', src: 'assets/techImages/Bootstrap.png' },
    { name: 'CSS', src: 'assets/techImages/CSS.png' },
    { name: 'DSA', src: 'assets/techImages/DSA.png' },
    { name: 'Express.js', src: 'assets/techImages/express-js.png' },
    { name: 'Git', src: 'assets/techImages/git.png' },
    { name: 'HTML', src: 'assets/techImages/HTML.png' },
    { name: 'Jasmine', src: 'assets/techImages/jasmine.png' },
    { name: 'JavaScript', src: 'assets/techImages/JavaScript.png' },
    { name: 'Jenkins', src: 'assets/techImages/jenkins.svg' },
    { name: 'Jest', src: 'assets/techImages/jest-icon.png' },
    { name: 'Material UI', src: 'assets/techImages/MaterialUI.png' },
    { name: 'MongoDB', src: 'assets/techImages/MongoDB-Logo.png' },
    {
      name: 'Node',
      src: 'assets/techImages/Node.png',
    },
    { name: 'Playwright', src: 'assets/techImages/playwright.png' },
    { name: 'Postman', src: 'assets/techImages/postman-icon.webp' },
    { name: 'PrimeNg', src: 'assets/techImages/PrimeNg.webp' },
    { name: 'React', src: 'assets/techImages/React.png' },
    { name: 'SASS', src: 'assets/techImages/SASS.png' },
    { name: 'SCSS', src: 'assets/techImages/SCSS.png' },
    { name: 'Swagger', src: 'assets/techImages/Swagger-logo.png' },
    { name: 'TypeScript', src: 'assets/techImages/TypeScript.png' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
