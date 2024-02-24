import * as crypto from "crypto"

async function hashToken(token:  string) {
    const hash = crypto.createHash('sha512')
    const hashedToken = hash.update(token).digest('hex');
    return hashedToken

}

export default hashToken;