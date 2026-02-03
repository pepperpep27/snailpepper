const form = document.getElementById("newsletter-form");
const status = document.getElementById("newsletter-status");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    status.textContent = "Submitting…";

    try {
      const response = await fetch("https://formspree.io/f/xwvqdenv", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: new FormData(form)
      });

      if (response.ok) {
        form.reset();
        status.textContent = "Thanks for subscribing!";
      } else {
        status.textContent = "Something went wrong. Try again.";
      }
    } catch (err) {
      status.textContent = "Network error. Try again later.";
    }
  });
}