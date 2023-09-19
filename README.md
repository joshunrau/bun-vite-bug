# Bug

This is a bug that occurs when using Vite with Bun. The Vite dev server running on port 3000 is configured to reverse proxy requests to `/api` to port 5500. The dummy server running on port 5500 sends a JSON response with some randomly generated bytes (100KB). 

When run with NodeJS (`bunx vite`) everything works as expected. However, when running with Bun (`bunx --bun vite`) the HTTP request occasionally hangs. It appears this is an issue with the `http-proxy` library which Vite depends on. On the `http-proxy` branch I have added an example documenting this. However, it appears `http-proxy` is not maintained (no updates for 3 years).

## Reproduce

### Step 1: Start Dummy Server in Terminal 1

```shell
bun src/server.js
```

### Step 2: Run Vite Dev Server With Bun in Terminal 2

Once running, go to `localhost:3000` in any modern browser. You can see that the get request occasionally hangs indefinitely.

```shell
bunx --bun vite
```
