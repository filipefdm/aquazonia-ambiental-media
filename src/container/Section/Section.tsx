import "./Section.scss";
import image from "../../assets/30082013-DSC_2455 1.png";

interface SectionProps {
  id: string;
  backgroundColor: string;
  content: {
    title: string;
    description: string;
  };
}

export function Section({ id, backgroundColor, content }: SectionProps) {
  return (
    <>
      <section id={id} style={{ backgroundColor }}>
        <div className="text-inside">
          <p className="app__paragraph">
            A Amazônia perdeu 12% da sua superfície de água - um total de
            1.104.575 ha, com quebra de linha. equivalente à metade do
            território de Sergipe - nos últimos 30 anos, anunciou em setembro do
            ano passado um levantamento da rede colaborativa MabBiomas. Segundo
            a iniciativa, “a dinâmica de uso da terra baseada na conversão da
            floresta para pecuária e agricultura e a construção de represas
            contribuem para a diminuição do fluxo hídrico”.
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
            humana nos ecossistemas aquáticos da Bacia Hidrográfica Amazônica,
            que cobre uma área de 7 milhões de quilômetros quadrados ao longo de
            oito países e responde por aproximadamente 18% de toda a água doce
            que chega aos oceanos.
          </p>
          <p>
            Mais do que ostentar números de proporções colossais, a água na
            Amazônia é o agente de conexão. Ela transborda do degelo dos Andes e
            escorre na forma de rios que, ao longo de seu curso, alimentam
            comunidades humanas e irrigam matas e planícies ricas em espécies de
            fauna e flora. A evapotranspiração da biomassa vegetal transfere
            água para a atmosfera em um ciclo anual de chuvas que retroalimentam
            os estoques do bioma e viajam continente afora - os chamados “rios
            voadores” irão irrigar lavouras e garantir o abastecimento de
            centros urbanos mais ao sul do Brasil.
          </p>
          <p>
            Clima, economia, ciência, cultura, ecologia, energia, política,
            biodiversidade: isto é a floresta-água.
          </p>
        </div>
      </section>
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
    </>
  );
}
