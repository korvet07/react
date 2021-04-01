import React from 'react';
import {Link} from "react-router-dom";

function Tr(props){
    return <tr>
        <th scope="row">{props.index}</th>
        <td><Link to="/post">{props.title}</Link></td>
        <td>{props.author}</td>
        <td>{props.date_addet}</td>
    </tr>
}

export class PostList extends React.Component{
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        console.log("Компонет PostList отрисован");
        fetch("http://l96295ht.beget.tech/php/getPosts.php")
            .then(response=>response.json())
            .then(result=>{
                console.log(result);
                let rows = [];
                for (let i = 0; i < result.length; i++) {
                    rows.push(<Tr
                        index={i+1}
                        title={result[i].title}
                        author={result[i].author}
                        date_addet={result[i].date_addet}
                    />)
                }
                this.setState({
                    posts: rows
                })
            })
    }

    render() {
        console.log("Компонет PostList рисуется");
        return <table className="table table-hover">
            <thead>
            <tr>
                <th class="table-primary " scope="col"><i className="bi bi-patch-plus"> </i></th>
                <th class="table-primary " scope="col"><i className="bi bi-card-list"> </i>Заголовок</th>
                <th class="table-primary " scope="col"><i className="bi bi-file-earmark-person"> </i>Автор</th>
                <th class="table-primary " scope="col"><i className="bi bi-calendar-check"> </i>Дата добавления</th>
            </tr>
            </thead>
            <tbody class="table-success table-striped">
            {this.state.posts}
            </tbody>
        </table>
    }
}