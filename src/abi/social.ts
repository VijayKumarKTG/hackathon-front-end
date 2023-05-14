export const post_question_abi = [
  {
    inputs: [
      {
        internalType: 'uint256[]',
        name: '_tags',
        type: 'uint256[]',
      },
      {
        internalType: 'string',
        name: '_uri',
        type: 'string',
      },
      {
        internalType: 'bytes32',
        name: '_secret',
        type: 'bytes32',
      },
    ],
    name: 'postQuestion',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
