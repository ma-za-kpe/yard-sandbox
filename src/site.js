// Built by the Yard demo Crew, one page per task.
const pages = {
  "home": "<h1>Sunrise Café</h1>\n<p>Fresh coffee and pastries, every morning from 7.</p>\n<nav><a href=\"menu.html\">Menu</a> · <a href=\"contact.html\">Contact</a></nav>",
  "menu": "<h2>Menu</h2>\n<ul>\n  <li>Flat white — $4.50</li>\n  <li>Espresso — $3.00</li>\n  <li>Butter croissant — $3.25</li>\n</ul>"
};
const head = "<!doctype html>\n<html lang=\"en\">\n<head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><title>Sunrise Café</title>\n<style>body{font-family:system-ui,sans-serif;max-width:40rem;margin:3rem auto;padding:0 1rem;color:#1d1a16;background:#fbf6ee}h1{color:#b4541a}</style>\n</head>\n<body>\n";
const tail = "\n</body>\n</html>\n";
const layout = (body) => head + body + tail;
module.exports = { pages, layout };
