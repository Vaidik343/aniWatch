import api from '@/utils/api';

const loginUser = async (email, password) => {
    const res = await api.post("/auth/login", {email, password});
    return res.data;
}

const registerUser = async(name, email, password) => {
    const res = await api.post("/auth/register", {name,email, password });
    return res.data;
}

const fetchCurrentUser = async () => {
    const res = await api.get("/auth/me");
    return res.data;
}


export { fetchCurrentUser, loginUser, registerUser };
