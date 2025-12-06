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
