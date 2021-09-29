function CardRazasPerros(props) {
  return (
    <li class="breedCard">
      <div class="contenedorImagen">
        <img src={props.imagen} alt={props.nombreRaza} />
      </div>
      <span class="breedTitle">{props.nombreRaza}</span>
    </li>
  );
}

export default CardRazasPerros;