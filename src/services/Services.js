import useGetData from "../hooks/GetData";
import moment from 'moment-timezone';

const useServices = () => {
    const { getResource, clearError, loading, error } = useGetData();
    const headers = {
        'X-RapidAPI-Key': '2a8076fd62mshdb6af402eb40ebcp100785jsnb6271b16cf05',
        'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
    }

    const getLocalData = async (path) => {
        const response = await getResource(`http://localhost:3001/${path}`)
        return response
    }

    const getNews = async (page) => {
        const response = await getResource(`https://livescore6.p.rapidapi.com/news/v2/list-by-sport?category=2021020913321150030&page=${page}`, headers)
        return response.data.map(_transformNews)
    }

    const getDetailsNews = async (id) => {
        const response = await getResource(`https://livescore6.p.rapidapi.com/news/v2/detail?id=${id}`, headers)
        return response.article
    }

    const timeСhange = (time) => {
        return moment.utc(time).tz('Europe/Moscow').format("DD MM YYYY HH:mm")
    }

    const _transformNews = (news) => {
        return {
            id: news.id,
            title: news.title.length > 70 ? `${news.title.slice(0, 67)}...` : `${news.title}`,
            time: timeСhange(news.published_at),
            img: `${news.image.data.urls.uploaded.thumbnail}&operations=fit(500:)&w=500&quality=100`
        }       
    }

    return { getLocalData, getNews, getDetailsNews, clearError, loading, error }
}

export default useServices;