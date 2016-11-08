/**
 * Created by Ian on 2016/10/28.
 */
import expect from 'expect';
import {encryptAES,decryptAES } from '../src/server/utils/tools';
console.log(encryptAES);
const testData={
    msg : '{"openid":"oR0mXjofGiu72rGCIFxylblt7PBc","access_token":"gh_7c34b25bad28"}',
    res:'xYbTX6p3xlEtULvyo/fsW5+XiOS0y/3SNm/XSpPgXsXBLjpBJcCi5VLI0cbS27jeRhzUcO/qHpGYJTw6oIMZXvuL7Z5pH6UGJnT/yCboK44='
}
describe('crypto', () => {
    it('should be ', () => {
        const message = testData.msg;
        const expectedres=testData.res;
        let res = encryptAES(message);

        expect(res).toEqual(expectedres);
    });

    it('source string',()=>{
        let res = decryptAES(testData.res);
        expect(res).toEqual(testData.msg);
    })

});