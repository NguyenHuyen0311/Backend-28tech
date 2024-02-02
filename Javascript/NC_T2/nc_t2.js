// import hàm kiểm tra chẵn lẻ
    // import { tong } from "./tong.js";
    // import { kiemTraChanLe } from "./kiemTraChanLe.js";
    // import { kiemTraAmDuong } from "./kiemTraAmDuong.js";

// Callbacks
    // Ví dụ 1:
        // const fun1 = () => {
        //     console.log("Việc 1");
        // }

        // const fun2 = () => {
        //     console.log("Việc 2"); // v2 -> v1
        // }

        // const fun2 = (callback) => {
        //     setTimeout(() => { // Hàm bất đồng bộ
        //         console.log("Việc 2"); // v1 -> v2
        //         callback(); // v2 -> v1
        //     }, 3000);
        // }
        // fun2(fun1); // Hàm callback

        // fun2();
        // fun1();

    // Ví dụ 2:
        // tong(10, 20, kiemTraAmDuong);
        // tong(30, 20, kiemTraChanLe);
        // tong(-40, -20, (result) => {
        //     kiemTraAmDuong(result);
        //     kiemTraChanLe(result);
        // });

// Promise
    // var a = 10; // success
    // var a; // lỗi

    // var promise = new Promise((resolve, reject) => {
    //     if (a != undefined) {
    //         resolve(a);
    //     } else {
    //         reject();
    //     }
    // });

    // promise
    //     .then((success1) => {
    //         // console.log(success1);

    //         const result = success1 + 20;
    //         return result;
    //     })
    //     .then((success2) => {
    //         const result = success2 + 20;
    //         return result;
    //     })
    //     .then((success3) => {
    //         const result = success3 + 30;
    //         console.log(result);
    //     })
    //     .catch(() => {
    //         console.log("Lỗi");
    //     })
    //     .finally(() => {
    //         console.log("Luôn vào đây");
    //     })

    // 3 trạng thái: pending, fulfilled, rejected
        // const promise = new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         resolve();
        //         // reject();
        //     }, 3000);
        // });

        // console.log(promise); // pending
        // setTimeout(() => {
        //     console.log(promise); // pending
        // }, 1000);

        // setTimeout(() => {
        //     console.log(promise); // pending
        // }, 2000);

        // setTimeout(() => {
        //     console.log(promise); // fulfilled (resolve) & rejected (reject)
        // }, 3000);

// Fetch API (trang web https://dummyjson.com/)
    // fetch("https://dummyjson.com/products") 
    //     .then((response) => {
    //         // console.log(response);
    //         return response.json();
    //     })
    //     .then((data) => {
    //         // console.log(data);
    //         console.log(data.products);
    //         const newArray = data.products.map(item => {
    //             return `
    //                 <li>${item.title} - ${item.price}</li>
    //             `;
    //         });

    //         console.log(newArray);
    //         console.log(newArray.join(""));

    //         const divProducts = document.querySelector("#products");
    //         divProducts.innerHTML = newArray.join("")
    //     })
    
// Async/Await
    // const fetchApi = async () => {
    //     const response = await fetch("https://dummyjson.com/products");
    //     // console.log(response);

    //     const data = await response.json();
    //     console.log(data);
    // }

    // fetchApi();

// JSON server & Postman
    // JSON server
        // const fetchApi = async () => {
        //     const response = await fetch("http://localhost:3000/products");
        //     const data = await response.json();
        //     console.log(data);
        // }

        // fetchApi();

    // Postman