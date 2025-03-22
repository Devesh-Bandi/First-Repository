function switchPage(pageId) {
  // Get all pages
  const pages = document.querySelectorAll('.page');

  // Fade out the current page
  pages.forEach(page => {
    if (!page.classList.contains('hidden')) {
      page.style.opacity = "0";
      setTimeout(() => page.classList.add('hidden'), 300);
    }
  });

  // Wait for fade-out, then show the new page
  setTimeout(() => {
    const newPage = document.getElementById(pageId);
    newPage.classList.remove('hidden');
    newPage.style.opacity = "0";

    // Smoothly fade in
    setTimeout(() => {
      newPage.style.opacity = "1";
      revealHeadings(newPage); // Trigger staggered headings
    }, 50);

    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 300);
}

function revealHeadings(page) {
  // Get all headings inside the new page
  const headings = page.querySelectorAll('h1, h2');

  headings.forEach((heading, index) => {
    heading.style.opacity = "0"; // Reset opacity
    heading.style.transform = "translateY(20px)";

    setTimeout(() => {
      heading.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
      heading.style.opacity = "1";
      heading.style.transform = "translateY(0)";
    }, index * 200); // Stagger effect
  });
}
