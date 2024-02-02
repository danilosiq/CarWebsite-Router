import React from "react";
import { useState } from "react";
import { useFetch } from "../hooks/usefetch";
import { Link } from "react-router-dom";
import FIlter from "../components/FIlter";
import headerimg from "../img/headerimg.png"
import SearchBar from "../components/SearchBar";

const Home = () => {
  const url = "http://localhost:3000/carros";
  const { data: itens, loading, error } = useFetch(url);

  return (
    <>
    <div className="header-container">
            <div className="header-bg" />
            <div className='header-content'>
                    
                <div className="header-box">
                    <div className='h-box-welcome'>
                        <h1>Bem Vindo!</h1>

                        <SearchBar/>
                    </div>
                    <img src={headerimg} alt="" />
                </div>
            </div>
        </div>

    <div className="SRcontainer">




      <div className="LateralCamp">
      <h1>Filtro</h1>
      
        <div className="filter">
          <FIlter />
        </div>

        </div>
        <div className="cardsR">
        {loading && <p>Carregando</p>}
          {itens &&
            itens.map((carro) => (
              <li key={carro.id}>
                <div className="card">
                  <img src={carro.img} alt="" className="CardIMG" />

                  <div className="diviCard">
                    <p>
                     {carro.brand}: {carro.name} - R${carro.preco}
                    </p>
                    <Link>
                      <button>Ver mais</button>
                    </Link>
                  </div>
                </div>
              </li>
            ))}
        </div>
  </div> 
  </> 
  );
};

export default Home;
