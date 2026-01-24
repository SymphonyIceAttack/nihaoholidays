# NihaoHolidays

<div align="center">
  <img src="public/base-logo.png" alt="NihaoHolidays Logo" width="120" height="120" />

  **Your gateway to Chinese festivals and culture. Learn, celebrate, and connect.**

  [Website](https://nihaoholidays.org) • [GitHub](https://github.com/SymphonyIceAttack/nihaoholidays)

</div>

---

## About

NihaoHolidays is an open-source web application dedicated to helping people around the world learn about and celebrate Chinese festivals and culture. From Chinese New Year to Mid-Autumn Festival, we provide educational resources, cultural insights, and interactive tools to bridge cultural understanding.

## Features

- **Festival Guides** - Comprehensive information about major Chinese festivals including dates, traditions, and cultural significance
- **Cultural Learning** - Explore Chinese food, customs, and traditions through interactive content
- **AI Assistant** - Get answers to your questions about Chinese culture and festivals
- **Interactive Tools** - Create greeting cards, design red envelopes, and more
- **Multi-language Support** - Content available in English and Chinese

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui pattern with Radix UI primitives
- **Linting/Formatting**: Biome 2.2.4
- **Package Manager**: pnpm
- **Validation**: Zod
- **Forms**: @tanstack/react-form
- **Date Handling**: date-fns, react-day-picker
- **Deployment**: Cloudflare Pages

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/SymphonyIceAttack/nihaoholidays.git
cd nihaoholidays

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Available Scripts

```bash
# Development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint

# Format code
pnpm format
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── [lang]/            # Internationalized routes
│   ├── globals.css        # Tailwind v4 CSS
│   └── layout.tsx         # Root layout
├── components/
│   ├── ui/                # Reusable UI components
│   ├── layout/            # Layout components (Header, Footer)
│   └── home/              # Home page components
├── lib/
│   ├── config.ts          # Site configuration
│   ├── utils.ts           # Utility functions
│   └── translations/      # i18n translations
├── public/                # Static assets
└── biome.json             # Biome configuration
```

## Deployment

The project is configured for deployment on Cloudflare Pages:

```bash
# Build and deploy
pnpm build
npx wrangler pages deploy .vercel/output/static --project-name=nihaoholidays
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- **Website**: [https://nihaoholidays.org](https://nihaoholidays.org)
- **GitHub**: [https://github.com/SymphonyIceAttack/nihaoholidays](https://github.com/SymphonyIceAttack/nihaoholidays)
- **Email**: hello@nihaoholidays.org

---

<div align="center">
  Made with ❤️ for Chinese culture and language learners worldwide
</div>
