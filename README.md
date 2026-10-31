# Senior Project: Personal Portfolio Website

> **Archived:** This is an old project that I no longer maintain. I've left it up as a record of my high school senior project, so the site's content (bio, portfolio and media pages) reflects that time and won't be updated.

A static personal portfolio site I built with plain HTML, CSS and JavaScript for my high school senior project. It has an about-me landing page, a portfolio of projects, a media page that links to my YouTube channel, and a contact form.

## Features

- **Light-switch intro (`index/`):** The landing page starts dark. Clicking the light switch plays a staggered neon-glow animation across the logo, nav links, portrait, bio text and footer, driven by `index/scripts.js`.
- **Home (`home/`):** A static version of the about-me page without the animation.
- **Portfolio (`portfolio/`):** Project cards with a description, status and a link to the source code.
- **Media (`media/`):** Links to my [YouTube channel](https://www.youtube.com/@brendan_pierce).
- **Contact Me (`contactme/`):** An HTML form that posts to [FormSubmit](https://formsubmit.co/), so no backend is needed. It has a hidden honeypot field for spam, and after a successful submission it redirects to `success/success.html`.
- **Shared layout:** Every page has the same header (BP logo plus nav links) and the same footer (location, LinkedIn, YouTube, GitHub and page links).

## Tech Stack

- HTML5
- CSS3 (one stylesheet per page)
- Vanilla JavaScript (no frameworks or build step)
- FormSubmit for contact-form email delivery

## Project Structure

```
Senior Project/
├── index/        # Landing page with the light-switch animation
│   ├── index.html
│   ├── scripts.js
│   └── styles-index.css
├── home/         # Static about-me page
├── portfolio/    # Projects page
├── media/        # YouTube / media page
├── contactme/    # Contact form
├── success/      # Thank-you page shown after the form is submitted
└── img/          # Images and icons
```

## Running Locally

Every link and asset path is root-relative (for example, `/index/styles-index.css`), so the `Senior Project` folder has to be served as the web root. If you open the HTML files straight from disk, the styles and images won't load.

From the repository root:

```bash
cd "Senior Project"
python3 -m http.server 8000
```

On Windows, use `python` instead of `python3`.

Then open <http://localhost:8000/index/index.html>.

Any other static server works too (for example, `npx serve .` or VS Code's Live Server extension), as long as its root is the `Senior Project` folder.

## Contact Form Notes

The form posts to a FormSubmit endpoint. After a successful submission it redirects to `http://brendanpierce.com/success/success.html` (set in the hidden `_next` field in `contactme/contactme.html`). Because the project isn't maintained, neither the form endpoint nor that redirect is guaranteed to still work.

## Links

- LinkedIn: <https://www.linkedin.com/in/brendan-pierce-0997582a5/>
- YouTube: <https://www.youtube.com/@brendan_pierce>
- GitHub: <https://github.com/brendanpierce>

## License

Released under the [MIT License](LICENSE).
