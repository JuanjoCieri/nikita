import React from "react";
import { useParams } from "react-router-dom";
import pantuflas from "../../mocks/pantuflas";

export default function Detail() {

  let { id } = useParams();

  const product = pantuflas.filter((d) => d.id === Number(id));

  return (
    <section>
      {product.map((d) => (
        <div key={d.id}>
          <p>{d.nombre}</p>
        </div>
      ))}
    </section>
  );
}
