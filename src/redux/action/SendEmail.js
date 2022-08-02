import email from "@emailjs/browser"

export const sendEmail = (values, code, callBack) => {
    email.send("service_zd2nran","verify",{
        from_name: "Nhóm 3",
        to_name: values,
        message: "Mã xác minh: " + code,
        reply_to: values,
        user: values,
        }, 'PPlLyhcM-YCRsemt_')
        .then((result) => {
            callBack()
        }, (error) => {
            console.log(error)
        });
}