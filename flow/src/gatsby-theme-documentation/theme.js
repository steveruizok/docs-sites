const heading = {
	fontFamily: 'heading',
	fontWeight: 'heading',
	lineHeight: 'heading',
	a: {
		color: 'inherit',
		textDecoration: 'none',
	},
}

export default {
	initialColorMode: 'light',
	colors: {
		text: '#000',
		background: '#fff',
		primary: '#33e',
		secondary: '#119',
		muted: '#f6f6f6',
		highlight: '#ffffcc',
		gray: '#777',
		purple: '#609',
		modes: {
			dark: {
				text: '#fff',
				background: '#060606',
				primary: '#3cf',
				secondary: '#e0f',
				muted: '#191919',
				highlight: '#ffffcc',
				gray: '#999',
				purple: '#c0f',
			},
			deep: {
				text: 'hsl(210, 50%, 96%)',
				background: 'hsl(230, 25%, 18%)',
				primary: 'hsl(260, 100%, 80%)',
				secondary: 'hsl(290, 100%, 80%)',
				purple: 'hsl(290, 100%, 80%)',
				muted: 'hsla(230, 20%, 0%, 20%)',
				gray: 'hsl(210, 50%, 60%)',
			},
			swiss: {
				text: 'hsl(10, 20%, 20%)',
				background: 'hsl(10, 10%, 98%)',
				primary: 'hsl(10, 80%, 50%)',
				secondary: 'hsl(10, 60%, 50%)',
				purple: 'hsl(250, 60%, 30%)',
				muted: 'hsl(10, 20%, 94%)',
				gray: 'hsl(10, 20%, 50%)',
			},
		},
	},
	fonts: {
		body: 'system-ui, sans-serif',
		heading: 'inherit',
		monospace: 'Menlo, monospace',
	},
	fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
	fontWeights: {
		body: '400',
		heading: '700',
	},
	lineHeights: {
		body: 1.5,
		heading: 1.25,
	},
	textStyles: {
		heading,
		display: {
			variant: 'textStyles.heading',
			fontSize: [5, 6, 7],
			mt: 3,
		},
	},
	styles: {
		Container: {
			p: 3,
			maxWidth: 1024,
		},
		root: {
			fontFamily: 'body',
			lineHeight: 'body',
			fontWeight: 'body',
		},
		h1: {
			variant: 'textStyles.display',
		},
		h2: {
			variant: 'textStyles.heading',
			fontSize: 5,
		},
		h3: {
			variant: 'textStyles.heading',
			fontSize: 4,
		},
		h4: {
			variant: 'textStyles.heading',
			fontSize: 3,
		},
		h5: {
			variant: 'textStyles.heading',
			fontSize: 2,
		},
		h6: {
			variant: 'textStyles.heading',
			fontSize: 1,
		},
		a: {
			color: 'primary',
			'&:hover': {
				color: 'secondary',
			},
		},
		pre: {
			variant: 'prism',
			fontFamily: 'monospace',
			fontSize: 1,
			p: 3,
			color: '#666',
			bg: '#fdfdfd',
			borderRadius: 12,
			border: '1px solid #efefef',
			overflow: 'auto',
			code: {
				color: 'inherit',
			},
		},
		code: {
			fontFamily: 'Roboto Mono, monospace',
			color: '#666',
			fontSize: 1,
		},
		inlineCode: {
			fontFamily: 'Roboto Mono, monospace',
			color: '#666',
			bg: '#fdfdfd',
		},
		table: {
			width: '100%',
			my: 4,
			borderCollapse: 'separate',
			borderSpacing: 0,
			[['th', 'td']]: {
				textAlign: 'left',
				py: '4px',
				pr: '4px',
				pl: 0,
				borderColor: 'muted',
				borderBottomStyle: 'solid',
			},
		},
		th: {
			verticalAlign: 'bottom',
			borderBottomWidth: '2px',
		},
		td: {
			verticalAlign: 'top',
			borderBottomWidth: '1px',
		},
		hr: {
			border: 0,
			borderBottom: '1px solid',
			borderColor: 'muted',
		},
	},
	prism: {
		[[
			'.cdata',
			'.comment',
			'.doctype',
			'.entity',
			'.operator',
			'.prolog',
			'.punctuation',
			'.url',
			'.operator',
		]]: {
			color: '#999999',
		},
		'.comment': {
			fontStyle: 'italic',
		},
		[[
			'.boolean',
			'.class-name',
			'.constant',
			'.deleted',
			'.function',
			'.important',
			'.property',
			'.regex',
			'.symbol',
			'.tag',
			'.variable',
		]]: {
			color: '#ff8800',
		},
		[['.number']]: {
			color: '#33aaee',
		},
		[['.constant']]: {
			color: '#00bbcc',
		},
		[['.atrule', '.attr-value', '.keyword']]: {
			color: '#0bf',
		},
		[['.regex', '.important', '.variable']]: {
			color: '#3c3b68',
		},
		[['.important', '.bold']]: {
			fontWeight: 500,
		},
		[['.italic']]: {
			fontStyle: 'italic',
		},
		[['.entity']]: {
			cursor: 'help',
		},
		[['.has-highlight-line .line:not(.highlight-line)']]: {
			opacity: '0.25',
		},
		[[
			'.attr-value',
			'.attr-name',
			'.builtin',
			'.char',
			'.inserted',
			'.selector',
			'.string',
		]]: {
			color: '#8855ff',
		},
	},
}
