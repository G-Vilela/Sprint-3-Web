import { useState } from 'react';

const imagens = [
  'https://media.licdn.com/dms/image/v2/D4D05AQHIYsGf32mxuQ/feedshare-thumbnail_720_1280/feedshare-thumbnail_720_1280/0/1714661995954?e=2147483647&v=beta&t=SFF4nq814x_ns-XvAqC3X9oJnk-z5cw2o8XEZJIuNoU',
  'https://s3.amazonaws.com/wpfiap/wp-content/uploads/2014/11/20141105_fiap_next_0489.jpg',
  'https://i.ytimg.com/vi/7Ggx_UsW17o/maxresdefault.jpg'
];

function Slideshow() {
  const [indice, setIndice] = useState(0);

  const proximo = () => setIndice((indice + 1) % imagens.length);
  const anterior = () => setIndice((indice - 1 + imagens.length) % imagens.length);
  const aleatorio = () => setIndice(Math.floor(Math.random() * imagens.length));

  return (
    <section className="container">
      <h2>Fiap Next</h2>
      <img id="slide" src={imagens[indice]} alt="Evento FIAP Next" />
      <div className="botoes">
        <button onClick={anterior}>Anterior</button>
        <button onClick={aleatorio}>Aleatório</button>
        <button onClick={proximo}>Próximo</button>
      </div>
    </section>
  );
}
export default Slideshow;
