/**
 * Created by Ian on 2016/10/27.
 */
'user strict';

// import crypto from 'crypto';
 import * as  CryptoJS from 'crypto-js';


const aes = {
    key:'ziwow.api.com.cn',//加密key
    // key:'1231231231231232',//加密key
    // iv:'12312231231231232',//加密key
    iv:'ziwow.api.com.cn',//加密向量
};
const logger = console;
/**
 * 加密算法
 * @param sSrc 加密内容
 * @param sKey 加密key
 * @param siv  加密向量
 * @return
 * @throws Exception
 */
let encryptAES=(sSrc,sKey=aes.key,siv=aes.iv)=>{
    if (sKey == null) {
        console.log("Key为空null");
        return null;
    }
    // 判断Key是否为16位
    if (sKey.length != 16) {
        console.log("Key长度不是16位");
        return null;
    }
    // 判断加密向量16位
    if(siv==null){
        console.log("加密向量iv为空null");
        return null;
    }
    var algorithm = 'aes-128-ecb';
    var key = sKey;
    var clearEncoding = 'utf8';
    var iv = siv;
    //var cipherEncoding = 'hex';
    //If the next line is uncommented, the final cleartext is wrong.
    // var cipherEncoding = 'base64';
    // var cipher = crypto.createCipheriv(algorithm, key,iv);
    // var cipherChunks = [];
    // cipherChunks.push(cipher.update(data, clearEncoding, cipherEncoding));
    // cipherChunks.push(cipher.final(cipherEncoding));
    // console.log(cipherEncoding + ' ciphertext: ' + cipherChunks.join(''));
    // var decipher = crypto.createDecipheriv(algorithm, key,iv);
    // var plainChunks = [];
    // for (var i = 0;i < cipherChunks.length;i++) {
    //     plainChunks.push(decipher.update(cipherChunks[i], cipherEncoding, clearEncoding));
    // }
    // plainChunks.push(decipher.final(clearEncoding));
    // console.log("UTF8 plaintext deciphered: " + plainChunks.join(''));
    // return plainChunks.join('')
    // return  Base64.encode(encrypted);//使用BASE64做转码功能，同时能起到2次加密的作用。
    // try {
    //     var output_encoding = 'base64';//有可能是base64可以是 'binary', 'base64' 或'hex'。默认为 'binary'
    //     var input_encoding = 'utf8';//'utf8', 'ascii' 或 'binary'默认binary
    //     var secretKey=key;
    //     var data = sSrc;
    //     var cipher = crypto.createCipheriv('aes-128-cbc', secretKey, iv);
    //     return cipher.update(data, input_encoding, output_encoding) + cipher.final(output_encoding);
    // } catch (e) {
    //     logger.error('aesEncrypt error: ' + e);
    //     return '';
    // }
    var data = sSrc;
    var key  = CryptoJS.enc.Latin1.parse(aes.key);
    var iv   = CryptoJS.enc.Latin1.parse(aes.iv);
    //加密
    var encrypted = CryptoJS.AES.encrypt(data,key,{iv:iv,mode:CryptoJS.mode.CBC,padding:CryptoJS.pad.ZeroPadding});
    return encrypted
};
//
//
let decryptAES=(data)=>{
    // try {
    //     var output_encoding = 'base64';//有可能是base64可以是 'binary', 'base64' 或'hex'。默认为 'binary'
    //     var input_encoding = 'utf8';//'utf8', 'ascii' 或 'binary'默认binary
    //     var secretKey = aes.key;
    //     let iv = aes.iv;
    //     var decipher = crypto.createDecipheriv('aes-128-cbc', secretKey, iv);
    //     return decipher.update(data, output_encoding, input_encoding) + decipher.final(input_encoding);
    // } catch (err) {
    //     logger.error('aseDecrypt error: ' + err);
    //     return '';
    // }
    // var data = d;
    var key  = CryptoJS.enc.Latin1.parse(aes.key);
    var iv   = CryptoJS.enc.Latin1.parse(aes.iv);
    //解密
    var decrypted = CryptoJS.AES.decrypt(data,key,{iv:iv,mode:CryptoJS.mode.CBC,padding:CryptoJS.pad.ZeroPadding});
    console.log(decrypted.toString(CryptoJS.enc.Utf8));
    return decrypted.toString(CryptoJS.enc.Utf8);
};
// let AES={
//     encrypt:encryptAES,
//     decrypt:decryptAES
// }
export {encryptAES,decryptAES };