/**
 * npx ts-node
 */

import { resolveDid, verifyJWTCredential } from './agent.js';

async function main() {
  let issuerDid = 'did:ethr:bageth:0x02bd50e971224fb28428b829472f60340702b94ab9239f7df3641cb95ab27f54fe';
  resolveDid(issuerDid);
  let response = await fetch('http://localhost:3000/issue/basic', {
    method: 'POST',
    body: JSON.stringify({
      name: 'saricizmelimehmetaga',
      did: 'did:ethr:bageth:0xf3beac30c498d9e26865f34fcaa57dbb935b0d74',
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  let credential = (await response.json()).credential;
  console.log(credential);
  let jwtProof = credential.proof.jwt; // jwt aslinda bir proof type'i 🤔
  // console.log(jwtProof);
  // console.log(await response.json());
  let result = await verifyJWTCredential(jwtProof, issuerDid);
  console.log(JSON.stringify(result, null, 2));
}

main().catch(console.log);
