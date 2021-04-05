import React from 'react';

export class Post extends React.Component{
    constructor(props) {  // 1
        super(props);
        this.state = {
            title: "",
            text: "",
            date_added: "",
            author: ""
        }
    }

    componentDidMount() { // 3
        const formData = new FormData();
        formData.append("id",this.props.match.params.id);
        fetch("http://l96295ht.beget.tech/php/getPost.php",{
            method: "POST",
            body: formData
        }).then(response=>response.json())
            .then(result=>{
                this.setState({
                    title: result.title,
                    text: result.text,
                    date_addet: result.date_addet,
                    author: result.author
                })
            })
    }
    render() { // 2
        return <div>
            <h1 className="text-center" style={{background: "RoyalBlue"}}><i className="bi bi-intersect"> </i>{this.state.title}</h1>
            <p style={{background: "LightSkyBlue"}}>{this.state.text}</p>
            <p style={{color: "RoyalBlue"}}><i className="bi bi-info-circle"> </i>Добавлено: {this.state.date_addet}</p>
            <p style={{color: "RoyalBlue"}}><i className="bi bi-file-earmark-person"> </i>Автор: {this.state.author}</p>
        </div>
    }
}