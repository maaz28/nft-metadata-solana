import theblockchainapi from 'theblockchainapi';

let defaultClient = theblockchainapi.ApiClient.instance;

// Get a free API Key Pair here: https://dashboard.blockchainapi.com/api-keys

let APIKeyID = defaultClient.authentications['APIKeyID'];
APIKeyID.apiKey = 'dXn1n1RFWnsTjCJ';

let APISecretKey = defaultClient.authentications['APISecretKey'];
APISecretKey.apiKey = 'hrOccTe0UY4bZZ4';

let apiInstance = new theblockchainapi.SolanaNFTApi();

let network = 'mainnet-beta'; // String | The network ID (devnet, mainnet-beta)
let mintAddress = "EPr4X3pqEMT7Eeu8YH9bt7uTD2PQ96rDP6NGU5PVoXaD"; // String | The mint address of the NFT

const result = await apiInstance.solanaGetNFT(network, mintAddress).then((data) => {
  console.log('API called successfully.');
  return data;
}, (error) => {
  console.error(error);
  return null;
});

console.log(result);