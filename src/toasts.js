import { createEl, removeEl, getIcon } from "./utils.js";

export function showToast(message, type = "success", duration = 3000) {
    let container = document.querySelector(".na-toast-container");
    if (!container) {
        container = createEl("div", "na-toast-container");
        document.body.appendChild(container);
    }

    const toast = createEl("div", `na-toast na-${type}`);
    toast.innerHTML = `
        <div class="na-icon">${getIcon(type)}</div>
        <div class="na-text">${message}</div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("na-hide");
        setTimeout(() => removeEl(toast), 300);
    }, duration);
}
