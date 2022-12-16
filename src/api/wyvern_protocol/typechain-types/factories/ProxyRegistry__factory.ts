/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ProxyRegistry, ProxyRegistryInterface } from "../ProxyRegistry";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "DELAY_PERIOD",
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
        internalType: "uint256",
        name: "delayPeriod",
        type: "uint256",
      },
    ],
    name: "__ProxyRegistry_init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "contracts",
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
    name: "delegateProxyImplementation",
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
        name: "addr",
        type: "address",
      },
    ],
    name: "endGrantAuthentication",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
        name: "",
        type: "address",
      },
    ],
    name: "pending",
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
        name: "",
        type: "address",
      },
    ],
    name: "proxies",
    outputs: [
      {
        internalType: "contract OwnableDelegateProxy",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "registerProxy",
    outputs: [
      {
        internalType: "contract OwnableDelegateProxy",
        name: "proxy",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "revokeAuthentication",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "startGrantAuthentication",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061114b806100206000396000f3fe60806040523480156200001157600080fd5b5060043610620000e05760003560e01c80638da5cb5b1162000097578063d4e8e063116200006e578063d4e8e0631462000209578063ddd81f821462000220578063e71a02e1146200022a578063f2fde38b146200023457600080fd5b80638da5cb5b14620001a357806397204d8e14620001c9578063c455279114620001dd57600080fd5b806338b6e40714620000e557806353376d1f14620000fe5780635eebea20146200011557806369dc9ff3146200014b578063715018a61462000182578063753f1e29146200018c575b600080fd5b620000fc620000f63660046200078f565b6200024b565b005b620000fc6200010f3660046200078f565b62000330565b62000138620001263660046200078f565b60676020526000908152604090205481565b6040519081526020015b60405180910390f35b620001716200015c3660046200078f565b60686020526000908152604090205460ff1681565b604051901515815260200162000142565b620000fc6200037e565b620000fc6200019d366004620007c1565b620003b9565b6033546001600160a01b03165b6040516001600160a01b03909116815260200162000142565b606554620001b0906001600160a01b031681565b620001b0620001ee3660046200078f565b6066602052600090815260409020546001600160a01b031681565b620000fc6200021a3660046200078f565b62000488565b620001b06200051b565b6200013860695481565b620000fc620002453660046200078f565b620005f0565b6033546001600160a01b03163314620002815760405162461bcd60e51b81526004016200027890620007db565b60405180910390fd5b6001600160a01b03811660009081526068602052604090205460ff16158015620002c257506001600160a01b03811660009081526067602052604090205415155b8015620002f557506069546001600160a01b0382166000908152606760205260409020544291620002f39162000810565b105b620002ff57600080fd5b6001600160a01b0316600090815260676020908152604080832083905560689091529020805460ff19166001179055565b6033546001600160a01b031633146200035d5760405162461bcd60e51b81526004016200027890620007db565b6001600160a01b03166000908152606860205260409020805460ff19169055565b6033546001600160a01b03163314620003ab5760405162461bcd60e51b81526004016200027890620007db565b620003b7600062000692565b565b600054610100900460ff16620003d65760005460ff1615620003da565b303b155b6200043f5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840162000278565b600054610100900460ff1615801562000462576000805461ffff19166101011790555b606982905562000471620006e4565b801562000484576000805461ff00191690555b5050565b6033546001600160a01b03163314620004b55760405162461bcd60e51b81526004016200027890620007db565b6001600160a01b03811660009081526068602052604090205460ff16158015620004f557506001600160a01b038116600090815260676020526040902054155b620004ff57600080fd5b6001600160a01b03166000908152606760205260409020429055565b336000908152606660205260408120546001600160a01b0316156200053f57600080fd5b6065546040513360248201819052306044830152916001600160a01b03169060640160408051601f198184030181529181526020820180516001600160e01b031663485cc95560e01b17905251620005979062000781565b620005a59392919062000837565b604051809103906000f080158015620005c2573d6000803e3d6000fd5b5033600090815260666020526040902080546001600160a01b0319166001600160a01b038316179055919050565b6033546001600160a01b031633146200061d5760405162461bcd60e51b81526004016200027890620007db565b6001600160a01b038116620006845760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840162000278565b6200068f8162000692565b50565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff166200070e5760405162461bcd60e51b81526004016200027890620008ab565b6200071862000722565b620003b76200074c565b600054610100900460ff16620003b75760405162461bcd60e51b81526004016200027890620008ab565b600054610100900460ff16620007765760405162461bcd60e51b81526004016200027890620008ab565b620003b73362000692565b61081f80620008f783390190565b600060208284031215620007a257600080fd5b81356001600160a01b0381168114620007ba57600080fd5b9392505050565b600060208284031215620007d457600080fd5b5035919050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600082198211156200083257634e487b7160e01b600052601160045260246000fd5b500190565b600060018060a01b038086168352602081861681850152606060408501528451915081606085015260005b82811015620008805785810182015185820160800152810162000862565b8281111562000893576000608084870101525b5050601f01601f191691909101608001949350505050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b60608201526080019056fe608060405234801561001057600080fd5b5060405161081f38038061081f83398101604081905261002f916101e3565b600180546001600160a01b0319166001600160a01b0385161790556100538261011e565b6000826001600160a01b03168260405161006d91906102b3565b600060405180830381855af49150503d80600081146100a8576040519150601f19603f3d011682016040523d82523d6000602084013e6100ad565b606091505b50509050806101155760405162461bcd60e51b815260206004820152602a60248201527f4f776e61626c6544656c656761746550726f7879206661696c656420696d706c60448201526932b6b2b73a30ba34b7b760b11b606482015260840160405180910390fd5b505050506102cf565b6000546001600160a01b038281169116141561013957600080fd5b600080546001600160a01b0319166001600160a01b038316908117825560405190917fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b91a250565b80516001600160a01b038116811461019857600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b838110156101ce5781810151838201526020016101b6565b838111156101dd576000848401525b50505050565b6000806000606084860312156101f857600080fd5b61020184610181565b925061020f60208501610181565b60408501519092506001600160401b038082111561022c57600080fd5b818601915086601f83011261024057600080fd5b8151818111156102525761025261019d565b604051601f8201601f19908116603f0116810190838211818310171561027a5761027a61019d565b8160405282815289602084870101111561029357600080fd5b6102a48360208301602088016101b3565b80955050505050509250925092565b600082516102c58184602087016101b3565b9190910192915050565b610541806102de6000396000f3fe6080604052600436106100705760003560e01c80634f1ef2861161004e5780634f1ef2861461011b5780635c60da1b1461012e5780636fde82021461014c578063f1739cae1461016a57610070565b8063025313a2146100ab5780633659cfe6146100dd5780634555d5c9146100ff575b6000546001600160a01b03168061008657600080fd5b60405136600082376000803683855af43d806000843e8180156100a7578184f35b8184fd5b3480156100b757600080fd5b506100c061018a565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156100e957600080fd5b506100fd6100f83660046103d6565b6101a3565b005b34801561010b57600080fd5b50604051600281526020016100d4565b6100fd61012936600461040e565b6101d4565b34801561013a57600080fd5b506000546001600160a01b03166100c0565b34801561015857600080fd5b506001546001600160a01b03166100c0565b34801561017657600080fd5b506100fd6101853660046103d6565b6102b6565b600061019e6001546001600160a01b031690565b905090565b6101ab61018a565b6001600160a01b0316336001600160a01b0316146101c857600080fd5b6101d181610357565b50565b6101dc61018a565b6001600160a01b0316336001600160a01b0316146101f957600080fd5b610202826101a3565b6000306001600160a01b03168260405161021c91906104d0565b600060405180830381855af49150503d8060008114610257576040519150601f19603f3d011682016040523d82523d6000602084013e61025c565b606091505b50509050806102b15760405162461bcd60e51b815260206004820152601f60248201527f43616c6c206661696c65642061667465722070726f7879207570677261646500604482015260640160405180910390fd5b505050565b6102be61018a565b6001600160a01b0316336001600160a01b0316146102db57600080fd5b6001600160a01b0381166102ee57600080fd5b7f5a3e66efaa1e445ebd894728a69d6959842ea1e97bd79b892797106e270efcd961031761018a565b604080516001600160a01b03928316815291841660208301520160405180910390a1600180546001600160a01b0319166001600160a01b03831617905550565b6000546001600160a01b038281169116141561037257600080fd5b600080546001600160a01b0319166001600160a01b038316908117825560405190917fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b91a250565b80356001600160a01b03811681146103d157600080fd5b919050565b6000602082840312156103e857600080fd5b6103f1826103ba565b9392505050565b634e487b7160e01b600052604160045260246000fd5b6000806040838503121561042157600080fd5b61042a836103ba565b9150602083013567ffffffffffffffff8082111561044757600080fd5b818501915085601f83011261045b57600080fd5b81358181111561046d5761046d6103f8565b604051601f8201601f19908116603f01168101908382118183101715610495576104956103f8565b816040528281528860208487010111156104ae57600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b6000825160005b818110156104f157602081860181015185830152016104d7565b81811115610500576000828501525b50919091019291505056fea2646970667358221220f0601af95b8bdbe26f4a736d0159a09efcc7531bbbe981555d126372ef3a0d3264736f6c634300080b0033a26469706673582212205cb5db4d0adf4c3c99b3dfbdca530b2e99a6d7f7ca65998f3ca32f1c60a2830564736f6c634300080b0033";

type ProxyRegistryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ProxyRegistryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ProxyRegistry__factory extends ContractFactory {
  constructor(...args: ProxyRegistryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ProxyRegistry> {
    return super.deploy(overrides || {}) as Promise<ProxyRegistry>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ProxyRegistry {
    return super.attach(address) as ProxyRegistry;
  }
  connect(signer: Signer): ProxyRegistry__factory {
    return super.connect(signer) as ProxyRegistry__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ProxyRegistryInterface {
    return new utils.Interface(_abi) as ProxyRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ProxyRegistry {
    return new Contract(address, _abi, signerOrProvider) as ProxyRegistry;
  }
}