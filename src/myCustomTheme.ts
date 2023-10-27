import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
	name: 'myCustomTheme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-family-heading': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '4px',
		'--theme-rounded-container': '4px',
		'--theme-border-base': '0px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '255 255 255',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #20deae
		'--color-primary-50': '222 250 243', // #defaf3
		'--color-primary-100': '210 248 239', // #d2f8ef
		'--color-primary-200': '199 247 235', // #c7f7eb
		'--color-primary-300': '166 242 223', // #a6f2df
		'--color-primary-400': '99 232 198', // #63e8c6
		'--color-primary-500': '32 222 174', // #20deae
		'--color-primary-600': '29 200 157', // #1dc89d
		'--color-primary-700': '24 167 131', // #18a783
		'--color-primary-800': '19 133 104', // #138568
		'--color-primary-900': '16 109 85', // #106d55
		// secondary | #2791cf
		'--color-secondary-50': '223 239 248', // #dfeff8
		'--color-secondary-100': '212 233 245', // #d4e9f5
		'--color-secondary-200': '201 228 243', // #c9e4f3
		'--color-secondary-300': '169 211 236', // #a9d3ec
		'--color-secondary-400': '104 178 221', // #68b2dd
		'--color-secondary-500': '39 145 207', // #2791cf
		'--color-secondary-600': '35 131 186', // #2383ba
		'--color-secondary-700': '29 109 155', // #1d6d9b
		'--color-secondary-800': '23 87 124', // #17577c
		'--color-secondary-900': '19 71 101', // #134765
		// tertiary | #a61c6a
		'--color-tertiary-50': '242 221 233', // #f2dde9
		'--color-tertiary-100': '237 210 225', // #edd2e1
		'--color-tertiary-200': '233 198 218', // #e9c6da
		'--color-tertiary-300': '219 164 195', // #dba4c3
		'--color-tertiary-400': '193 96 151', // #c16097
		'--color-tertiary-500': '166 28 106', // #a61c6a
		'--color-tertiary-600': '149 25 95', // #95195f
		'--color-tertiary-700': '125 21 80', // #7d1550
		'--color-tertiary-800': '100 17 64', // #641140
		'--color-tertiary-900': '81 14 52', // #510e34
		// success | #51ca24
		'--color-success-50': '229 247 222', // #e5f7de
		'--color-success-100': '220 244 211', // #dcf4d3
		'--color-success-200': '212 242 200', // #d4f2c8
		'--color-success-300': '185 234 167', // #b9eaa7
		'--color-success-400': '133 218 102', // #85da66
		'--color-success-500': '81 202 36', // #51ca24
		'--color-success-600': '73 182 32', // #49b620
		'--color-success-700': '61 152 27', // #3d981b
		'--color-success-800': '49 121 22', // #317916
		'--color-success-900': '40 99 18', // #286312
		// warning | #dfde5e
		'--color-warning-50': '250 250 231', // #fafae7
		'--color-warning-100': '249 248 223', // #f9f8df
		'--color-warning-200': '247 247 215', // #f7f7d7
		'--color-warning-300': '242 242 191', // #f2f2bf
		'--color-warning-400': '233 232 142', // #e9e88e
		'--color-warning-500': '223 222 94', // #dfde5e
		'--color-warning-600': '201 200 85', // #c9c855
		'--color-warning-700': '167 167 71', // #a7a747
		'--color-warning-800': '134 133 56', // #868538
		'--color-warning-900': '109 109 46', // #6d6d2e
		// error | #ba281c
		'--color-error-50': '245 223 221', // #f5dfdd
		'--color-error-100': '241 212 210', // #f1d4d2
		'--color-error-200': '238 201 198', // #eec9c6
		'--color-error-300': '227 169 164', // #e3a9a4
		'--color-error-400': '207 105 96', // #cf6960
		'--color-error-500': '186 40 28', // #ba281c
		'--color-error-600': '167 36 25', // #a72419
		'--color-error-700': '140 30 21', // #8c1e15
		'--color-error-800': '112 24 17', // #701811
		'--color-error-900': '91 20 14', // #5b140e
		// surface | #674a2d
		'--color-surface-50': '232 228 224', // #e8e4e0
		'--color-surface-100': '225 219 213', // #e1dbd5
		'--color-surface-200': '217 210 203', // #d9d2cb
		'--color-surface-300': '194 183 171', // #c2b7ab
		'--color-surface-400': '149 128 108', // #95806c
		'--color-surface-500': '103 74 45', // #674a2d
		'--color-surface-600': '93 67 41', // #5d4329
		'--color-surface-700': '77 56 34', // #4d3822
		'--color-surface-800': '62 44 27', // #3e2c1b
		'--color-surface-900': '50 36 22' // #322416
	}
};
