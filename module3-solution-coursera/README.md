# HTML, CSS, and JavaScript for Web Developers - Coding the Static Restaurant Site

This is the assignment from the third module, "Coding the Static Restaurant Site," of the course "HTML, CSS, and JavaScript for Web Developers" offered on Coursera by *Yaakov Chaikin* from *Johns Hopkins University*.

## Table of Contents
- [Goal](#goal)
- [Requirements](#requirements)
  - [Device Breakpoints](#device-breakpoints)
  - [Webpage Requirements](#webpage-requirements)
  - [Layout Specifications](#layout-specifications)
  - [Styling Guidelines](#styling-guidelines)
  - [Other](#other-guidelines)
- [Project Files](#project-files)
- [Installation Instructions](#installation-instructions)
- [Usage Instructions](#usage-instructions)
- [Credits](#credits)

## Goal
The goal of this project is to create a simple responsive webpage compatible with all devices (mobile, tablet, and desktop) using mainly the Twitter Bootstrap Framework. When possible the requirements should be met through the refered framework.

### Requirements

#### 1. Device Breakpoints (bootstrap prefixes)
- **Desktop**: md
- **Tablet**: sm
- **Mobile**: xs

#### 2. Webpage Requirements
- The webpage must consist of only a navigation bar, a heading, a section and a section title.
- There should be at all times  the name 'Food, LLC' on the left side of the navigation bar.
- There should also be a functional dropdown menu button on the right side of the navigation bar.
- The [provided mockup](https://github.com/jhu-ep-coursera/fullstack-course4/blob/master/assignments/assignment3/Assignment-3.md) should be taken into consideration.

#### 3. Layout Specifications
- No inline styles are allowed.
- The navigation bar should disapear when scrolling down the page and appear when scrolling up.
- The section must be long enough to require scrolling to get its bottom.
- The dropdown menu should contain 3 items (chicken, beef and sushi) and should take up the entire width of the browser (minus margins).

**Device Specific:**
- **Desktop + Tablet**
  - The dropdown menu button should NOT be visible.
- **Mobile**
  - The dropdown menu button should be visible and functional.

#### 4. Styling Guidelines
- The dropdown menu button should consist of the 3-horizontal-lines-icon.
- The dropdown menu should have a distinct color.
- The page heading 'Our Menu' should be centered through a bootstrap class.
- The section should have a distinct background color.

#### 5. Other Guidelines
- The company name should have the 'navbar-brand' class.
- Twitter Bootstrap CSS framework should be the main resource.

## Project Files
- **[index.html](index.html)**: Responsible for the content of the page.
- **[style.css](style.css)**: Responsible for the styling of the page.
- **[README.md](README.md)**: This file, guiding you through the project.

## Installation Instructions
1. Clone the repository to your local machine using `git clone <repository-url>`.
2. Navigate to the project directory.
3. Open `index.html` in your preferred web browser to view the webpage.

## Usage Instructions
- Open the webpage (follow [Installation Instructions](#installation-instructions)).
- Resize the browser window to see how the layout adapts to different screen sizes (desktop, tablet, and mobile).
- Click the dropdown button to check its functionality (only visible on mobile view).
- Scroll up and down the page to observe the 'scroll-away-function' of the navigation bar.
- Verify the styling and cross chek it with the requirements and mockups.

## Credits
Course: **"HTML, CSS, and JavaScript for Web Developers"** by *Yaakov Chaikin*, *Johns Hopkins University* on Coursera.
