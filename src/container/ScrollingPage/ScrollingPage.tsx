import { useRef } from 'react';
import { SectionNavigation } from '../SectionNavigation/SectionNavigation';
import './ScrollingPage.scss';

import hutPicture from '../../assets/hut_picture.png';

export function ScrollingPage() {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);
  const section5Ref = useRef<HTMLDivElement>(null);
  const section6Ref = useRef<HTMLDivElement>(null);
  const section7Ref = useRef<HTMLDivElement>(null);

  const sections = [
    {
      id: 'section1',
      label: 'A intensidade das ameaças à bacia',
      ref: section1Ref,
    },
    {
      id: 'section2',
      label: 'Lacunas de dados num mundo de águas',
      ref: section2Ref,
    },
    {
      id: 'section3',
      label: 'Lacunas de dados num mundo de águas',
      ref: section3Ref,
    },
    {
      id: 'section4',
      label: 'Água: fonte de energia de baixo impacto?',
      ref: section4Ref,
    },
    {
      id: 'section5',
      label: 'Ouro: o sonho amazônico virou pesadelo ambiental',
      ref: section5Ref,
    },
    {
      id: 'section6',
      label: 'Ouro: o sonho amazônico virou pesadelo ambiental',
      ref: section6Ref,
    },
    {
      id: 'section7',
      label: 'O futuro: um esforço coordenado pela bacia',
      ref: section7Ref,
    },
  ];

  return (
    <>
      <SectionNavigation sections={sections} showButtons={true} />
      <div className="section__text-inside">
        <p className="section__paragraph">
          A Amazônia perdeu 12% da sua superfície de água - um total de
          1.104.575 ha, com quebra de linha. equivalente à metade do território
          de Sergipe - nos últimos 30 anos, anunciou em setembro do ano passado
          um levantamento da rede colaborativa MabBiomas. Segundo a iniciativa,
          “a dinâmica de uso da terra baseada na conversão da floresta para
          pecuária e agricultura e a construção de represas contribuem para a
          diminuição do fluxo hídrico”.
        </p>
        <p>
          Esse número negativo impressionante expõe de modo trágico a crise
          hídrica brasileira e exige uma revisão em debates, estudos e políticas
          de conservação do meio ambiente.
        </p>
        <p>
          Na mixórdia de elementos naturais que constituem a identidade
          ecológica da Amazônia, a terra historicamente se sobressai. Cobiçado
          por colonizadores desde o século 16, o solo da floresta tropical vem
          sofrendo uma exploração de seus recursos com impactos severos – hoje
          sabemos, de escala global, no fogo que consome as árvores e libera no
          ar o carbono acumulado, ajudando a impulsionar as mudanças no clima.
        </p>
        <p>
          Tal processo tem sido o eixo central em discussões que mobilizam
          cientistas, ambientalistas e legisladores engajados na preservação da
          região selvagem mais biodiversa do planeta.
        </p>
        <p>
          Mais do que nunca, contudo, é urgente olhar para o outro elemento da
          natureza.
        </p>
        <p>
          Na Amazônia, a água é o agente de conexão. Ela transborda do degelo
          dos Andes e escorre na forma de rios que, ao longo de seu curso,
          alimentam comunidades humanas e irrigam matas e planícies ricas em
          espécies da fauna e flora. A evapotranspiração da biomassa vegetal
          produz novas águas em um ciclo anual de chuvas que retroalimentam os
          estoques do bioma e viajam Brasil afora - os chamados “rios voadores”
          irão irrigar lavouras e garantir o abastecimento de centros urbanos
          mais ao sul.
        </p>
        <p>
          A Bacia Hidrográfica Amazônica cobre uma área de 7 milhões de
          quilômetros quadrados ao longo de oito países, concentra 20% da água
          doce líquida superficial do planeta e responde por aproximadamente 18%
          de toda a água doce que chega aos oceanos.
        </p>
        <p>
          Clima, economia, ciência, cultura, ecologia, energia, política,
          biodiversidade: isto é a floresta-água.
        </p>
      </div>
      <section className="section__number-two">
        <div className="section__leading-text" role="region">
          <p>A Bacia Hidrográfica Amazônica representa: </p>
        </div>
        <div className="section__overall-numbers">
          <div className="overall-numbers__numbers-subsection">
            <h1>7 milhões</h1>
            <p>de quilômetros quadrados de área, em 8 países</p>
          </div>
          <div className="overall-numbers__numbers-subsection">
            <h1>20%</h1>
            <p>de água doce líquida superficial do planeta</p>
          </div>
          <div className="overall-numbers__numbers-subsection">
            <h1>18%</h1>
            <p>de água doce que chega aos oceanos</p>
          </div>
        </div>
      </section>
      <div className="section__fullsize-img">
        <div className="fullsize-img__img-crop">
          <img src={hutPicture} alt="Hut picture" role="img" />
        </div>
      </div>
      <div ref={section1Ref} className="section__text-inside">
        <section className="section__number-three">
          <div className="section__leading-text">
            <h2>A intensidade das ameaças à bacia</h2>
          </div>
          <p className="section__paragraph">
            O Índice de Impacto nas Águas na Amazônia não pretende ser uma
            ferramenta de precisão acadêmica, mas um produto de jornalismo
            científico com base em dados disponíveis. Seu objetivo é expor as
            zonas de impacto com clareza gráfica, ao lado de opiniões
            qualificadas. E, com isso, tornar-se uma plataforma de referência
            para o entendimento dos principais impactos da atividade humana nos
            ecossistemas aquáticos da Bacia Amazônica.
          </p>
          <p>
            No debate internacional sobre a conservação da região, predomina há
            décadas o padrão de levantamento e análise de dados sobre a
            degradação da cobertura vegetal: as queimadas, o desmatamento, os
            garimpeiros, o boi, a soja. A Amazônia como fonte de
            matérias-primas. Os ecossistemas aquáticos também sofrem com todas
            as mazelas da intensa atividade humana - a perda da floresta afeta o
            ciclo hidrológico -, mas os danos são mais difíceis de serem
            identificados e entendidos, seja em monitoramento remoto, seja em
            dados de pesquisa científica.
          </p>
        </section>
      </div>
    </>
  );
}
