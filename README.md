# Memory Card

A fun memory card game built with React and inspired by Gravity Falls.

## Demo

<div align="center">
    <img src="https://github.com/ahmadnourallah/portfolio/blob/main/src/assets/memorycard.webp?raw=true" height="800">
</div>

Check out the live version deployed on GitHub Pages
[here](https://ahmadnourallah.github.io/memory-card).

## Description

Memory Card is a Gravity-Falls-themed memory card game that aims to bring the
experience of playing memory card games to the browser.

The game offers an eye-catching, modern game interface that makes the game more
fun and entertaining. It relies on React Motion to create captivating flipping
and tilting animations.

To manage its remote data and state, the game uses TanStack Query to ensure
reliable fetching and caching. The game depends on
[Disney API](https://disneyapi.dev/docs/) to retrieve characters' images.

## Features

- :white_check_mark: A full-fledged memory card game, inspired by Gravity Falls.
- :white_check_mark: Built with React, Vite, Tailwindd CSS.
- :white_check_mark: Caching and server state management with Tanstack Query.
- :white_check_mark: Captivating animations using Framer Motion.
- :white_check_mark: Uses [Disney API](https://disneyapi.dev/docs/) for
  characters' images.

## Getting Started

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ahmadnourallah/memory-card
```

2. Install dependencies:

```bash
npm install
```

### Deployment

You can fire up the development server using:

```bash
npm run dev
```

Building the application can be done by running:

```bash
npm run build
```

You can preview the production build through:

```bash
npm run preview
```

Since it works on the client entirely, you can host Memory Card using a static
hosting service, such as GitHub Pages or Vercel. Check out
[this workflow](https://github.com/ahmadnourallah/memory-card/blob/main/.github/workflows/deploy.yml)
to get an idea about how to deploy the project to GitHub Pages through Actions.

## Technologies

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=js,react,tailwind,vite" />
  </a>
</p>

The system is built with the latest technologies:

- JavaScript
- React
- Vite
- TanStack Query
- Motion
- Tailwind CSS

## License

This project is licensed under the GNU GPLv3 License - see the LICENSE.md file
for details.
