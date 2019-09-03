import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Api from './Api';

import FaStar from 'react-icons/lib/fa/star';
import immutable from 'immutable';
import { threadId } from 'worker_threads';

const api = new Api(`http://127.0.0.1:4000`);
const FavoriteButton = ({isFavorite, onClick} )=> (
    <FaStar style= {{cursor: "pointer"}} color={isFavorite ? "#ffa500":"#eee"} onClick={onClick} />)

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {articles: []}
    }

    componentWillMount(){
        const { id } = this.props.match.params;
        api.showArticle(parseInt(id, 10)).then((result) => {
            this.setState({article: result.article})
        })
    }
    render(){
        const {article} = this.state;
        return (
            <div>
                <h2>Articles</h2>
                <ul>
                    {this.state.articles.map((x, index) =>(
                        <li key={index}>
                            <Link to={`/articles/${x.id}`}>{x.title}</Link>
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
                <h2>Favorite Articles</h2>
            </div>
        )
    }
}

class Show extends Component {
    render(){
        return (
            <div>
                <h3>Show {this.props.match.params.id}</h3>
            </div>
        )
    }

}

export default { List, FavoriteList, Show }