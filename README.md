# Bug

This is a bug that occurs when using Bun and Vite, with a reverse proxy for the Vite dev server.

## Reproduce

**Terminal 1**
```shell
bunx --bun vite
```

**Terminal 2**
```shell
node src/server.js
```

## Expected Behavior

It should function like it does when running with Node.

**Terminal 1**
```shell
bunx vite
```

**Terminal 2**
```shell
node src/server.js
```