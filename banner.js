export function createBanner(title, description) {
  const banner = document.createElement("div");
  banner.className = "banner";
  banner.innerHTML = `
    <h2>${title}</h2>
    <p>${description}</p>
  `;

  return banner;
}
