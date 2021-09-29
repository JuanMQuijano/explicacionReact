import CardRazasPerros from "components/CardRazasPerros";
import borderCollie from "media/borderCollie.jpg";
import Footer from "components/Footer";
import Header from "components/Header";
import rhode from "media/rhodesian.jpg";
import past from "media/pastor.jpg";

function Index() {
  return (
    <div>
      <Header/>
      <main>
        <section>
          <h1>Razas de Perros</h1>
          <ul class="breedCardContainer">
            <CardRazasPerros nombreRaza="Pastor Aleman" imagen={past} />
            <CardRazasPerros nombreRaza="Border Collie" imagen={borderCollie} />
            <CardRazasPerros nombreRaza="Rhodesian" imagen={rhode} />
          </ul>
        </section>
        <section></section>
      </main>
      <Footer/>
    </div>
  );
}

export default Index;
