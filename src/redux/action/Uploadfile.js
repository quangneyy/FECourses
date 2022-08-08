import axios from "axios";
import {
    storage
} from "../../Firebase";
import {
    actionTypes
} from "./types";


 export const upLoadFile = (file, folder, values) => {     
     return async (dispatch) => {
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
                        .ref("images")
                        .child(file.name)
                        .getDownloadURL()
                        .then((url) => {
                            alert("Upload thanh cong!");
                            createCourse(values, url)
                             dispatch({type: actionTypes.LOADING})
                        });
                }
            );

        } else alert("VUi long chon file");
    }
        
}
const createCourse = (data) => {
    axios({
        method: "POST",
    })
    
}