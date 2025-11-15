export function createEl(tag, className = "", html = "") {
    const el = document.createElement(tag);
    el.className = className;
    if (html) el.innerHTML = html;
    return el;
}

export function removeEl(el) {
    if (el && el.parentNode) {
        el.parentNode.removeChild(el);
    }
}

export function getIcon(type) {
    const icons = {
        success: `<svg width="22" height="22"><path d="M20 6L9 17l-5-5" stroke="#00e676" stroke-width="2" fill="none"/></svg>`,
        error: `<svg width="22" height="22"><path d="M18 6L6 18M6 6l12 12" stroke="#ff5252" stroke-width="2" fill="none"/></svg>`,
        warning: `<svg width="22" height="22"><path d="M10.29 3.86L1.82 18" stroke="#ffeb3b" stroke-width="2" fill="none"/></svg>`,
        info: `<svg width="22" height="22"><circle cx="12" cy="12" r="10" stroke="#40c4ff" stroke-width="2" fill="none"/></svg>`
    };
    return icons[type] || icons.info;
}
