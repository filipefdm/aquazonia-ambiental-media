import { useState, useEffect } from 'react';
import './Cover.scss';

import river1 from '../../assets/river1.svg';
import river2 from '../../assets/river2.svg';
import ambientalMediaLogo from '../../assets/logo_ambiental_media.png';
import serrapilheiraLogo from '../../assets/logo_serrapilheira.png';
import vectorCutOut from '../../assets/vector-cut-out.png';
import { act } from 'react-dom/test-utils';

type BackgroundColorProps = 'emerald' | 'beige';

export function Cover() {
  const [bgColor, setBgColor] = useState<BackgroundColorProps>('emerald');

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0 && bgColor !== 'beige') {
        act(() => {
          setBgColor('beige');
        });
      } else if (window.pageYOffset === 0 && bgColor !== 'emerald') {
        act(() => {
          setBgColor('emerald');
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [bgColor]);

  return (
    <section className={`app__header ${bgColor}`} role="section">
      <div className="app__fullsize-img"></div>
      <div className="titletext">
        <div className="background-img">
          <img src={river1} alt="Rio 1" />
          <img src={river2} className={`not-visible ${bgColor}`} alt="Rio 2" />
        </div>
        <div className="top-logos">
          <img src={ambientalMediaLogo} alt="Ambiental Media Logo" />
          <img src={serrapilheiraLogo} alt="Serrapilheira Logo" />
        </div>
        <h1 className="title">Aquazônia</h1>
        <h2 className="subtitle">A FLORESTA-ÁGUA</h2>
        <div className="byline">
          <p className="ownline">
            <strong>Texto: </strong>
            Ronaldo Ribeiro, Letícia Klein & Kevin Damasio
          </p>
          <p className="inline">
            <strong>Mapas: </strong>
            Laura Kurtzberg
            <strong>Fotos: </strong>
            João Silva
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
          <strong>Desmatamento e fogo </strong>
          têm sido os principais indicadores da destruição da Floresta
          Amazônica. Mas qual o efeito acumulado das ações humanas em rios,
          lagos, planícies inundáveis? Quais as ameaças à dinâmica das águas da
          maior bacia hidrográfica do planeta? Baseado nos melhores dados
          científicos disponíveis, o inédito Índice de Impacto nas Águas da
          Amazônia sintetiza dados de monitoramento e pesquisa para apontar as
          áreas mais vulneráveis.
        </p>
      </div>
      <div className="cutout">
        <img src={vectorCutOut} alt="Cut out image" />
      </div>
    </section>
  );
}
