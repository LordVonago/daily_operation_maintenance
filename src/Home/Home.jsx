import { useEffect, useState } from "react";
import classes from "./Home.module.css";
import Footer from "../Components/Footer/Footer.jsx";
import Dash from "../Components/Dashboard/Dash.jsx";
import S5 from "../Components/5S/S5.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  let categories = [
    {
      label: "Segurança",
      link: "Safety",
      icon: "fa-solid fa-shield",
    },
    {
      label: "5S",
      link: "S5",
      icon: "fa-solid fa-broom",
    },
    {
      label: "Pessoas",
      link: "People",
      icon: "fa-solid fa-user",
    },
    {
      label: "Equipamento",
      link: "Equipament",
      icon: "fa-solid fa-toolbox",
    },
    {
      label: "Manutenção",
      link: "Maintenance",
      icon: "fa-solid fa-screwdriver-wrench",
    },
    {
      label: "Férias",
      link: "Vacation",
      icon: "fa-solid fa-sun",
    },
    {
      label: "Outros",
      link: "Others",
      icon: "fa-solid fa-bars",
    },
    // {
    //   label: "Pessoas",
    //   link: "People",
    // },
  ];

  const [InputDateValue, setInputDateValue] = useState(getDate());
  const [leftAsideOpen, setleftAsideOpen] = useState(() => {
    const pr = sessionStorage.getItem("drawerPos");
    return pr === "true" || pr == null;
  });

  // obtém a data atual
  function getDate() {
    let date = new Date();
    date = date.toISOString().split("T")[0];
    return date;
  }

  // Define a data do filtro como o dia atual e salva na localStorage
  useEffect(() => {
    function storeDate() {
      let date = getDate();
      // setInputDateValue(date);

      if (sessionStorage.getItem("date")) {
        return;
      } else {
        sessionStorage.setItem("date", date);
      }
    }
    storeDate();
  }, []);

  // Executa as ações para exibição das telas ao selecionar uma categoria no leftAside
  function handleClick(e) {
    let styledLiEl = e.currentTarget;

    // Coleta informações e limpa os estilos dos elementos <p>
    {
      const liElements = e.target.closest("ul").getElementsByTagName("li");
      for (let i = 0; i < liElements.length; i++) {
        const element = liElements[i];
        if (element.id == "drawer") break;
        element.style = "";
      }
    }

    // Estilos aplicados ao clicar nos elementos <p>
    {
      styledLiEl.style.backgroundColor = "#607d8b";
      styledLiEl.style.fontSize = "large";
      styledLiEl.style.color = "#fff";
      styledLiEl.style.fontWeight = "bold";
      styledLiEl.style.boxShadow = "inset 0 0 2px 0 black";
      styledLiEl.style.marginLeft = "1px";
      styledLiEl.style.marginRight = "1px";
      styledLiEl.style.borderRadius = "0.3rem";
    }

    // Coleta as informações e altera a visibilidade das categorias
    {
      let activatedElementLinkAt = styledLiEl.getAttribute("link");

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

  // Oculta/Mostra a barra lateral
  function handleDrawerAction(e) {
    setleftAsideOpen((prev) => !prev);
    sessionStorage.setItem("drawerPos", !leftAsideOpen);
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
          <aside
            id="leftAside"
            className={`${
              leftAsideOpen ? classes.leftAside : classes.leftAsideColapsed
            }`}
          >
            <section>
              <h3>Data:</h3>
              <input
                type="date"
                name="date"
                id="date"
                value={sessionStorage.getItem("date") ?? InputDateValue}
                onChange={(e) => {
                  setInputDateValue(e.target.value);
                  sessionStorage.setItem("date", e.target.value);
                }}
              />
            </section>

            {/* Barra de navegação (categorias) */}
            <section className={classes.categories}>
              <h3>Categorias:</h3>
              <ul>
                {categories.map((element, index) => (
                  <li
                    key={index}
                    link={element.link}
                    onClick={(e) => handleClick(e)}
                  >
                    <FontAwesomeIcon icon={element.icon} />{" "}
                    <p>{element.label}</p>
                  </li>
                ))}
                <li
                  id="drawer"
                  className={classes.drawer}
                  onClick={(e) => handleDrawerAction(e)}
                >
                  <FontAwesomeIcon icon="fa-solid fa-angles-left" />
                </li>
              </ul>
            </section>
            {/* Footer */}
            <footer>
              {leftAsideOpen ? (
                <Footer />
              ) : (
                <a href="https://github.com/LordVonago" target="blank">
                  <FontAwesomeIcon icon="fa-brands fa-github" />
                </a>
              )}
            </footer>
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
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
