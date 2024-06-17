# DevBlog

![DevBlog Preview](/dev-blog-gif.gif) 

DevBlog is an open-source blog platform for developers, built with Astro, Shadcn, Tailwind CSS, and React.js. Clone or fork this repository to create your own personal blog.

## Features

- **Responsive Design**: Optimized for all devices, ensuring a seamless experience on desktops, tablets, and mobile phones.
- **Clean and Minimal UI Design**: Focus on content with a sleek, user-friendly interface.
- **Theme Switcher**: Easily switch between light and dark modes.
- **SEO Friendly**: Optimized for search engines to improve discoverability.
- **Easy to Customize**: Modify the design and functionality with ease.
- **Support for Markdown Posts**: Write your posts in Markdown for simplicity and flexibility.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. **Fork or Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/devblog.git
   cd devblog
   ```
2. **Install Dependencies**
   ```bash
   npm install
   ```
3. **Start the Development Server**
   ```bash
   npm start
   ```

## Usage
### Creating a New Post
To create a new post, add a Markdown file in the posts directory. Here’s a sample frontmatter for your Markdown file:
   ```markdown
   ---
   layout: ../../layouts/MarkdownPostLayout.astro
   title: 'Your Post Title'
   pubDate: 2023-01-01
   description: 'A brief description of your post'
   author: 'Your Name'
   image:
       url: '/path-to-your-image.png'
       alt: 'Description of your image'
   tags: ["tag1", "tag2"]
   ---
   ```

## Improving SEO with Meta Tags
To improve the SEO of your blog, you can add meta tags to your HTML head. In Astro, you can do this by editing the layouts/BaseLayout.astro file.

- Open the MarkdownPostLayout.astro file.
- Add your meta tags within the <head> section. Here’s an example:
  ```astro
   <head>
		<meta charset="UTF-8" />
		<meta name="description" content="Astro description" />
		<meta name="viewport" content="width=device-width" />
		<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
		<meta name="generator" content={Astro.generator} />
		<title>{title}</title>
	</head>
  ```

## Customizing the Layout and Styles
To customize the layout and styles, edit the files in the src directory. Tailwind CSS makes it easy to adjust styles and ensure a consistent design.

## Contributing to DevBlog
Thank you for considering contributing to DevBlog! Here are a few guidelines to help you get started:

### How to Contribute
- Fork the Repository
- Create a New Branch
  ```bash
  git checkout -b feature-branch
  ```
- Make Your Changes
- Commit Your Changes
  ```bash
   git commit -am 'Add new feature'
  ```
- Push to the Branch
  ```bash
   git push origin feature-branch
  ```
- Create a New Pull Request

## Preview
![DevBlog Preview](/dev-blog-gif.gif) 

## License
This project is licensed under the MIT License

## Don't forget to leave a star if you find this project useful! ⭐️
