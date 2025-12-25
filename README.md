# Code Speeder

A modern, full-stack Next.js application with integrated services for rapid development and deployment.

## 🚀 Features

- **Next.js 16** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Docker** containerization
- **PostgreSQL** database
- **Redis** caching
- **MinIO** object storage
- **Poppins & Work Sans** fonts
- **Dotted background** design
- **Audio recording** capabilities
- **Environment configuration** with env-cmd

## 📋 Prerequisites

- Node.js (v18 or higher)
- Docker & Docker Compose
- pnpm package manager

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd code-speeder
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Copy the environment file:
   ```bash
   cp .env.example .env.local
   ```

4. Update the `.env.local` file with your configuration.

## 🚀 Running the Application

### Development Mode

#### Option 1: Using Docker (Recommended)
```bash
# Start all services with Docker Compose
docker compose up
```

#### Option 2: Using pnpm
```bash
# Start the development server
pnpm dev
```

The application will be available at [http://localhost:3001](http://localhost:3001)

### Production Mode

```bash
# Build the application
pnpm build

# Start the production server
pnpm start
```

## 🏗️ Project Structure

```
code-speeder/
├── compose.yaml          # Docker Compose configuration
├── Dockerfile           # Docker configuration
├── package.json         # Project dependencies and scripts
├── .env.local           # Environment variables
├── src/
│   ├── app/             # Next.js App Router pages
│   ├── components/      # Reusable UI components
│   ├── hooks/           # Custom React hooks
│   └── lib/             # Utility functions
├── public/              # Static assets
└── README.md
```

## 🛠️ Services Configuration

### PostgreSQL Database
- Host: `localhost:5432`
- User: `user`
- Password: `password`
- Database: `mydatabase`
- Connection URL: `postgresql://user:password@localhost:5432/mydatabase`

### Redis Cache
- Host: `localhost:6379`
- URL: `redis://localhost:6379`

### MinIO Object Storage
- Endpoint: `http://localhost:9000`
- Console: `http://localhost:9001`
- Access Key: `minioadmin`
- Secret Key: `minioadmin`
- Bucket: `codespeeder-bucket`

## 📁 Environment Variables

The application uses the following environment variables:

### Deployment Configuration
- `NEXT_DEPLOYMENT_ENV`: Deployment environment (development/production)
- `NEXT_DEPLOYMENT_URL`: Application URL

### Database Configuration
- `DB_HOST`: Database host
- `DB_PORT`: Database port
- `DB_USER`: Database username
- `DB_PASSWORD`: Database password
- `DB_NAME`: Database name
- `DATABASE_URL`: Complete database connection URL

### MinIO Configuration
- `MINIO_ENDPOINT`: MinIO server endpoint
- `MINIO_PORT`: MinIO server port
- `MINIO_ACCESS_KEY`: MinIO access key
- `MINIO_SECRET_KEY`: MinIO secret key
- `MINIO_BUCKET_NAME`: Default bucket name
- `MINIO_USE_SSL`: SSL configuration

### Redis Configuration
- `REDIS_HOST`: Redis server host
- `REDIS_PORT`: Redis server port
- `REDIS_PASSWORD`: Redis password
- `REDIS_URL`: Redis connection URL

### AI Model Configuration
- `NEXT_OPENAI_API_KEY`: OpenAI API key
- `NEXT_GOOGLE_GEMINI_API_KEY`: Google Gemini API key
- `NEXT_OPENROUTER_API_KEY`: OpenRouter API key
- And more AI service configurations

## 🧪 Available Scripts

- `pnpm dev` - Start development server with .env.local
- `pnpm build` - Build the application for production
- `pnpm start` - Start production server with .env.local
- `pnpm lint` - Run code linter
- `pnpm format` - Format code with Biome

## 🎨 Design Features

- **Dotted Background**: The main page features a dotted brownish background using Tailwind CSS radial gradients
- **Modern Fonts**: Uses Poppins for headings and Work Sans for body text
- **Responsive Design**: Fully responsive layout using Tailwind CSS
- **Dark Mode**: Built-in dark mode support

## 🐳 Docker Configuration

The project includes a comprehensive Docker Compose configuration that sets up:

- **Application Server**: Runs the Next.js application
- **PostgreSQL**: Database service with persistent storage
- **Redis**: Caching service with AOF persistence
- **MinIO**: S3-compatible object storage with web console

### Docker Commands

```bash
# Start all services
docker compose up

# Start services in detached mode
docker compose up -d

# Stop all services
docker compose down

# Stop services and remove volumes
docker compose down -v

# View logs
docker compose logs -f

# Rebuild containers
docker compose up --build
```

## 🔧 Development Workflow

1. **Environment Setup**: Configure your `.env.local` file with appropriate values
2. **Install Dependencies**: Run `pnpm install`
3. **Start Services**: Use `docker compose up` for all services
4. **Development**: Use `pnpm dev` for Next.js development server
5. **Code Quality**: Run `pnpm lint` and `pnpm format` to maintain code standards

## 🚀 Deployment

### Production Build
```bash
pnpm build
pnpm start
```

### Docker Deployment
```bash
docker compose -f compose.yaml up -d --build
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐙 Repository Links

- **Repository**: [Code Speeder Repository](https://github.com/your-username/code-speeder)
- **Issues**: [Issue Tracker](https://github.com/your-username/code-speeder/issues)
- **Pull Requests**: [Pull Requests](https://github.com/your-username/code-speeder/pulls)

## 🆘 Support

If you encounter any issues or have questions, please file an issue in the repository or contact the maintainers.
