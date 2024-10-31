import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			'primary-1': '#D6E4FF',
  			'primary-2': '#ADC8FF',
  			'primary-3': '#84A9FF',
  			'primary-4': '#6690FF',
  			'primary-5': '#3D6EFF',
  			'primary-6': '#244EDB',
  			'primary-7': '#1939B7',
  			'gray-1': '#F8F9FC',
  			'gray-2': '#EBEDF2',
  			'gray-3': '#DBDFE6',
  			'gray-4': '#CED4DE',
  			'gray-5': '#C2CAD6',
  			'gray-6': '#B6BFCD',
  			'gray-7': '#AAB4C5',
  			'gray-8': '#9EAABD',
  			'gray-9': '#929FB5',
  			'gray-10': '#7D8DA7',
  			'gray-11': '#7D8DA7',
  			'gray-12': '#6D7F9C',
  			'gray-13': '#637592',
  			'gray-14': '#5B6B86',
  			'gray-15': '#536179',
  			'gray-16': '#4A586D',
  			'gray-17': '#424E61',
  			'gray-18': '#3A4455',
  			'gray-19': '#323A49',
  			'gray-20': '#29313D',
  			'gray-21': '#242932',
  			'gray-22': '#191D24',
  			'gray-23': '#111318',
  			'gray-24': '#080A0C',
  			'blue-1': '#EBFAFF',
  			'blue-2': '#C2F0FF',
  			'blue-3': '#85E0FF',
  			'blue-4': '#33CCFF',
  			'blue-5': '#00C1FF',
  			'blue-6': '#0096DB',
  			'blue-7': '#0070B7',
  			'green-1': '#CCFFDD',
  			'green-2': '#99FFC6',
  			'green-3': '#66FFB8',
  			'green-4': '#00FFBB',
  			'green-5': '#00DBB6',
  			'green-6': '#00B7AA',
  			'green-7': '#009093',
  			'yellow-1': '#FFFAEB',
  			'yellow-2': '#FFEBAD',
  			'yellow-3': '#FFE267',
  			'yellow-4': '#FFD741',
  			'yellow-5': '#FFC400',
  			'yellow-6': '#DBA301',
  			'yellow-7': '#B78401',
  			'red-1': '#FDE3D6',
  			'red-2': '#FBC1AD',
  			'red-3': '#F59783',
  			'red-4': '#FF7063',
  			'red-5': '#E03232',
  			'red-6': '#C02432',
  			'red-7': '#A11930',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
