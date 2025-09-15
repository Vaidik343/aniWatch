import api from '@/utils/api';

const loginUser = async (email, password) => {
    const res = await api.post("/auth/login", {email, password});
    return res.data;
}

const registerUser = async(name, email, password, profilePicUri, gender, animeType) => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    if (gender) formData.append('gender', gender);
    if (animeType) formData.append('anime_type', animeType);
    if (profilePicUri) {
        const filename = profilePicUri.split('/').pop();
        const fileType = filename.split('.').pop();
        formData.append('profilePic', {
            uri: profilePicUri,
            name: filename,
            type: `image/${fileType}`,
        });
    }
    const res = await api.post("/auth/register", formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return res.data;
} 

const fetchCurrentUser = async () => {
    const res = await api.get("/auth/me");
    return res.data;
}


export { fetchCurrentUser, loginUser, registerUser };

