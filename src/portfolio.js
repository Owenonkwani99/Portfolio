const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://Owenonkwani99.github.io/Portfolio',
  title: 'OO.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Owen Onkwani',
  role: 'Software Developer',
 // picture: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',

  description:
    'With strong foundations in Java, OOP, data structures  algorithms, backend logic, and relational databases. Skilled in building  scalable, secure, and maintainable applications. Hands-on experience in API development, debugging, testing, and working in collaborative teams. A fast learner dedicated to delivering clean, efficient software solutions.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'HekimaBot is an intelligent Java-based chatbot that analyzes your documents and delivers context-aware responses using RAG and modern AI frameworks. Built with Vaadin, it offers a smooth interface and efficient real-time interactions.',
    stack: ['Java', 'Spring Boot', 'Vaadin'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    // image: 'cleanfolio.png',
  },
  {
    name: 'Project 2',
    description:
      'A Java-based banking system built with Spring Boot, featuring secure account management, customer CRUD operations, deposits, withdrawals, and internal transfers. Designed as a RESTful API with built-in Swagger documentation and an H2 in-memory database for rapid development and testing.',
    stack: ['Java', 'Spring Boot', 'Spring Security'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
   // image: 'https://github.githubassets.com/assets/GitHub-Logo-ee398b662d42.png',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  'HTML, CSS',
  'MySQL, SQL (queries, optimization)',
  'JavaScript',
  'Java (OOP, core libraries, Spring Boot)',
  'Jakarta EE (Servlets, JSP)React',
  'Spring Boot',
  'React',
  'TailwindCSS',
  'Git',
  'CI/CD',
  'Jest',
  'Object-Oriented Programming (OOP)',
]

const contact = {
  email: 'owenhempstone@mail.com',
}

export { header, about, projects, skills, contact }
