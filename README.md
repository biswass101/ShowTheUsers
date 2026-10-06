# User Directory

A polished React + TypeScript user directory built with Vite, Tailwind CSS, Axios, and reusable components.

## Features

- Fetches users from the Random User API
- Axios service layer with request cancellation
- Reusable `useUsers` hook
- Search users by name
- Paginated results
- Loading skeletons
- Error state with retry
- Empty search state
- Responsive card layout
- TypeScript type safety

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Axios
- Lucide React
- Oxlint

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown by Vite in your browser.

## Scripts

```bash
npm run dev      # Start the development server
npm run build    # Type-check and create a production build
npm run lint     # Run Oxlint
npm run preview  # Preview the production build
```

## Project Structure

```text
src/
  components/        Reusable UI components
  constants/         Pagination settings
  hooks/             Reusable React hooks
  services/          Axios API services
  types/             Shared TypeScript types
  App.tsx            Page composition and local UI state
  App.css            Design tokens and global styles
```

## API

The app uses [Random User API](https://randomuser.me/) with a fixed seed so pagination stays consistent between requests.
