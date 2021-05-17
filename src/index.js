'use strict';

const convertArrayToString = async (array) => {
    return new Promise((resolve,reject) => {
        let result = "";
        let start;
        let end;

        array.forEach((el) => {
            if (!start) {
                start = el;
                end = el;
            } else {
                if (el - end === 1) {
                    end = el;
                } else {
                    if (end - start > 1) {
                        result += start + "-" + end + ",";
                    } else if (end - start === 1) {
                        result += start + "," + end + ",";
                    } else {
                        result += start + ",";
                    }

                    start = el;
                    end = el;
                }
            }

        });

        if (end - start > 1) {
            result += start + "-" + end;
        } else if (end - start === 1) {
            result += start + "," + end;
        } else {
            result += start;
        }


        resolve(result);
    });
}

module.exports = convertArrayToString;
