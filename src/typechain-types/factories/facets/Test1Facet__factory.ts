/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Test1Facet, Test1FacetInterface } from "../../facets/Test1Facet";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "something",
        type: "address",
      },
    ],
    name: "TestEvent",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_interfaceID",
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
    name: "test1Func1",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "test1Func10",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "test1Func11",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "test1Func12",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "test1Func13",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "test1Func14",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "test1Func15",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "test1Func16",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "test1Func17",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "test1Func18",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "test1Func19",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "test1Func2",
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
    name: "test1Func20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "test1Func3",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "test1Func4",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "test1Func5",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "test1Func6",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "test1Func7",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "test1Func8",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "test1Func9",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061025c806100206000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c806351b68a4d116100b85780639abf97aa1161007c5780639abf97aa14610185578063b0e8fcc714610185578063cbb835f614610185578063cd0bae0914610185578063cf3bbe1814610185578063db32da151461018557600080fd5b806351b68a4d1461018557806371a99d6f1461018557806377e9d0d61461018557806381b5207d1461018557806387952d221461018557600080fd5b806324c1d5a7116100ff57806324c1d5a714610185578063292c460d146101855780632cb83248146101855780634484b3b91461018557806350eb3f431461018557600080fd5b806301ffc9a71461013c5780630716c2ae14610165578063110460471461018557806319c841ab1461018557806319e3b53314610187575b600080fd5b61015061014a3660046101f5565b50600090565b60405190151581526020015b60405180910390f35b61016d6101bd565b6040516001600160a01b03909116815260200161015c565b005b6101857fe172d0f8decaecdd4c56ac9d5abd3aebbc2d423f323d7c1b0d0a8a21feef1df380546001600160a01b03191630179055565b60006101f07fe172d0f8decaecdd4c56ac9d5abd3aebbc2d423f323d7c1b0d0a8a21feef1df3546001600160a01b031690565b905090565b60006020828403121561020757600080fd5b81356001600160e01b03198116811461021f57600080fd5b939250505056fea2646970667358221220a81ea01c928b432d7f8df1bd4d8eb24bcfc74317c8a04d24019ae766d55252ef64736f6c63430008110033";

type Test1FacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Test1FacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Test1Facet__factory extends ContractFactory {
  constructor(...args: Test1FacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Test1Facet> {
    return super.deploy(overrides || {}) as Promise<Test1Facet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Test1Facet {
    return super.attach(address) as Test1Facet;
  }
  override connect(signer: Signer): Test1Facet__factory {
    return super.connect(signer) as Test1Facet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Test1FacetInterface {
    return new utils.Interface(_abi) as Test1FacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Test1Facet {
    return new Contract(address, _abi, signerOrProvider) as Test1Facet;
  }
}