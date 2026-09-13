// crypto - built in module syste for security related stuffs

// usecases: 
// creating random ids, uuid, create secure token.
// hashing data, to verify if the data was changed or not...
// encryption and decryption

import crypto from 'node:crypto'

// UUID -> universally unique identifier -> 128 bit level
// when we need unique id, for ex: user id, order id, session id, 
 
const requestId = crypto.randomUUID();

console.log(requestId)


// crypto.randomBytes()
// USECASE
// for password reset token, email verification, session secret, api keys...
crypto.randomBytes(16).toString('hex') // give me 16 random bytes... after converting it into hex  1 byte = 2 chars, 16 byte = 32 charecters...
// SO THIS GIVES 32 BYTES CHARECTERS

// fixed length string: convert 'hello' to hashing,
// hashing is one way => we cant convert it into original input
const text = 'hello node'

const hash = crypto.createHash('sha256').update(text).digest('hex')
console.log(hash)

// hash based message authentication code or secret key, 
// crypto.createHmac()

// in normal hash, data -> hash
// in hmac -> data + secret -> signed hash...

// webhook: signed tokens
const secretKey = 'super-secret-key'
const message = 'user_id=1'

const signature = crypto.createHmac('sha256', secretKey).update(message).digest('hex')
