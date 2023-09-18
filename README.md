# Bug

This is a bug that occurs when using the Bun runtime and the Vite dev server, which is configured to run on port 3000. Requests to `/api` are reverse proxied to port 5500 where a dummy server is serving a message consisting of 1MB of random bytes. The fetch request occasionally when running with `bunx --bun vite` but does not with `bunx vite`.

## Reproduce

### Step 1: Start Dummy Server in Terminal 1

for i in {1..5}; do echo "Welcome $i times"
done

```shell
bun src/server.js
```

### Step 2: Run Vite Dev Server With Bun in Terminal 2

```shell
bunx --bun vite
```

```shell
curl localhost:9000
```
