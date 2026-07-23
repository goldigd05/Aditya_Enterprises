# Aditya Enterprises — MEAN Stack Company Website

Production-ready company website for **Aditya Enterprises** (hardware business).
Built with **Angular 19 (standalone components)** on the frontend and
**Node.js + Express + MongoDB Atlas (MVC)** on the backend.

```
aditya-enterprises/
├── frontend/          Angular 19 app (deploy to Vercel)
└── backend/           Node/Express API (deploy to Render)
```

---

## 1. Prerequisites

Install these first:

- Node.js 18+ and npm → https://nodejs.org
- Angular CLI (global): 
  ```bash
  npm install -g @angular/cli@19
  ```
- A free MongoDB Atlas account → https://www.mongodb.com/cloud/atlas

---

## 2. Frontend Setup (Angular)

```bash
cd frontend
npm install
npm start
```

App runs at **http://localhost:4200**

Other useful commands:
```bash
npm run build          # production build -> dist/aditya-enterprises-frontend
```

### Replace placeholder images
Put your real images inside `frontend/src/assets/images/` using the exact
filenames listed in `frontend/src/assets/images/README.md` (logo, hero image,
product photos, etc). Also update the WhatsApp number in:
`frontend/src/app/core/services/whatsapp.service.ts`

---

## 3. Backend Setup (Node/Express/MongoDB)

```bash
cd backend
npm install
cp .env.example .env
```

Open `.env` and fill in:
- `MONGO_URI` → your MongoDB Atlas connection string
- `SMTP_USER` / `SMTP_PASS` → Gmail (or other SMTP) credentials for Nodemailer
  (use a Gmail **App Password**, not your normal password)
- `JWT_SECRET` → any long random string (for future admin login)
- `CLIENT_URL` → `http://localhost:4200` for local dev

Then run:
```bash
npm run dev        # starts with nodemon (auto-restart) on http://localhost:5000
# or
npm start          # plain node start
```

### (Optional) Seed the database with the dummy products/reviews
```bash
node utils/seedData.js
```

### API Health Check
```
GET http://localhost:5000/api/health
```

### Available REST Endpoints
| Method | Endpoint                | Description                          |
|--------|--------------------------|---------------------------------------|
| GET    | /api/products             | List all products (filter: ?category=&search=) |
| GET    | /api/products/:id         | Get single product |
| POST   | /api/products              | Create product (admin, JWT protected) |
| PUT    | /api/products/:id          | Update product (admin) |
| DELETE | /api/products/:id          | Delete product (admin) |
| GET    | /api/reviews                | List approved reviews |
| POST   | /api/reviews                | Submit a review |
| GET    | /api/reviews/all            | All reviews incl. unapproved (admin) |
| POST   | /api/contact                 | Submit contact form (sends email via Nodemailer) |
| GET    | /api/contact                  | List contact queries (admin) |
| POST   | /api/auth/login                | Admin login (returns JWT) |

---

## 4. Connecting Frontend to Backend (when ready)

Right now the Angular app reads dummy data from
`frontend/src/assets/data/*.json` so it works standalone with zero backend.

To switch to the live API:
1. Open `frontend/src/app/core/services/product.service.ts`,
   `review.service.ts`, `contact.service.ts`.
2. Uncomment the API calls (marked `TODO (backend ready)`), pointing to
   `environment.apiUrl` (already configured in `src/environments/`).

---

## 5. Deployment

### Frontend → Vercel
```bash
cd frontend
npm run build
```
- Push the `frontend` folder to a GitHub repo (or connect the monorepo and set
  **Root Directory = frontend** in Vercel project settings).
- Build Command: `npm run build`
- Output Directory: `dist/aditya-enterprises-frontend/browser`
- `vercel.json` is already included for SPA routing rewrites.

### Backend → Render
- Push the `backend` folder to GitHub (or set **Root Directory = backend**).
- Render auto-detects `render.yaml` — or manually set:
  - Build Command: `npm install`
  - Start Command: `npm start`
- Add all environment variables from `.env.example` in Render's dashboard
  (Environment tab) — never commit your real `.env` file.

### Database → MongoDB Atlas
- Create a free cluster at https://www.mongodb.com/cloud/atlas
- Create a database user + allow network access (0.0.0.0/0 for Render, or
  Render's static IPs for tighter security)
- Copy the connection string into `MONGO_URI`

---

## 6. Project Structure (Frontend)

```
frontend/src/app/
├── core/
│   ├── models/        Product, Review, Contact, Stat interfaces
│   ├── services/       ProductService, ReviewService, ContactService, WhatsappService
│   ├── guards/          (ready for future admin route guards)
│   └── interceptors/     (ready for future JWT interceptor)
├── shared/components/
│   ├── navbar/  footer/  hero/  stats/
│   ├── product-card/  product-modal/  review-card/  contact-form/
├── pages/
│   ├── home/  about/  products/  reviews/  contact/   (all lazy-loaded)
```

## 7. Project Structure (Backend - MVC)

```
backend/
├── config/        db.js (MongoDB), mailer.js (Nodemailer)
├── models/         Product.js, Review.js, Contact.js, Admin.js
├── controllers/     productController.js, reviewController.js, contactController.js
├── routes/           productRoutes.js, reviewRoutes.js, contactRoutes.js, authRoutes.js
├── middleware/         auth.js (JWT), errorHandler.js, validate.js
├── utils/                seedData.js
└── server.js               Express app entry point
```

---

## Notes
- WhatsApp "Buy Now" opens `https://wa.me/91XXXXXXXXXX` with a pre-filled
  message — **replace `91XXXXXXXXXX`** with your real business number in
  `whatsapp.service.ts` and in the footer/contact templates.
- Admin panel UI is not built yet, but the backend (JWT auth, Admin model,
  protected CRUD routes) is fully ready for one to be added later.
