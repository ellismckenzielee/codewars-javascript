/*
Can You Keep a Secret? kata
https://www.codewars.com/kata/5351b35ebaeb67f9110012d2
*/

function createSecretHolder(secret) {
  return  {
    _secret: secret,
    getSecret (){return this._secret},
    setSecret (secret) {this._secret = secret}
  }
}
