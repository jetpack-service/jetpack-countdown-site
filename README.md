# JetPack Launch Countdown

A countdown website for the launch of the JetPack Token, built with Next.js and Tailwind CSS. The countdown runs until January 1, 2025 (UTC), and displays days, hours, minutes, and seconds remaining. The website also includes a button linking to the JetPack documentation.

## Project Overview

This project is a simple countdown website for the launch of JetPack, a new cryptocurrency token. The countdown is synced with server time to ensure accuracy, and the layout is optimized for readability and accessibility. 

### Features

- **Countdown Timer**: Shows the days, hours, minutes, and seconds until the launch date.
- **Responsive Design**: Built with Tailwind CSS to ensure a consistent look across different screen sizes.
- **External Link**: Provides a link to the [JetPack documentation](https://docs.jetpack.ws) for additional information about the service.

## Technologies Used

- **Next.js**: Framework for server-rendered React applications.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Moment.js**: Library for handling date and time calculations.

## Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jetpack-service/jetpack-countdown-site.git
   cd jetpack-countdown-site
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Project

1. Start the development server:

   ```bash
   npm run dev
   ```
2. Open [http://localhost:3000](http://localhost:3000) in your browser to view the countdown website.

### Building for Production

To build the project for production:

```bash
npm run build
```

Then, start the production server:

```bash
npm start
```

### File Structure

- `src/app/page.tsx`: Main component with countdown logic and layout.

## Customization

- **Target Date**: To modify the countdown target date, change the `targetDate` variable in `src/app/page.tsx`.
- **Styling**: Customize styles by modifying `src/styles/globals.css` and the Tailwind CSS classes in `page.tsx`.

## License

This project is licensed under the MIT License.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Moment.js](https://momentjs.com/)
