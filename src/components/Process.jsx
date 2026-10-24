import './Process.css';

function Process() {
  const steps = [
    {
      step: 1,
      title: 'Ты пишешь задачу',
      desc: 'Или кидаешь ссылку на проект'
    },
    {
      step: 2,
      title: 'Я говорю: беру или не беру',
      desc: 'Срок и цена — сразу'
    },
    {
      step: 3,
      title: 'Делаю и выкладываю на GitHub',
      desc: 'С инструкцией, как запустить'
    },
    {
      step: 4,
      title: 'Ты проверяешь',
      desc: 'При необходимости — докручиваю'
    }
  ];

  return (
    <section id="process" className="process">
      <div className="process-header">
        <span className="process-label">ПРОЦЕСС</span>
        <h2 className="process-title">Как мы работаем</h2>
        <p className="process-subtitle">
          Четыре шага от первого сообщения до запуска — чтобы ты понимал, чего ждать после отправки заявки.
        </p>
      </div>

      <div className="process-timeline">
        {steps.map((step) => (
          <div key={step.step} className="process-item">
            <div className="process-item__number-wrapper">
              <div className="process-item__number">{String(step.step).padStart(2, '0')}</div>
            </div>
            <div className="process-item__content">
              <h3 className="process-item__title">{step.title}</h3>
              <p className="process-item__desc">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Process;



