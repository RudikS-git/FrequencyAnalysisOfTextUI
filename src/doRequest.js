import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

const doRequest = async (submit, notification= true) => {
    try {
        const result = await submit;

        if(result.status == 200 && !result.data.errorMessage) {
            return {
                success: true,
                data: result.data,
                headers: result.headers
            }
        }
        else {
            throw result;
        }
    }
    catch (e) {
        if(notification) {
            toast.error(e.data?.errorMessage? e.data.errorMessage:"Some error occured...");
        }

        return {
            success: false,
            data: null,
            errors: e.data?.errorMessage,
            headers: e.headers
        }
    }

}

export default doRequest;