/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  DiamondFactory,
  DiamondFactoryInterface,
} from "../DiamondFactory";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "facetAddress",
            type: "address",
          },
          {
            internalType: "enum IDiamond.FacetCutAction",
            name: "action",
            type: "uint8",
          },
          {
            internalType: "bytes4[]",
            name: "functionSelectors",
            type: "bytes4[]",
          },
        ],
        internalType: "struct IDiamond.FacetCut[]",
        name: "_diamondCut",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "init",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "initCalldata",
            type: "bytes",
          },
        ],
        internalType: "struct DiamondArgs",
        name: "_args",
        type: "tuple",
      },
    ],
    name: "deployDiamond",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initDeployFacet",
    outputs: [
      {
        internalType: "address[4]",
        name: "",
        type: "address[4]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506142f5806100206000396000f3fe60806040523480156200001157600080fd5b50600436106200003a5760003560e01c8063082b965a146200003f578063ce0e023a1462000061575b600080fd5b6200004962000091565b60405162000058919062000239565b60405180910390f35b6200007862000072366004620003ff565b62000191565b6040516001600160a01b03909116815260200162000058565b6200009b620001d5565b620000a5620001d5565b604051620000b390620001f3565b604051809103906000f080158015620000d0573d6000803e3d6000fd5b506001600160a01b03168152604051620000ea9062000201565b604051809103906000f08015801562000107573d6000803e3d6000fd5b506001600160a01b0316602082015260405162000124906200020f565b604051809103906000f08015801562000141573d6000803e3d6000fd5b506001600160a01b03166040808301919091525162000160906200021d565b604051809103906000f0801580156200017d573d6000803e3d6000fd5b506001600160a01b03166060820152919050565b60008282604051620001a3906200022b565b620001b09291906200062f565b604051809103906000f080158015620001cd573d6000803e3d6000fd5b509392505050565b60405180608001604052806004906020820280368337509192915050565b610169806200072583390190565b610fe2806200088e83390190565b610aa4806200187083390190565b610265806200231483390190565b611d47806200257983390190565b60808101818360005b60048110156200026c5781516001600160a01b031683526020928301929091019060010162000242565b50505092915050565b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715620002b157620002b162000275565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715620002e357620002e362000275565b604052919050565b600067ffffffffffffffff82111562000308576200030862000275565b5060051b60200190565b80356001600160a01b03811681146200032a57600080fd5b919050565b6000606082840312156200034257600080fd5b6200034c6200028b565b9050620003598262000312565b815260206200036a81840162000312565b81830152604083013567ffffffffffffffff808211156200038a57600080fd5b818501915085601f8301126200039f57600080fd5b813581811115620003b457620003b462000275565b620003c8601f8201601f19168501620002b7565b91508082528684828501011115620003df57600080fd5b808484018584013760008482840101525080604085015250505092915050565b600080604083850312156200041357600080fd5b823567ffffffffffffffff808211156200042c57600080fd5b818501915085601f8301126200044157600080fd5b813560206200045a6200045483620002eb565b620002b7565b82815260059290921b840181019181810190898411156200047a57600080fd5b8286015b848110156200058a578035868111156200049757600080fd5b87016060818d03601f19011215620004ae57600080fd5b620004b86200028b565b620004c586830162000312565b8152604082013560038110620004da57600080fd5b81870152606082013588811115620004f157600080fd5b8083019250508c603f8301126200050757600080fd5b858201356200051a6200045482620002eb565b81815260059190911b830160400190878101908f8311156200053b57600080fd5b6040850194505b82851015620005745784356001600160e01b0319811681146200056457600080fd5b8252938801939088019062000542565b604084015250508452509183019183016200047e565b5096505086013592505080821115620005a257600080fd5b50620005b1858286016200032f565b9150509250929050565b600060018060a01b038083511684526020818185015116818601526040840151915060606040860152815180606087015260005b818110156200060d57838101830151878201608001528201620005ef565b506000608082880101526080601f19601f830116870101935050505092915050565b60006040808301818452808651808352606092508286019150828160051b8701016020808a0160005b848110156200070257898403605f19018652815180516001600160a01b03168552838101518886019060038110620006a057634e487b7160e01b600052602160045260246000fd5b868601529089015189860189905280519182905284019060009060808701905b80831015620006ec5783516001600160e01b0319168252928601926001929092019190860190620006c0565b5097850197955050509082019060010162000658565b505087820390880152620007178189620005bb565b999850505050505050505056fe608060405234801561001057600080fd5b50610149806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063e1c7392a14610030575b600080fd5b6101117fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131e6020527f673a26ab9c976db950bbe987aa80c5e387f329563bb0afe093ddccc970489e318054600160ff1991821681179092557f9bed265332efc30fa7643cc339edc91cb284a0f6566818a5788922af58c86b5080548216831790557f795db15802e151b19272d3e7b72ebd9d0cedc282cc23a6e937c8c3c90d9e213780548216831790556307f5828d60e41b6000527fe616bea4664e595328e525b24998219caecea2090de91847473acfb3efaa8aad80549091169091179055565b00fea26469706673582212205aeda4b2df2d5483cc5097e6ef0b5eb6d0fbabf9129734d5c1f7a9d5622055f564736f6c63430008110033608060405234801561001057600080fd5b50610fc2806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80631f931c1c14610030575b600080fd5b61004361003e3660046109ca565b610045565b005b61004d61009e565b61009761005a8587610b10565b8484848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061011792505050565b5050505050565b600080516020610ef9833981519152600301546001600160a01b03163314610115577fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131f54604051600162bed83560e01b031981523360048201526001600160a01b0390911660248201526044015b60405180910390fd5b565b60005b835181101561027c57600084828151811061013757610137610c54565b6020026020010151604001519050600085838151811061015957610159610c54565b602002602001015160000151905081516000036101945760405163e767f91f60e01b81526001600160a01b038216600482015260240161010c565b60008684815181106101a8576101a8610c54565b6020026020010151602001519050600060028111156101c9576101c9610c6a565b8160028111156101db576101db610c6a565b036101ef576101ea82846102c7565b610266565b600181600281111561020357610203610c6a565b03610212576101ea828461047b565b600281600281111561022657610226610c6a565b03610235576101ea82846105f0565b80600281111561024757610247610c6a565b604051633ff4d20f60e11b815260ff909116600482015260240161010c565b505050808061027490610c96565b91505061011a565b507f8faa70878671ccd212d20771b795c50af8fd3ff6cf27f4bde57e5d4de0aeb6738383836040516102b093929190610cff565b60405180910390a16102c28282610877565b505050565b6001600160a01b0382166102f057806040516302b8da0760e21b815260040161010c9190610dff565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131d5460408051606081019091526024808252600080516020610ef9833981519152929161034791869190610f19602083013961093d565b60005b835181101561009757600084828151811061036757610367610c54565b6020908102919091018101516001600160e01b031981166000908152918690526040909120549091506001600160a01b031680156103ba578160405163ebbf5d0760e01b815260040161010c9190610e4d565b6040805180820182526001600160a01b03808a16825261ffff80881660208085019182526001600160e01b0319881660009081528b8252958620945185549251909316600160a01b026001600160b01b0319909216929093169190911717909155600180880180549182018155835291206008820401805460e085901c60046007909416939093026101000a92830263ffffffff90930219169190911790558361046381610e62565b9450505050808061047390610c96565b91505061034a565b600080516020610ef98339815191526001600160a01b0383166104b3578160405163cd98a96f60e01b815260040161010c9190610dff565b6104d583604051806060016040528060288152602001610f656028913961093d565b60005b82518110156105ea5760008382815181106104f5576104f5610c54565b6020908102919091018101516001600160e01b031981166000908152918590526040909120549091506001600160a01b03163081036105495781604051632901806d60e11b815260040161010c9190610e4d565b856001600160a01b0316816001600160a01b03160361057d5781604051631ac6ce8d60e11b815260040161010c9190610e4d565b6001600160a01b0381166105a65781604051637479f93960e01b815260040161010c9190610e4d565b506001600160e01b031916600090815260208390526040902080546001600160a01b0319166001600160a01b038616179055806105e281610c96565b9150506104d8565b50505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131d54600080516020610ef9833981519152906001600160a01b038416156106555760405163d091bc8160e01b81526001600160a01b038516600482015260240161010c565b60005b835181101561009757600084828151811061067557610675610c54565b6020908102919091018101516001600160e01b0319811660009081528683526040908190208151808301909252546001600160a01b038116808352600160a01b90910461ffff1693820193909352909250906106e65781604051637a08a22d60e01b815260040161010c9190610e4d565b8051306001600160a01b03909116036107145781604051630df5fd6160e31b815260040161010c9190610e4d565b8361071e81610e83565b94505083816020015161ffff16146107fc57600085600101858154811061074757610747610c54565b90600052602060002090600891828204019190066004029054906101000a900460e01b90508086600101836020015161ffff168154811061078a5761078a610c54565b600091825260208083206008830401805463ffffffff60079094166004026101000a938402191660e09590951c92909202939093179055838201516001600160e01b03199390931681529087905260409020805461ffff60a01b1916600160a01b61ffff909316929092029190911790555b8460010180548061080f5761080f610e9a565b60008281526020808220600860001990940193840401805463ffffffff600460078716026101000a0219169055919092556001600160e01b0319909316815291859052506040902080546001600160b01b03191690558061086f81610c96565b915050610658565b6001600160a01b038216610889575050565b6108ab82604051806060016040528060288152602001610f3d6028913961093d565b600080836001600160a01b0316836040516108c69190610eb0565b600060405180830381855af49150503d8060008114610901576040519150601f19603f3d011682016040523d82523d6000602084013e610906565b606091505b5091509150816105ea578051156109205780518082602001fd5b838360405163192105d760e01b815260040161010c929190610ecc565b813b60008190036102c257828260405163919834b960e01b815260040161010c929190610ecc565b80356001600160a01b038116811461097c57600080fd5b919050565b60008083601f84011261099357600080fd5b50813567ffffffffffffffff8111156109ab57600080fd5b6020830191508360208285010111156109c357600080fd5b9250929050565b6000806000806000606086880312156109e257600080fd5b853567ffffffffffffffff808211156109fa57600080fd5b818801915088601f830112610a0e57600080fd5b813581811115610a1d57600080fd5b8960208260051b8501011115610a3257600080fd5b60208301975080965050610a4860208901610965565b94506040880135915080821115610a5e57600080fd5b50610a6b88828901610981565b969995985093965092949392505050565b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715610ab557610ab5610a7c565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715610ae457610ae4610a7c565b604052919050565b600067ffffffffffffffff821115610b0657610b06610a7c565b5060051b60200190565b6000610b23610b1e84610aec565b610abb565b83815260208082019190600586811b860136811115610b4157600080fd5b865b81811015610c4757803567ffffffffffffffff80821115610b645760008081fd5b818a01915060608236031215610b7a5760008081fd5b610b82610a92565b610b8b83610965565b81528683013560038110610b9f5760008081fd5b8188015260408381013583811115610bb75760008081fd5b939093019236601f850112610bce57600092508283fd5b83359250610bde610b1e84610aec565b83815292871b84018801928881019036851115610bfb5760008081fd5b948901945b84861015610c305785356001600160e01b031981168114610c215760008081fd5b82529489019490890190610c00565b918301919091525088525050948301948301610b43565b5092979650505050505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060018201610ca857610ca8610c80565b5060010190565b60005b83811015610cca578181015183820152602001610cb2565b50506000910152565b60008151808452610ceb816020860160208601610caf565b601f01601f19169290920160200192915050565b60006060808301818452808751808352608092508286019150828160051b8701016020808b0160005b84811015610dcf57898403607f19018652815180516001600160a01b03168552838101518986019060038110610d6e57634e487b7160e01b600052602160045260246000fd5b868601526040918201519186018a905281519081905290840190600090898701905b80831015610dba5783516001600160e01b0319168252928601926001929092019190860190610d90565b50978501979550505090820190600101610d28565b50506001600160a01b038a16908801528681036040880152610df18189610cd3565b9a9950505050505050505050565b6020808252825182820181905260009190848201906040850190845b81811015610e415783516001600160e01b03191683529284019291840191600101610e1b565b50909695505050505050565b6001600160e01b031991909116815260200190565b600061ffff808316818103610e7957610e79610c80565b6001019392505050565b600081610e9257610e92610c80565b506000190190565b634e487b7160e01b600052603160045260246000fd5b60008251610ec2818460208701610caf565b9190910192915050565b6001600160a01b0383168152604060208201819052600090610ef090830184610cd3565b94935050505056fec8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c4c69624469616d6f6e644375743a2041646420666163657420686173206e6f20636f64654c69624469616d6f6e644375743a205f696e6974206164647265737320686173206e6f20636f64654c69624469616d6f6e644375743a205265706c61636520666163657420686173206e6f20636f6465a2646970667358221220f4913c0ac237b0d4c649b397a1b60f479e3a7ffb3f868affa2b3ad7bf05f178264736f6c63430008110033608060405234801561001057600080fd5b50610a84806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806301ffc9a71461005c57806352ef6b2c146100bd5780637a0ed627146100d2578063adfca15e146100e7578063cdffacc614610107575b600080fd5b6100a861006a366004610836565b6001600160e01b03191660009081527fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131e602052604090205460ff1690565b60405190151581526020015b60405180910390f35b6100c561015f565b6040516100b49190610867565b6100da610300565b6040516100b491906108f9565b6100fa6100f5366004610976565b6106ed565b6040516100b4919061099f565b610147610115366004610836565b6001600160e01b0319166000908152600080516020610a2f83398151915260205260409020546001600160a01b031690565b6040516001600160a01b0390911681526020016100b4565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131d54606090600080516020610a2f833981519152908067ffffffffffffffff8111156101ad576101ad6109b2565b6040519080825280602002602001820160405280156101d6578160200160208202803683370190505b5092506000805b828110156102f65760008460010182815481106101fc576101fc6109c8565b6000918252602080832060088304015460079092166004026101000a90910460e01b6001600160e01b0319811683529087905260408220549092506001600160a01b031690805b858110156102985788818151811061025d5761025d6109c8565b60200260200101516001600160a01b0316836001600160a01b0316036102865760019150610298565b80610290816109f4565b915050610243565b5080156102a857506102e4915050565b818886815181106102bb576102bb6109c8565b6001600160a01b0390921660209283029190910190910152846102dd816109f4565b9550505050505b806102ee816109f4565b9150506101dd565b5080845250505090565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131d54606090600080516020610a2f833981519152908067ffffffffffffffff81111561034e5761034e6109b2565b60405190808252806020026020018201604052801561039457816020015b60408051808201909152600081526060602082015281526020019060019003908161036c5790505b50925060008167ffffffffffffffff8111156103b2576103b26109b2565b6040519080825280602002602001820160405280156103db578160200160208202803683370190505b5090506000805b8381101561067a576000856001018281548110610401576104016109c8565b6000918252602080832060088304015460079092166004026101000a90910460e01b6001600160e01b0319811683529088905260408220549092506001600160a01b031690805b8581101561053e57826001600160a01b03168a828151811061046c5761046c6109c8565b6020026020010151600001516001600160a01b03160361052c57838a8281518110610499576104996109c8565b6020026020010151602001518883815181106104b7576104b76109c8565b602002602001015161ffff16815181106104d3576104d36109c8565b60200260200101906001600160e01b03191690816001600160e01b03191681525050868181518110610507576105076109c8565b60200260200101805180919061051c90610a0d565b61ffff169052506001915061053e565b80610536816109f4565b915050610448565b50801561054e5750610668915050565b81898681518110610561576105616109c8565b60209081029190910101516001600160a01b0390911690528667ffffffffffffffff811115610592576105926109b2565b6040519080825280602002602001820160405280156105bb578160200160208202803683370190505b508986815181106105ce576105ce6109c8565b602002602001015160200181905250828986815181106105f0576105f06109c8565b60200260200101516020015160008151811061060e5761060e6109c8565b60200260200101906001600160e01b03191690816001600160e01b031916815250506001868681518110610644576106446109c8565b61ffff9092166020928302919091019091015284610661816109f4565b9550505050505b80610672816109f4565b9150506103e2565b5060005b818110156106e257600083828151811061069a5761069a6109c8565b602002602001015161ffff16905060008783815181106106bc576106bc6109c8565b6020026020010151602001519050818152505080806106da906109f4565b91505061067e565b508085525050505090565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131d54606090600080516020610a2f8339815191529060008167ffffffffffffffff81111561073d5761073d6109b2565b604051908082528060200260200182016040528015610766578160200160208202803683370190505b50935060005b8281101561082b57600084600101828154811061078b5761078b6109c8565b6000918252602080832060088304015460079092166004026101000a90910460e01b6001600160e01b031981168352908790526040909120549091506001600160a01b0390811690881681900361081657818785815181106107ef576107ef6109c8565b6001600160e01b03199092166020928302919091019091015283610812816109f4565b9450505b50508080610823906109f4565b91505061076c565b508352509092915050565b60006020828403121561084857600080fd5b81356001600160e01b03198116811461086057600080fd5b9392505050565b6020808252825182820181905260009190848201906040850190845b818110156108a85783516001600160a01b031683529284019291840191600101610883565b50909695505050505050565b600081518084526020808501945080840160005b838110156108ee5781516001600160e01b031916875295820195908201906001016108c8565b509495945050505050565b60006020808301818452808551808352604092508286019150828160051b87010184880160005b8381101561096857888303603f19018552815180516001600160a01b03168452870151878401879052610955878501826108b4565b9588019593505090860190600101610920565b509098975050505050505050565b60006020828403121561098857600080fd5b81356001600160a01b038116811461086057600080fd5b60208152600061086060208301846108b4565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060018201610a0657610a066109de565b5060010190565b600061ffff808316818103610a2457610a246109de565b600101939250505056fec8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131ca2646970667358221220bad802d37ebe6547b4f2b6939e0ef5031c6d75245b8ee6082136e713fcc67c9a64736f6c63430008110033608060405234801561001057600080fd5b50610245806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80638da5cb5b1461003b578063f2fde38b1461005f575b600080fd5b610043610074565b6040516001600160a01b03909116815260200160405180910390f35b61007261006d3660046101df565b6100ac565b005b60006100a77fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131f546001600160a01b031690565b905090565b6100b46100c0565b6100bd8161014a565b50565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c600301546001600160a01b03163314610148577fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131f5460408051600162bed83560e01b031981523360048201526001600160a01b039092166024830152519081900360440190fd5b565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131f80546001600160a01b031981166001600160a01b038481169182179093556040517fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c939092169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b6000602082840312156101f157600080fd5b81356001600160a01b038116811461020857600080fd5b939250505056fea2646970667358221220311e6e04ef54fc24be0efeab84bf338f33e0484f4b5e79a5991ee5ffa521078964736f6c63430008110033608060405260405162001d4738038062001d47833981016040819052620000269162000b87565b6200004081600001516200006860201b620000991760201c565b620000608282602001518360400151620000ec60201b6200011c1760201c565b505062000fa4565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131f80546001600160a01b031981166001600160a01b0384811691821790935560405160008051602062001c93833981519152939092169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b60005b83518110156200027e57600084828151811062000110576200011062000d45565b6020026020010151604001519050600085838151811062000135576200013562000d45565b60200260200101516000015190508151600003620001765760405163e767f91f60e01b81526001600160a01b03821660048201526024015b60405180910390fd5b60008684815181106200018d576200018d62000d45565b602002602001015160200151905060006002811115620001b157620001b162000d5b565b816002811115620001c657620001c662000d5b565b03620001de57620001d88284620002cd565b62000265565b6001816002811115620001f557620001f562000d5b565b036200020757620001d8828462000493565b60028160028111156200021e576200021e62000d5b565b036200023057620001d882846200063a565b80600281111562000245576200024562000d5b565b604051633ff4d20f60e11b815260ff90911660048201526024016200016d565b5050508080620002759062000d87565b915050620000ef565b507f8faa70878671ccd212d20771b795c50af8fd3ff6cf27f4bde57e5d4de0aeb673838383604051620002b49392919062000e18565b60405180910390a1620002c88282620008de565b505050565b6001600160a01b038216620002f957806040516302b8da0760e21b81526004016200016d919062000ee8565b60008051602062001cff833981519152546040805160608101909152602480825260008051602062001c938339815191529291620003439186919062001cb36020830139620009b0565b60005b83518110156200048c57600084828151811062000367576200036762000d45565b6020908102919091018101516001600160e01b031981166000908152918690526040909120549091506001600160a01b03168015620003c65760405163ebbf5d0760e01b81526001600160e01b0319831660048201526024016200016d565b6040805180820182526001600160a01b03808a16825261ffff80881660208085019182526001600160e01b0319881660009081528b8252958620945185549251909316600160a01b026001600160b01b0319909216929093169190911717909155600180880180549182018155835291206008820401805460e085901c60046007909416939093026101000a92830263ffffffff909302191691909117905583620004718162000f04565b94505050508080620004839062000d87565b91505062000346565b5050505050565b60008051602062001c938339815191526001600160a01b038316620004cf578160405163cd98a96f60e01b81526004016200016d919062000ee8565b620004f48360405180606001604052806028815260200162001d1f60289139620009b0565b60005b82518110156200063457600083828151811062000518576200051862000d45565b6020908102919091018101516001600160e01b031981166000908152918590526040909120549091506001600160a01b03163081036200057857604051632901806d60e11b81526001600160e01b0319831660048201526024016200016d565b856001600160a01b0316816001600160a01b031603620005b857604051631ac6ce8d60e11b81526001600160e01b0319831660048201526024016200016d565b6001600160a01b038116620005ed57604051637479f93960e01b81526001600160e01b0319831660048201526024016200016d565b506001600160e01b031916600090815260208390526040902080546001600160a01b0319166001600160a01b038616179055806200062b8162000d87565b915050620004f7565b50505050565b60008051602062001cff8339815191525460008051602062001c93833981519152906001600160a01b03841615620006915760405163d091bc8160e01b81526001600160a01b03851660048201526024016200016d565b60005b83518110156200048c576000848281518110620006b557620006b562000d45565b6020908102919091018101516001600160e01b0319811660009081528683526040908190208151808301909252546001600160a01b038116808352600160a01b90910461ffff1693820193909352909250906200073257604051637a08a22d60e01b81526001600160e01b0319831660048201526024016200016d565b8051306001600160a01b03909116036200076c57604051630df5fd6160e31b81526001600160e01b0319831660048201526024016200016d565b83620007788162000f28565b94505083816020015161ffff16146200085d576000856001018581548110620007a557620007a562000d45565b90600052602060002090600891828204019190066004029054906101000a900460e01b90508086600101836020015161ffff1681548110620007eb57620007eb62000d45565b600091825260208083206008830401805463ffffffff60079094166004026101000a938402191660e09590951c92909202939093179055838201516001600160e01b03199390931681529087905260409020805461ffff60a01b1916600160a01b61ffff909316929092029190911790555b8460010180548062000873576200087362000f42565b60008281526020808220600860001990940193840401805463ffffffff600460078716026101000a0219169055919092556001600160e01b0319909316815291859052506040902080546001600160b01b031916905580620008d58162000d87565b91505062000694565b6001600160a01b038216620008f1575050565b620009168260405180606001604052806028815260200162001cd760289139620009b0565b600080836001600160a01b03168360405162000933919062000f58565b600060405180830381855af49150503d806000811462000970576040519150601f19603f3d011682016040523d82523d6000602084013e62000975565b606091505b5091509150816200063457805115620009915780518082602001fd5b838360405163192105d760e01b81526004016200016d92919062000f76565b813b6000819003620002c857828260405163919834b960e01b81526004016200016d92919062000f76565b634e487b7160e01b600052604160045260246000fd5b604051606081016001600160401b038111828210171562000a165762000a16620009db565b60405290565b604051601f8201601f191681016001600160401b038111828210171562000a475762000a47620009db565b604052919050565b60006001600160401b0382111562000a6b5762000a6b620009db565b5060051b60200190565b80516001600160a01b038116811462000a8d57600080fd5b919050565b60005b8381101562000aaf57818101518382015260200162000a95565b50506000910152565b60006060828403121562000acb57600080fd5b62000ad5620009f1565b905062000ae28262000a75565b8152602062000af381840162000a75565b8282015260408301516001600160401b038082111562000b1257600080fd5b818501915085601f83011262000b2757600080fd5b81518181111562000b3c5762000b3c620009db565b62000b50601f8201601f1916850162000a1c565b9150808252868482850101111562000b6757600080fd5b62000b788185840186860162000a92565b50604084015250909392505050565b6000806040838503121562000b9b57600080fd5b82516001600160401b038082111562000bb357600080fd5b818501915085601f83011262000bc857600080fd5b8151602062000be162000bdb8362000a4f565b62000a1c565b82815260059290921b8401810191818101908984111562000c0157600080fd5b8286015b8481101562000d115780518681111562000c1e57600080fd5b87016060818d03601f1901121562000c3557600080fd5b62000c3f620009f1565b62000c4c86830162000a75565b815260408201516003811062000c6157600080fd5b8187015260608201518881111562000c7857600080fd5b8083019250508c603f83011262000c8e57600080fd5b8582015162000ca162000bdb8262000a4f565b81815260059190911b830160400190878101908f83111562000cc257600080fd5b6040850194505b8285101562000cfb5784516001600160e01b03198116811462000ceb57600080fd5b8252938801939088019062000cc9565b6040840152505084525091830191830162000c05565b509188015191965090935050508082111562000d2c57600080fd5b5062000d3b8582860162000ab8565b9150509250929050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60006001820162000d9c5762000d9c62000d71565b5060010190565b600081518084526020808501945080840160005b8381101562000ddf5781516001600160e01b0319168752958201959082019060010162000db7565b509495945050505050565b6000815180845262000e0481602086016020860162000a92565b601f01601f19169290920160200192915050565b6000606080830181845280875180835260808601915060808160051b87010192506020808a016000805b8481101562000eb657898703607f19018652825180516001600160a01b03168852848101516003811062000e8457634e487b7160e01b84526021600452602484fd5b8886015260409081015190880189905262000ea28989018262000da3565b975050948301949183019160010162000e42565b5050506001600160a01b038916908701525050838103604085015262000edd818662000dea565b979650505050505050565b60208152600062000efd602083018462000da3565b9392505050565b600061ffff80831681810362000f1e5762000f1e62000d71565b6001019392505050565b60008162000f3a5762000f3a62000d71565b506000190190565b634e487b7160e01b600052603160045260246000fd5b6000825162000f6c81846020870162000a92565b9190910192915050565b6001600160a01b038316815260406020820181905260009062000f9c9083018462000dea565b949350505050565b610cdf8062000fb46000396000f3fe60806040523661000b57005b600080356001600160e01b0319168152600080516020610c16833981519152602081905260409091205481906001600160a01b031680610075576000356001600160e01b031916604051630a82dd7360e31b815260040161006c9190610971565b60405180910390fd5b3660008037600080366000845af43d6000803e808015610094573d6000f35b3d6000fd5b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131f80546001600160a01b031981166001600160a01b03848116918217909355604051600080516020610c16833981519152939092169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b60005b835181101561028157600084828151811061013c5761013c610986565b6020026020010151604001519050600085838151811061015e5761015e610986565b602002602001015160000151905081516000036101995760405163e767f91f60e01b81526001600160a01b038216600482015260240161006c565b60008684815181106101ad576101ad610986565b6020026020010151602001519050600060028111156101ce576101ce61099c565b8160028111156101e0576101e061099c565b036101f4576101ef82846102cc565b61026b565b60018160028111156102085761020861099c565b03610217576101ef8284610487565b600281600281111561022b5761022b61099c565b0361023a576101ef82846105fc565b80600281111561024c5761024c61099c565b604051633ff4d20f60e11b815260ff909116600482015260240161006c565b5050508080610279906109c8565b91505061011f565b507f8faa70878671ccd212d20771b795c50af8fd3ff6cf27f4bde57e5d4de0aeb6738383836040516102b593929190610a31565b60405180910390a16102c78282610883565b505050565b6001600160a01b0382166102f557806040516302b8da0760e21b815260040161006c9190610b31565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131d5460408051606081019091526024808252600080516020610c16833981519152929161034c91869190610c366020830139610949565b60005b835181101561048057600084828151811061036c5761036c610986565b6020908102919091018101516001600160e01b031981166000908152918690526040909120549091506001600160a01b031680156103bf578160405163ebbf5d0760e01b815260040161006c9190610971565b6040805180820182526001600160a01b03808a16825261ffff80881660208085019182526001600160e01b0319881660009081528b8252958620945185549251909316600160a01b026001600160b01b0319909216929093169190911717909155600180880180549182018155835291206008820401805460e085901c60046007909416939093026101000a92830263ffffffff90930219169190911790558361046881610b7f565b94505050508080610478906109c8565b91505061034f565b5050505050565b600080516020610c168339815191526001600160a01b0383166104bf578160405163cd98a96f60e01b815260040161006c9190610b31565b6104e183604051806060016040528060288152602001610c8260289139610949565b60005b82518110156105f657600083828151811061050157610501610986565b6020908102919091018101516001600160e01b031981166000908152918590526040909120549091506001600160a01b03163081036105555781604051632901806d60e11b815260040161006c9190610971565b856001600160a01b0316816001600160a01b0316036105895781604051631ac6ce8d60e11b815260040161006c9190610971565b6001600160a01b0381166105b25781604051637479f93960e01b815260040161006c9190610971565b506001600160e01b031916600090815260208390526040902080546001600160a01b0319166001600160a01b038616179055806105ee816109c8565b9150506104e4565b50505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131d54600080516020610c16833981519152906001600160a01b038416156106615760405163d091bc8160e01b81526001600160a01b038516600482015260240161006c565b60005b835181101561048057600084828151811061068157610681610986565b6020908102919091018101516001600160e01b0319811660009081528683526040908190208151808301909252546001600160a01b038116808352600160a01b90910461ffff1693820193909352909250906106f25781604051637a08a22d60e01b815260040161006c9190610971565b8051306001600160a01b03909116036107205781604051630df5fd6160e31b815260040161006c9190610971565b8361072a81610ba0565b94505083816020015161ffff161461080857600085600101858154811061075357610753610986565b90600052602060002090600891828204019190066004029054906101000a900460e01b90508086600101836020015161ffff168154811061079657610796610986565b600091825260208083206008830401805463ffffffff60079094166004026101000a938402191660e09590951c92909202939093179055838201516001600160e01b03199390931681529087905260409020805461ffff60a01b1916600160a01b61ffff909316929092029190911790555b8460010180548061081b5761081b610bb7565b60008281526020808220600860001990940193840401805463ffffffff600460078716026101000a0219169055919092556001600160e01b0319909316815291859052506040902080546001600160b01b03191690558061087b816109c8565b915050610664565b6001600160a01b038216610895575050565b6108b782604051806060016040528060288152602001610c5a60289139610949565b600080836001600160a01b0316836040516108d29190610bcd565b600060405180830381855af49150503d806000811461090d576040519150601f19603f3d011682016040523d82523d6000602084013e610912565b606091505b5091509150816105f65780511561092c5780518082602001fd5b838360405163192105d760e01b815260040161006c929190610be9565b813b60008190036102c757828260405163919834b960e01b815260040161006c929190610be9565b6001600160e01b031991909116815260200190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600182016109da576109da6109b2565b5060010190565b60005b838110156109fc5781810151838201526020016109e4565b50506000910152565b60008151808452610a1d8160208601602086016109e1565b601f01601f19169290920160200192915050565b60006060808301818452808751808352608092508286019150828160051b8701016020808b0160005b84811015610b0157898403607f19018652815180516001600160a01b03168552838101518986019060038110610aa057634e487b7160e01b600052602160045260246000fd5b868601526040918201519186018a905281519081905290840190600090898701905b80831015610aec5783516001600160e01b0319168252928601926001929092019190860190610ac2565b50978501979550505090820190600101610a5a565b50506001600160a01b038a16908801528681036040880152610b238189610a05565b9a9950505050505050505050565b6020808252825182820181905260009190848201906040850190845b81811015610b735783516001600160e01b03191683529284019291840191600101610b4d565b50909695505050505050565b600061ffff808316818103610b9657610b966109b2565b6001019392505050565b600081610baf57610baf6109b2565b506000190190565b634e487b7160e01b600052603160045260246000fd5b60008251610bdf8184602087016109e1565b9190910192915050565b6001600160a01b0383168152604060208201819052600090610c0d90830184610a05565b94935050505056fec8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c4c69624469616d6f6e644375743a2041646420666163657420686173206e6f20636f64654c69624469616d6f6e644375743a205f696e6974206164647265737320686173206e6f20636f64654c69624469616d6f6e644375743a205265706c61636520666163657420686173206e6f20636f6465a2646970667358221220a5b81e6c00767205b7a29dcd818463fbe4c807c60a8049567db9de6ac0a7d2d864736f6c63430008110033c8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c4c69624469616d6f6e644375743a2041646420666163657420686173206e6f20636f64654c69624469616d6f6e644375743a205f696e6974206164647265737320686173206e6f20636f6465c8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131d4c69624469616d6f6e644375743a205265706c61636520666163657420686173206e6f20636f6465a264697066735822122089757b5d09b35503e7bac6a5f83e60215359d649eea38b77825f752326f59ad564736f6c63430008110033";

type DiamondFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DiamondFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DiamondFactory__factory extends ContractFactory {
  constructor(...args: DiamondFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DiamondFactory> {
    return super.deploy(overrides || {}) as Promise<DiamondFactory>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DiamondFactory {
    return super.attach(address) as DiamondFactory;
  }
  override connect(signer: Signer): DiamondFactory__factory {
    return super.connect(signer) as DiamondFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DiamondFactoryInterface {
    return new utils.Interface(_abi) as DiamondFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DiamondFactory {
    return new Contract(address, _abi, signerOrProvider) as DiamondFactory;
  }
}