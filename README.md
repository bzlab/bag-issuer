# bag-issuer

BAĞ verifiable credential issuer. Şuanda [veramo framework](https://veramo.io/)'unu kullaniyor. W3C uyumlu credentialler
issue edebiliyor. bir [insomnia.json](./insomnia.json) sagladik, http api'yi insomnia kullanarak kesfedebilirsiniz. API
henuz gelistirme asamasinda, stabilite var sayilmamali.

gelistirme ortamini baslatma.

```sh
npm i
npm run dev
```

TODO

- dotenv
- Logging
- Project structure
- Deployment plani, docker

## HTTP API

### POST /issue/basic

#### Request

```json
{
  "name": "<name>",
  "did": "did:ethr:bageth:<address>"
}
```

#### Response body

```json
{
  "credential": "<w3c-compliant-credential>"
}
```

## scriptler

agent'i konfigure etmek icin cesitli scriptler.

## client

kullanim ornekleri icin basit bir client.

```sh
cd client && npm i
node index.js
```

## credential

ornek credentialler.

JWT

```json
{
  "vc": {
    "@context": ["https://www.w3.org/2018/credentials/v1"],
    "type": ["VerifiableCredential"],
    "credentialSubject": {
      "name": "saricizmelimehmetaga"
    }
  },
  "sub": "did:ethr:bageth:0xf3beac30c498d9e26865f34fcaa57dbb935b0d74",
  "nbf": 1681306523,
  "iss": "did:ethr:bageth:0x02bd50e971224fb28428b829472f60340702b94ab9239f7df3641cb95ab27f54fe"
}
```

Credential Subject

```json
{
			"name": "mehmet",
			"id": "did:ethr:bageth:0xf3beac30c498d9e26865f34fcaa57dbb935b0d74"
		},
		"issuer": {
			"id": "did:ethr:bageth:0x02bd50e971224fb28428b829472f60340702b94ab9239f7df3641cb95ab27f54fe"
		},
		"type": [
			"VerifiableCredential"
		],
		"@context": [
			"https://www.w3.org/2018/credentials/v1"
		],
		"issuanceDate": "2023-04-12T13:34:11.000Z",
		"proof": {
			"type": "JwtProof2020",
			"jwt": "eyJhbGciOiJFUzI1NksiLCJ0eXAiOiJKV1QifQ.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIl0sImNyZWRlbnRpYWxTdWJqZWN0Ijp7Im5hbWUiOiJtZWhtZXQifX0sInN1YiI6ImRpZDpldGhyOmJhZ2V0aDoweGYzYmVhYzMwYzQ5OGQ5ZTI2ODY1ZjM0ZmNhYTU3ZGJiOTM1YjBkNzQiLCJuYmYiOjE2ODEzMDY0NTEsImlzcyI6ImRpZDpldGhyOmJhZ2V0aDoweDAyYmQ1MGU5NzEyMjRmYjI4NDI4YjgyOTQ3MmY2MDM0MDcwMmI5NGFiOTIzOWY3ZGYzNjQxY2I5NWFiMjdmNTRmZSJ9.ixeJ3Bo_X-AV1bFFZ2buQJmReAY61JMT5k_1YSGd8HSwVdCDEWuezTv5503o73cfbnlqxreGAfZ3EEbai9IgMQ"
		}
```

## Mimari

![](./docs/bag_issuer.drawio.png)
