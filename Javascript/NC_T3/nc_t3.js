// Storage API
    // localStorage (setItem(), getItem(), remove(), clear(), key())
        // const currentMode = localStorage.getItem("mode");
        // const body = document.querySelector("body");
        // body.setAttribute("class", currentMode);

        // const buttonChangeMode = document.querySelector("#change-mode");

        // buttonChangeMode.onclick = () => {
        //     const body = document.querySelector("body");
        //     const mode = body.getAttribute("class");

        //     console.log(mode);
        //     if (mode == "dark") {
        //         body.setAttribute("class", "");
        //         localStorage.setItem("mode", "");
        //     } else {
        //         body.setAttribute("class", "dark");
        //         localStorage.setItem("mode", "dark");
        //     }
        // };

    // sessionStorage
        // const currentMode = sessionStorage.getItem("mode");
        // const body = document.querySelector("body");
        // body.setAttribute("class", currentMode);

        // const buttonChangeMode = document.querySelector("#change-mode");

        // buttonChangeMode.onclick = () => {
        //     const body = document.querySelector("body");
        //     const mode = body.getAttribute("class");

        //     console.log(mode);
        //     if (mode == "dark") {
        //         body.setAttribute("class", "");
        //         sessionStorage.setItem("mode", "");
        //     } else {
        //         body.setAttribute("class", "dark");
        //         sessionStorage.setItem("mode", "dark");
        //     }
        // };

// So Sánh localStorage, sessionStorage, cookies

// Closure (bao đóng)
    // let c = 30; // biến toàn cục

    // const tinhToan = (a, b) => {
    //     let c = 40; // biến cục bộ của hàm cha

    //     const tinhTong = () => {
    //         let c = 50; // biến cục bộ của chính nó
           
    //         return a + b + c; // kết quả lấy theo c gần nhất
    //     }

    //     const tinhHieu = () => {
    //         return a - b;
    //     }

    //     const tinhTich = () => {
    //         return a * b;
    //     }

    //     const tinhThuong = () => {
    //         return a / b;
    //     }

    //     return {
    //         tong: tinhTong,
    //         hieu: tinhHieu,
    //         tich: tinhTich,
    //         thuong: tinhThuong
    //     }
    // }

    // const phepToan = tinhToan(10, 20);
    // console.log(phepToan);
    // console.log(phepToan.tong());
    // console.log(phepToan.hieu());
    // console.log(phepToan.tich());
    // console.log(phepToan.thuong());

// Default parameters (Tham số mặc định)
    // Gán mặc định tại vị trí khai báo.
        // const sum = (a = 0, b = 0) => {
        //     return (a + b);
        // }

        // console.log(sum(10, 20)); // Trả về: 30
        // console.log(sum(10)); // Trả về: 10

    // Gán bên trong function
        // const sum = (a, b) => {
        //     a = a || 0;
        //     b = b || 0;
        //     return (a + b);
        // }

        // console.log(sum(10, 20)); // Trả về: 30
        // console.log(sum(10)); // Trả về: 10

// Spread syntax
    //  Với Array
        const array1 = [1, 2, 3];
        const array2 = [4, 5];
        
        // const array3 = array1.concat(array2);
        // console.log(array3);
        // hoặc
        // for (const item of array1) {
        //     array2.push(item);
        // }
        // console.log(array2);
        // hoặc
        // const array3 = [...array1, ...array2];
        // console.log(array3);

        // const array1 = [1, 2, 3];
        // const array2 = [...array1, 4, 5];
        // console.log(array2); // Trả về: [1, 2, 3, 4, 5]

    // Với Object
        // const object1 = {
        //     fullName: "Le Van A",
        //     phone: "0123456789"
        // }

        // const object2 = {
        //     email: "levana@gmail.com"
        // }

        // const object3 = {
        //     ...object1,
        //     ...object2
        // }

        // console.log(object3);

// Rest parameters
    // const number = (num1, num2, ...numOther) => {
    //     console.log("num1:", num1); 
    //     console.log("num2:", num2);
    //     console.log("Other:", numOther);
    // }

    // number(1, 2, 3, 4, 5, 6);
    /*
    Trả về:
    num1: 1
    num2: 2
    Other: (4) [3, 4, 5, 6]
    */

    // const number = (...allNumber) => {
    //     console.log("All:", allNumber);
    // }

    // number(1, 2, 3, 4, 5, 6);
    /*
    Trả về:
    All: (6) [1, 2, 3, 4, 5, 6]
    */

// Destructuring
    // Với Array
        // Ví dụ 1:
        // const array = [1, 2, 3];
        // const [a, b] = array;

        // console.log(a); // Trả về: 1
        // console.log(b); // Trả về: 2

        // console.log(array[0]); // Trả về: 1
        // console.log(array[1]); // Trả về: 2

        // Ví dụ 2:
        // const time = ["08", "20", "50"];

        // const hour = time[0];
        // const minute = time[1];
        // const second = time[2];

        // Cú pháp Destructuring
        // const [hour, minute, second] = time;

        // console.log(hour + " giờ");
        // console.log(minute + " phút");
        // console.log(second + " giây");

    // Với Object
        // const infoUser = {
        //     fullName: "Le Van A",
        //     phone: "0123456789"
        // }

        // const {fullName, phone} = infoUser;

        // console.log(fullName); // Trả về: "Le Van A"
        // console.log(phone); // Trả về: "0123456789"
       
        // console.log(infoUser.fullName); // Trả về: "Le Van A"
        // console.log(infoUser.phone); // Trả về: "0123456789"

    