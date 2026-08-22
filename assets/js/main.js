// Entry point for the dashboard.
// Relative paths are used so the site works at https://<user>.github.io/gov-dashboard/
fetch("data/sample.json")
  .then((res) => res.json())
  .then((data) => {
    document.getElementById("status").textContent =
      `Loaded ${data.items.length} item(s). Last updated: ${data.updated}`;
  })
  .catch((err) => {
    document.getElementById("status").textContent = `Failed to load data: ${err}`;
  });
