import { Connection, PublicKey } from "@solana/web3.js";
import { Metadata } from "@metaplex-foundation/mpl-token-metadata"; 

// tokenmeta is a PDA a which derived by mint address
// the formula is ['metadata', metadata_program_id, mint_id]
// is it totally fine to forget it because sdk already wrapped it for us

const connection = new Connection("https://api.mainnet-beta.solana.com");

(async () => {
  let mintPubkey = new PublicKey("EPr4X3pqEMT7Eeu8YH9bt7uTD2PQ96rDP6NGU5PVoXaD");
  let tokenmetaPubkey = await Metadata.getPDA(mintPubkey);

  const tokenmeta = await Metadata.load(connection, tokenmetaPubkey);
  console.log(tokenmeta);
})();