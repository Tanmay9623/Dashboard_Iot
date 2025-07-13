# Industrial IoT Monitoring Dashboard – MachineWise Task

Hi! 👋 This is a technical submission for the JavaScript Developer role at **MachineWise**. The application is a responsive Industrial IoT dashboard built using **React.js (frontend)** and **Node.js + Express (backend)**. It fetches and displays simulated machine sensor data like **temperature, vibration, current, and voltage**, updating every 5 seconds, along with real-time status alerts and machine health classification.

---

## 🚀 Project Approach

### 🧠 Logic & Decisions

- I created a mock Express backend (`/api/sensor-data`) to simulate real-time sensor values using `Math.random()` within predefined ranges.
- The frontend, built with React.js and styled using Tailwind CSS, polls the backend every 5 seconds using `useEffect` and `Axios` to update sensor values dynamically.
- Status logic was implemented as:
  - 🔴 **Critical**: `temperature > 80°C` **and** `vibration > 20 mm/s`
  - 🟠 **Warning**: Either one above threshold
  - 🟢 **Healthy**: All within limits
- The UI is built using modular components like `SensorCard`, `StatusBadge`, and `LineChartGraph`, ensuring clarity and reusability.

---

## 💡 What I'd Improve for Production

- Replace polling with **WebSocket** or **SSE** for real-time push updates.
- Add **authentication** and **role-based access control** for multi-user support.
- Use a **database** (like MongoDB) to persist historical sensor logs.
- Add **unit and integration tests** using Jest and Cypress.
- Enable **exporting data** (CSV, Excel) and **notification systems** for alerts.
- Deploy using **Docker** or cloud platforms like **Vercel** (frontend) and **Render/Heroku** (backend).

---

## 🛠 Tech Stack

- **Frontend**: React.js, Tailwind CSS, Axios
- **Backend**: Node.js, Express
- **Visualization**: Recharts for line charts
- **Other**: Modular file structure, responsive layout

---
 