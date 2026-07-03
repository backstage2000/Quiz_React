
# Quiz FRONT END

- [DEMO LINK](https://backstage2000.github.io/Quiz_React/)

## Tech Stack

- **React** — UI library
- **TypeScript** — static typing
- **Zustand** —  state management
- **Axios** — HTTP client
- **Tailwind CSS** — utility-first styling
- **Motion** — animations
- **Flowbite** — UI components
- **Sonner** — Toaster

##  📁Project Structure

```
src/
├── main.tsx           # Entry point
├── store/             # Zustand Store 
├── config/            # App configuration (Router, axios)
├── style/             # Base styles and global CSS
├── pages/             # Route-level page components
├── layouts/           # Reusable layout sections (Header, Footer)
├── components/        # Shared UI components
       └── ui/      
├── utils/             # Shared Func
└── features/
    └── quiz/
        ├── hooks/        # hooks quiz
        ├── services/     # Axios API calls

```


## Getting Started

### 1. Clone the repository

```bash
git clone 
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root:

```env
VITE_API_URL=https://opentdb.com
import.meta.env.BASE_URL=/Quiz_React
```

### 4. Run the project
