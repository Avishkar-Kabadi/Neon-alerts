import { createEl, removeEl, getIcon } from "./utils.js";

export function confirmAlert(title = "Are you sure?", message = "") {
    return new Promise(resolve => {
        const overlay = createEl("div", "na-confirm-overlay");
        const box = createEl("div", "na-confirm-box");

        box.innerHTML = `
            <div class="na-header">
                <div class="na-icon">${getIcon("warning")}</div>
                <div>
                    <div class="na-title">${title}</div>
                    <div class="na-message">${message}</div>
                </div>
            </div>
            <div class="na-actions">
                <button class="na-btn na-cancel">Cancel</button>
                <button class="na-btn na-ok">Okay</button>
            </div>
        `;

        overlay.appendChild(box);
        document.body.appendChild(overlay);

        overlay.querySelector(".na-cancel").onclick = () => {
            removeEl(overlay);
            resolve(false);
        };

        overlay.querySelector(".na-ok").onclick = () => {
            removeEl(overlay);
            resolve(true);
        };
    });
}
