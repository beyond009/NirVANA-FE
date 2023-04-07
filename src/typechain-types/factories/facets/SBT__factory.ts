/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { SBT, SBTInterface } from "../../facets/SBT";

const _abi = [
  {
    inputs: [],
    name: "SoulBound",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "desc",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        internalType: "string",
        name: "desc_",
        type: "string",
      },
    ],
    name: "setConstructor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061179b806100206000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c806355f150f1116100a257806395d89b411161007157806395d89b4114610230578063a22cb46514610238578063b88d4fde1461024b578063c87b56dd1461025e578063e985e9c51461027157600080fd5b806355f150f1146101fa5780636352211e1461020257806370a0823114610215578063893d20e81461022857600080fd5b8063095ea7b3116100e9578063095ea7b31461019857806318160ddd146101ab57806323b872dd146101c157806340c10f19146101d457806342842e0e146101e757600080fd5b806301ffc9a71461011b5780630267ffc41461014357806306fdde0314610158578063081812fc1461016d575b600080fd5b61012e610129366004611143565b610284565b60405190151581526020015b60405180910390f35b61015661015136600461120c565b6102e9565b005b61016061035d565b60405161013a91906112e4565b61018061017b3660046112f7565b6103f5565b6040516001600160a01b03909116815260200161013a565b6101566101a636600461132c565b610425565b6101b3610535565b60405190815260200161013a565b6101566101cf366004611356565b610548565b6101566101e236600461132c565b610579565b6101566101f5366004611356565b61060b565b610160610626565b6101806102103660046112f7565b61063e565b6101b3610223366004611392565b61069a565b61018061072b565b610160610747565b6101566102463660046113ad565b61075f565b6101566102593660046113e9565b61076e565b61016061026c3660046112f7565b6107a6565b61012e61027f366004611465565b61081a565b60006001600160e01b031982166380ac58cd60e01b14806102b557506001600160e01b03198216635b5e139f60e01b145b806102c857506001600160e01b03198216155b806102e357506301ffc9a760e01b6001600160e01b03198316145b92915050565b826102f2610857565b906102fd9082611520565b5081610307610857565b600101906103159082611520565b508061031f610857565b6002019061032d9082611520565b5033610337610857565b60030180546001600160a01b0319166001600160a01b0392909216919091179055505050565b6060610367610857565b805461037290611498565b80601f016020809104026020016040519081016040528092919081815260200182805461039e90611498565b80156103eb5780601f106103c0576101008083540402835291602001916103eb565b820191906000526020600020905b8154815290600101906020018083116103ce57829003601f168201915b5050505050905090565b60006104008261087b565b610408610857565b60009283526007016020525060409020546001600160a01b031690565b60006104308261063e565b9050806001600160a01b0316836001600160a01b0316036104985760405162461bcd60e51b815260206004820152601e60248201527f5342543a20617070726f76616c20746f2063757272656e74206f776e6572000060448201526064015b60405180910390fd5b336001600160a01b03821614806104b457506104b4813361081a565b6105265760405162461bcd60e51b815260206004820152603a60248201527f5342543a20617070726f76652063616c6c6572206973206e6f7420746f6b656e60448201527f206f776e6572206f7220617070726f76656420666f7220616c6c000000000000606482015260840161048f565b61053083836108cb565b505050565b600061053f610857565b60040154905090565b6105523382610946565b61056e5760405162461bcd60e51b815260040161048f906115e0565b6105308383836109a5565b33610582610857565b600301546001600160a01b0316146105dc5760405162461bcd60e51b815260206004820152601c60248201527f5342543a2063616c6c6572206973206e6f7420746865206f776e657200000000604482015260640161048f565b6105e68282610b71565b60016105f0610857565b6004016000828254610602919061162a565b90915550505050565b6105308383836040518060200160405280600081525061076e565b6060610630610857565b600201805461037290611498565b60008061064a83610d0c565b90506001600160a01b0381166102e35760405162461bcd60e51b815260206004820152601560248201527414d0950e881a5b9d985b1a59081d1bdad95b881251605a1b604482015260640161048f565b60006001600160a01b0382166107015760405162461bcd60e51b815260206004820152602660248201527f5342543a2061646472657373207a65726f206973206e6f7420612076616c69646044820152651037bbb732b960d11b606482015260840161048f565b610709610857565b6001600160a01b03909216600090815260069290920160205250604090205490565b6000610735610857565b600301546001600160a01b0316919050565b6060610751610857565b600101805461037290611498565b61076a338383610d33565b5050565b6107783383610946565b6107945760405162461bcd60e51b815260040161048f906115e0565b6107a084848484610e0c565b50505050565b60606107b18261087b565b60006107c860408051602081019091526000815290565b905060008151116107e85760405180602001604052806000815250610813565b806107f284610e3f565b60405160200161080392919061164b565b6040516020818303038152906040525b9392505050565b6000610824610857565b6001600160a01b039384166000908152600891909101602090815260408083209490951682529290925250205460ff1690565b7f764d96a25cbc34f4b6b0dd01ec84ec342c7ee31fdf93289e5c8a1640f4b0b48290565b61088481610ed2565b6108c85760405162461bcd60e51b815260206004820152601560248201527414d0950e881a5b9d985b1a59081d1bdad95b881251605a1b604482015260640161048f565b50565b816108d4610857565b60008381526007919091016020526040902080546001600160a01b0319166001600160a01b039283161790558190831661090d8261063e565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000806109528361063e565b9050806001600160a01b0316846001600160a01b031614806109795750610979818561081a565b8061099d5750836001600160a01b0316610992846103f5565b6001600160a01b0316145b949350505050565b826001600160a01b03166109b88261063e565b6001600160a01b0316146109de5760405162461bcd60e51b815260040161048f9061167a565b6001600160a01b038216610a3e5760405162461bcd60e51b815260206004820152602160248201527f5342543a207472616e7366657220746f20746865207a65726f206164647265736044820152607360f81b606482015260840161048f565b610a4b8383836001610eef565b826001600160a01b0316610a5e8261063e565b6001600160a01b031614610a845760405162461bcd60e51b815260040161048f9061167a565b610a8c610857565b60008281526007919091016020526040902080546001600160a01b03191690556001610ab6610857565b6001600160a01b03851660009081526006919091016020526040902080549190910390556001610ae4610857565b6001600160a01b0384166000908152600691909101602052604090208054909101905581610b10610857565b6000838152600591909101602052604080822080546001600160a01b0319166001600160a01b0394851617905551839285811692908716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9190a4505050565b6001600160a01b038216610bc75760405162461bcd60e51b815260206004820152601d60248201527f5342543a206d696e7420746f20746865207a65726f2061646472657373000000604482015260640161048f565b610bd081610ed2565b15610c195760405162461bcd60e51b815260206004820152601960248201527814d0950e881d1bdad95b88185b1c9958591e481b5a5b9d1959603a1b604482015260640161048f565b610c27600083836001610eef565b610c3081610ed2565b15610c795760405162461bcd60e51b815260206004820152601960248201527814d0950e881d1bdad95b88185b1c9958591e481b5a5b9d1959603a1b604482015260640161048f565b6001610c83610857565b6001600160a01b0384166000908152600691909101602052604090208054909101905581610caf610857565b6000838152600591909101602052604080822080546001600160a01b0319166001600160a01b03948516179055518392851691907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6000610d16610857565b60009283526005016020525060409020546001600160a01b031690565b816001600160a01b0316836001600160a01b031603610d8d5760405162461bcd60e51b815260206004820152601660248201527529a12a1d1030b8383937bb32903a379031b0b63632b960511b604482015260640161048f565b80610d96610857565b6001600160a01b0385811660008181526008939093016020908152604080852093881680865293825293849020805460ff1916951515959095179094559151841515815290927f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610e178484846109a5565b610e2384848484610f54565b6107a05760405162461bcd60e51b815260040161048f906116bc565b60606000610e4c83611055565b600101905060008167ffffffffffffffff811115610e6c57610e6c611160565b6040519080825280601f01601f191660200182016040528015610e96576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a8504945084610ea057509392505050565b600080610ede83610d0c565b6001600160a01b0316141592915050565b6001600160a01b03841615801590610f0f57506001600160a01b03831615155b8015610f365750610f1e610857565b6000838152600991909101602052604090205460ff16155b156107a057604051631267838f60e11b815260040160405180910390fd5b60006001600160a01b0384163b1561104a57604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290610f9890339089908890889060040161170b565b6020604051808303816000875af1925050508015610fd3575060408051601f3d908101601f19168201909252610fd091810190611748565b60015b611030573d808015611001576040519150601f19603f3d011682016040523d82523d6000602084013e611006565b606091505b5080516000036110285760405162461bcd60e51b815260040161048f906116bc565b805181602001fd5b6001600160e01b031916630a85bd0160e11b14905061099d565b506001949350505050565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b83106110945772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef810000000083106110c0576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc1000083106110de57662386f26fc10000830492506010015b6305f5e10083106110f6576305f5e100830492506008015b612710831061110a57612710830492506004015b6064831061111c576064830492506002015b600a83106102e35760010192915050565b6001600160e01b0319811681146108c857600080fd5b60006020828403121561115557600080fd5b81356108138161112d565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff8084111561119157611191611160565b604051601f8501601f19908116603f011681019082821181831017156111b9576111b9611160565b816040528093508581528686860111156111d257600080fd5b858560208301376000602087830101525050509392505050565b600082601f8301126111fd57600080fd5b61081383833560208501611176565b60008060006060848603121561122157600080fd5b833567ffffffffffffffff8082111561123957600080fd5b611245878388016111ec565b9450602086013591508082111561125b57600080fd5b611267878388016111ec565b9350604086013591508082111561127d57600080fd5b5061128a868287016111ec565b9150509250925092565b60005b838110156112af578181015183820152602001611297565b50506000910152565b600081518084526112d0816020860160208601611294565b601f01601f19169290920160200192915050565b60208152600061081360208301846112b8565b60006020828403121561130957600080fd5b5035919050565b80356001600160a01b038116811461132757600080fd5b919050565b6000806040838503121561133f57600080fd5b61134883611310565b946020939093013593505050565b60008060006060848603121561136b57600080fd5b61137484611310565b925061138260208501611310565b9150604084013590509250925092565b6000602082840312156113a457600080fd5b61081382611310565b600080604083850312156113c057600080fd5b6113c983611310565b9150602083013580151581146113de57600080fd5b809150509250929050565b600080600080608085870312156113ff57600080fd5b61140885611310565b935061141660208601611310565b925060408501359150606085013567ffffffffffffffff81111561143957600080fd5b8501601f8101871361144a57600080fd5b61145987823560208401611176565b91505092959194509250565b6000806040838503121561147857600080fd5b61148183611310565b915061148f60208401611310565b90509250929050565b600181811c908216806114ac57607f821691505b6020821081036114cc57634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561053057600081815260208120601f850160051c810160208610156114f95750805b601f850160051c820191505b8181101561151857828155600101611505565b505050505050565b815167ffffffffffffffff81111561153a5761153a611160565b61154e816115488454611498565b846114d2565b602080601f831160018114611583576000841561156b5750858301515b600019600386901b1c1916600185901b178555611518565b600085815260208120601f198616915b828110156115b257888601518255948401946001909101908401611593565b50858210156115d05787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6020808252602a908201527f5342543a2063616c6c6572206973206e6f7420746f6b656e206f776e6572206f6040820152691c88185c1c1c9bdd995960b21b606082015260800190565b808201808211156102e357634e487b7160e01b600052601160045260246000fd5b6000835161165d818460208801611294565b835190830190611671818360208801611294565b01949350505050565b60208082526022908201527f5342543a207472616e736665722066726f6d20696e636f7272656374206f776e60408201526132b960f11b606082015260800190565b6020808252602f908201527f5342543a207472616e7366657220746f206e6f6e20455243373231526563656960408201526e3b32b91034b6b83632b6b2b73a32b960891b606082015260800190565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061173e908301846112b8565b9695505050505050565b60006020828403121561175a57600080fd5b81516108138161112d56fea2646970667358221220308771ecf570cad24a2a535585c243e43021bb36ce92734f85a0f59b4419a31c64736f6c63430008110033";

type SBTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SBTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SBT__factory extends ContractFactory {
  constructor(...args: SBTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SBT> {
    return super.deploy(overrides || {}) as Promise<SBT>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SBT {
    return super.attach(address) as SBT;
  }
  override connect(signer: Signer): SBT__factory {
    return super.connect(signer) as SBT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SBTInterface {
    return new utils.Interface(_abi) as SBTInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): SBT {
    return new Contract(address, _abi, signerOrProvider) as SBT;
  }
}