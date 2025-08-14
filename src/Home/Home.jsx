import { useEffect, useState } from "react";
import classes from "./Home.module.css";
import Footer from "../Components/Footer/Footer.jsx";
import Dash from "../Components/Dashboard/Dash.jsx";
import S5 from "../Components/5S/S5.jsx";

const Home = () => {
  let categories = [
    {
      label: "Segurança",
      link: "Safety",
    },
    {
      label: "5S",
      link: "S5",
    },
    {
      label: "Pessoas",
      link: "People",
    },
    {
      label: "Equipamento",
      link: "Equipament",
    },
    {
      label: "Manutenção",
      link: "Maintenance",
    },
    {
      label: "Férias",
      link: "Vacation",
    },
    {
      label: "outros",
      link: "Others",
    },
    // {
    //   label: "Pessoas",
    //   link: "People",
    // },
  ];

  const [inputdatevalue, setinputdatevalue] = useState("");

  // Define a data do filtro como o dia atual e salva na localStorage
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

  // Executa as ações para exibição das telas ao selecionar uma categoria na Navbar
  function handleClick(e) {
    sessionStorage.setItem("Category", e.target.innerText);

    // Coleta informações e limpa os estilos dos elementos <p>
    {
      const pElements = e.target.closest("ul").getElementsByTagName("p");
      for (let i = 0; i < pElements.length; i++) {
        const element = pElements[i];
        element.style = "";
      }
    }

    // Estilos aplicados ao clicar nos elementos <p>
    {
      e.target.style.backgroundColor = "#607d8b";
      e.target.style.fontSize = "large";
      e.target.style.color = "#fff";
      e.target.style.fontWeight = "bold";
      e.target.style.boxShadow = "inset 0 0 2px 0 black";
      e.target.style.marginLeft = "1px";
      e.target.style.marginRight = "1px";
      e.target.style.borderRadius = "0.3rem";
    }

    // Coleta as informações e altera a visibilidade das categorias
    {
      let activatedElementLinkAt = e.target.getAttribute("link");
      const divElements = document
        .querySelector("article")
        .getElementsByTagName("div");

      for (let i = 0; i < divElements.length; i++) {
        const element = divElements[i];
        let elementLinkAt = element.getAttribute("link");

        if (elementLinkAt == activatedElementLinkAt) {
          element.style = "";
        } else if (elementLinkAt == null || elementLinkAt == undefined) {
          element.style = "";
        } else {
          element.style.display = "none";
        }
      }
    }
  }

  return (
    <>
      <div className={classes.mainContainer}>
        {/* Título */}
        <div className={classes.NavBar}>
          <div
            className={classes.logoContainer}
            onClick={() => window.location.reload()}
          >
            <img src="/images.png" alt="" />
          </div>
          <section className={classes.title}>
            <h1>Diário de bordo</h1>
          </section>
        </div>

        {/* Conteúdo */}
        <div className={classes.pageContainer}>
          {/* Barra de navegação lateral (Filtros de data) */}
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
                    <p link={element.link}>{element.label} </p>
                  </li>
                ))}
              </ul>
            </section>
          </aside>

          {/* Conteúdo das categorias ((((WIP)))) */}
          <article className={classes.content}>
            {/* DashBoard */}
            <div link="Dash" className={classes.dashContainer}>
              <Dash />
            </div>

            {/* 5S */}
            <div
              link="Safety"
              className={classes.safetyContainer}
              style={{ display: "none" }}
            >
              <p>Segurança</p>
            </div>

            {/* 5S */}
            <div
              link="S5"
              className={classes.S5Container}
              style={{ display: "none" }}
            >
              <S5 />
            </div>

            {/* Pessoas */}
            <div
              link="People"
              className={classes.peopleContainer}
              style={{ display: "none" }}
            >
              <p>Pessoas</p>
            </div>

            {/* Equipamentos */}
            <div
              link="Equipament"
              className={classes.equipamentContainer}
              style={{ display: "none" }}
            >
              <p>Equipamentos</p>
            </div>

            {/* Manutenção */}
            <div
              link="Maintenance"
              className={classes.maintenanceContainer}
              style={{ display: "none" }}
            >
              <p>Manutenção</p>
            </div>

            {/* Férias */}
            <div
              link="Vacation"
              className={classes.vacationContainer}
              style={{ display: "none" }}
            >
              <p>Férias</p>
            </div>

            {/* Outros */}
            <div
              link="Others"
              className={classes.othersContainer}
              style={{ display: "none" }}
            >
              <p>Outros</p>
            </div>

            {/* Footer */}
            <footer>
              <Footer />
            </footer>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
