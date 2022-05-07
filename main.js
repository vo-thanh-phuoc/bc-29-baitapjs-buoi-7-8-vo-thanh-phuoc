/*
*Bài tập mảng
 */
function getEle(id) {
    return document.getElementById(id);
}
var arrNumber = [];
getEle("congChuoi").onclick = function () {
    var number = getEle("nhapSo").value * 1;
    var congChuoi = "";
    arrNumber.push(number);

    for (var i = 0; i < arrNumber.length; i++) {
        var phanTu = arrNumber[i];
        congChuoi += phanTu + " ";
    }
    getEle("ketQua1").innerHTML = congChuoi;
}
//Tổng các số dương trong mảng
/*Đầu vào
+ nhập mảng từ input
*Xử lý
tạo biến tổng=0, dùng vòng lặp for cho số chỉ mục chạy từ vị trí đầu tiên đến hết chiều dài chuỗi
tại vị trí phần tử trong mảng thoả điều kiện >0 thì ta cộng lại với nhau.
*Đầu ra:
xuất kết quả tổng số dương trong chuỗi
 */
var arrNumber = [];
getEle("sum").onclick = function () {
    var number = getEle("nhapSo").value * 1;
    var tong = 0;
    for (var i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] > 0) {
            tong = tong + arrNumber[i];
            var result = "Tổng số dương của chuỗi là: " + tong;
        }
    }
    getEle("ketQua2").innerHTML = result;

};
//  Điếm có bao nhiêu số dương trong mãng.
/*Đầu vào
nhập mảng từ ô input
*Xử lý
khởi tạo biến đếm giá trị ban đầu dem=0;
dùng vòng lặp for xét điều kiện phần tử mảng >0
nếu thoả điều kiện thì biến đếm tăng 1 đếm++
*Đầu ra
xuất ra số dương có trong mảng
 */
var arrNumber = [];
getEle("count").onclick = function () {
    var number = getEle("nhapSo").value * 1;
    dem = 0;
    for (i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] >= 0) {
            dem++;
            var result = "số dương xuất hiện trong chuỗi là: " + dem;
        }
    }
    getEle("ketQua3").innerHTML = result;
};
// Tìm số nhỏ nhất trong mảng
/*Đầu vào
nhập mảng từ ô input
*Xử lý
gán vị trị trí đầu tiên của số chỉ mục là số nhỏ nhất
dùng vòng lặp for kiểm tra các phần tử trong mảng với biến min ban đầu.nếu có giá trị nhỏ hơn thì ta gán giá trị đó là min
*Đầu ra
xuất ra kết quả số nhỏ nhất trong chuỗi
 */
var arrNumber = [];
getEle("numberMin").onclick = function () {
    var number = getEle("nhapSo").value * 1;
    var min = arrNumber[0];
    for (i = 1; i < arrNumber.length; i++) {
        if (arrNumber[i] < min && arrNumber[i] >= 0) {
            arrNumber[i] = min;
            var result = "số bé nhất trong chuỗi là: " + arrNumber[i];
        }
        else if (arrNumber[i] < 0) {
            result = "số bé nhất trong chuỗi là: " + arrNumber[i];
        } else {
            result = "số bé nhất trong mảng là: " + min;
        }
    }

    getEle("ketQua4").innerHTML = result;//chưa xử lý được số nhỏ nhất là số 0. mentor chấm bài comment cách làm. thank you.
};

//Tìm số dương nhỏ nhất trong mảng

var arrNumber = [];
getEle("positiveNoMin").onclick = function () {
    var number = getEle("nhapSo").value * 1;
    var soDuongNN = arrNumber[0];
    for (i = 1; i < arrNumber.length; i++) {
        if (arrNumber[i] < soDuongNN && arrNumber[i] > 0) {
            soDuongNN = arrNumber[i];
        }
    }
    var result = "số dương nhỏ nhất là: " + soDuongNN;

    getEle("ketQua5").innerHTML = result;
};

// Tìm số chẵn cuối cùng của mảng. Nếu không có thì trả về giá trị -1.
var arrNumber = [];
getEle("evenNoEnd").onclick = function () {
    var number = getEle("nhapSo").value * 1;
    var soDuongCuoiCung = arrNumber[0];
    for (i = arrNumber.length - 1; i > 0; i--) {
        if (i = arrNumber.length - 1) {
            arrNumber[i] = soDuongCuoiCung;
            break;
        }
    }
    if (soDuongCuoiCung % 2 === 0) {
        var result = "số dương cuối cùng của mảng là: " + arrNumber[i];
    } else {
        result = "Vị trí cuối cùng không phải là số chẵn, giá trị trả về là:-1";
    }
    getEle("ketQua6").innerHTML = result;
};