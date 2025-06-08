# REMWASTE CASE

## Project Overview

The case study called for a **Select Skip** page, which enables customers to choose a skip size, view the hire period and cost, and proceed to the next booking step. 

This interface is built with React, Tailwind CSS, and DaisyUI, featuring a flat design aesthetic, responsive grid layout, skeleton loading animations, and persistent state via `localStorage`. The Context API manages the progress bar steps, and custom-sized assets ensure optimal performance and visual consistency. You can explore the live demo [here](https://remwaste-case-cankat.netlify.app/). 


## Usage

Ensure that you're in the root directory where `package.json` is located. After installing the necessary libraries using `npm install`, you can start the development server with `npm run dev`.

## Design & Implementation Details

### UI/UX

- **Flat design approach**: Opted for a minimalist, functional interface without unnecessary embellishments.

- **Primary color selection**: Chose a yellow tone to complement the container images and create visual harmony.

- **Tailwind & DaisyUI integration**: Configured Tailwind utility classes and DaisyUI to align with the concept’s bespoke color palette.

- **Typography**: Used the Rubik font to evoke an industrial, modern feel.

- **State persistence**: Implemented `localStorage` for the selected skip so that it remains chosen after a page refresh.

- **Auto-scroll on load**: For improved UX, the view automatically scrolls to the currently selected skip when the component mounts.

- **Scroll on selection**: Ensured each new selection triggers a scroll to focus the card into view for clear visibility.

- **Responsive grid layout**: Built a fluid, responsive grid that adapts column counts and spacing based on viewport width.

- **Modern spacing & hierarchy**: Followed contemporary standards for padding, margins, and visual hierarchy to guide the user’s attention.

- **Skeleton loading animation**: Used a skeleton animation for loading states to preserve the layout.

### Initial Data

The initial data provided in the case was parsed and used. Since the related JSON didn’t include any images, they were added separately to the assets folder and parsed via a dedicated object. Additionally, because the original image files were very large, they were resized to appropriate dimensions and underwent some refinements.

### State Management

The Context API was used to manage the state of the steps in the progress bar.


## Improvements I Could Have Made If I Had More Time:

- To work more thoroughly on the **skeleton** and make its colors and animations fully consistent with the theme.
- Working on overall better **UI/UX**.
- Better image optimization and fast loading with caching mechanisms.
- Using the new React 19 features.
- **Selenium tests**
- **Unit tests**
- Splitting some JavaScript files with dense code blocks into **smaller components**.
