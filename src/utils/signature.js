import CryptoJS from 'crypto-js';
import hmacSHA256 from 'crypto-js/hmac-sha256';
import Base64 from 'crypto-js/enc-base64';

function getStringToSign({method, url, body = {}, query = {}}) {
  let bodyStr = '';
  if (Object.keys(body).length) {
    bodyStr = Base64.stringify(CryptoJS.MD5(JSON.stringify(body)));
  }
  let queryStr = getQueryStr(query);
  return `${method.toUpperCase()}\n${bodyStr}\n${url}${queryStr}`;
}

function getQueryStr(query) {
  const keySorted = Object.keys(query).sort();
  const str = keySorted.reduce((prev, cur) => {
    let keyToValueStr = cur + '=' + query[cur];
    return prev ? `${prev}&${keyToValueStr}` : keyToValueStr;
  }, '');
  return str ? `?${str}` : '';
}

export default function getSignature({appSecret, method, url, body, query}) {
  const stringToSign = getStringToSign({method, url, body, query});
  const hmacDigest = Base64.stringify(hmacSHA256(stringToSign, appSecret));
  return hmacDigest;
}
