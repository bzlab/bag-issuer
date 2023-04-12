import { agent, identifier } from '../agent/agent.js';
// TODO logging
export const issueBasicCredential = async (req, res, next) => {
    const { name, did } = req.body;
    if (name === undefined || did === undefined) {
        res.status(400).send({ errorMessage: 'credential payload error' });
        return;
    }
    agent
        .createVerifiableCredential({
        credential: {
            issuer: { id: identifier.did },
            credentialSubject: {
                id: did,
                name: name,
            },
        },
        proofFormat: 'jwt',
    })
        .then((credential) => {
        // console.log(JSON.stringify(credential, null, 2));
        res.json({ credential: credential });
    })
        .catch((error) => {
        next(error); // error handler middleware'ine gonder
    });
};
