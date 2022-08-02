import email from "@emailjs/browser"

export const sendEmail = (values, callBack, code) => {
    email.send("service_zd2nran","verify",{
        from_name: "Nhosm 3",
        to_name: values,
        message: "Mã xác minh: " + code,
        reply_to: values,
        user: values,
        }, 'PPlLyhcM-YCRsemt_')
        .then((result) => {
            callBack()
        }, (error) => {
            alert("khong dung dinh dang email hoac khong ton tai email")
        });
}