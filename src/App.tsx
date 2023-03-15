import { Navbar } from "./components/Navbar/Navbar";
import { Header } from "./container/Header/Header";
import { ScrollNavigationButtons } from "./container/ScrollNavigationButtons/ScrollNavigationButtons";
import "./App.scss";
import { SectionNavigation } from "./container/SectionNavigation/SectionNavigation";
import { useRef } from "react";
import image from "./assets/30082013-DSC_2455 1.png";

export function App() {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);

  const sections = [
    { id: "section1", label: "", ref: section1Ref },
    {
      id: "section2",
      label: "A intensidade das ameaças à bacia",
      ref: section2Ref,
    },
  ];

  return (
    <div className="app">
      <Navbar />
      <Header />
      {/* <ScrollNavigationButtons /> */}
      <SectionNavigation sections={sections} showButtons={true} />
      <div ref={section1Ref} className="text-inside">
        <p className="app__paragraph">
          A Amazônia perdeu 12% da sua superfície de água - um total de
          1.104.575 ha, com quebra de linha. equivalente à metade do território
          de Sergipe - nos últimos 30 anos, anunciou em setembro do ano passado
          um levantamento da rede colaborativa MabBiomas. Segundo a iniciativa,
          “a dinâmica de uso da terra baseada na conversão da floresta para
          pecuária e agricultura e a construção de represas contribuem para a
          diminuição do fluxo hídrico”.
        </p>
        <p>
          Um dos principais resultados do Índice de Impacto nas Águas da
          Amazônia (IIAA), desenvolvido pela Ambiental Media com apoio do
          Instituto Serrapilheira, aponta na mesma direção: um quinto das
          microbacias hidrográficas da Amazônia brasileira estão
          significativamente impactadas.
        </p>
        <p>
          Esses números negativos impressionantes expõem a real extensão da
          degradação dos ecossistemas aquáticos da Amazônia e indicam que a
          crise hídrica brasileira é ainda mais grave do que aparenta. “É
          preciso uma revisão urgente das políticas de conservação do meio
          ambiente voltada às águas”, afirma a bióloga Cecília Gontijo Leal,
          consultora científica do projeto Aquazônia.
        </p>
        <p>
          O IIAA, criado para contribuir com esse debate, não pretende ser uma
          ferramenta de precisão acadêmica, mas um produto de jornalismo
          científico com base em dados disponíveis. Seu objetivo é expor as
          regiões e bacias mais impactadas com clareza gráfica, ao lado de
          opiniões qualificadas. E, com isso, tornar-se uma plataforma de
          referência para o entendimento dos principais impactos da atividade
          humana nos ecossistemas aquáticos da Bacia Hidrográfica Amazônica, que
          cobre uma área de 7 milhões de quilômetros quadrados ao longo de oito
          países e responde por aproximadamente 18% de toda a água doce que
          chega aos oceanos.
        </p>
        <p>
          Mais do que ostentar números de proporções colossais, a água na
          Amazônia é o agente de conexão. Ela transborda do degelo dos Andes e
          escorre na forma de rios que, ao longo de seu curso, alimentam
          comunidades humanas e irrigam matas e planícies ricas em espécies de
          fauna e flora. A evapotranspiração da biomassa vegetal transfere água
          para a atmosfera em um ciclo anual de chuvas que retroalimentam os
          estoques do bioma e viajam continente afora - os chamados “rios
          voadores” irão irrigar lavouras e garantir o abastecimento de centros
          urbanos mais ao sul do Brasil.
        </p>
        <p>
          Clima, economia, ciência, cultura, ecologia, energia, política,
          biodiversidade: isto é a floresta-água.
        </p>
      </div>
      <section className="section-number-two">
        <div className="leading-text">
          <p>A Bacia Hidrográfica Amazônica representa: </p>
        </div>
        <div className="overall-numbers-section">
          <div className="numbers-subsection">
            <h1>7 milhões</h1>
            <p>de quilômetros quadrados de área, em 8 países</p>
          </div>
          <div className="numbers-subsection">
            <h1>20%</h1>
            <p>de água doce líquida superficial do planeta</p>
          </div>
          <div className="numbers-subsection">
            <h1>18%</h1>
            <p>de água doce que chega aos oceanos</p>
          </div>
        </div>
      </section>
      <section>
        <div className="fullsize-img">
          <div className="img-crop">
            <img src={image} alt="img-fit-cover" />
          </div>
        </div>
      </section>
      <div ref={section2Ref} className="text-inside">
        <section className="section-number-three">
          <div className="leading-text">
            <h2>A intensidade das ameaças à bacia</h2>
          </div>
          <p className="app__paragraph">
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
    </div>
  );
}
