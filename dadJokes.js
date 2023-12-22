document.addEventListener("DOMContentLoaded", () => {
  const jokeEl = document.getElementById("joke");
  const jokeBtn = document.getElementById("dad-button");

  const fetchJoke = async () => {
    try {
      const response = await fetch("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      jokeEl.textContent = data.joke;
    } catch (error) {
      console.error("Error fetching dad joke:", error);
      jokeEl.textContent = "Failed to load dad joke!";
    }
  };

  jokeBtn.addEventListener("click", fetchJoke);

  fetchJoke();
});
