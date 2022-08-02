import email from "@emailjs/browser"

export const sendEmail = (values) => {
    email.send("service_zd2nran","verify",{
        from_name: "Nhosm 3",
        to_name: values.username,
        message: "Mã xác minh: " + (Math.floor(Math.random() * 50000) + 10000) ,
        reply_to: values.email,
        user: values.email,
        }, 'PPlLyhcM-YCRsemt_').then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
}