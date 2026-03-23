# Suggested Clean Structure

## Recommended Folder Layout

```
project-root/
│
├── public/              # Static assets
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── src/                 # Main source code
│   ├── components/      # Reusable UI parts
│   ├── pages/           # Page-level files
│   ├── styles/          # CSS / styling files
│   ├── scripts/         # JavaScript logic
│   └── utils/           # Helper functions
│
├── index.html
├── README.md
└── package.json (if applicable)
```

## Rules Applied
- Separate UI, logic, and assets
- Reusable components go inside `components`
- Page-specific code stays in `pages`
- Avoid mixing CSS, JS, and HTML in one place

## Naming Convention
- Use clear and unique names
- Example: `userCardComponent.js` instead of `card.js`

## Next Steps
- Move existing files into proper folders
- Update file paths after restructuring
- Test after every major move
