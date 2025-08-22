import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-up': {
					'0%': { opacity: '0', transform: 'translateY(60px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'glow': {
					'0%, 100%': { boxShadow: '0 0 20px hsla(340, 55%, 65%, 0.2)' },
					'50%': { boxShadow: '0 0 40px hsla(340, 55%, 65%, 0.4)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'spark': {
					'0%': { 
						transform: 'translate(-50%, -50%) scale(1) rotate(0deg)',
						opacity: '1'
					},
					'100%': { 
						transform: 'translate(-50%, -50%) scale(0) rotate(var(--spark-angle)) translateY(calc(-1 * var(--spark-distance)))',
						opacity: '0'
					}
				},
				'spark-burst': {
					'0%': {
						width: '12px',
						height: '12px',
						background: 'radial-gradient(circle, #D6A7BA 0%, #ffffff 50%, #8B5CF6 100%)',
						borderRadius: '50%',
						transform: 'translateX(0) translateY(0) scale(1) rotate(0deg)',
						opacity: '1',
						boxShadow: '0 0 20px #D6A7BA'
					},
					'50%': {
						transform: 'translateX(calc(cos(var(--spark-angle)) * 25px)) translateY(calc(sin(var(--spark-angle)) * 25px)) scale(1.2) rotate(180deg)',
						opacity: '0.8'
					},
					'100%': {
						width: '4px',
						height: '4px',
						transform: 'translateX(calc(cos(var(--spark-angle)) * 40px)) translateY(calc(sin(var(--spark-angle)) * 40px)) scale(0) rotate(360deg)',
						opacity: '0'
					}
				},
				'bounce-in': {
					'0%': {
						transform: 'scale(0.3) rotate(-5deg)',
						opacity: '0'
					},
					'50%': {
						transform: 'scale(1.05) rotate(2deg)'
					},
					'70%': {
						transform: 'scale(0.9) rotate(-1deg)'
					},
					'100%': {
						transform: 'scale(1) rotate(0deg)',
						opacity: '1'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-up': 'slide-up 0.8s ease-out',
				'glow': 'glow 2s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
				'spark': 'spark 0.8s ease-out forwards',
				'spark-burst': 'spark-burst 600ms cubic-bezier(0.23, 1, 0.32, 1) forwards',
				'bounce-in': 'bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
