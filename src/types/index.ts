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

export interface UserContract {
  aUpvotes: BigNumber;
  answers: [];
  bestAnswerCount: BigNumber;
  comments: BigNumber[];
  id: BigNumber;
  qUpvotes: BigNumber;
  questions: BigNumber[];
  uri: string;
  userAddress: Address;
}

export interface UserMetadata {
  banner: string;
  bio: string;
  email: string;
  name: string;
  profile: string;
}
