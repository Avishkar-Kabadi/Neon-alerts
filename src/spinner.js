export function showLoader(type = 1, message = "") {
    hideLoader(); // remove existing

    const overlay = document.createElement("div");
    overlay.className = "na-loader-overlay";

    const loader = document.createElement("div");
    loader.className = `na-loader type-${type}`;

    const text = document.createElement("div");
    text.className = "na-loader-text";
    text.textContent = message;

    overlay.appendChild(loader);
    if (message) overlay.appendChild(text);

    document.body.appendChild(overlay);
}

export function hideLoader() {
    const el = document.querySelector(".na-loader-overlay");
    if (el) el.remove();
}
