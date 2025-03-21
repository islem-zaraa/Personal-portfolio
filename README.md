# Personal Portfolio

Welcome to my personal portfolio project! This repository is a modern and professional showcase of my skills, projects, and achievements as a developer. Built with a robust tech stack, it highlights my proficiency in crafting interactive and scalable web applications.

## Features

- **Responsive Design**: Fully optimized for desktops, tablets, and mobile devices.
- **Dynamic Components**: Modular and reusable components for streamlined development.
- **Project Showcase**: A dedicated section to highlight projects with detailed descriptions and links.
- **Interactive Animations**: Smooth transitions and engaging animations powered by modern libraries.
- **Contact Form**: Easily reach out via an integrated contact form.
- **Security Focused**: Implements modern web security best practices.

## Tech Stack

- **Languages**:
  - TypeScript
  - CSS
  - JavaScript
  - HTML

- **Frameworks and Libraries**:
  - React
  - Tailwind CSS

- **Build Tools**:
  - Vite
  - PostCSS

- **Code Quality**:
  - ESLint
  - TypeScript Configurations

- **Security Features**:
  - Content Security Policy
  - XSS Protection
  - CSRF Protection
  - Secure Headers
  - Automated Security Scanning

## Project Structure

### Root Directory

- `.Note`: Notes or auxiliary files.
- `src`: Contains all source code for the project.
- `.gitattributes`, `.gitignore`: Version control configurations.
- `README.md`: Project documentation.
- `eslint.config.js`: Linting rules.
- `index.html`: Entry HTML file.
- `package-lock.json`, `package.json`: Dependency management files.
- `postcss.config.js`: PostCSS configuration.
- `tailwind.config.js`: Tailwind CSS configuration.
- `tsconfig.*.json`: TypeScript configurations for app and node.
- `vite.config.ts`: Vite configuration.
- `.github/workflows`: CI/CD workflows for security scanning.
- `SECURITY.md`: Security policy and reporting instructions.
- `.env.example`: Example environment variables template.

### `src` Directory

- **`components`**: Modular components for the portfolio.
  - **Subdirectories**:
    - `blog`: Blog components.
    - `certifications`: Showcases certifications.
    - `contact`: Contact form and related elements.
    - `experience`: Work and project experiences.
    - `footer`: Footer section.
    - `hero`: Hero section of the portfolio.
    - `nav`: Navigation bar.
    - `portfolio`: Project portfolio.
    - `skills`: Skills overview.
    - `social`: Social media links.
    - `testimonials`: Client or colleague testimonials.
    - `ui`: Shared UI components.
  - **Files**:
    - `Footer.tsx`
    - `Hero.tsx`
    - `Nav.tsx`
    - `Portfolio.tsx`

- **`styles`**: Global and component-specific styles.
- **Other Files**:
  - `App.tsx`: Main app component.
  - `index.css`: Global styles.
  - `main.tsx`: Entry point for the app.
  - `vite-env.d.ts`: TypeScript environment declarations.

## Installation and Setup

Follow these steps to set up the project locally:

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- Modern web browser

### Installation Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/islem-zaraa/Personal-portfolio.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Personal-portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

4. Create your environment file:
   ```bash
   cp .env.example .env.local
   # Then edit .env.local with your configuration
   ```

5. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Open your browser and navigate to `http://localhost:3000` to view the portfolio.

## Security Best Practices

This project follows these security best practices:

1. **Environment Variables**: Sensitive data is stored in environment variables, never in the codebase
2. **Content Security Policy**: Restricts which resources can be loaded, preventing XSS attacks
3. **Input Validation**: All user inputs are validated before processing
4. **Dependency Management**: Regular updates to dependencies to patch security vulnerabilities
5. **Security Headers**: Implementation of recommended security headers
6. **Automated Scanning**: GitHub Actions workflow that runs security scans

## Reporting Security Issues

If you discover a security vulnerability, please follow the guidelines in [SECURITY.md](SECURITY.md).

## Contributing

Contributions are welcome! To propose changes:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push to your fork:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request to the main repository.

## License

This project is licensed under the MIT License.

## Contact

If you have any questions or suggestions, feel free to reach out:

- **Email**: islemzaraapro@gmail.com
- **LinkedIn**: [LinkedIn Profile](https://linkedin.com/in/islem-zaraa)
- **GitHub**: [islem-zaraa](https://github.com/islem-zaraa)

---

Thank you for exploring my portfolio project! I hope it provides insights into my capabilities and inspires your next project.