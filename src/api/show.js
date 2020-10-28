import axios from 'axios';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDM4ODU3NTUsImV4cCI6MTYwMzkwMzc1NX0.INlU891DjqB79T-mVUmJP1Jn0Q_4kli8hR78OO0Hp7g';

export default axios.create({
    baseURL:"http://38521d32ae62.ngrok.io",
    headers:{
        Authorization:
         "Bearer "+token
    }
});