import './Works.css';

function Works() {
 const projects = [
   {
     id: 1,
     title: "Мини-магазин",
     desc: "SPA-магазин на React + TypeScript: каталог, поиск, фильтры, сортировка, корзина с сохранением в LocalStorage. Данные из API",
     link: "https://denisivashov.github.io/mini-shop-repeat/ ",
     img: "/images/mini-shop.png",
   },
   {
     id: 2,
     title: "Мини-соцсеть",
     desc: "Мини-соцсеть на React: добавление постов, лайки, комментарии, сохранение в LocalStorage. Работа с вложенными структурами данных",
     link: "https://denisivashov.github.io/social-network/",
     img: "/images/mini-social.png",
   },
   {
     id: 3,
     title: "Лендинг",
     desc: "Лендинг для сферы красоты: адаптивная вёрстка, якорная навигация, акцентный дизайн. Сделан под ключ.",
     link: "https://denisivashov.github.io/nail-master/ ",
     img: "/images/sister-landing.png",
   },
 ];


  return (
    <section id="works" className="works">
      <h2 className="works-title">Работы</h2>
      <div className="works-grid">
        {projects.map((project) => (
          <article className="works-card" key={project.id}>
            <div className="works-card__img-wrapper">
              <img src={project.img} alt={project.title} className="works-card__img" />
            </div>
            <h3 className="works-card__title">{project.title}</h3>
            <p className="works-card__desc">{project.desc}</p>
            <a href={project.link} className="works-card__link" target="_blank" rel="noopener noreferrer">
              Посмотреть на GitHub Pages →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Works;
