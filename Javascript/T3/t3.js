// Function (Hàm)
    // Declaration function (Hàm định nghĩa)
        // var ketQua = tinhTong(10, 20, 30, 40, 50);
        // console.log(ketQua);

        // function tinhTong(a, b, c, d, e) {
        //     console.log(arguments); // có sẵn
        //     let tong = 0;
        //     for (const item of arguments) {
        //         tong += item;
        //     }
        //     return tong;
        // }

        // var ketQua = tinhTong(10, 20, 30, 40, 50);
        // console.log(ketQua);

    // Expression function (Hàm biểu thức)
        // var tinhTong = function (a, b, c, d, e) {
        //     console.log(arguments); // có sẵn
        //     let tong = 0;
        //     for (const item of arguments) {
        //         tong += item;
        //     }
        //     return tong;
        // }

        // var ketQua = tinhTong(10, 20, 30, 40, 50);
        // console.log(ketQua);

    // Arrow function (Hàm mũi tên)
        // var tinhTong = (a, b) => {
        //     return a + b;
        // }

        // var ketQua = tinhTong(10, 20);
        // console.log(ketQua);

        // var tinhTong = (...arguments) => {
        //     console.log(arguments); // có sẵn
        //     let tong = 0;
        //     for (const item of arguments) {
        //         tong += item;
        //     }
        //     return tong;
        // }

        // var ketQua = tinhTong(10, 20, 30, 40, 50);
        // console.log(ketQua);

    // Ví dụ 1: Tổng các số chẵn
        // var mang = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        // const tongSoChan = (array) => {
        //     console.log(array);
        //     let tong = 0;
        //     for (const item of array) {
        //         if(item % 2 == 0) {
        //             tong += item;
        //         }
        //     }
        //     return tong;
        // }

        // const ketQua = tongSoChan(mang);
        // console.log(ketQua);

    // Ví dụ 2: Tính giá trị bieuThuc = 1/n + 2/n + 3/n + ... + n/n
        // const bieuThuc = (n) => {
        //     let tong = 0;
        //     for (let i = 1; i <= n; i++) {
        //         tong += i/n;
        //     }
        //     return tong;
        // }

        // let n = 0;

        // do {
        //     n = prompt("Nhập giá trị của n: ");
        //     parseInt(n);

        //     if (n < 0) {
        //         console.log("Vui lòng nhập số lớn hơn 0")
        //     }else {
        //         const ketQua = bieuThuc(n);
        //         console.log(ketQua);
        //     }
        // } while (n <= 0);
        // console.log()

// Try Catch
    // var a = 10;
    // var b = 20;

    // try {
    //     console.log(a);
    // } catch (error) {
    //     console.log(error);
    // } finally {
    //     console.log("OK");
    // }
    // console.log(b);

// Thêm và Xóa 1 key
    // var infoUser = {
    //     fullName: "Nguyễn Thị Huyền",
    //     age: 20,
    //     password: "123456"
    // };

    // Thêm
        // var school = "Trường Đại học Công nghệ Đông Á";
        // infoUser["school"] = school;
        // infoUser.phone = "0966556026";
        // infoUser["email"] = "huyenmeroria@gmail.com";
        // console.log(infoUser);

    // Xóa
        // delete infoUser.password;
        // console.log(infoUser);

// Array nâng cao
    // forEach
        // const numbers = ["HTML", "CSS", "PHP", "Ruby"];

        // numbers.forEach((item, index, array) => {
        //     console.log(item);
        //     console.log(index);
        //     console.log(array);
        //     console.log("----------------");
        // });

        // const numbers = [1, 2, 3, 4, 5];

        // numbers.forEach((item, index) => {
        //     numbers[index] = item * 5;
        // });

        // console.log(numbers);

        // let tong = 0;
        // numbers.forEach((item) => {
        //     tong += item;
        // })
        // numbers.forEach(item => tong += item);
        // console.log(tong);

    // every()
        // const numbers = [1, 2, 3];
        // const ketQua = numbers.every((item) => {
        //     console.log(item);
        //     return item > 0;
        // })

        // console.log(ketQua);

        // const monHoc = [
        //     {
        //         ten: "Toán",
        //         diem: 8.6
        //     },
        //     {
        //         ten: "Lý",
        //         diem: 9.2
        //     },
        //     {
        //         ten: "Hóa",
        //         diem: 8.5
        //     },
        //     {
        //         ten: "Tin",
        //         diem: 7.8
        //     }
        // ]

        // let count = 0;
        // for(let i = 0; i < monHoc.length; i++) {
        //     if (monHoc[i].diem >= 8) {
        //         count++;
        //     }
        // }
        // if (count === monHoc.length) {
        //     console.log("Đây là học sinh giỏi!");
        // }

        // const ketQua = monHoc.every((item) => {
        //     console.log(item);
        //     return item.diem >= 8;
        // });

        // console.log(ketQua);
        // if (ketQua === true) {
        //     console.log("Đây là học sinh giỏi!");
        // }else {
        //     console.log("Đây không phải là học sinh giỏi!");
        // }

    // some()
        // const monHoc = [
        //     {
        //         ten: "Toán",
        //         diem: 8.6
        //     },
        //     {
        //         ten: "Lý",
        //         diem: 9.2
        //     },
        //     {
        //         ten: "Hóa",
        //         diem: 8.5
        //     },
        //     {
        //         ten: "Tin",
        //         diem: 3.8
        //     }
        // ]
        // const oLaiLop = monHoc.some((item) => {
        //     return item.diem < 4;
        // });

        // const oLaiLop = monHoc.some(item => item.diem < 4);

        // console.log(oLaiLop);

        // if (oLaiLop === true) {
        //     console.log("Ở lại lớp!");
        // }else {
        //     console.log("Lên lớp!");
        // }

    // find() & filter()
        // const monHoc = [
        //     {
        //         ten: "Toán",
        //         diem: 8.6
        //     },
        //     {
        //         ten: "Lý",
        //         diem: 9.2
        //     },
        //     {
        //         ten: "Hóa",
        //         diem: 8.5
        //     },
        //     {
        //         ten: "Tin",
        //         diem: 3.8
        //     },
        //     {
        //         ten: "Tin",
        //         diem: 5
        //     }
        // ]
        // const monTin = monHoc.find((item) => {
        //     return item.ten === "Tin";
        // });

        // console.log(monTin);
        // console.log(monTin.diem);

        // const monTin = monHoc.filter((item) => {
        //     return item.ten === "Tin";
        // });

        // console.log(monTin);

    // map()
        // const numbers = [1, 2, 3, 4];

        // const newNumbers1 = numbers.map((item) => {
        //     return item * 5;
        // });

        // const newNumbers2 = numbers.map((item, index) => {
        //     const newItem = index === 1 ? "Nodejs" : item;
        //     return newItem;
        // });

        // console.log(numbers);
        // console.log(newNumbers1);
        // console.log(newNumbers2); // [1, "Nodejs", 3, 4]

        // const monHoc = [
        //     {
        //         ten: "Toán",
        //         diem: 8.6
        //     },
        //     {
        //         ten: "Lý",
        //         diem: 9.2
        //     },
        //     {
        //         ten: "Hóa",
        //         diem: 8.5
        //     },
        //     {
        //         ten: "Tin",
        //         diem: 3.8
        //     }
        // ];
        // const mangHocLuc = monHoc.map((item) => {
        //     let hocLuc = "";
        //     if (item.diem >= 8) {
        //         hocLuc = "Giỏi";
        //     } else if (item.diem < 8 && item.diem >= 6.5) {
        //         hocLuc = "Khá";
        //     } else {
        //         hocLuc = "Trung bình";
        //     }
        //     return {
        //         ten: item.ten,
        //         hocLuc: hocLuc
        //     }
        // })
        // console.log(monHoc);
        // console.log(mangHocLuc);

    // reduce()
        // const numbers = [2, 6, 10, 15, 20];

        // const ketQua1 = numbers.reduce((total, item) => {
            // console.log(total);
            // console.log(item);
            // console.log("---------------");
            // return total + item;
        // })

        // console.log(ketQua1);

        // const ketQua2 = numbers.reduce((total, item) => {
        //     console.log(total);
        //     console.log(item);
        //     console.log("---------------");
        //     return total + item;
        // }, 0)

        // console.log(ketQua2);

        // const monHoc = [
        //     {
        //         ten: "Toán",
        //         diem: 8.6
        //     },
        //     {
        //         ten: "Lý",
        //         diem: 9.2
        //     },
        //     {
        //         ten: "Hóa",
        //         diem: 8.5
        //     },
        //     {
        //         ten: "Tin",
        //         diem: 3.8
        //     }
        // ];

        // const tongDiem = monHoc.reduce((total, item) => {
        //     console.log(total);
        //     console.log(item.diem);
        //     console.log("---------------");
        //     return total + item.diem;
        // }, 0);

        // console.log(tongDiem);

        