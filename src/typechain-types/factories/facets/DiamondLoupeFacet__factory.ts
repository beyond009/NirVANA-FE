/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  DiamondLoupeFacet,
  DiamondLoupeFacetInterface,
} from "../../facets/DiamondLoupeFacet";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_functionSelector",
        type: "bytes4",
      },
    ],
    name: "facetAddress",
    outputs: [
      {
        internalType: "address",
        name: "facetAddress_",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "facetAddresses",
    outputs: [
      {
        internalType: "address[]",
        name: "facetAddresses_",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_facet",
        type: "address",
      },
    ],
    name: "facetFunctionSelectors",
    outputs: [
      {
        internalType: "bytes4[]",
        name: "_facetFunctionSelectors",
        type: "bytes4[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "facets",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "facetAddress",
            type: "address",
          },
          {
            internalType: "bytes4[]",
            name: "functionSelectors",
            type: "bytes4[]",
          },
        ],
        internalType: "struct IDiamondLoupe.Facet[]",
        name: "facets_",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_interfaceId",
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610a84806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806301ffc9a71461005c57806352ef6b2c146100bd5780637a0ed627146100d2578063adfca15e146100e7578063cdffacc614610107575b600080fd5b6100a861006a366004610836565b6001600160e01b03191660009081527fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131e602052604090205460ff1690565b60405190151581526020015b60405180910390f35b6100c561015f565b6040516100b49190610867565b6100da610300565b6040516100b491906108f9565b6100fa6100f5366004610976565b6106ed565b6040516100b4919061099f565b610147610115366004610836565b6001600160e01b0319166000908152600080516020610a2f83398151915260205260409020546001600160a01b031690565b6040516001600160a01b0390911681526020016100b4565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131d54606090600080516020610a2f833981519152908067ffffffffffffffff8111156101ad576101ad6109b2565b6040519080825280602002602001820160405280156101d6578160200160208202803683370190505b5092506000805b828110156102f65760008460010182815481106101fc576101fc6109c8565b6000918252602080832060088304015460079092166004026101000a90910460e01b6001600160e01b0319811683529087905260408220549092506001600160a01b031690805b858110156102985788818151811061025d5761025d6109c8565b60200260200101516001600160a01b0316836001600160a01b0316036102865760019150610298565b80610290816109f4565b915050610243565b5080156102a857506102e4915050565b818886815181106102bb576102bb6109c8565b6001600160a01b0390921660209283029190910190910152846102dd816109f4565b9550505050505b806102ee816109f4565b9150506101dd565b5080845250505090565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131d54606090600080516020610a2f833981519152908067ffffffffffffffff81111561034e5761034e6109b2565b60405190808252806020026020018201604052801561039457816020015b60408051808201909152600081526060602082015281526020019060019003908161036c5790505b50925060008167ffffffffffffffff8111156103b2576103b26109b2565b6040519080825280602002602001820160405280156103db578160200160208202803683370190505b5090506000805b8381101561067a576000856001018281548110610401576104016109c8565b6000918252602080832060088304015460079092166004026101000a90910460e01b6001600160e01b0319811683529088905260408220549092506001600160a01b031690805b8581101561053e57826001600160a01b03168a828151811061046c5761046c6109c8565b6020026020010151600001516001600160a01b03160361052c57838a8281518110610499576104996109c8565b6020026020010151602001518883815181106104b7576104b76109c8565b602002602001015161ffff16815181106104d3576104d36109c8565b60200260200101906001600160e01b03191690816001600160e01b03191681525050868181518110610507576105076109c8565b60200260200101805180919061051c90610a0d565b61ffff169052506001915061053e565b80610536816109f4565b915050610448565b50801561054e5750610668915050565b81898681518110610561576105616109c8565b60209081029190910101516001600160a01b0390911690528667ffffffffffffffff811115610592576105926109b2565b6040519080825280602002602001820160405280156105bb578160200160208202803683370190505b508986815181106105ce576105ce6109c8565b602002602001015160200181905250828986815181106105f0576105f06109c8565b60200260200101516020015160008151811061060e5761060e6109c8565b60200260200101906001600160e01b03191690816001600160e01b031916815250506001868681518110610644576106446109c8565b61ffff9092166020928302919091019091015284610661816109f4565b9550505050505b80610672816109f4565b9150506103e2565b5060005b818110156106e257600083828151811061069a5761069a6109c8565b602002602001015161ffff16905060008783815181106106bc576106bc6109c8565b6020026020010151602001519050818152505080806106da906109f4565b91505061067e565b508085525050505090565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131d54606090600080516020610a2f8339815191529060008167ffffffffffffffff81111561073d5761073d6109b2565b604051908082528060200260200182016040528015610766578160200160208202803683370190505b50935060005b8281101561082b57600084600101828154811061078b5761078b6109c8565b6000918252602080832060088304015460079092166004026101000a90910460e01b6001600160e01b031981168352908790526040909120549091506001600160a01b0390811690881681900361081657818785815181106107ef576107ef6109c8565b6001600160e01b03199092166020928302919091019091015283610812816109f4565b9450505b50508080610823906109f4565b91505061076c565b508352509092915050565b60006020828403121561084857600080fd5b81356001600160e01b03198116811461086057600080fd5b9392505050565b6020808252825182820181905260009190848201906040850190845b818110156108a85783516001600160a01b031683529284019291840191600101610883565b50909695505050505050565b600081518084526020808501945080840160005b838110156108ee5781516001600160e01b031916875295820195908201906001016108c8565b509495945050505050565b60006020808301818452808551808352604092508286019150828160051b87010184880160005b8381101561096857888303603f19018552815180516001600160a01b03168452870151878401879052610955878501826108b4565b9588019593505090860190600101610920565b509098975050505050505050565b60006020828403121561098857600080fd5b81356001600160a01b038116811461086057600080fd5b60208152600061086060208301846108b4565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060018201610a0657610a066109de565b5060010190565b600061ffff808316818103610a2457610a246109de565b600101939250505056fec8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131ca2646970667358221220bad802d37ebe6547b4f2b6939e0ef5031c6d75245b8ee6082136e713fcc67c9a64736f6c63430008110033";

type DiamondLoupeFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DiamondLoupeFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DiamondLoupeFacet__factory extends ContractFactory {
  constructor(...args: DiamondLoupeFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DiamondLoupeFacet> {
    return super.deploy(overrides || {}) as Promise<DiamondLoupeFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DiamondLoupeFacet {
    return super.attach(address) as DiamondLoupeFacet;
  }
  override connect(signer: Signer): DiamondLoupeFacet__factory {
    return super.connect(signer) as DiamondLoupeFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DiamondLoupeFacetInterface {
    return new utils.Interface(_abi) as DiamondLoupeFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DiamondLoupeFacet {
    return new Contract(address, _abi, signerOrProvider) as DiamondLoupeFacet;
  }
}
