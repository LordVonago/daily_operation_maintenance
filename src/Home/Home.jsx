import { useEffect, useState } from "react";
import classes from "./Home.module.css";
import Footer from "../Components/Footer/Footer.jsx";
import Dash from "../Components/Dashboard/Dash.jsx";
import S5 from "../Components/5S/S5.jsx";

const Home = () => {
  let categories = [
    {
      label: "Segurança",
      id: "Safety",
    },
    {
      label: "5S",
      id: "S5",
    },
    {
      label: "Pessoas",
      id: "People",
    },
    {
      label: "Equipamento",
      id: "Equipament",
    },
    {
      label: "Manutenção",
      id: "Maintenance",
    },
    {
      label: "Férias",
      id: "Vacation",
    },
    {
      label: "outros",
      id: "Others",
    },
    // {
    //   label: "Pessoas",
    //   id: "People",
    // },
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
    sessionStorage.setItem("Category", e.target.innerText);

    const pElements = e.target.closest("ul").getElementsByTagName("p");
    for (let i = 0; i < pElements.length; i++) {
      const element = pElements[i];
      element.style = "";
    }

    let activatedEl = e.target.id;

    e.target.style.backgroundColor = "aliceblue";
    e.target.style.fontSize = "large";
    e.target.style.color = "#333";
    e.target.style.fontWeight = "bold";
    e.target.style.borderRadius = "0.3rem";

    const divElements = document
      .querySelector("article")
      .getElementsByTagName("div");

    for (let i = 0; i < divElements.length; i++) {
      const element = divElements[i];

      if (element.id == activatedEl) {
        element.style = "";
      } else {
        element.id !== ""
          ? (element.style.display = "none")
          : (element.style = "");
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
                    <p id={element.id}>
                      {element.label}{" "}
                      <i
                        class="fa-solid fa-arrow-right"
                        style={{ color: "#333" }}
                      />
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          </aside>

          {/* Conteúdo das categorias ((((WIP)))) */}
          <article className={classes.content}>
            {/* Conteúdo das categorias ((((WIP)))) */}

            {/* DashBoard */}
            <div id="Dash" className={classes.dashContainer}>
              <Dash />
            </div>

            {/* 5S */}
            <div
              id="Safety"
              className={classes.safetyContainer}
              style={{ display: "none" }}
            >
              <p>Segurança</p>
            </div>

            {/* 5S */}
            <div
              id="S5"
              className={classes.S5Container}
              style={{ display: "none" }}
            >
              <S5 />
            </div>

            {/* Pessoas */}
            <div
              id="People"
              className={classes.peopleContainer}
              style={{ display: "none" }}
            >
              <p>Pessoas</p>
            </div>

            {/* Equipamentos */}
            <div
              id="Equipament"
              className={classes.equipamentContainer}
              style={{ display: "none" }}
            >
              <p>Equipamentos</p>
            </div>

            {/* Manutenção */}
            <div
              id="Maintenance"
              className={classes.maintenanceContainer}
              style={{ display: "none" }}
            >
              <p>Manutenção</p>
            </div>

            {/* Férias */}
            <div
              id="Vacation"
              className={classes.vacationContainer}
              style={{ display: "none" }}
            >
              <p>Férias</p>
            </div>

            {/* Outros */}
            <div
              id="Others"
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
