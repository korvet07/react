import './App.css';
import React from "react";
import {BrowserRouter, NavLink, Route} from "react-router-dom";
function About() {
    return(
        <div className= "container-md">
            <div className="row py-3">
                <div className="col-sm-4">
                    <h3 className="my-2"  ><i className="far fa-address-card"></i> Контакты</h3>
                    <h5><i className="fas fa-map-marked"></i> Адрес:</h5>
                    <p>г. Москва, ул. Академика Скрябина, д. 9, стр. 4</p>
                    <h5><i className="fas fa-mobile-alt"></i> Телефон:</h5>
                    <p>+7 (495) 260-52-89</p>
                    <h5><i className="far fa-envelope"></i> E-mail:</h5>
                    <p>hotline@eduprof.ru</p>
                    <h5><i className="fas fa-door-open"></i> Время работы:</h5>
                    <p>Понедельник - четверг: с 8-30 по 17-15, пятница: с 8-30 по 16-00; обучение по графику в
                        субботу.</p>
                </div>
            </div>
        </div>
    )

}
function HomePage() {
    return(
        <div className="container pt-5">
            <h1 className="text-center">Изучаемые технологии</h1>
            <div className="row text-center mt-3">
                <div className="col-sm-4">
                    <i className="fab fa-html5 fa-10x" style={{ color: 'red' }} ></i>
                    <h3>HTML</h3>
                </div>
                <div className="col-sm-4">
                    <i className="fab fa-css3-alt fa-10x" style={{ color: 'orange' }}></i>
                    <h3>CSS</h3>
                </div>
                <div className="col-sm-4">
                    <i className="fab fa-js-square fa-10x" style={{ color: 'purple' }}></i>
                    <h3>JavaScript</h3>
                </div>
            </div>
        </div>
    )

}
function Menu() {
    return(
        <nav className="nav">
            <NavLink className="nav-link active" aria-current="page" to="/"><i className="bi bi-house-door"> </i>Главная</NavLink>
            <NavLink className="nav-link" to="/about"><i className="bi bi-file-earmark-person"> </i>О нас</NavLink>
            <NavLink className="nav-link" to ="/contact-us"><i className="bi bi-card-checklist"> </i>Контакты</NavLink>
        </nav>
    )

}
function ContactUs() {
    return(
        <div className="container my-5">
            <form action="">
                <div className="mb-3"><input className="form-control" type="text"/></div>
                <div className="mb-3"><input className="form-control" type="text"/></div>
                <div className="mb-3"><textarea className="form-control" type="text"/></div>
                <div className="mb-3"><input className="form-control btn btn-primary" type="submit"/></div>
            </form>

        </div>
    )

}
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Menu/>
            <Route exact path="/" render={()=><HomePage/>} />
            <Route path="/about" render={()=><About/>} />
            <Route path="/contact-us" render={()=><ContactUs/>}/>
        </BrowserRouter>
    </div>
  );
}

export default App;
