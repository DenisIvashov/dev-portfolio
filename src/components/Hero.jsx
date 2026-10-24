import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1 className="hero-title">Делаю сайты и приложения на React, которые <span className="hero-accent">работают</span></h1>
        <p className="hero-subtitle">MVP, структурирование проектов, чистый код. Без обещаний «сделаю за ночь»</p>
        <div className="button-group">
            <a href='#works' className="hero-btn">Посмотреть работы ↓</a>
            <a href="#" className="btn">Написать</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;