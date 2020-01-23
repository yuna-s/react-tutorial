import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Api from './Api';

import { FaStar } from 'react-icons/fa';
import immutable from 'immutable';

const api = new Api(`http://localhost:4000`);

const FavoriteButton = ({isFavorite, onClick} )=> (
    <FaStar style= {{cursor: "pointer"}} color={isFavorite ? "#ffa500":"#eee"} onClick={onClick} />)

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {articles: []}
    }

    componentWillMount(){
        api.listArticles().then((result) => {
            this.setState({articles: result.articles, current: 1, last: result.links.last_page})
        })
    }

    handleFavorite(article, index) {
    article.isFavorite = article.isFavorite !== true;
    api.updateArticle(article.id, article).then((result => {
        const nextArticles = immutable.List(this.state.articles);
        nextArticles[index] = result.article;
        this.setState({articles: nextArticles});
    }))
    }

    render(){
        return (
            <div>
                <h2>Articles neko</h2>
                <ul>
                    {this.state.articles.map((x, index) =>(
                        <li key={index}>
                            <Link to={`/articles/${x.id}`}>{x.title}</Link>
                            {" "}
                            <FavoriteButton isFavorite={x.isFavorite} onClick={() =>
                            this.handleFavorite(x, index)} />
                        </li>
                    ))}
                    
                </ul>
            </div>
        )
    }
}

class FavoriteList extends Component {
    render() {
        return (
            <div>
                <h2>Favorite Articles.Articles</h2>
            </div>
        )
    }
}

class Show extends Component {

    constructor(props) {
        super(props);
        this.state = { article:{} }
    }

    componentWillMount() {
        const {id} = this.props.match.params;
        api.showArticle(parseInt(id, 10)).then((result) =>{
            this.setState({article:result.article})
        })
    }

    render(){
        const {article} = this.state;
        return (
            <div>
                <h2>{article.title}</h2>
                <h3>{article.discription}</h3>
            </div>
        )
    }

}

export default { List, FavoriteList, Show }