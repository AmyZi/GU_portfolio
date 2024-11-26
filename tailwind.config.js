/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        animation: {
          'flip-left': 'flipLeft 0.7s ease-in-out',
          'flip-right': 'flipRight 0.7s ease-in-out',
        },
        keyframes: {
          flipLeft: {
            '0%': { transform: 'rotateY(0deg)' },
            '100%': { transform: 'rotateY(-180deg)' },
          },
          flipRight: {
            '0%': { transform: 'rotateY(0deg)' },
            '100%': { transform: 'rotateY(180deg)' },
          },
        },
        colors: {
          primary: {
            50: '#f5f3ff',  // Lightest shade - good for hover states
            100: '#ede9fe', // Very light - good for backgrounds
            200: '#ddd6fe', // Light - good for inactive elements
            300: '#c4b5fd', // Medium light - good for borders
            400: '#a78bfa', // Medium - good for secondary elements
            500: '#8b5cf6', // Base color - primary buttons/accents
            600: '#7c3aed', // Darker - good for hover states
            700: '#6d28d9', // Dark - good for text on light backgrounds
            800: '#5b21b6', // Very dark - good for headers
            900: '#4c1d95', // Darkest - good for emphasis
          },
          accent: {
            50: '#fff7ed',  // Peach/coral tones
            100: '#ffedd5',
            200: '#fed7aa',
            300: '#fdba74',
            400: '#fb923c',
            500: '#f97316', // Base accent color
            600: '#ea580c',
            700: '#c2410c',
            800: '#9a3412',
            900: '#7c2d12',
          },
          neutral: {
            50: '#fafafa',  // Almost white
            100: '#f5f5f5',
            200: '#e5e5e5',
            300: '#d4d4d4',
            400: '#a3a3a3',
            500: '#737373', // Base neutral
            600: '#525252',
            700: '#404040',
            800: '#262626',
            900: '#171717',  // Almost black
          },
          success: '#4ade80',  // Green for success states
          warning: '#fbbf24',  // Yellow for warnings
          error: '#ef4444',    // Red for errors
          info: '#3b82f6',     // Blue for info
        },
      },
      screens: {
        lg: { max: "2023px" },
  
        md: { max: "768px" },
      },
    },
    plugins: [],
  };