import axios from "axios"

const getCategories = () => async (dispatch, getState) => {

    try {
        const {data} = await axios.get('/api/categories');
        // fill Redux Store here
        
    } catch (error) {

    }
 
}

const getSubCategories = (id) => async (dispatch, getState) => {

    try {
        const {data} = await axios.get(`/api/category/${id}/subcategory`);
        // fill Redux Store here

    } catch (error) {

    }
}