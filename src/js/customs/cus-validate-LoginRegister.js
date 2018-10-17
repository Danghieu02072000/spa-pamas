$(document).ready(function () {
    $("#frmRegister").validate({
        rules: {
            rgFirstName: {
                required: true
            },
            rgLastName: {
                required: true
            },
            rgEmail: {
                required: true,
                email: true,
            },
            rgPasswold: {
                required: true
            },
            rgCapcha: {
                required: true
            },
        },
        messages: {
            rgFirstName: {
                required: "Nhập Họ Của Bạn !",
            },
            rgLastName: {
                required: "Nhập Tên Của Bạn !",
            },
            rgEmail: {
                required: "Email không được để trống",
                email: "Email không đúng định dạng"
            },
            rgPasswold: {
                required: "Nhập mật khẩu của bạn",
            },
            rgCapcha: {
                required: "Nhập mã bảo mật !",
            },
        },
        submitHandler: function () {
            form.submit();
        },
    });
});

$(document).ready(function () {
    $("#frmLogin").validate({
        rules: {
            lgEmail: {
                required: true,
                email: true,
            },
            lgPasswold: {
                required: true
            },
        },
        messages: {

            lgEmail: {
                required: "Email không được để trống",
                email: "Email không đúng định dạng"
            },
            lgPasswold: {
                required: "Nhập mật khẩu của bạn",
            },
        },
        submitHandler: function () {
            form.submit();
        },
    });
});

$(document).ready(function () {
    $("#frmRecoveryPass").validate({
        rules: {
            rcvEmail: {
                required: true,
                email: true,
            },

        },
        messages: {

            rcvEmail: {
                required: "Email không được để trống",
                email: "Email không đúng định dạng"
            },

        },
        submitHandler: function () {
            form.submit();
        },
    });
});
