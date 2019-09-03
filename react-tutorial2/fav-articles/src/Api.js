import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import parse from 'parse-link-header';

if (process.env.NODE_ENV == "test") {
    axios.defaults.adapter = httpAdapter;
} 

export default class Api {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    listArticles(page=1) {
        return axios.get(`${this.baseUrl}/api/articles?_page=${page}`).then((res) => {
            return {
                "articles": res.data || [],
                "links": parse(res.headers.link)
            }
        });
    }

    listFavoriteArticles(page=1) {
        return axios.get(`${this.baseUrl}/api/articles/${id}`).then((res) => {
            return {
                "article": res.data
            }
        });
    }

    showArticle(id) {
        return axios.get(`${this.baseUrl}/api/articles/${id}`).then((res) => {
            return {
                "article": res.data
            }
        });
    }

    updateArticle(id, params){
        return axios.put(`${this.baseUrl}/api/articles/${id}`, params).then((res) => {
            return {
                "article": res.data
            }
        });
    }

}