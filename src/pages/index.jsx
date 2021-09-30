import CardRazasPerros from "components/CardRazasPerros";
import borderCollie from "media/borderCollie.jpg";
import rhode from "media/rhodesian.jpg";
import past from "media/pastor.jpg";

function Index() {
  return (
    <section>
      <h1>Razas de Perros</h1>
      <ul class="breedCardContainer">
        <CardRazasPerros nombreRaza="Pastor Aleman" imagen={past} />
        <CardRazasPerros nombreRaza="Border Collie" imagen={borderCollie} />
        <CardRazasPerros nombreRaza="Rhodesian" imagen={rhode} />
      </ul>
    </section>
  );
}

export default Index;
