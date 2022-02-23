function validate() {
    var u = document.getElementById("txtusername").value;
    var p1 = document.getElementById("txtpass").value;
    var p2 = document.getElementById("txtpassword").value;
     
    if(u== "") {
    alert("Vui lòng nhập tên!");
    return false;
    }
    if(p1 == "") {
    alert("Vui lòng nhập mật khẩu!");
    return false;
    }
    if(p2 == "") {
    alert("Vui lòng xác minh mật khẩu!");
    return false;
    }

    alert("Đăng ký thành công");
     
    return true;
    }