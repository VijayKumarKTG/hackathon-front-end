import { BigNumber } from 'ethers';

export type Address = `0x${string}` | undefined;

export interface Question {
  id: BigNumber;
  answers: any[];
  author: Address;
  bestAnswerChosen: boolean;
  comments: any[];
  downvotes: BigNumber;
  tags: BigNumber[];
  upvotes: BigNumber;
  uri: string;
}
