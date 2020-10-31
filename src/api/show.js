import axios from 'axios';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDQxNDg1MDMsImV4cCI6MTYwNDE2NjUwM30.6L0mzRzgDBfPGeW32x3LgtErnK0zM6qXl592daqBa60';

export default axios.create({
    baseURL:"http://439a9771cf61.ngrok.io",
    headers:{
        Authorization:
         "Bearer "+token
    }
});