import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_KEY
export default {
  getTasks: async () => {
    try{
    const result = await axios.get(`/items`)    
    return result.data;
  } catch (error) {
    // this failed, so let's redirect to the login page
    console.log(error);
  }

  },

  addTask: async(name)=>{
    try{
      
    const result = await axios.post(`/newItem`, [
      {
        "name": name
      }
    ])  
    
    //TODO
    return result.data;
  } catch (error) {
    debugger
    // this failed, so let's redirect to the login page
    console.log(error);
  }

  },

  setCompleted: async(id, isComplete)=>{
    try{
    const result = await axios.patch(`/items/${id}?IsComplete=${isComplete}`)    
    //TODO
    return {};
  } catch (error) {
    // this failed, so let's redirect to the login page
    console.log(error);
  }

  },

  deleteTask:async(id)=>{
    try{
    await axios.delete(`/todoitems/${id}`)
  } catch (error) {
    // this failed, so let's redirect to the login page
    console.log(error);
  }

  }
};
