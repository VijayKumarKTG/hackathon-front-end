import axios from 'axios';

export const getPreviewImage = (file: File): string | undefined => {
  if (file) {
    try {
      return URL.createObjectURL(file);
    } catch (err) {
      if (err) return;
    }
  }
  return;
};

const PINATA_KEY = process.env.NEXT_PUBLIC_PINATA_API_KEY;
const PINATA_SECRET = process.env.NEXT_PUBLIC_PINATA_API_SECRET;
const IPFS_LINK = process.env.NEXT_PUBLIC_IPFS_LINK;

const pinFileToIPFS = async (file: File, description: string) => {
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

  let data = new FormData();
  data.append('file', file);

  const metadata = JSON.stringify({
    name: file.name,
    keyvalues: {
      name: file.name,
      description: description,
    },
  });

  data.append('pinataMetadata', metadata);

  try {
    const response = await axios.post(url, data, {
      headers: {
        'Content-Type': `multipart/form-data;`,
        pinata_api_key: PINATA_KEY,
        pinata_secret_api_key: PINATA_SECRET,
      },
    });

    return response;
  } catch (error) {
    console.log('Error', error);
  }
};

const pinJSONToIPFS = async (JSONBody: any) => {
  const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;

  let wrapJSON = {
    pinataContent: JSONBody,
  };

  try {
    const response = await axios.post(url, wrapJSON, {
      headers: {
        pinata_api_key: PINATA_KEY,
        pinata_secret_api_key: PINATA_SECRET,
      },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const uploadFileToPinata = async (file: File | null) => {
  if (!file) return '';

  try {
    let result: any = await pinFileToIPFS(file, 'Express Demo');
    if (result.status === 200) {
      return `${IPFS_LINK}${result.data.IpfsHash}`;
    } else {
      return '';
    }
  } catch (err) {
    console.log(err);
    return '';
  }
};

export const uploadJSONToPinata = async (json: any) => {
  try {
    let result: any = await pinJSONToIPFS(json);
    if (result.status === 200) {
      return `${IPFS_LINK}${result.data.IpfsHash}`;
    } else {
      return '';
    }
  } catch (err) {
    console.log(err);
    return '';
  }
};
