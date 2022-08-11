import axios from "axios";
import {
    storage
} from "../../Firebase";
import { head } from "./Api";
import {
    actionTypes
} from "./types";


 export const upLoadFile = (file, folder, values, check) => {     
     return async (dispatch) => {
        if (file) {
            const uploadtask = storage.ref(`${folder}/${file.name}`).put(file);
            uploadtask.on(
                "state_changed",
                (snapshot) => {},
                (err) => {
                    console.log(err);
                },
                () => {
                    storage
                        .ref(folder)
                        .child(file.name)
                        .getDownloadURL()
                        .then((url) => {

                            alert("Upload thanh cong!");
                           if(check === 0) {
                            createCourse(values, url)
                           }
                            else {
                                createLesson(values, url)
                            }
                        })
                        .catch(err => {
                            console.log(err)
                        })
                }
            );

        } else alert("VUi long chon file");

    }
        

}
const createLesson = (values, url) => {
    const nameLesson = values.tenBH
    const courseId = values.maKH
    const video = url
    axios({
        method: "POST",
        url: `${head}/api/v1/lesson/create`,
        data: {nameLesson, courseId, video}
    }).then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })

}
const createCourse = (values,url) => {
    const categoryId = values.theLoai
    const name = values.tenKH
    const author = values.tacGia
    const image = url
    console.log(name, author, image, categoryId)
    axios({
        method: "POST",
        url: `${head}/api/v1/course/create`,
        data: {name, author, image, categoryId}
    }).then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
    
}