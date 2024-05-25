// if else
    // var a = 10; 
    // var b = 20;

    // if (a > b) {
    //     console.log("a lớn hơn b");
    // } else {
    //     console.log("a nhỏ hơn hoặc bằng b");
    // }

    // var diemThi = 7;
    // var ketQua = "";

    // if (diemThi >= 9) {
    //     ketQua = "Học sinh xuất sắc";
    // }
    // else if (diemThi < 9 && diemThi >= 8) {
    //     ketQua = "Học sinh giỏi";
    // }
    // else if (diemThi >= 6.5 && diemThi < 8) {
    //     ketQua = "Học sinh khá";
    // }
    // else if (diemThi < 6.5 && diemThi >=4) {
    //     ketQua = "Học sinh trung bình";
    // }
    // else {
    //     ketQua = "Học sinh yếu";
    // }

    // console.log(ketQua);

// if else toán tử 3 ngôi
    // var tuoi = 20;
    // var ketQua = tuoi >= 18 ? "Bạn được truy cập vào trang web" : "Bạn không được truy cập vào trang web";
    // console.log(ketQua);

// Switch Case
    // var number = 5;
    // switch (number) {
    //     case 0:
    //         console.log("Số 0");
    //         break;
    //     case 1:
    //         console.log("Số 1");
    //         break;
    //     case 2:
    //         console.log("Số 2");
    //         break;
    //     case 3:
    //         console.log("Số 3");
    //         break;
    //     case 4:
    //         console.log("Số 4");
    //         break;
    //     case 5:
    //         console.log("Số 5");
    //         break;
    //     default:
    //         console.log("Trường hợp khác");
    //         break;
    // }

    // var string = "Hello";
    // switch (string) {
    //     case "Hello":
    //     case "Hi":
    //         console.log("Xin chào");
    //         break;
    //     case "Bye":
    //         console.log("Tạm biệt");
    //         break;
    //     default:
    //         break;
    // }

// Vòng lặp For
    // var ketQua = "";
    // for(var i = 0; i < 10; i++) {
    //     ketQua += i + " ";
    // }
    // console.log(ketQua);

    // for(var i = 0; i < 10; i+=3) {
    //     console.log(i);
    // }

    // for(var i = 9; i >= 0; i--) {
    //     console.log(i);
    // }

    // for(var i = 9; i >= 0; i-= 2) {
    //     console.log(i);
    // }

    // for(var i = 0; i < 10; i++) {
    //     for(var j = 0; j < 10; j++) {
    //         console.log(`Hàng ${i} - Cột ${j}`);
    //     }
    // }

// Vòng lặp For In (Object)
    // var inforUser = {
    //     fullName: "Nguyễn Thị Huyền",
    //     phone: "0966556026",
    //     email: "huyenmeroria@gmail.com"
    // }

    // for (key in inforUser) {
    //     console.log(key);
    //     console.log(inforUser[key]); // Lấy ra giá trị
    // }
    // var key = "fullName";
    // console.log(inforUser.fullName);
    // console.log(inforUser["fullName"]);
    // console.log(inforUser[key]);
    // console.log(inforUser.key); // undefined

// Vòng lặp For Of (Array, String)
    // var listUser = [
    //     "Nguyễn Thị Huyền",
    //     "Phạm Hoài Nam",
    //     "Nguyễn Đức Luật"
    // ];

    // for(var i = 0; i < listUser.length; i++) {
    //     console.log(listUser[i]);
    // }

    // for (var item of listUser) {
    //     console.log(item);
    // }

    // var listUser = [
    //     {
    //         fullName: "Nguyễn Thị Huyền",
    //         age: 20
    //     },
    //     {
    //         fullName: "Phạm Hoài Nam",
    //         age: 19
    //     },
    //     {
    //         fullName: "Nguyễn Đức Luật",
    //         age: 22
    //     }
    // ];

    // for (var item of listUser) {
    //     console.log(item);
    //     for (key in item) {
    //         console.log(item[key]);
    //     }
    //     console.log("----------------");
    // }

// Vòng lặp While và do while
    // var i = 2;
    // while (i < 3) {
    //     console.log(i);
    //     i++;
    // }

    // var i = 5;
    // do {
    //     console.log(i);
    //     i++;
    // } while (i < 3);
    
    // var listUser = [
    //     "Nguyễn Thị Huyền",
    //     "Phạm Hoài Nam",
    //     "Nguyễn Đức Luật"
    // ];

    // var i = 0;
    // while(i < listUser.length) {
    //     console.log(listUser[i]);
    //     i++;
    // }

// Break
    // for(var i = 0; i < 10; i++) {
    //     console.log(i);
    //     if (i == 5) {
    //         break;
    //     }
    // }

// Continue
    // for(var i = 0; i < 10; i++) {
    //     if (i == 5) {
    //         continue;
    //     }
    //     console.log(i);
    // }

    // var status = "active";
    // var listUser = [
    //     {
    //         fullName: "Nguyễn Thị Huyền",
    //         age: 20,
    //         status: "active"
    //     },
    //     {
    //         fullName: "Phạm Hoài Nam",
    //         age: 19,
    //         status: "inactive"
    //     },
    //     {
    //         fullName: "Nguyễn Đức Luật",
    //         age: 22,
    //         status: "active"
    //     }
    // ];

    // switch (status) {
    //     case "active":
    //         for (var user of listUser) {
    //             if (user.status == "inactive") {
    //                 continue;
    //             }
    //             console.log(user);
    //         }
    //         break;

    //     case "inactive":
    //         for (var user of listUser) {
    //             if (user.status == "active") {
    //                 continue;
    //             }
    //             console.log(user);
    //         }
    //         break;
    
    //     default:
    //         break;
    // }

// Khai báo biến
    // Từ khóa var (biến toàn cục)
        // var a = 10;
        // if (a == 10) {
        //     var b = 20;
        //     b = 30; // gán lại được giá trị
        //     console.log(b);
        // }
        // console.log(b);

    // Từ khóa let (trong khối khai báo)
        // var a = 10;
        // if (a == 10) {
        //     let b = 20;
        //     b = 30; // gán lại được giá trị
        //     console.log(b);
        // }
        // console.log(b); // Lỗi

    // Từ khóa const (trong khối khai báo)
        // var a = 10;
        // if (a == 10) {
        //     const b = 20;
        //     b = 30; // không gán lại được giá trị
        //     console.log(b);
        // }
        // console.log(b); // Lỗi
    
        // const student = {
        //     name: "Nguyễn Thị Huyền",
        //     gpa: 3.5
        // };

        // student.name = 'Nam';
        // console.log(student.name);

        // const student = [
        //     "Nguyễn Thị Huyền",
        //     "Phạm Hoài Nam",
        //     "Nguyễn Đức Luật"
        // ];

        // student[0] = 'Nam';
        // console.log(student[0]);
    
    // Không cần dùng từ khóa
        // fullName = "Nguyễn Thị Huyền";
        // console.log(fullName);
