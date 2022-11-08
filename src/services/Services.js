import useGetData from "../hooks/GetData";

const useServices = () => {
    const { getResource, loading, error } = useGetData();
    const pathForNews = 'https://livescore6.p.rapidapi.com/news/v2/list-by-sport?category=2021020913321150030&page=1'
    const headers = {
        'X-RapidAPI-Key': '2a8076fd62mshdb6af402eb40ebcp100785jsnb6271b16cf05',
        'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
    }

    const getPrice = async (path) => {
        const result = await getResource(`http://localhost:3001/${path}`)
        return result
    }

    const getNews = async () => {
        const result = await getResource(pathForNews, headers)
        return result.data.map(_transformNews)
    }
    
    const _transformNews = (news) => {

        return {
            id: news.id,
            title: news.title,
            time: news.published_at,
            img: news.image.data.urls.uploaded.thumbnail
        }       
    }

    return { getPrice, getNews, loading, error }
}

export default useServices;