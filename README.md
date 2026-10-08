# 🏔️ Uttarakhand Geo-Portal

A unified, map-based Web GIS portal for the state of **Uttarakhand, India**. It acts as the central gateway to the district-level geoportals of all **13 districts**, giving citizens, administrators and planners a single place to explore geospatial data, administrative boundaries and district information.

Built with React, TypeScript, Vite and Leaflet, with a Node/Express backend and MongoDB.

> **Part of the RawatGitLab Web GIS suite** — 1 central state portal + 13 district portals.

---

## 📖 About

Uttarakhand's district administrations each maintain their own geospatial viewer. This repository hosts the **state-level Geo-Portal** that brings them together:

- A single landing experience for the whole state
- Quick navigation to each district portal
- Shared look, feel and technology stack across all portals, so they are easy to maintain and extend

---

## ✨ Features

- 🗺️ **Interactive mapping** with [Leaflet](https://leafletjs.com/) and [proj4](https://github.com/proj4js/proj4js) for coordinate and projection handling
- 🧭 **State-wide overview** with access to all 13 district portals
- ⚛️ **Modern frontend** built with React, TypeScript and Vite
- 🤖 **AI-assisted features** via the [`@google/genai`](https://www.npmjs.com/package/@google/genai) (Gemini) SDK
- 🎨 **Tailwind CSS** styling with [Motion](https://motion.dev/) animations and [Lucide](https://lucide.dev/) icons
- 🖥️ **Node/Express backend** (`server.ts`) serving the app and API routes
- 🗄️ **MongoDB** for persisting application data

---

## 🛠️ Tech Stack

| Layer          | Technology                               |
| -------------- | ---------------------------------------- |
| Frontend       | React, TypeScript, Vite, Tailwind CSS    |
| Mapping        | Leaflet, proj4                           |
| Backend        | Node.js, Express, tsx                    |
| Database       | MongoDB (Atlas)                          |
| AI             | Google Gemini (`@google/genai`)          |
| Animation / UI | Motion, Lucide React                     |
| Tooling        | esbuild, TypeScript compiler             |

---

## 🌐 The Portal Suite

| District           | Live Portal |
| ------------------ | ----------- |
| Almora             | _add link_  |
| Bageshwar          | _add link_  |
| Chamoli            | [district-chamoli.onrender.com](https://district-chamoli.onrender.com/) |
| Champawat          | _add link_  |
| Dehradun           | _add link_  |
| Haridwar           | _add link_  |
| Nainital           | _add link_  |
| Pauri Garhwal      | _add link_  |
| Pithoragarh        | _add link_  |
| Rudraprayag        | _add link_  |
| Tehri Garhwal      | _add link_  |
| Udham Singh Nagar  | _add link_  |
| Uttarkashi         | _add link_  |

---

## 📂 Project Structure

```
Uttarakhand-Geoportal/
├── public/               # Static assets
├── src/                  # Application source (components, map logic, etc.)
├── index.html            # App entry HTML
├── server.ts             # Express server entry point
├── metadata.json         # App metadata
├── vite.config.ts        # Vite build configuration
├── tsconfig.json         # TypeScript configuration
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm
- A MongoDB connection string (e.g. a free [MongoDB Atlas](https://www.mongodb.com/atlas) cluster)

### Installation

```bash
# Clone the repository
git clone https://github.com/RawatGitLab/Uttarakhand-Geoportal.git

# Move into the project directory
cd Uttarakhand-Geoportal

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the project root. **Never commit it** — it is already covered by `.gitignore`.

| Variable         | Description                                         |
| ---------------- | --------------------------------------------------- |
| `APP_URL`        | URL where the app is hosted                         |
| `MONGODB_URI`    | MongoDB connection string                           |
| `GEMINI_API_KEY` | API key for Gemini-powered features                 |
| `JWT_SECRET`     | Long random secret for signing auth tokens          |

> Adjust names to match what `server.ts` actually reads.

### Available Scripts

| Command           | Description                                                     |
| ----------------- | --------------------------------------------------------------- |
| `npm run dev`     | Start the development server (`tsx server.ts`)                  |
| `npm run build`   | Build the frontend with Vite and bundle the server with esbuild |
| `npm start`       | Run the production build                                        |
| `npm run preview` | Preview the production Vite build                               |
| `npm run lint`    | Type-check the project (`tsc --noEmit`)                         |
| `npm run clean`   | Remove build artifacts                                          |

### Run Locally

```bash
npm run dev
```

Open the URL printed in your terminal.

### Build for Production

```bash
npm run build
npm start
```

---

## 🔒 Security Notes

- Keep all secrets (database URI, API keys, JWT secret) in environment variables, never in source code
- Never commit `.env` files or credentials; rotate any secret that was ever committed
- Protect any write or admin API routes with proper authentication and authorization

---

## 🤝 Contributing

Contributions are welcome!

1. 🍴 Fork the repository
2. 🌿 Create a feature branch: `git checkout -b feature/AmazingFeature`
3. 💾 Commit your changes: `git commit -m "Add some AmazingFeature"`
4. 📤 Push to the branch: `git push origin feature/AmazingFeature`
5. 🎉 Open a Pull Request

---

## 📜 License

Released under the MIT License. See the `LICENSE` file for details.

---

## 📞 Contact

For queries or issues, please open an issue on the [Issues](https://github.com/RawatGitLab/Uttarakhand-Geoportal/issues) page.

---

Built for Uttarakhand 🏔️ by [RawatGitLab](https://github.com/RawatGitLab)
