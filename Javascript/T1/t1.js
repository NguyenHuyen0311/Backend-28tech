// Cách 3 sử dụng js
    // var button = document.querySelector("button");
    // button.onclick = function () {
    //     alert("Hello World");
    // }

// Biến & Kiểu dữ liệu nguyên thủy
    // Number
        // var a1 = 10; 
        // var a2 = 10.5; 
        // var a3 = Infinity; 
        // var a4 = -Infinity; 
        // var a5 = 10 / "a"; // NaN; 
    // String
        // Ví dụ 1:
        // var fullName = "Nguyễn Thị Huyền";
        // var hello1 = "Xin chào" + fullName + "!";
        // console.log(hello1);

        // var hello2 = `Xin chào ${fullName}!`;
        // console.log(hello2)

        // Ví dụ 2:
        // var b1 = 15;
        // var b2 = 20;
        // var b3 = b1 + b2; 

        // var result1 = b1 + "+" + b2 + "=" + b3;
        // console.log(result1);

        // var result2 = `${b1} + ${b2} + ${b3}`;
        // console.log(result2);
    // Boolean
        // var c1 = true;
        // var c2 = false;
    // Undefined
        // var d;
        // console.log(d);
    // Null
        // var e = null;
        // console.log(e);
    // Symbol (Tự tìm hiểu)

// Kiểu dữ liệu phức tạp
    // Function
        // Tính tổng 2 số
        // function tinhTong(a, b) {
        //     return a + b;
        // }

        // var result = tinhTong(10, 20);
        // console.log(result);

        // Tính diện tích hình thang
        // S = (a + b) / 2 * h
        // function dtHinhThang(a, b, h) {
        //     return (a + b) / 2 * h;
        // }

        // var S = dtHinhThang(10, 20, 8);
        // console.log(S);

    // Object: Object & Array
        // var infoUser = {
        //     name: "Nguyễn Huyền",
        //     age: 20,
        //     email: "huyenmeroria@gmail.com",
        //     phone: null,
        //     cccd: {
        //         name: "Nguyễn Thị Huyền";
        //         number: "0966556026"
        //     }
        // };

        // console.log(infoUser);
        // console.log(infoUser.name);
        // console.log(infoUser.cccd.name);

        // var listUser1 = [
        //     "Nguyễn Thị Huyền",
        //     "Phạm Hoài Nam",
        //     "Nguyễn Đức Luật"
        // ];

        // console.log(listUser1);
        // console.log(listUser1[0]);
        // console.log(listUser1[1]);

        // var listUser2 = [
        //     {
        //         name: "Nguyễn Thị Huyền",
        //         age: 20
        //     },
        //     {
        //         name: "Phạm Hoài Nam",
        //         age: 19
        //     }
        // ];

        // console.log(listUser2);
        // console.log(listUser2[0].name);
        // console.log(listUser2[1].age);

// Toán tử
    // Số học: +, -, *, /, **, ++, --
        // var i = a++;
        // console.log(i);
        // console.log(a);

        // var i = ++a;
        // console.log(i);
        // console.log(a);
        
        // Ví dụ 1:
        // var a = 20;
        // var b = a++ - --a + ++a;
            // = 20  - 20  + 21
        // console.log(b);

        // Ví dụ 2:
        // var a = 20;
        // var b = a++ - a-- + --a * 3;
            // = 20  - 20  + 19 * 3
        // console.log(b);

        // Ví dụ 3:
        // var a = 20;
        // var b = --a - ++a + --a - a++ + a-- * 2;
            // = 19  - 20  + 19 - 19  + 20 * 2
        // console.log(b);

        // Ví dụ 4:
        // var a = 20;
        // var b = --a - a++ + a++ - --a + a++ * 2;
            // = 19  - 19  + 20  - 20  + 20 * 2
        // console.log(b);

    // Gán: +=, -=, *=, /=, %=
    // So sánh: >, <, >=, <=, ==, ===, !=, !==
        // var a = 20;
        // var b = "20";
        // console.log(a == b); // true
        // console.log(a === b); // false
        // console.log(a != b); // false
        // console.log(a !== b); // true
    // Logic: && - AND, || - OR, ! - NOT

// Hàm built-in
    // aleart("Xin chào");

    // var result = confirm("Bạn đã đủ 18 tuổi chưa?");
    // console.log(result);
    // if(result === true) {
    //     alert("Bạn được truy cập trang web này!");
    // }else {
    //     alert("Bạn chưa đủ tuổi truy cập trang web này!");
    // }

    // var result = prompt("Nhập họ tên của bạn:", "Nguyễn Thị Huyền");
    // console.log(result);
    // if(result) {
    //     console.log(`Xin chào ${result}`);
    //     console.warn(`Xin chào ${result}`);
    //     console.error(`Xin chào ${result}`);
    // }

    // setTimeout(function(){
    //     console.log("OK");
    // }, 3000);

    // setInterval(function(){
    //     console.log("OK");
    // }, 3000);

// Typeof 
    // var a = 10;
    // var b = "Hello";
    // var c;
    // var d = null;
    // var e = true;

    // console.log(typeof a); // number
    // console.log(typeof b); // string
    // console.log(typeof (a + b)); // string
    // console.log(typeof c); // undefined
    // console.log(typeof d); // object
    // console.log(typeof e); // boolean
    // console.log(typeof a == "number"); // true

// Làm việc với String
    // Length
        // var fullName = "Nguyễn Thị Huyền";
        // console.log(fullName.length);

    // string.indexOf(searchvalue, start);
        // var myString = `Xin chào! Tôi tên Huyền. Tôi năm nay 20 tuổi.`;
        // console.log(myString.indexOf("Tôi")); // Trả về 10
        // console.log(myString.indexOf("Hải")); // Trả về -1
        // console.log(myString.indexOf("Huyền")); // Trả về 18
        // console.log(myString.indexOf("nam")); // Trả về -1
        // console.log(myString.indexOf("Tôi", 11)); // Trả về 23

    // string.lastIndexOf(searchvalue, start);
        // var myString = `Xin chào! Tôi tên Huyền. Tôi năm nay 20 tuổi.`;
        // console.log(myString.lastIndexOf("Tôi", 24)); // Trả về 23
        // console.log(myString.lastIndexOf("Tôi", 22)); // Trả về 10
        // console.log(myString.lastIndexOf("Tôi", 10)); // Trả về 10
        // console.log(myString.lastIndexOf("Tôi", 9)); // Trả về -1
    
    // string.slice(start.end);
        // var myString = `Xin chào! Tôi tên Huyền. Tôi năm nay 20 tuổi.`;
        // console.log(myString.slice(10, 21)); // Tôi tên Huyền
        // console.log(myString.slice(0)); // Lấy toàn bộ chuỗi
        // console.log(myString.slice(0, 1)); // X (Lấy ký tự đầu tiên của chuỗi)
        // console.log(myString.slice(-1)); // . (Lấy ký tự cuối cùng của chuỗi)
        // console.log(myString); // Vẫn giữ nguyên chuỗi gốc

    // string.replace(searchvalue, newValue);
        // var myString = `Xin chào! Tôi tên Huyền. Tôi năm nay 20 tuổi.`;
        // console.log(myString.replace("Tôi", "Mình"));
        // console.log(myString.replace(/Tôi/g, "Mình")); // cú pháp regex

    // toUpperCase() và toLowerCase()
        // var myString = `Xin chào! Tôi tên Huyền. Tôi năm nay 20 tuổi.`;
        // console.log(myString.toUpperCase());
        // console.log(myString.toLowerCase());

    // string.trim();
        // var myString = ` Xin chào! Tôi tên Huyền. Tôi năm nay 20 tuổi. `;
        // console.log(myString);
        // console.log(myString.trim());

    // string.charAt(index);
        // var myString = `Nguyễn Thị Huyền`;
        // console.log(myString.charAt()); // Lấy ký tự đầu tiên
        // console.log(myString.charAt(0)); // Lấy ký tự đầu tiên
        // console.log(myString.charAt(1)); // Lấy ký tự thứ 2
        // console.log(myString.charAt(myString.length - 1)); // Lấy ký tự cuối cùng

    // split()
        // var myString = `HTML5, CSS3, Javascript`;
        // console.log(myString.split()); // Cả string là 1 phần tử
        // console.log(myString.split("")); // Mỗi ký tự là 1 phần tử
        // console.log(myString.split(", ")); // Mỗi từ là 1 phần tử
        // console.log(myString.split(", ", 2)); // Mỗi từ là 1 phần tử, lấy tối đa 2 phần tử
        
        // var array = myString.split(", ");
        // console.log(array); 
        // for (var i = 0; i < array.length; i++) {
        //     console.log(array[i]);
        // }

// Làm việc với Number
    // isNaN(tenBien);
        // var a = 10;
        // var b = "Test";
        // var result = a / b;
        // console.log(result); // Trả về NaN
        // console.log(typeof result); // number
        // console.log(isNaN(result)); // Trả về true

    // tenBien.toString();
        // var a = 10;
        // var b = a.toString();
        // var c = (10).toString();
        // console.log(a); // Trả về số 10
        // console.log(typeof a); // Trả về kiểu number
        // console.log(b); // Trả về chuỗi 10
        // console.log(typeof b); // Trả về kiểu string
        // console.log(c); // Trả về chuỗi 10
        // console.log(typeof c); // Trả về kiểu string

    // toFixed(digits) (số chữ số sau dấu thập phân)
        // var a = 12.3456;
        // console.log(a.toFixed()); // Trả về 12 (Dạng String)
        // console.log(a.toFixed(0)); // Trả về 12
        // console.log(a.toFixed(1)); // Trả về 12.3
        // console.log(a.toFixed(2)); // Trả về 12.35
        // console.log(a.toFixed(3)); // Trả về 12.346

        // var result = parseFloat(a.toFixed(3)); (Dạng số)
        // console.log(result);

// Làm việc với Array
    // array.toString();
        // var list = ["HTML5", "CSS3", "Javascript"];
        // console.log(list.toString());
        // // Trả về: "HTML5,CSS3,Javascript"

    // array.join(separator) (dải phân cách)
        // var list = ["HTML5", "CSS3", "Javascript"];
        // console.log(list.join()); // Trả về: "HTML5,CSS3,Javascript"
        // console.log(list.join(",")); // Trả về: "HTML5,CSS3,Javascript"
        // console.log(list.join("")); // Trả về: "HTML5CSS3Javascript"
        // console.log(list.join(", ")); // Trả về: "HTML5, CSS3, Javascript"
        // console.log(list.join(" - ")); // Trả về: "HTML5 - CSS3 - Javascript"

    // array.pop();
        // var list = ["HTML5", "CSS3", "Javascript"];
        // console.log(list.pop()); // Trả về: "Javascript"
        // console.log(list); // Trả về: ["HTML5", "CSS3"]

    // array.push(item1, item2, ..., itemX)
        // var list = ["HTML5", "CSS3", "Javascript"];
        // console.log(list.push("Bootstrap 4", "ReactJS")); // Trả về: 5
        // console.log(list);
        // // Trả về: ["HTML5", "CSS3", "Javascript", "Bootstrap 4", "ReactJS"]

    // array.shift();
        // var list = ["HTML5", "CSS3", "Javascript"];
        // console.log(list.shift()); // Trả về: "HTML5"
        // console.log(list); // Trả về: ["CSS3", "Javascript"]

    // array.unshift(item1, item2, ..., itemX);
        // var list = ["HTML5", "CSS3", "Javascript"];
        // console.log(list.unshift("Bootstrap 4", "ReactJS")); // Trả về: 5
        // console.log(list);
        // // Trả về: ["Bootstrap 4", "ReactJS", "HTML5", "CSS3", "Javascript"]

    // array.splice(index, howmany, item1, ..., itemX)
        // Ví dụ 1: Chèn phần tử mới vào mảng
            // var list = ["HTML5", "CSS3", "Javascript"];
            // console.log(list.splice(2, 0, "Bootstrap 4", "ReactJS")); // Trả về: []
            // console.log(list); // Trả về: ["HTML5", "CSS3", "Bootstrap 4", "ReactJS", "Javascript"]

        // Ví dụ 2: Xóa phần tử trong mảng
            // var list = ["HTML5", "CSS3", "Javascript"];
            // console.log(list.splice(1, 1)); // Trả về: ["CSS3"]
            // console.log(list); // Trả về: ["HTML5", "Javascript"]
        
        // Ví dụ 3: Chèn và xóa phần tử trong mảng
            // var list = ["HTML5", "CSS3", "Javascript"];
            // console.log(list.splice(2, 1, "Bootstrap 4", "ReactJS")); // Trả về: ["Javascript"]
            // console.log(list); // Trả về: ["HTML5", "CSS3", "Bootstrap 4", "ReactJS"]

    // array1.concat(array2, array3, ..., arrayX);
        // var list = ["HTML5", "CSS3", "Javascript"];
        // var list2 = ["Bootstrap 4", "ReactJS"];
        // console.log(list.concat(list2)); // Trả về: ["HTML5", "CSS3", "Javascript", "Bootstrap 4", "ReactJS"]
        // console.log(list); // Trả về: ["HTML5", "CSS3", "Javascript"]

    // array.slice(start, end)
        // var list = ["HTML5", "CSS3", "Javascript", "Bootstrap 4", "ReactJS"];
        // console.log(list.slice(3)); // Trả về: ["Bootstrap 4", "ReactJS"]
        // console.log(list.slice(1, 3)); // Trả về: ["CSS3", "Javascript"]
        // console.log(list.slice(-3, -1)); // Trả về: ["Javascript", "Bootstrap 4"]
        // console.log(list); // Trả về: ["HTML5", "CSS3", "Javascript", "Bootstrap 4", "ReactJS"]
