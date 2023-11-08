# Real Estate Listing Web App

This application is a real estate listing platform that allows users to view property listings and their details.

## Technology Choices

- **Framework**: We chose **Next.js** due to its out-of-the-box support for server-side rendering (SSR), which enhances SEO and initial page load performance.
  
- **State Management**: **Redux** provides a centralized way to manage and interact with state. Its middleware and devtools support makes debugging easier.
  
- **HTTP Client**: **Axios** is a promise-based HTTP client that's easy to integrate with Redux and offers interceptors, which can be handy for handling requests and responses globally.
  
- **Testing**: **Jest** along with **React Testing Library** promotes best practices in writing test cases and ensures our components work as expected.

- **Styling**: **styled-components** offers component-level styling, dynamic styling based on props, and theming support. It also integrates well with SSR in Next.js.

## Development Philosophy

- **Clean Architecture**: Our focus is on maintainable and legible code. We prioritize code design and robust architecture.

- **Design Patterns**: We aim to leverage appropriate design patterns to solve recurring challenges and make the codebase more understandable.

- **Best Practices**: Following software development best practices ensures our application's stability and eases future maintenance.

- **UI Patterns**: Smart UI patterns are avoided to align with project requirements and prioritize user experience.

- **Continuous Commit**: To track our development progress and facilitate collaboration, we commit regularly with meaningful commit messages.


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
