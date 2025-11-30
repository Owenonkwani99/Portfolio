const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rjshkhr.github.io/cleanfolio',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Owen Onkwani',
  role: 'Software Developer',
  picture: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',

  description:
    'Software Developer with strong foundations in Java, OOP, data structures  algorithms, backend logic, and relational databases. Skilled in building  scalable, secure, and maintainable applications. Hands-on experience in API development, debugging, testing, and working in collaborative teams. A fast learner dedicated to delivering clean, efficient software solutions.',
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
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: 'cleanfolio.png',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: 'https://github.githubassets.com/assets/GitHub-Logo-ee398b662d42.png',
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
