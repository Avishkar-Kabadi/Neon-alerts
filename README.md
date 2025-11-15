# 🎉 Neon Alerts

Lightweight Neon + Glassmorphism Alerts, Toasts & Loaders (Vanilla JS)

neon-alerts is a tiny, dependency-free library that provides:

- ✨ Neon-styled alerts
- 🔥 Animated toasts
- 🔄 Multiple loader types
- ❗ Confirmation dialogs
- 🎨 Fully customizable with CSS

Works in any JavaScript project (React, Angular, Vue, Vanilla, Parcel, Vite, Webpack, etc.)

---

## 📦 Installation

### Using npm

```bash
npm install neon-alerts
```

### Using CDN (UMD build)

```html
<script src="https://unpkg.com/neon-alerts/dist/neon-alerts.umd.js"></script>
<link
  rel="stylesheet"
  href="https://unpkg.com/neon-alerts/dist/neon-alerts.css"
/>
```

---

## 🚀 Usage

### Step 1: Import in your project

```js
import {
  showAlert,
  showToast,
  confirmAlert,
  showLoader,
  hideLoader,
} from "neon-alerts";
```

### Step 2: Import the CSS

```js
import "neon-alerts/dist/neon-alerts.css";
```

---

## 🔔 1. Alerts

### Basic Alert

```js
showAlert("Profile updated!");
```

### Success / Error / Warning / Info

```js
showAlert("Saved successfully!", "success");
showAlert("Something went wrong!", "error");
showAlert("Warning: Check input!", "warning");
showAlert("Information message", "info");
```

### Custom Duration

```js
showAlert("Stays for 5 seconds", "info", 5000);
```

---

## 🍞 2. Toasts

### Simple Toast

```js
showToast("Item added to cart!");
```

### Typed Toasts

```js
showToast("Connected", "success");
showToast("Network error", "error");
```

---

## ❓ 3. Confirmation Dialog

### Confirm Box

```js
confirmAlert("Delete item?", "This cannot be undone.").then((yes) => {
  if (yes) alert("User confirmed!");
  else alert("User canceled!");
});
```

---

## 🔄 4. Loaders / Spinners

### Your loader API

```js
showLoader(type, message);
```

### Show Loader (default)

```js
showLoader(1, "Loading...");
```

### Different loader types

```js
showLoader(2, "Fetching...");
showLoader(3, "Processing...");
showLoader(4, "Please wait...");
showLoader(5, "Connecting...");
```

### Hide Loader

```js
hideLoader();
```

---

## 🎨 Loader Types

| Type | Description                 |
| ---- | --------------------------- |
| 1    | Neon ring spinner (default) |
| 2    | Bouncing neon dots          |
| 3    | Neon bar loading animation  |
| 4    | Pulse glow loader           |
| 5    | Neon ripple loader          |

---

## 🎨 Customization Options

| Feature      | Options                       |
| ------------ | ----------------------------- |
| Alert types  | success, error, warning, info |
| Toast types  | Same as alerts                |
| Loader types | 1–5                           |
| Loader text  | Any string                    |
| Duration     | In ms (default: 2500)         |
| Themes       | Fully customizable CSS        |

---

## 🧩 File Structure

neon-alerts/
├── dist/
│ ├── neon-alerts.css
│ ├── neon-alerts.es.js
│ └── neon-alerts.umd.js
├── src/
│ ├── alerts.js
│ ├── toasts.js
│ ├── loader.js
│ ├── confirm.js
│ ├── index.js
│ └── utils.js
└── README.md

---

## 📝 License

MIT © 2025 – Avishkar
