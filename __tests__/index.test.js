const convertArrayToString = require("../src/index");

describe('index', () => {
    const array = [
        {
            data: [1,2,3,4,5,6,7,8],
            result: '1-8',
        },
        {
            data: [1,3,4,5,6,7,8],
            result: '1,3-8',
        },
        {
            data: [1,3,4,5,6,7,8,10,11,12],
            result: '1,3-8,10-12',
        },
        {
            data: [1,2,3],
            result: '1-3',
        },
        {
            data: [1,2],
            result: '1,2',
        },
        {
            data: [1,2,4],
            result: '1,2,4',
        },
        {
            data: [1,2,4,5,6],
            result: '1,2,4-6',
        },
        {
            data: [1,2,3,7,8,9,15,17,19,20,21],
            result: '1-3,7-9,15,17,19-21',
        },
        {
            data: [1,2,3,4,5,6,100,1091,1999,2000,2001,2002],
            result: '1-6,100,1091,1999-2002',
        },
        {
            data: [1],
            result: '1',
        },
        {
            data: [1,3,5,7,9,11],
            result: '1,3,5,7,9,11',
        },

    ];

    it('check behavior of function', () => {
        array.forEach( async (el) => {
            const res = await convertArrayToString(el['data']);
            expect(res).toEqual(el['result']);
        });

    })
});
