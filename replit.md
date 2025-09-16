# Overview

The Legacy Phase 1 is an ultra-luxury real estate landing page for a premium residential development by Silverglades in Sector 63A, Gurgaon. This project serves as a high-conversion marketing website designed to capture leads for exclusive 3 & 4 BHK residences. The application follows sophisticated design principles inspired by Christie's International Real Estate and other luxury brands, emphasizing understated elegance and premium positioning.

The landing page features comprehensive sections including hero presentation, key highlights, amenities showcase, residence floor plans, video walkthrough, and contact forms. It's built as a single-page application with smooth scrolling navigation and responsive design optimized for luxury real estate marketing.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework**: React 18 with TypeScript and Vite for build tooling. The application uses a modern component-based architecture with functional components and hooks.

**Routing**: Wouter library provides lightweight client-side routing for the single-page application with additional legal pages (privacy, terms, disclaimer).

**Styling**: Tailwind CSS with custom design system based on shadcn/ui components. The color palette emphasizes luxury with Obsidian, Pearl, and Champagne Gold colors. Typography uses Playfair Display for headings and Inter for body text.

**State Management**: React Query (TanStack Query) for server state management and React's built-in state for local component state. Form handling uses React Hook Form with Zod validation.

**Component Library**: Custom UI components built on Radix UI primitives, providing accessible and customizable components like buttons, cards, forms, and navigation elements.

## Backend Architecture

**Server**: Express.js server with TypeScript providing REST API endpoints. The server includes middleware for request logging, JSON parsing, and error handling.

**Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage) that can be replaced with database persistence. Currently supports basic user operations (create, get by ID, get by username).

**Database Schema**: Drizzle ORM with PostgreSQL support configured for user management. The schema defines a users table with UUID primary keys, username, and password fields.

## Design System & UI

**Design Philosophy**: Ultra-premium positioning with sophisticated restraint, generous whitespace (40% more than standard luxury sites), and museum-quality spacing between sections.

**Layout System**: 12-column grid with extensive use of 16, 24, 32, 48px spacing units. Fixed transparent navigation with gold accents and smooth scrolling between sections.

**Component Specifications**: Cards with subtle shadows, buttons with gold gradients, forms with elegant input fields, and embedded YouTube video player with custom styling.

## External Dependencies

**Email Service**: SendGrid integration for contact form submissions and lead generation.

**Database**: Neon (serverless PostgreSQL) for production data persistence with Drizzle ORM for type-safe database operations.

**CDN & Assets**: Google Fonts for Playfair Display and Inter typography. Generated images stored in attached_assets directory for property visuals, floor plans, and amenity showcases.

**Development Tools**: Replit-specific plugins for development environment integration, runtime error handling, and cartographer for code exploration.

**UI Framework**: Radix UI primitives for accessible component foundations, Class Variance Authority for component variant management, and CMDK for command interfaces.