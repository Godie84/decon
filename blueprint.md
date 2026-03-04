# Blueprint: Deconeng Website Redevelopment

## Vision & Philosophy

Our goal is to architect a modern, sophisticated, and user-centric website for Deconeng. The design will be rooted in the principles of architectural aesthetics: clean lines, structured layouts, generous white space, and a focus on high-quality materials (typography and imagery). The user experience will be intuitive, seamless, and professional.

## Project Outline

### Style & Design (Architectural & Innovative Aesthetic)

*   **Color Palette:** A sober and professional palette inspired by architectural materials. Deep charcoal for primary text, a spectrum of grays for surfaces, crisp white for backgrounds, and a vibrant, strategic blue as an accent.
*   **Typography:** 'Inter', a highly-regarded sans-serif font known for its clarity, neutrality, and modern aesthetic.
*   **Layout & Spacing:** Strong grid system, generous white space.
*   **Iconography & Imagery:** Focus on large-scale civil engineering projects and precise, line-based SVG icons.
*   **Visual Effects:** Subtle, polished micro-interactions and multi-layered drop shadows.

### Core Features

*   **Homepage:** A compelling landing page with a striking hero section, clear service overview, and featured projects.
*   **Services Page:** A detailed page explaining the core disciplines.
*   **Projects Gallery Page:** A comprehensive gallery showcasing all company projects.
*   **Contact Page:** A functional page with contact details, a map, and a form.
*   **About Us Page:** A page dedicated to the company's story, mission, and leadership.
*   **Project Pages:** Dynamic, data-driven case study pages for individual projects.
*   **Reusable Components:** A modular library of Astro components for consistency and scalability.

## Current Implementation Plan

**Goal:** Develop the "Contact Us" page.

*   [x] **Design Refinement:**
    *   [x] Updated `global.css` with new color palette and 'Inter' font.
    *   [x] Elevated Homepage (`index.astro`) with new hero image and SVG icons.
*   [x] **Build `services.astro` Page:**
    *   [x] Created and architected the detailed services page.
*   [x] **Build Project Gallery Page (`/projects`):**
    *   [x] Created `src/pages/projects/index.astro` to display all projects from the data source.
*   [ ] **Build `contact.astro` Page:**
    *   [ ] Create the new file `src/pages/contact.astro`.
    *   [ ] Architect a two-column layout: contact information/map on one side, and a contact form on the other.
    *   [ ] Style all form elements and information blocks to match the site's professional aesthetic.
