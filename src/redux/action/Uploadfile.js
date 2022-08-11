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
        console.log(folder)
        dispatch({type: actionTypes.LOADING})
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
                           console.log(0)
                            createCourse(values, url)
                           }
                            else {
                                createLesson(values, url)
                               console.log(1)
                            }
                        });
                }
            );

        } else alert("VUi long chon file");
        dispatch({type: actionTypes.LOADING})

    }
        

}
const createLesson = (values, url) => {
    console.log(values , url)
    const nameLesson = values.tenBH
    const coursesId = values.maKH
    const video = url
    axios({
        method: "POST",
        url: `${head}/api/v1/lesson/create`,
        data: {nameLesson, coursesId, video}
    }).then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })

}
const createCourse = (values,url) => {
    const name = values.tenKH
    const author = values.tacGia
    const image = url
    console.log(name, author, image)
    axios({
        method: "POST",
        url: `${head}/api/v1/course/create`,
        data: {name, author, image}
    }).then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
    
}