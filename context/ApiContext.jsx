import axios from 'axios';
import { createContext, useContext, useEffect, useMemo, useState } from "react";
const ApiContext = createContext();

const ApiProvider = ({children}) => {
    const [topAnime, setTopAnime] = useState([]);
    const [upcomingAnime, setUpcomingAnime] = useState([]);
    const [randomAnime, setRandomAnime] = useState([]);
    const [moviesAnime, setMoviesAnime] = useState([]);
    const [mangaAnime, setMangaAnime] = useState([]);
    const [searchAnime, setSearchAnime] = useState([]);

    const [loading, setLoading] = useState(true);



    const fetchData = async () => {
        try {
            const top = await axios.get("https://api.jikan.moe/v4/top/anime");
            // console.log("🚀 ~ fetchData ~ top:", top)
            setTopAnime(top.data.data || []);
            await new Promise(res => setTimeout(res, 500));


            const upcoming = await axios.get("https://api.jikan.moe/v4/seasons/upcoming");
            // console.log("🚀 ~ fetchData ~ upcoming:", upcoming)
            setUpcomingAnime(upcoming.data.data || []);
            await new Promise(res => setTimeout(res, 500));


            const random = await axios.get("https://api.jikan.moe/v4/random/anime");
            // console.log("🚀 ~ fetchData ~ random:", random)
            setRandomAnime([random.data.data] || []);
            await new Promise(res => setTimeout(res, 500));



            const movie = await axios.get("https://api.jikan.moe/v4/top/anime?type=movie");
            // console.log("🚀 ~ fetchData ~ movie:", movie)
            // console.log("🚀 ~ fetchData ~ movie:", movie)
            setMoviesAnime(movie.data.data || []);

            await new Promise(res => setTimeout(res, 500));


            const manga = await axios.get("https://api.jikan.moe/v4/top/manga");
            // console.log("🚀 ~ fetchData ~ manga:", manga)
            setMangaAnime(random.data.data || []);
            await new Promise(res => setTimeout(res, 500));


            const search = await axios.get("https://api.jikan.moe/v4/anime?q=");
            setSearchAnime(search.data.data || []);

            await new Promise(res => setTimeout(res, 500));
        } catch (error) {
            console.log("🚀 ~ fetchData ~ error:", error)
            
        }
            finally {
                setLoading(false);
            }
    }

    useEffect( ()=> {
        fetchData();
    }, [])


    const ApiValue = useMemo( () => ({topAnime, upcomingAnime, randomAnime, moviesAnime, mangaAnime, searchAnime}))


    return(
        <ApiContext.Provider value={ApiValue}>
            {children}
        </ApiContext.Provider>
    )
}

const useApi = () => useContext(ApiContext)

export { ApiProvider, useApi };

