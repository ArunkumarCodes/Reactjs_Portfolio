import React from "react";
import "./ProductList.css";
import Portfolio from "../../Projects/Portfolio.jpg";
import Cosmo from "../../Projects/Costom Stock.jpg";
import Weather from "../../Projects/Weather.jpg";
import Foodlove from "../../Projects/Foodlove.jpeg";
import RePortfolio from "../../Projects/Reactjs.jpg";
import MiniBank from "../../Projects/MiniBank.jpg";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">My Projects</h1>
        <p className="pl-desc">
          A project is "a temporary endeavor undertaken to create a unique product, service, or result."
        </p>
      </div>
      <div className="pl-list">

      <div className="p">
           <div className="p-browser">
               <div className="p-circle"></div>
               <div className="p-circle"></div>
               <div className="p-circle"></div>
            </div>
           <a href="https://github.com/ArunkumarCodes/Portfolio_Changeing" target="_blank" rel="noreferrer">
           <img src={Portfolio} alt="" className="p-img" />
           </a>
      
        </div>
        <div className="p">
           <div className="p-browser">
               <div className="p-circle"></div>
               <div className="p-circle"></div>
               <div className="p-circle"></div>
            </div>
           <a href="https://github.com/ArunkumarCodes/Cosmo-Stocks" target="_blank" rel="noreferrer">
           <img src={Cosmo} alt="" className="p-img" />
           </a>
      
        </div>
        <div className="p">
           <div className="p-browser">
               <div className="p-circle"></div>
               <div className="p-circle"></div>
               <div className="p-circle"></div>
            </div>
           <a href="https://github.com/ArunkumarCodes/Weather-App" target="_blank" rel="noreferrer">
           <img src={Weather} alt="" className="p-img" />
           </a>
      
        </div>
        <div className="p">
           <div className="p-browser">
               <div className="p-circle"></div>
               <div className="p-circle"></div>
               <div className="p-circle"></div>
            </div>
           <a href="https://github.com/ArunkumarCodes/React.js-Portfolio" target="_blank" rel="noreferrer">
           <img src={Foodlove} alt="" className="p-img" />
           </a>
      
        </div>

        <div className="p">
           <div className="p-browser">
               <div className="p-circle"></div>
               <div className="p-circle"></div>
               <div className="p-circle"></div>
            </div>
           <a href="https://github.com/ArunkumarCodes/Mini-Bank-Core-Java-Project" target="_blank" rel="noreferrer">
           <img src={RePortfolio} alt="" className="p-img" />
           </a>
      
        </div>

        <div className="p">
           <div className="p-browser">
               <div className="p-circle"></div>
               <div className="p-circle"></div>
               <div className="p-circle"></div>
            </div>
           <a href="https://github.com/ArunkumarCodes/React.js-Portfolio" target="_blank" rel="noreferrer">
           <img src={MiniBank} alt="" className="p-img" />
           </a>
      
        </div>
      

       </div>
     
    </div>
  );
};

export default ProductList;
