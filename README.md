# lucasciacca.it

Personal website of Luca Sciacca - Developer and DevOps Engineer

## 🌐 Live Site

[www.lucasciacca.com](https://www.lucasciacca.com/)

## 📋 Description

This is my personal showcase website built with Hugo. The site features my projects, technical articles, and expertise in web development, DevOps, and innovative technologies.

### Main sections:
- **Home** - Personal introduction and skills overview
- **Blog** - Technical articles on development, AI, and web technologies
- **Projects** - Showcase of developed projects
- **Changelog** - Site updates and modifications
- **Contact** - Contact information

## 🛠 Technologies Used

- **Hugo** v0.111.1+extended - Static site generator
- **SCSS** - Stylesheets organized with ITCSS methodology
- **JavaScript** - Interactive functionality
- **HTML5** - Hugo templates with semantic structure
- **GitHub Pages** - Hosting and deployment

## 🚀 Local Development

### Prerequisites
- Hugo v0.111.1+ (extended version)
- Git

### Installation and Setup

```bash
# Clone the repository
git clone https://github.com/[username]/lucasciacca.it.git
cd lucasciacca.it

# Start development server
hugo server

# Site will be available at http://localhost:1313
```

### Main Commands

```bash
# Development with live reload
hugo server

# Development including drafts
hugo server --buildDrafts

# Production build
hugo

# Clean build (removes orphaned files)
hugo --cleanDestinationDir
```

## 📁 Project Structure

```
├── config.toml          # Hugo configuration
├── content/             # Site content
│   ├── posts/          # Blog articles
│   ├── projects/       # Projects
│   └── *.md           # Static pages
├── layouts/            # Hugo templates
│   ├── _default/      # Default layouts
│   ├── partials/      # Reusable components
│   └── *.html         # Specific templates
├── assets/             # Source assets
│   ├── sass/          # SCSS files
│   └── js/            # JavaScript files
├── static/             # Static files
│   └── images/        # Site images
└── public/            # Generated site (ignored by git)
```

## 🎨 CSS Architecture

The project uses ITCSS methodology to organize stylesheets:

- **Settings** (`0-settings/`) - Variables, colors, mixins
- **Tools** (`1-tools/`) - Utilities, grid, normalize, animations
- **Base** (`2-base/`) - Base styles
- **Modules** (`3-modules/`) - Modular components
- **Layouts** (`4-layouts/`) - Page-specific layouts

## 📝 Content Management

### Create a new post
```bash
hugo new posts/post-title.md
```

### Create a new project
```bash
hugo new projects/project-name.md
```

## 🚀 GitHub Pages Deployment

The site is configured for automatic deployment to GitHub Pages via GitHub Actions.

### Deployment setup:

1. **Enable GitHub Pages** in the repository:
   - Settings → Pages → Source: GitHub Actions

2. **GitHub Actions workflow** (`.github/workflows/deploy.yml`) automatically handles:
   - Hugo site build
   - GitHub Pages deployment
   - Site updates on every push to `main`

### Deployment process:
- Push to `main` branch → Automatic build trigger
- Hugo generates static site
- Automatic deployment to GitHub Pages
- Live site at `https://[username].github.io/lucasciacca.it`

## ⚙️ Configuration

Main configurations are in `config.toml`:
- Site information (URL, title, description)
- Navigation menus
- Theme parameters
- Social and contact configurations
- Section settings (blog, projects, hero)

## 📱 Features

- ✅ Responsive design
- ✅ Automatic dark/light mode
- ✅ Code syntax highlighting
- ✅ SEO optimization
- ✅ Optimized images (WebP)
- ✅ Performance optimized
- ✅ Integrated contact form

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

## 📧 Contact

- **Email**: hello@lucasciacca.com
- **GitHub**: [@Silverkron](https://github.com/Silverkron)
- **Website**: [lucasciacca.com](https://www.lucasciacca.com)