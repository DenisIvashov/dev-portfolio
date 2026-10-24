import './Services.css';

function Services() {
  const services = [
    {
      id: 1,
      title: 'Готовый прототип мини-магазина (MVP)',
      desc: 'Нужен работающий прототип, чтобы показать идею партнёру или протестировать гипотезу — без долгой разработки с нуля.',
      features: [
        'Репозиторий на GitHub с чистой структурой',
        'Поиск, сортировка, фильтрация — уже работают',
        'Подключение API (с инструкцией, куда вставить свой)',
        'README.md: пошаговая инструкция “как запустить и адаптировать”',
        'Адаптация под твой дизайн (цвета, шрифты, логотип)'
      ],
      price: '7 000 – 10 000 ₽',
      link: '#'
    },
    {
      id: 2,
      title: 'Структурирую проект на Vite',
      desc: 'Проект превратился в кашу из одного файла, непонятно, где хранить состояние и как выносить компоненты. Хочу понятный порядок, чтобы дальше развивать самому.',
      features: [
        'Разбиение на компоненты и папки',
        'Вынос логики в отдельные хуки (сортировка, фильтры и т.п.)',
        'Настройка базового роутинга (если нужно)',
        'Инструкция: куда добавлять новые страницы, где хранить глобальное состояние, как подключать API'
      ],
      price: '3 000 – 4 000 ₽',
      link: '#'
    }
  ];

  return (
    <section id="services" className="services">
      <h2 className="services-title">Услуги</h2>
      <div className="services-grid">
        {services.map((service) => (
          <article className="services-card" key={service.id}>
            <h3 className="services-card__title">{service.title}</h3>
            <p className="services-card__desc">{service.desc}</p>

            <ul className="services-card__list">
              {service.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>

            <div className="services-card__footer">
              <span className="services-card__price">{service.price}</span>
              <a href={service.link} className="btn">Обсудить</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
