// Scope
    // Phạm vi toàn cục
        // var a = 20;

        // function test() {
        //     console.log(a);
        // }

        // test();

    // Phạm vi cục bộ
        // function test1() {
        //     var a = 10;
        //     console.log(a);

        //     function test2() {
        //         console.log("OK");
        //     }
        //     test2();
        // }

        // test1();
        // console.log(a); // a if not defined
        // test2(); // test 2 if not defined

// Hoisting
    // Biến trong hoisting
        // var
            // console.log(a); // undefined
            // var a = 20;
            // console.log(a); // 20

        // let (Cannot access 'a' before initialization)
            // console.log(a);
            // let a = 20;
            // console.log(a);

        // const (Cannot access 'a' before initialization)
            // console.log(a);
            // const a = 20;
            // console.log(a);

    // Hàm trong hoisting
        // Declaration Function (có tính hoisting)
            // test();

            // function test() {
            //     console.log("OK");
            // }

        // Expression Function (k có tính hoisting)
            // test();

            // const test = function() {
            //     console.log("OK");
            // }

        // Arrow Function (k có tính hoisting)
            // test();
                
            // var test = () => {
            //     console.log("OK");
            // }

// Từ khóa "this" (Trả về đối tượng trước dấu ".")
    // This trong Javascript
        // console.log(this); // giống console.log(window);

    // This trong các sự kiện Javascript
        // const button = document.querySelector("#button");

        // button.addEventListener("click", function () {
        //     console.log(button);
        //     console.log(this);
        // });

    // This trong Javascript Object
        // const infoUser = {
        //     fullName: "Nguyen Thi Huyen",
        //     email: "huyenmeroria@gmail.com",
        //     getFullName: function () {
        //         console.log(infoUser.fullName);
        //         // console.log(this);
        //         console.log(this.fullName);
        //     },
        //     getInfo: function () {
        //         console.log(`Xin chào ${this.fullName}, email của bạn là ${this.email}`);
        //     },
        //     cccd: {
        //         fullName: "NGUYỄN THỊ HUYỀN",
        //         number: "019139013",
        //         getFullName: function () {
        //             console.log(infoUser.fullName);
        //             // console.log(this);
        //             console.log(this.fullName);
        //         }
        //     }
        // };

        // infoUser.getFullName();
        // infoUser.getInfo();
        // infoUser.cccd.getFullName();


    // This trong Arrow Functiom (không tồn tại đối tượng this)
        // const button = document.querySelector("#button");

        // button.addEventListener("click", () => {
        //     console.log(button);
        //     console.log(this);
        // });

// Modules
    
// JSON
    // JSON có giá trị là Object
        // const objectJS = {
        //     fullName: "Nguyen Thi Huyen",
        //     email: "huyenmeroria@gmail.com"
        // };

        // const objectJSON1 = JSON.stringify(objectJS);
        // const objectJSON2 = JSON.parse(objectJSON1);

        // console.log(objectJS);
        // console.log(objectJSON1);
        // console.log(objectJSON2);
        // console.log(objectJSON2.fullName);

    // JSON có giá trị là Number
        // const numberJS = 10;

        // const numberJSON1 = JSON.stringify(numberJS);
        // const numberJSON2 = JSON.parse(numberJSON1);

        // console.log(numberJS);
        // console.log(numberJSON1);
        // console.log(numberJSON2);

    // JSON có giá trị là String
        // const stringJS = "abc";

        // const stringJSON1 = JSON.stringify(stringJS);
        // const stringJSON2 = JSON.parse(stringJSON1);

        // console.log(stringJS);
        // console.log(stringJSON1);
        // console.log(stringJSON2);

    // JSON có giá trị là Boolean
        // const booleanJS = true;

        // const booleanJSON1 = JSON.stringify(booleanJS);
        // const booleanJSON2 = JSON.parse(booleanJSON1);

        // console.log(booleanJS);
        // console.log(booleanJSON1);
        // console.log(booleanJSON2);

    // JSON có giá trị là Array
        // const arrayJS = [
        //     {
        //         fullName: "Nguyen Thi Huyen",
        //         email: "huyenmeroria@gmail.com"
        //     },
        //     {
        //         fullName: "Nguyen Thi Thuy",
        //         email: "thuy220705@gmail.com"
        //     }, // JSON Không có dấu phẩy ở cặp key/value cuối cùng
        // ];

        // const arrayJSON1 = JSON.stringify(arrayJS);
        // const arrayJSON2 = JSON.parse(arrayJSON1);

        // console.log(arrayJS);
        // console.log(arrayJSON1);
        // console.log(arrayJSON2);

    // JSON có giá trị là Null
        // const nullJS = null;

        // const nullJSON1 = JSON.stringify(nullJS);
        // const nullJSON2 = JSON.parse(nullJSON1);

        // console.log(nullJS);
        // console.log(nullJSON1);
        // console.log(nullJSON2);