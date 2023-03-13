import "./Header.scss";
import river from "../../assets/rio_novo.png";
import ambientalMediaLogo from "../../assets/logo_ambiental_media.png";
import serrapilheiraLogo from "../../assets/logo_serrapilheira.png";
import vectorCutOut from "../../assets/vector-cutout.svg";

export function Header() {
  return (
    <section className="app__header">
      <div className="app__fullsize-img"></div>
      <div id="app__background-color" className="app__green">
        <div className="titletext">
          <div className="background-img">
            <img src={river} alt="Rio" />
          </div>
          <div className="top-logos">
            <img src={ambientalMediaLogo} alt="Ambiental Media Logo" />
            <img src={serrapilheiraLogo} alt="Serrapilheira Logo" />
          </div>
          <h1 className="title">Aquazônia</h1>
          <h2 className="subtitle">A FLORESTA-ÁGUA</h2>
          <div className="byline">
            <p className="ownline">
              <strong>Texto:</strong>
              Ronaldo Ribeiro, Letícia Klein & Kevin Damasio
            </p>
            <p className="inline">
              <strong>Mapas:</strong>
              Laura Kurtzberg
            </p>
          </div>
          <ul className="langswitcher">
            <li>
              <a href="" className="active">
                PT
              </a>
            </li>
            <li>
              <a href="">EN</a>
            </li>
          </ul>
        </div>
        <div className="headingtext">
          <p>
            <strong>Desmatamento e fogo</strong>
            têm sido os principais indicadores da destruição da Floresta
            Amazônica. Mas qual o efeito acumulado das ações humanas em rios,
            lagos, planícies inundáveis? Quais as ameaças à dinâmica das águas
            da maior bacia hidrográfica do planeta? Baseado nos melhores dados
            científicos disponíveis, o inédito Índice de Impacto nas Águas da
            Amazônia sintetiza dados de monitoramento e pesquisa para apontar as
            áreas mais vulneráveis.
          </p>
        </div>
        <div className="cutout">
          <img src={vectorCutOut} alt="negative space decorative image" />
        </div>
      </div>
    </section>
  );
}
