import { useEffect, useState } from "react";
import classes from "./Home.module.css";
import Footer from "../Footer/Footer.jsx";

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
              {categories.map((element, index) => (
                <p key={index}>{element}</p>
              ))}
            </section>
          </aside>

          {/* Conteúdo das categorias ((((WIP)))) */}
          <div className={classes.content}>
            <p>Content</p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
