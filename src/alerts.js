import { createEl, removeEl, getIcon } from "./utils.js";

export function showAlert(message, type = "info", duration = 2500) {
    const alert = createEl("div", `na-alert na-${type}`);
    alert.innerHTML = `
        <div class="na-icon">${getIcon(type)}</div>
        <div class="na-text">${message}</div>
    `;

    document.body.appendChild(alert);

    setTimeout(() => {
        alert.classList.add("na-hide");
        setTimeout(() => removeEl(alert), 300);
    }, duration);
}
