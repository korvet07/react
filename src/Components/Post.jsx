import React from "react";

export class Post extends React.Component{
    render() { // Сначала вызывается рендер
        return <h1>
            Возвращаем всегда первый пост из БД!
        </h1>
    }
}