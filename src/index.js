import React from "react";
import ReactDom from "react-dom";
import "./styles.css";
function Card(props) {
  return (
    <div className="my_style">
      <h2>{props.name}</h2>
      <img src={props.img} />
      <p>{props.phone}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDom.render(
  <div>
    <h1>MY Contents</h1>
    <Card
      name="Katrina"
      img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMWtxIV9sa_pWGkY5z5LIht_xx8lGlsArqvg&usqp=CAU"
      phone="03453777999"
      email="Katrina@email.com"
    />
    <Card
      name="Noora"
      img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbTlbbeC1oRa-RW2Yn5hvgN8NNGFNoBniSnA&usqp=CAU"
      phone="0345377888"
      email="Noora@email.com"
    />
    <Card
      name="Alaya"
      img="https://qph.fs.quoracdn.net/main-qimg-a3a16522cc055c5dbdcc443078a00edf.webp"
      phone="0345377777"
      email="Alaya@email.com"
    />
  </div>,
  document.getElementById("root")
);
