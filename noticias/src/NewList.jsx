import React from "react";
import { useState, useEffect } from "react";

function NewList(){

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
          const response = await fetch("noticias.json");
          const data = await response.json();
          setArticles(data);
        };
    
        fetchArticles();
      }, []);
      
      return(
        <>
            <div>
            {articles.map((item) => (
                <li key={item.titulo}>
                    {item.titulo}
                </li>
                ))}
            
            </div>
        </>
      );
    }
export default NewList;