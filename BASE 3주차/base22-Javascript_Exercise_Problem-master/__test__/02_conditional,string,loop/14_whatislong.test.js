const verify = require('../../02_conditional,string,loop/14_whatislong');

describe('verify', () => {
    test("If 'a', 'b', 'cd' are given, it should return \"cd\"", () => {
        expect(verify('a', 'b', 'cd')).toEqual('cd');
    });

    test("If 'aaa', 'aaaaa', 'aaa' are given, it should return \"aaaaa\"", () => {
        expect(verify('aaa', 'aaaaa', 'aaa')).toEqual('aaaaa');
    });
    test("If 'aaa', 'aaaaa', 'abcde' are given, it should return \"abcde\"", () => {
        expect(verify('aaa', 'aaaaa', 'abcde')).toEqual('abcde');
    });
});
