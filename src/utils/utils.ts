import { ethers } from 'ethers'
import { abi } from '../abi/DAOFacet.json'

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

export const facetCuts = [
	{
		facetAddress: '0xeFbF963506C986397FC92A63E0b173f25248BC99',
		action: 0,
		functionSelectors: ['0x1f931c1c'],
	},
	{
		facetAddress: '0xdf9479F11f28A6e887175df04E36E6848f27E32b',
		action: 0,
		functionSelectors: ['0xcdffacc6', '0x52ef6b2c', '0xadfca15e', '0x7a0ed627', '0x01ffc9a7'],
	},
	{
		facetAddress: '0x98275A685ea0513b4d6b83D1c53fE14F0f41ba57',
		action: 0,
		functionSelectors: ['0x8da5cb5b', '0xf2fde38b'],
	},
	{
		facetAddress: '0x5895ce8E7C6530066903f727b8C454f502B5865B',
		action: 0,
		functionSelectors: [
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
		],
	},
]

export function getARemovedBSelectorsBySelector(a: string[], b: string[]) {
	return a.filter(v => {
		if (!b.includes(v)) return v
	})
}

export function getFunctionSignatures(abi) {
	const functionSignatures = []
	abi.forEach(item => {
		if (item.type === 'function') {
			const funcName = item.name
			const inputs = item.inputs.map(input => input.type).join(',')
			const signature = `${funcName}(${inputs})`
			functionSignatures.push(signature)
		}
	})
	return functionSignatures
}

export const SimpleDAOFacetSelectors = ['0x2fdae3c5', '0x0d61b519', '0x0121b93f']
export const SignatureRecoveryFacetSelectors = ['0x379f4e66', '0x01ffc9a7']
