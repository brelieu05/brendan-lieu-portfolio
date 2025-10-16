--Readme document for Brendan Lieu, blieu2@uci.edu--

A reminder on academic integrity, as described in the syllabus.

In general, the course staff expects that you will look at code and examples from many online resources as part of the assignments, particularly to resolve syntax and understand frameworks. We expect that you'll use other libraries you find, and will even require it in some assignments. These practices are often critical to the work of developers today. The best developers are adept at interpreting the examples they see, customizing them to their specific situation, and citing their sources so they can find them later. We expect you to do the same.

While learning from examples is encouraged, attempting to pass an existing project or example from the web as your own is not allowed. If you ever have a question about what is or is not appropriate, feel free to ask the course staff!

Talking to classmates about class material, assignment requirements, etc. is a great way to verify ideas and get feedback. But this distinctly does *not* permit attempting to pass off someone else’s code as your own. Talking over ideas and approaches is allowed, but the work that you produce and submit must be your own.

1. How many assignment points do you believe you completed (replace the *'s with your numbers)?

10/10
- 1/1 Readme
- 2/2 Basic HTML content
- 1/1 Basic CSS styling
- 1/1 Advanced feature
- 2/2 Responsive layout
- 1/1 Passes validation checks
- 2/2 Embraces spirit of the assignment

2. What (a) basic features, (b) CSS features, and (c) advanced features did you include in your portfolio?

(a) Basic features

- Multiple images with descriptive alt attributes: Sciton logo, La Pena logo, ZotnFound logo, RateMyClub page screenshot, Fabflix page screenshot, and Academic Search Engine page screenshot
- Appropriate headings and paragraph text: Used semantic HTML with h1, h2, h3 headings and descriptive paragraph text for each project
- Links to external pages: GitHub profile, LinkedIn profile, project repositories, live demos, and company websites
- Semantic HTML tags: Used header, nav, section, footer, and main semantic elements
- Custom icons from Font Awesome: GitHub, LinkedIn, external link, desktop, YouTube, and file icons

(b) CSS features

- Modified padding and margins: Used Tailwind CSS classes for proper spacing, indentation, and readability throughout the layout
- Modified colors for visual appeal: Implemented a dark theme with gray-900 background, blue-500 accent colors, and hover effects with color transitions
- Custom fonts: Integrated Font Awesome icons for enhanced visual elements and personality

(c) Advanced features

- Complex page layout with navigation bar: Implemented a sticky header with desktop and mobile navigation, including smooth scrolling to sections
- Dynamic role rotation animation: Created a rotating text animation that cycles through different roles (Full Stack Developer, UCI Student, etc.) with CSS keyframe animations
- Interactive mobile menu: Built a responsive mobile navigation menu that toggles visibility and includes smooth transitions
- Hover effects and transitions: Added sophisticated hover effects on project cards and links with smooth color transitions



3. Did you ignore any of the warnings or errors presented by the accessibility checker? If so, why does this not seem like an accessibility concern? If it's useful, you can consolidate your thoughts on multiple warnings/errors if the rationale is similar.

"Trailing slash on void elements has no effect and interacts badly with unquoted attribute values."

It wasn't an error and was stating that it's bad with unquoted attribute values, but all my attribute values were quoted. Additionally, since it did not mark as an error nor did it impact my portfolio experience, I thought it was fine.

4. How long, in hours, did it take you to complete this assignment?

Approximately 6-7 hours total, including:
- 1 hours for initial setup and basic structure
- 2-3 hours for content creation and styling
- 2 hours for responsive design and advanced features
- 1 hour for accessibility fixes and validation

5. What online resources did you consult when completing this assignment? (list specific URLs, describe queries to Generative AI, or use of AI-based code completion)

- Tailwind CSS documentation: https://tailwindcss.com/docs for responsive design utilities and styling
- Font Awesome documentation: https://fontawesome.com/docs for icon implementation
- React documentation: https://react.dev for useState and useEffect hooks
- CSS keyframe animations: https://www.w3schools.com/css/css_rwd_mediaqueries.asp for breakpoints and responsive design
- Accessibility guidelines: WCAG 2.4.4 Link Purpose guidelines for fixing empty link issues
- Claude: https://claude.ai for debugging and to answer questions about best accessibility practices
  - Questions asked: 
    * "How to fix empty link accessibility issues" - to resolve WCAG 2.4.4 violations
    * "What are the WCAG guidelines for link purpose" - to understand accessibility standards
    * "How to add aria-label attributes to icon-only links" - for screen reader compatibility
    * "What causes 'Unterminated string constant' errors in React" - for debugging syntax issues
    * "How to fix JSX structure errors with extra closing div tags" - for resolving compilation errors 
6. What classmates or other individuals did you consult as part of this assignment? What did you discuss?

No classmates or other individuals were consulted for this assignment. All work was completed independently.

7. Is there anything special we need to know in order to run your code?


Steps to run:

1. Navigate to the portfolio directory: `cd portfolio`
2. Run development server: `npm run dev` or `npm run preview` 
