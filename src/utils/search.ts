var axios = require("axios");

const search = async (searchTerm: string) => {
  const config = {
    method: 'get',
    url: `https://api.pinata.cloud/data/pinList?status=pinned&pinStart=2023-05-27T17:30:00.000Z&metadata[name]=${searchTerm}&pageLimit=50`,
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_PINATA_SEARCH_JWT}`,
    },
  };

    const res = await axios(config);

    if (res.data.count > 0) {
        return res.data.rows;
    } else {
        return [];
    }
};

export default search;
