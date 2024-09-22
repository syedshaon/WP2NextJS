# WordPress to Next.js Conversion Project

This project converts WordPress sites into fast, secure, and scalable Next.js applications. It enhances site performance, SEO, and user experience by leveraging modern technologies like Next.js, React, and Tailwind CSS. Blog posts are converted from WordPress to Markdown format, supporting rich media such as images, YouTube videos, and galleries using `.mdx` files.

## Features

- **WordPress to Markdown**: Convert WordPress blog posts to Markdown files, compatible with Next.js, using MDX for media content.
- **Next.js & Tailwind CSS**: Manually recreate WordPress pages in Next.js with Tailwind CSS, ensuring a responsive, modern design.
- **SEO & Performance Optimization**: Full SEO setup with meta tags, descriptions, and optimized page structures. Google Analytics, sitemap, and RSS feed integration for better performance tracking.
- **Media Support**: Easily embed YouTube videos, images, and other media content within Markdown files using custom Next.js components.
- **Email & Hosting Setup**: Configure email functionality using Nodemailer and deploy the site to Vercel with custom domain support.

## Packages Used

### Dependencies

- **Next.js** (`next`): Framework for building React-based applications.
- **next-mdx-remote**: Provides support for `.mdx` files, enabling Markdown with embedded React components.
- **next-themes**: Handles theme switching between light and dark modes.
- **nodemailer**: Configures email functionality to send emails from your site.
- **react** & **react-dom**: Core libraries for building user interfaces in React.
- **react-icons**: Offers a wide variety of icons as React components.
- **react-paginate**: Adds pagination functionality for paginated lists of posts.
- **sass**: CSS preprocessor that makes writing and managing CSS easier and more modular.
- **sharp**: Optimizes images for better performance and faster load times.
- **sugar-high**: Adds syntax highlighting to code blocks in Markdown.
- **tailwindcss**: Utility-first CSS framework for rapidly building custom designs.
- **tailwindcss-animate**: Animations plugin for Tailwind CSS to enhance user interactions.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v18 or later)
- **npm** or **Yarn**

### Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:

```bash
git clone https://github.com/your-repo.git
cd your-repo
```

2. **Install dependencies:**

```
npm install
# or
yarn install
```

3. **Start the development server:**

```
npm run dev
# or
yarn dev
```

The app will run on http://localhost:3000.

4. **Build for Production:**

To build the project for production, run:

```
npm run build
# or
yarn build
```

This will output an optimized build in the .next directory, which is ready for deployment.

5. **Running Production Build:**
   Once the project is built, you can run it in production mode with:

```
npm start
# or
yarn start
```

**Deployment**
This project is ready to be deployed on Vercel, a platform designed for Next.js applications. Simply use the Vercel CLI to deploy or connect your GitHub repository to Vercel for automatic deployments.

**License**
This project is licensed under the MIT License. Feel free to use, modify, and distribute as needed.

```
This `README.md` provides a complete overview of the project, including setup instructions, features, project structure, and deployment steps. Let me know if you need any changes!
```
