
# Stay-Up Chrome Extension

Stay-Up is a Chrome extension that replaces the new tab page with a custom widget board. Users can add, remove, and edit the layout of widgets according to their preferences.

## Getting Started

### Prerequisites

- Node.js (version 12 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/jainhardik120/stay-up.git
   ```

2. Navigate to the project directory:
   ```
   cd stay-up
   ```

3. Install dependencies:
   ```
   npm install
   ```

## Development

To run the project in development mode:

```
npm start
```

This will start the React app on `localhost:3000`.

## Building the Extension

To build the project for production:

```
npm run build
```

This will create a `build/` folder with the compiled extension files.

## Adding New Widgets

To add a new widget:

1. Create a new directory in `src/widgets/`.
2. Create an `index.tsx` file in the new directory.
3. Export your widget as a default React component.
4. Add the exported component to the `widgetTypes` object in `src/widgets/index.ts`:

```typescript
import YourNewWidget from "./your-new-widget";

export const widgetTypes = {
  // ... existing widgets
  yourNewWidget: YourNewWidget
};
```

## Backend API Configuration

To change the backend API endpoint, modify the `API_URL` in `src/lib/constants.ts`:

```typescript
export const API_URL = 'http://localhost:8002';
// or
// export const API_URL = 'https://stay-up-backend.vercel.app';
```

## Widget Storage

Each widget has its own storage, accessible using the `useWidgetStorage()` hook:

```typescript
import { useWidgetStorage } from '../path/to/useWidgetStorage';

function YourWidget() {
  const { getItem, setItem } = useWidgetStorage();
  
  // Use getItem and setItem to access and modify widget-specific storage
}
```