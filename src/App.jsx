import logo from "./media/logo.png";
import "./App.css";
import borderCollie from "./media/borderCollie.jpg";
import rhode from "./media/rhodesian.jpg";
import fav from "./media/favicon.png";
import past from "./media/pastor.jpg";
import CardRazasPerros from "./components/CardRazasPerros";

function App() {
  return (
    <div className="App">
      <header>
        <div>Hola mundo esto es un div</div>           
        <ul class="navbar">
          <li>
            <img src={logo} alt="imagen" class="logo" />
          </li>
          <li>
            <button class="botonGenerico mainButton">Nuevo post</button>
          </li>
          <li>
            <div class="buscar">
              <input placeholder="Buscar una raza" />
              <i class="fas fa-search botonGenerico iconoBusqueda"></i>
            </div>
          </li>
          <li>
            <button class="botonGenerico secondaryButton">Login</button>
          </li>
          <li>
            <button class="botonGenerico mainButton">Registro</button>
          </li>
        </ul>
      </header>
      <main>
        <section>
          <h1>Razas de Perros</h1>
          <ul class="breedCardContainer">      
            <CardRazasPerros nombreRaza="Pastor Aleman" imagen={past}/>
            <CardRazasPerros nombreRaza="Border Collie" imagen={borderCollie}/>
            <CardRazasPerros nombreRaza="Rhodesian" imagen={rhode}/>            
          </ul>
        </section>
        <section></section>
      </main>
      <footer>        
      </footer>
    </div>
  );
}



export default App;
