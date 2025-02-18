## Components Hirarchy 

Baiscally, we have 3 types of Components.

### 1. Lower-Level Components

Lower-level components, baiscally the building blocks of the UI.
- Highly reusable.
- Focused on a single, specific functionality.
- Presentational and generally unaware of application logic.
- Shadcn library

#### Location
All lower-level components are located inside the `ui/` folder:

```
components/
└── ui/
    ├── button.tsx
    ├── input.tsx
    └── ...
```

#### Examples
- **Button**: A generic button component that handles styling and basic interaction.
- **Input**: A styled input field with minimal logic.
- **Checkbox**: A simple checkbox with optional labels.

### 2. Higher-Level Components

Higher-level components compose lower-level components to create more complex UI elements. These components:
- Encapsulate application-specific logic.
- Serve as containers for lower-level components.
- Are less reusable across different projects.

#### Location
Higher-level components are located as **siblings** of the `ui/` folder, typically in a `components/` directory:

```
project-root/
├── ui/
│   ├── button.tsx
│   ├── input.tsx
│   └── ...
└── components/
    ├── Form/
    │   ├── Form.js
    │   └── Form.css
    ├── Modal/
    │   ├── Modal.js
    │   └── Modal.css
    └── ...
```

#### Examples
- **Form**: A form component that combines multiple `Input` and `Button` components, managing validation and submission logic.
- **Modal**: A dialog box that uses lower-level components like `Button` and custom containers.

## Benefits of This Structure

1. **Reusability**: Lower-level components can be reused across different higher-level components.
2. **Separation of Concerns**: Application-specific logic is isolated from presentational components.
3. **Scalability**: New components can be added without affecting existing functionality.
4. **Clarity**: Developers can easily locate components based on their functionality and scope.

## Contributing

When adding new components, adhere to the following guidelines:
- Place lower-level, reusable components in the `UI/` folder.
- Place higher-level, application-specific components in the `components/` folder.

---

Feel free to update this document as the project evolves!
