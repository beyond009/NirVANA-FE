/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface SignatureRecoveryInterface extends utils.Interface {
  functions: {
    "recover(address,bytes)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "recover" | "supportsInterface"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "recover",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(functionFragment: "recover", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;

  events: {};
}

export interface SignatureRecovery extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SignatureRecoveryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    recover(
      from: PromiseOrValue<string>,
      signature: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  recover(
    from: PromiseOrValue<string>,
    signature: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    recover(
      from: PromiseOrValue<string>,
      signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    recover(
      from: PromiseOrValue<string>,
      signature: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    recover(
      from: PromiseOrValue<string>,
      signature: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
