# Docker Deployment Guide

## Quick Start

### Build and Run with Docker

**Option 1: Using Docker directly**

```bash
# Build the Docker image
docker build -t ihsan-portfolio .

# Run the container
docker run -p 3000:3000 ihsan-portfolio

# Container will be accessible at: http://localhost:3000
```

**Option 2: Using Docker Compose (Recommended)**

```bash
# Build and start the container
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the container
docker-compose down
```

---

## What's Inside

### Dockerfile Details

The Dockerfile uses a **multi-stage build** approach:

**Stage 1: Builder**
- Uses `node:18-alpine` (lightweight ~170MB)
- Installs dependencies from package.json
- Builds the project with `npm run build`
- Creates optimized production build in `/app/dist`

**Stage 2: Serve**
- Uses same `node:18-alpine` base
- Installs `serve` to serve static files
- Copies only the built files (not source code)
- Final image size: ~300MB (minimal)

### docker-compose.yml

Provides:
- Container orchestration
- Port mapping (3000:3000)
- Health checks
- Auto-restart policy
- Environment variables

### .dockerignore

Excludes unnecessary files:
- `node_modules` - Don't copy, install fresh in container
- `.git` - No version control needed in image
- `.env` - Secrets not included in image
- Build artifacts that will be regenerated

---

## Commands

```bash
# Build image
docker build -t ihsan-portfolio .

# Run container
docker run -p 3000:3000 ihsan-portfolio

# Run with Docker Compose
docker-compose up -d

# View running containers
docker ps

# View container logs
docker logs <container_id>
docker-compose logs -f

# Stop container
docker stop <container_id>
docker-compose down

# Remove image
docker rmi ihsan-portfolio

# Run container with custom port
docker run -p 8080:3000 ihsan-portfolio
```

---

## Environment Variables

Currently set in docker-compose.yml:
- `NODE_ENV=production`

To add more variables:
1. Edit `docker-compose.yml` under `environment:`
2. Or pass at runtime: `docker run -e VAR_NAME=value ihsan-portfolio`

---

## Production Deployment

### Using Docker Hub

```bash
# Tag image for Docker Hub
docker tag ihsan-portfolio your-username/ihsan-portfolio

# Push to Docker Hub
docker push your-username/ihsan-portfolio

# Pull and run from Docker Hub
docker run -p 3000:3000 your-username/ihsan-portfolio
```

### Using Container Registries

- **AWS ECR**: Use `docker push` to AWS container registry
- **Azure ACR**: Use Azure CLI to push image
- **Google GCR**: Use `gcloud` to push image
- **GitHub Container Registry**: Use `ghcr.io` registry

### Deployment Platforms

- **Vercel**: `vercel deploy` (recommended for Vite apps)
- **Netlify**: Connect GitHub repo
- **Railway**: Connect Docker container
- **Render**: Deploy from Docker image
- **DigitalOcean**: App Platform or Docker on Droplet
- **Heroku**: Use Docker stack
- **AWS ECS**: Container service
- **Kubernetes**: Use container orchestration

---

## Troubleshooting

**Container won't start:**
```bash
docker logs <container_id>
```

**Port already in use:**
```bash
# Use different port
docker run -p 8080:3000 ihsan-portfolio
```

**Build fails:**
```bash
# Rebuild without cache
docker build --no-cache -t ihsan-portfolio .
```

**Want to access container terminal:**
```bash
docker exec -it <container_id> sh
```

---

## Health Checks

The container includes health checks that verify:
- Application is running
- Server responds on port 3000
- HTTP status is 200

View health status:
```bash
docker inspect <container_id> | grep -A 20 "Health"
```

---

## Performance Tips

1. **Use Alpine images** (already done) - Smaller size, faster startup
2. **Multi-stage builds** (already done) - Exclude build tools from final image
3. **Layer caching** - Dependencies cached, source rebuilds faster
4. **Rebuild frequency** - Only rebuild when package.json changes

---

## Security Best Practices

✅ Uses Node.js Alpine (minimal attack surface)
✅ No secrets in Dockerfile
✅ Non-root user (inherit from Alpine)
✅ Health checks enabled
✅ Environment variables for config
✅ .dockerignore prevents sensitive files

---

Built with professional Docker standards ✓
