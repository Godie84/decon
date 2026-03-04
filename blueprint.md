# Blueprint: DECON LLC Website Overhaul

## 1. Project Overview

This document outlines the plan for the comprehensive repair and redesign of the DECON LLC corporate website. The goal is to create a modern, professional, and highly functional website that reflects the company's expertise in engineering and architecture. The project involves fixing broken pages and implementing a complete UX/UI overhaul.

## 2. Completed Phases

### **Phase 1: Structural Repair (Complete)**
*   **Status:** Successfully executed.
*   **Summary:** Repaired broken data contracts for dynamic pages (`/services`, `/projects`) and verified all core navigation.

### **Phase 2: Core Architectural & UX/UI Redesign (Complete)**
*   **Status:** Successfully executed.
*   **Summary:** Established and implemented a new professional design language (light-theme palette, typography) across global styles and core components like the Header and Footer.

### **Phase 3: Component & Content Enhancement (Complete)**
*   **Status:** Successfully executed.
*   **Summary:** Created and enhanced key reusable components. This included elevating the homepage's visual appeal, implementing dynamic counters, and building modular CTA and Stats blocks. Moved components to their most logical architectural positions.

## 3. Renovation Plan: Current Request

### **Phase 4: Homepage Reconstruction from User-Provided Content**

*   **Status:** In Progress.
*   **Objective:** To completely overhaul the homepage (`index.astro`) to match the new, detailed information architecture provided by the user. This transforms the page from a general overview into a structured and data-rich narrative.

*   **New Homepage Architecture (In Order of Appearance):**

    1.  **Promotional Banner (Placeholder):** A section at the very top reserved for a banner to be provided by the user.

    2.  **Engineering Excellence Section:**
        *   **Action:** Repurpose the existing `CallToAction.astro` component.
        *   **Placement:** Move it from the bottom of the page to become the primary opening section after the banner.
        *   **Content:** Match the user-provided text: "Engineering Excellence Since 2010", metrics, and buttons.

    3.  **About DECON LLC Section (New):**
        *   **Action:** Build a new section with a two-column layout.
        *   **Left Column:** Main description of DECON LLC.
        *   **Right Column:** A three-item list highlighting key credentials (Licensed, DBE/MBE Certified, Trusted Partner).

    4.  **Core Services Section (Rework):**
        *   **Action:** Rebuild the services display.
        *   **Content:** Showcase the three core services (Bridge Design, Roadway & Drainage, Building Design) with their specific capabilities listed below each.
        *   **Design:** Create a clear, three-part layout that is easy to scan.

    5.  **Featured Projects Section (Rework):**
        *   **Action:** Completely redesign the project cards to be more informative.
        *   **Content:** Display the four specific projects provided by the user (`I-35 NEX`, `SH 99`, `Kaua Building`, `I-285`).
        *   **Card Details:** Each card must include project name, category, location, a detailed description, and key stats (e.g., cost, completion date, size).

    6.  **Trusted by Leading Organizations Section (New):**
        *   **Action:** Build a new "social proof" section.
        *   **Content:** Display a grid of logos (placeholders for now) for the listed organizations (TxDOT, Ferrovial, Webber, etc.).

    7.  **Final CTA Section (New):**
        *   **Action:** Build a new, simple call-to-action section.
        *   **Content:** "Ready to Start Your Project?" with a single "Contact Us Today" button.