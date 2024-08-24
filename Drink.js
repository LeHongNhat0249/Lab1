
const arrSp1 = [
    {ma: "1", img: "img4.jpg", name: "Nước 1", gia: "100000"},
    {ma: "2", img: "img5.jpg", name: "Nước 2", gia: "100000"},
    {ma: "3", img: "img6.jpg", name: "Nước 2", gia: "100000"},
    {ma: "4", img: "img6.jpg", name: "Nước 2", gia: "100000"},
    {ma: "5", img: "img4.jpg", name: "Nước 2", gia: "100000"},
    {ma: "6", img: "img5.jpg", name: "Nước 2", gia: "100000"}
];

var str = "";
for (let i = 0; i < arrSp1.length; i++) {
    str += `
    <div class="pic">
            <img src="${arrSp1[i].img}" alt="" width="200px" height="200px">
            <div class="content">
                <p class="p1">${arrSp1[i].name}</p>
                <p class="p2">${arrSp1[i].gia}</p>
            </div>
            <button class="button" onclick="addCart('${arrSp1[i].ma}');">Thêm vào giỏ hàng</button>
            <button style ="position: relative;
    top: 10px;" class="button" onclick="deleteCart('${arrSp1[i].ma}');">Xóa sản phẩm</button>
    </div>
    `
}
document.querySelector("#pic").innerHTML = str;

let num = localStorage.getItem("totalQty");
if(num == null){
    num =0;
}
document.querySelector(".num").innerHTML = num;
let arrCart = localStorage.getItem("myCart");
if(arrCart ==null){
    arrCart = [];
}
else{
    arrCart = JSON.parse(localStorage.getItem("myCart"));
}



function addCart(ma) {
    var item;
    var flag = false;

    for (let i = 0; i < arrSp1.length; i++) {
        if (arrSp1[i].ma == ma) {
            item = arrSp1[i];
            break;
        }
    }

    for (let i = 0; i < arrCart.length; i++) {
        if (arrCart[i].sp.ma == ma) {
            arrCart[i].qty++;
            flag = true;
            break;
        }
    }

    if (flag == false) {
        let cartItem = {sp: item, qty: 1};
        arrCart.push(cartItem);
    }
    localStorage.setItem("totalQty",num);
    localStorage.setItem("myCart",JSON.stringify(arrCart))
    num++;
    document.querySelector(".num").innerHTML = num;
   
}
function deleteCart(ma) {
    for (let i = 0; i < arrCart.length; i++) {
        if (arrCart[i].sp.ma == ma) {
            if (arrCart[i].qty > 1) {
                arrCart[i].qty--;
            } else {
                arrCart.splice(i, 1);
            }
            num--;
            break;
        }
    }
    localStorage.setItem("totalQty", num);
    localStorage.setItem("myCart", JSON.stringify(arrCart));
    document.querySelector(".num").innerHTML = num;
}
