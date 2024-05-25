// BOM Window
    // console.log(window);

    // window.alert("Hello");
    // alert("Hello");

    // window.innerHeight() & window.innerWidth()
        // console.log(window);
        // console.log(window.innerHeight);
        // console.log(window.innerWidth);
        // console.log(innerHeight);
        // console.log(innerWidth);

    // window.open() && window.close()
        // const ads = document.querySelector("#ads");
        // const closeAds = document.querySelector("#closeAds");

        // console.log(ads);
        // var myAds;
        // ads.addEventListener("click", () => {
        //     myAds = window.open("https://www.facebook.com/", "Đây là trang chủ Facebook", 
        //     "height=500px; width=1200px, top=100px, left = 200px");
        // });

        // closeAds.addEventListener("click", () => {
        //     myAds.close();
        // });

// BOM Screen
    // console.log(window.screen.width);
    // console.log(window.screen.height);

    // console.log(screen.width);
    // console.log(screen.height);

// BOM Location
    // console.log(window.location);
    // reload();
        // setInterval(() => {
        //     window.location.reload();
        // }, 3000);

        // const buttonReload = document.querySelector("#buttonReload");

        // buttonReload.addEventListener("click", () => {
        //     window.location.reload();
        // });

    // Thuộc tính
        // console.log(window.location);

// BOM History
    // console.log(window.history);
    // console.log(history);
    // history.back(); // console
    // history.foward(); // console
    // history.go(3); // console

// BOM Navigator
    // console.log(navigator);

// BOM Popup
    // alert(), confirm(), prompt()

// BOM Timing
    // setTimeout(), setInterval()

// Cookies
    // Hàm thiết lập giá trị cookie
        function setCookie(cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + "; " + expires;
        }

    // Hàm để lấy một giá trị cookie
        function getCookie(cname) {
            var name = cname + "=";
            var ca = document.cookie.split(";");
            for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == " ") {
            c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
            }
            }
            return "";
        }

    // Hàm xóa cookie
        // function deleteCookie(cname) {
        //     document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
        // }

    // const fullName = prompt("Nhập họ tên của bạn");
    // const divFullName = document.querySelector("#fullName");

    // // document.cookie = `fullName=${fullName}`;
    // setCookie("fullName", fullName, 3);
    // divFullName.innerHTML = fullName;

    // Thiết lập giá trị cookie
        // console.log(document.cookie);

    // Lấy một giá trị cookie
        // let fullName = getCookie("fullName");
        
        // if (fullName === "") {
        //     fullName = prompt("Nhập họ tên");
        //     setCookie("fullName", fullName, 3);
        // }

        // console.log(fullName);

        // const divFullName = document.querySelector("#fullName");
        // divFullName.innerHTML = fullName;

        // const phone = getCookie("phone");
        // console.log(phone);

    // Đổi giá trị cho cookie
        // document.cookie = "fullName=Nguyễn Huyền"; // console

    