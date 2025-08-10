import { useEffect, useState } from "react";
import classes from "./Home.module.css";
import Footer from "../Footer/Footer.jsx";
import Dash from "../Components/Dash.jsx";

const Home = () => {
  let categories = [
    "Segurança",
    "5S",
    "Pessoas",
    "Equipamentos",
    "Manutenção",
    "Limpeza",
    "Revisão",
    "Outros",
  ];

  const [inputdatevalue, setinputdatevalue] = useState("");

  useEffect(() => {
    let date = new Date();
    date = date.toISOString().split("T")[0];
    setinputdatevalue(date);

    if (sessionStorage.getItem("date")) {
      return;
    } else {
      sessionStorage.setItem("date", date);
    }
  }, []);

  function handleClick(e) {
    const pElements = e.target.closest("ul").getElementsByTagName("p");
    for (let i = 0; i < pElements.length; i++) {
      const element = pElements[i];
      element.style = "";
    }

    e.target.style.backgroundColor = "aliceblue";
    e.target.style.fontSize = "large";
    e.target.style.color = "#333";
    e.target.style.fontWeight = "bold";
    e.target.style.borderRadius = "0.3rem";
  }

  return (
    <>
      <div className={classes.mainContainer}>
        {/* Título */}
        <div className={classes.NavBar}>
          <div className={classes.logoContainer}>
            <img src="/images.png" alt="" />
          </div>
          <section className={classes.title}>
            <h1>Diário de bordo</h1>
          </section>
        </div>

        {/* Conteúdo */}
        <div className={classes.pageContainer}>
          {/* Barra de navegação (Filtros de data) */}
          <aside className={classes.leftAside}>
            <section>
              <h3>Data:</h3>
              <input
                type="date"
                name="date"
                id="date"
                value={sessionStorage.getItem("date") ?? inputdatevalue}
                onChange={(e) => {
                  setinputdatevalue(e.target.value);
                  sessionStorage.setItem("date", e.target.value);
                }}
              />
            </section>

            {/* Barra de navegação (categorias) */}
            <section className={classes.categories}>
              <h3>Categorias:</h3>
              <ul>
                {categories.map((element, index) => (
                  <li key={index} onClick={(e) => handleClick(e)}>
                    <p>{element}</p>
                  </li>
                ))}
              </ul>
            </section>
          </aside>

          {/* Conteúdo das categorias ((((WIP)))) */}
          <div className={classes.content}>
            <article>
              <div className={classes.dashContainer}>
                <Dash />
              </div>
            </article>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
