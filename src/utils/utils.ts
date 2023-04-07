export const sbtSelector = [
	'0x1f931c1c',
	'0xcdffacc6',
	'0x52ef6b2c',
	'0xadfca15e',
	'0x7a0ed627',
	'0x01ffc9a7',
	'0x8da5cb5b',
	'0xf2fde38b',
	'0x095ea7b3',
	'0x70a08231',
	'0x55f150f1',
	'0x081812fc',
	'0x893d20e8',
	'0xe985e9c5',
	'0x40c10f19',
	'0x06fdde03',
	'0x6352211e',
	'0x42842e0e',
	'0xb88d4fde',
	'0xa22cb465',
	'0x0267ffc4',
	'0x95d89b41',
	'0xc87b56dd',
	'0x18160ddd',
	'0x23b872dd',
]
export function getARemovedBSelectorsBySelector(a: string[], b: string[]) {
	return a.filter(v => {
		if (!b.includes(v)) return v
	})
}
