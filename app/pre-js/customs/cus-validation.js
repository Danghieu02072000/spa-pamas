//Validate contact form
$(document).ready(function () {
    $("#frmContact").validate({
        rules: {
            ctName: {
                required: true
            },
            ctEmail: {
                required: true,
                email: true,
            },
            ctPhone: {
                required: true,
                minlength: 10,
                maxlength: 12,
                number: true,
            },
            ctAddress: {
                required: true
            },
            ctContent: {
                required: true
            },
            ctCapcha: {
                required: true
            },
        },
        messages: {
            ctName: {
                required: "Nhập Tên Của Bạn !",
            },
            ctAddress: {
                required: "Nhập địa chỉ của bạn !",
            },
            ctEmail: {
                required: "Email không được để trống",
                email: "Email không đúng định dạng"
            },
            ctPhone: {
                required: "Bạn cần nhập Số điện thoại",
                minlength: "Số điện thoại tối thiểu 10 số",
                maxlength: "Số điện thoại tối đa 12 số",
                number: "Bạn cần nhập chữ số"
            },
            ctContent: {
                required: "Nhập nội dung !",
            },
            ctCapcha: {
                required: "Nhập mã bảo mật !",
            },
        },
        submitHandler: function () {
            form.submit();
        },
    });
});

$(document).ready(function () {
    $("#frmRegister").validate({
        rules: {
            rgName: {
                required: true
            },
            rgEmail: {
                required: true,
                email: true,
            },
            rgPhone: {
                required: true,
                minlength: 10,
                maxlength: 12,
                number: true,
            },
            rgAddress: {
                required: true,
            },
            rgContent: {
                required: true
            },
            rgCapcha: {
                required: true
            },
        },
        messages: {
            rgName: {
                required: "Nhập Tên Của Bạn !",
            },
            rgAddress: {
                required: "Nhập địa chỉ của bạn !",
            },
            rgEmail: {
                required: "Email không được để trống",
                email: "Email không đúng định dạng"
            },
            rgPhone: {
                required: "Bạn cần nhập Số điện thoại",
                minlength: "Số điện thoại tối thiểu 10 số",
                maxlength: "Số điện thoại tối đa 12 số",
                number: "Bạn cần nhập chữ số"
            },
            rgContent: {
                required: "Nhập nội dung !",
            },
            rgCapcha: {
                required: "Nhập mã bảo mật !",
            },
        },
        submitHandler: function () {
            $.fancybox.open({
                src: '#popupThanks',
                type: 'inline',
                ////afterShow: function () {
                ////    setTimeout(function () {
                ////        $.fancybox.close();
                ////    }, 2000);
                ////},
            });

        },
    });

});

//Validate cart form
$(document).ready(function () {
    $("#frmPaymentCart").validate({
        rules: {
            cartName: {
                required: true
            },
            cartEmail: {
                required: true,
                email: true,
            },
            cartPhone: {
                required: true,
                minlength: 10,
                maxlength: 12,
                number: true,
            },
            cartAddress: {
                required: true
            },
            cartContent: {
                required: true
            },

            //ctCapcha: {
            //    required: true
            //},
        },
        messages: {
            cartName: {
                required: "Nhập Tên Của Bạn !",
            },

            cartEmail: {
                required: "Email không được để trống",
                email: "Email không đúng định dạng"
            },
            cartPhone: {
                required: "Bạn cần nhập Số điện thoại",
                minlength: "Số điện thoại tối thiểu 10 số",
                maxlength: "Số điện thoại tối đa 12 số",
                number: "Bạn cần nhập chữ số"
            },
            cartAddress: {
                required: "Nhập địa chỉ của bạn !",
            },
            cartContent: {
                required: "Nhập nội dung đặt hàng!",
            },
            //ctCapcha: {
            //    required: "Nhập mã bảo mật !",
            //},
        },
        submitHandler: function () {
            form.submit();
        },
    });
});
