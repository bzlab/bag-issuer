/**
 * TODO basit bir verifier (agent?)
 */
import didJWT from 'did-jwt';
import { getResolver } from 'ethr-did-resolver';
import { Resolver } from 'did-resolver';
import { providers } from 'ethers';
const ETH_PROVIDER_URL = process.env.ETH_PROVIDER_URL ?? 'https://rpc.eth.bag.org.tr';
const ETH_NETWORK_NAME = process.env.ETH_NETWORK_NAME ?? 'bageth';
const ETH_NETWORK_CHAIN_ID = Number(process.env.NETWORK_CHAIN_ID) ?? 12345;
const BAGETH_REGISTRY = process.env.BAGETH_REGISTRY ?? '0x8808BeDb4bd73568D861452F69Ab03a5bd40fEec';
// did-jwt
let provider = new providers.JsonRpcProvider({
  url: ETH_PROVIDER_URL,
});
const ethrDidResolver = getResolver({
  networks: [
    {
      name: ETH_NETWORK_NAME,
      chainId: ETH_NETWORK_CHAIN_ID,
      provider: provider,
      registry: BAGETH_REGISTRY,
    },
  ],
});
const didResolver = new Resolver(ethrDidResolver);
export const resolveDid = async function (did) {
  let issuerDid = 'did:ethr:bageth:0x02bd50e971224fb28428b829472f60340702b94ab9239f7df3641cb95ab27f54fe';
  let result = await didResolver.resolve(issuerDid);
  console.log(result);
};
export const verifyJWTCredential = async function (jwt, audience) {
  let verificationResult = await didJWT.verifyJWT(jwt, {
    resolver: didResolver,
    audience: audience,
  });
  return verificationResult.verified;
};
