import axios from 'axios';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDQxODU3NzUsImV4cCI6MTYwNDIwMzc3NX0.uJuM7-zVm8AvYts3aKvIY02FB5-1r8f4dosyZDBaaGk';

export default axios.create({
    baseURL:"http://439a9771cf61.ngrok.io",
    headers:{
        Authorization:
         "Bearer "+token
    }
});