var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.pinata.cloud/data/pinList?status=pinned&pinStart=2023-05-27T17:30:00.000Z&metadata[title]=Q6&pageLimit=10',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI0NDExYTc2YS01ZmI1LTQ3YzQtOTIzYS05ZGZkMzI1MTExZmEiLCJlbWFpbCI6InZpamF5a3VtYXJkZXZrdGdAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjI4MTk1YmUwYTQyNDc0ZjNhZDkyIiwic2NvcGVkS2V5U2VjcmV0IjoiNTVjMjNkNzMwNzQ0OTJiMzgwNzJkMTg0OTBlNTc5OWE0YTUzNzAyMTI3MjZhZGQ5OGY4YThiZjNjMzgwMDhjNCIsImlhdCI6MTY4NTYzNzQ0N30.XRT4BGjNAYbPoZQkZaGztKBwE4DxKYUGNJiWcVM7jnU',
  },
};

const main = async () => {
  const res = await axios(config);

  if (res.data.count > 0) {
    res.data.rows.forEach(async (row) => {
      console.log(row);
      const response = await axios.get(
        `https://hackathon.mypinata.cloud/ipfs/${row.ipfs_pin_hash}`
      );
      console.log(response.data);
    });
  }
};

main();
