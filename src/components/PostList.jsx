import React from 'react';
import {Link} from "react-router-dom";

function Tr(props){
    return <tr>
        <th scope="row">{props.index} [{props.id}]</th>
        <td><Link to={"/post/"+props.id}>{props.title}</Link></td>
        <td>{props.author}</td>
        <td>{props.date_added}</td>
        <td><span className='delete-post-btn' onClick={()=>{
            const formData = new FormData();
            formData.append('id',props.id);
            fetch('http://l96295ht.beget.tech/php/removePost.php',{
                method: "POST",
                body: formData
            }).then(response=>response.json())
                .then(result=>{
                    let posts = props.parent.state.posts;
                    posts.splice(props.index-1, 1);
                    props.parent.setState({
                        posts:posts
                    })
                })
        }
        }>[Удалить]</span></td>
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
                        key={i}
                        index={i+1}
                        id={result[i].id}
                        title={result[i].title}
                        author={result[i].author}
                        date_addet={result[i].date_addet}
                        parent={this}
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
            <thead className="table-primary">
            <tr>
                <th  scope="col"><i className="bi bi-patch-plus"> </i></th>
                <th  scope="col"><i className="bi bi-card-list"> </i>Заголовок</th>
                <th  scope="col"><i className="bi bi-file-earmark-person"> </i>Автор</th>
                <th  scope="col"> </th>
                <th  scope="col"><i className="bi bi-x-octagon"> </i>Удаление</th>
            </tr>
            </thead>
            <tbody class="table-success table-striped">
            {this.state.posts}
            </tbody>
        </table>
    }
}