// DOM
    // console.log(document);

// DOM Element
    // getElementById()
        // const tagH1 = document.getElementById("tagH1");
        // console.log(tagH1);
        // tagH1.innerHTML = "Nội dung h1 mới";

        // setTimeout(() => {
        //     tagH1.innerHTML = "";
        // }, 3000);

    // getElementsByTagName()
        // const listTagH2 = document.getElementsByTagName("h2");
        // console.log(listTagH2);

        // for (const tagH2 of listTagH2) {
        //     console.log(tagH2);
        //     setTimeout(() => {
        //         tagH2.classList.add("d-none");
        //     }, 3000);
        // }

        // for (const tagH2 of listTagH2) {
        //     console.log(tagH2);
        //     setTimeout(() => {
        //         tagH2.classList.remove("d-none");
        //     }, 8000);
        // }

    // getElementsByClassName()
        // const listTitle2 = document.getElementsByClassName("title-2");
        // console.log(listTitle2);

    // querySelector()
        // const menu3 = document.querySelector("#menu li:nth-child(3) a");
        // console.log(menu3);
    
    // querySelectorAll()
        // const menu = document.querySelectorAll("#menu li a");
        // console.log(menu);

// DOM HTML
    // innerHTML()
        // const tagH2 = document.querySelector("#tagH2");
        // console.log(tagH2);
        // console.log(tagH2.innerHTML);

        // tagH2.innerHTML = "Nội dung mới";

        // const ads = document.querySelector("#ads");
        // console.log(ads);

        // setTimeout(() => {
        //     ads.innerHTML = `
        //         <a href="https://www.google.com/search?sca_esv=601932989&sxsrf=ACQVn0870Vc4h4b5zBZYrkVYrEg2EyqL3A:1706333662730&q=%E1%BA%A3nh+qu%E1%BA%A3ng+c%C3%A1o&tbm=isch&source=lnms&sa=X&ved=2ahUKEwi-_Nae7PyDAxWtk1YBHXNrA14Q0pQJegQIDBAB&biw=526&bih=320&dpr=1.25" target="blank">
        //             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDD2IKh_5Eyz9xDKqG-DqRWrfKFOzPFv83gA&usqp=CAU" />
        //         </a>
        //     `;
        // }, 3000);

    // Lấy giá trị thuộc tính
        // const buttonProduct = document.querySelectorAll(".product button");
        // console.log(buttonProduct);

        // for (const button of buttonProduct) {
        //     console.log(button);

        //     button.onclick = () => {
        //         const productId = button.getAttribute("product-id");
        //         console.log(productId);
        //     };
        // }

    // Thay đổi giá trị thuộc tính
        // Hàm thiết lập giá trị cookie
        // function setCookie(cname, cvalue, exdays) {
        //     var d = new Date();
        //     d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        //     var expires = "expires=" + d.toUTCString();
        //     document.cookie = cname + "=" + cvalue + "; " + expires;
        // }

        // Hàm để lấy một giá trị cookie
        // function getCookie(cname) {
        //     var name = cname + "=";
        //     var ca = document.cookie.split(";");
        //     for (var i = 0; i < ca.length; i++) {
        //     var c = ca[i];
        //     while (c.charAt(0) == " ") {
        //     c = c.substring(1);
        //     }
        //     if (c.indexOf(name) == 0) {
        //     return c.substring(name.length, c.length);
        //     }
        //     }
        //     return "";
        // }

        // const currentMode = getCookie("mode");
        // const body = document.querySelector("body");
        // body.setAttribute("class", currentMode);
        // console.log(currentMode);

        // const buttonChangeMode = document.querySelector("#change-mode");
        // console.log(buttonChangeMode);

        // buttonChangeMode.onclick = () => {
        //     const body = document.querySelector("body");
        //     const mode = body.getAttribute("class");

        //     console.log(mode);
        //     if (mode == "dark") {
        //         body.setAttribute("class", "");
        //         setCookie("mode", "", 365);
        //     } else {
        //         body.setAttribute("class", "dark");
        //         setCookie("mode", "dark", 365);
        //     }
        // };

    // DOM CSS
        // const tagH2 = document.querySelector("#tagH2");
        // console.log(tagH2);

        // tagH2.style.color = "white";
        // tagH2.style.background = "green";
        // tagH2.style.paddingTop = "50px";
        // tagH2.style.paddingLeft = "100px";
        // tagH2.style.paddingBottom = "30px";

    // DOM Events
        // element.addEventListener("eventname", function (e) {
        //     // Code
        // });

    // DOM Events Listener
        // element.addEventListener("eventname", function (e) {
        //     // Code
        // });

    // DOM Navigation

    // DOM Nodes
        // document.createElement()
            // var tenBien = document.createElement("h1");

        // document.createTextNode()
            // var tenBien = document.createTextNode("Nội dung…");

        // appendChild()
            // element_parent.appendChild(node_insert);

        // insertBefore()
            // element_parent.insertBefore(node_insert, node_child);

        // removeChild()
            // element_parent.removeChild(node_remove);

        // replaceChild()
            // element_parent.replaceChild(node_insert, node_remove);
