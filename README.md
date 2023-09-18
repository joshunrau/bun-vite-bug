# Bug

This is a bug that occurs when using Bun and Vite, with a reverse proxy for the Vite dev server. 

## Reproduce

### Step 1: Start Dummy Server in Terminal 1

```shell
bun src/server.js
```

### Step 2: Run Vite Dev Server With Bun in Terminal 2

```shell
bunx --bun vite
```

