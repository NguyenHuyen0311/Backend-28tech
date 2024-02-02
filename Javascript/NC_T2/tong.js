export const tong = (a, b, callback) => {
    setTimeout(() => {
        const result = a + b;
        console.log(result);

        callback(result);
    }, 2000);
};