/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Light theme colors
        light: {
          bgColor: '#EEEEEE',
          fgColor: '#41474E',
          metaColor: '#D26878',
          // headColor is missing a value in your original CSS, so it's omitted here
          linkColor: '#5690AF',
          hovColor: '#22453F',
          bgSelect: '#FFFAE1',
          red: '#D26878',
          dimRed: '#623039',
          orange: '#e08f67',
          dimOrange: '#926048',
          yellow: '#FFFAE1',
          dimYellow: '#D5C5A1',
          green: '#56AFA0',
          dimGreen: '#22453F',
          blue: '#5690AF',
          dimBlue: '#223844',
          purple: '#9271D6',
          dimPurple: '#47356C',
          grey: '#CBCDCD',
          dimGrey: '#646868',
        },
        // Dark theme colors
        dark: {
          bgColor: '#222529',
          fgColor: '#D6D6D6',
          metaColor: '#78B6AD',
          // headColor is missing a value in your original CSS, so it's omitted here
          linkColor: '#DBD5BC',
          hovColor: '#E2AEA2',
          bgSelect: '#464949',
          red: '#CD909B',
          dimRed: '#684249',
          orange: '#E2AEA2',
          dimOrange: '#704941',
          yellow: '#DBD5BC',
          dimYellow: '#6F6847',
          green: '#78B6AD',
          dimGreen: '#3E615C',
          blue: '#87C9E5',
          dimBlue: '#38494F',
          purple: '#CEA7DE',
          dimPurple: '#5E406A',
          grey: '#CBCDCD',
          dimGrey: '#464949',
        },
      },
      backgroundImage: {
        'light-pattern': "url('https://i.ibb.co/Qpkrw4V/tile-Light.webp')",
        'dark-pattern': "url('https://i.ibb.co/LzrFBFJ/tileDark.webp')",
      },
      typography: {
        DEFAULT: {
          css: {
            'blockquote p:first-of-type::before': false,
            'blockquote p:first-of-type::after': false,

          }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
