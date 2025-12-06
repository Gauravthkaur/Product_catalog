# Product Catalog

This is a small full-stack product catalog app for assignment.

The goal of the project is to:

- Show a product listing in a simple grid layout
- Support fuzzy search (not only exact matches)
- Use a debounced search input so we don’t keep hitting the server
- Keep the code and file structure clean and easy to follow

I kept the implementation intentionally simple so it’s easy to read and explain.


## Tech Stack

**Frontend**

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS

**Backend**

- Node.js
- Express
- Simple in-memory product list (no database)


## Project structure

```txt
root
├── app/                # Next.js pages (App Router)
│   └── page.tsx        # Main product catalog page
├── components/         # Reusable UI components
│   ├── ProductCard.tsx
│   ├── ProductGrid.tsx
│   └── SearchBar.tsx
├── hooks/
│   └── useDebounce.ts  # Debounced value hook for search
├── utils/
│   └── fuzzy.ts        # Simple custom fuzzy match helper
├── backend/
│   ├── server.js       # Express server
│   ├── data/
│   │   └── products.js # Static product list
│   └── public/
│       └── images/...  # Product images (served as static files)
└── README.md
```
How to Run the Project Locally

You need to run the backend and frontend separately.

1. Run the Backend (Express API)

From the project root:

cd backend
npm install
node server.js


The backend will start on:

http://localhost:5000

Backend Routes:

GET /api/products → returns all products

If you open /api/products in the browser, you should see the product JSON.

2. Run the Frontend (Next.js App)

From the project root:

npm install


Create a .env.local file in the project root (same level as package.json):

NEXT_PUBLIC_BACKEND_URL=http://localhost:5000/api/products


Now start the Next.js development server:

npm run dev


The frontend will run on:

http://localhost:3000


You should be able to:

See a grid of products

Type in the search bar

Fuzzy search will apply with a debounce

The UI updates smoothly without hitting the backend repeatedly
