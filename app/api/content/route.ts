import { NextResponse } from 'next/server';

// Dummy data
const posts = [
    {
      title: 'The Future of Web Development',
      slug: 'the-future-of-web-development',
      content:
        'Emerging technologies like AI-driven tools, WebAssembly, and modern frameworks are redefining web development. Developers must adapt to stay ahead in this rapidly evolving landscape.',
    },
    {
      title: 'Getting Started with TypeScript',
      slug: 'getting-started-with-typescript',
      content:
        'TypeScript brings static typing to JavaScript, reducing runtime errors and improving maintainability. Start by configuring your tsconfig.json and gradually adding types to existing projects.',
    },
    {
      title: 'Understanding CSS Grid Layout',
      slug: 'understanding-css-grid-layout',
      content:
        'CSS Grid simplifies complex layouts with its two-dimensional system. Learn to use grid-template-areas and fr units to create responsive designs without media queries.',
    },
    {
      title: 'Best Practices for REST API Design',
      slug: 'best-practices-for-rest-api-design',
      content:
        'Design clean APIs with proper HTTP status codes, versioning, and HATEOAS. Always include error handling and rate limiting for security and scalability.',
    },
    {
      title: 'Introduction to Node.js',
      slug: 'introduction-to-nodejs',
      content:
        'Node.js enables server-side JavaScript execution with its event-loop architecture. Explore npm packages and build your first REST API using Express.js.',
    },
    {
      title: 'Responsive Design Techniques',
      slug: 'responsive-design-techniques',
      content:
        'Combine fluid grids, flexible images, and media queries for flawless responsiveness. Newer tools like container queries now offer component-driven adaptability.',
    },
    {
      title: 'JavaScript Frameworks Comparison',
      slug: 'javascript-frameworks-comparison',
      content:
        'React, Vue, and Angular each offer unique strengths. React emphasizes component reusability, Vue prioritizes simplicity, while Angular provides a full MVC framework.',
    },
    {
      title: 'Mastering Async/Await in JavaScript',
      slug: 'mastering-async-await-in-javascript',
      content:
        'Async/await simplifies asynchronous code by making it read like synchronous operations. Always wrap await calls in try/catch blocks for error handling.',
    },
    {
      title: 'Building Scalable Applications',
      slug: 'building-scalable-applications',
      content:
        'Leverage microservices, caching with Redis, and load balancing to handle growth. Prioritize stateless architectures and database sharding for horizontal scaling.',
    },
    {
      title: 'The Power of Vue.js',
      slug: 'the-power-of-vuejs',
      content:
        'Vue.js combines reactivity and composability with minimal boilerplate. Its progressive nature allows incremental adoption in existing projects.',
    },
  ];

export async function GET() {
  return NextResponse.json(posts);
}