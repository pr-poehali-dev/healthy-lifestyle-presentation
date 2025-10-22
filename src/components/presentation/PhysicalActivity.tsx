import Icon from '@/components/ui/icon';

const PhysicalActivity = () => {
  const activities = [
    {
      name: 'Утренняя зарядка',
      duration: '10-15 минут',
      icon: 'Sunrise',
      color: 'bg-orange-100 text-orange-700',
      benefits: 'Пробуждает организм, улучшает кровообращение'
    },
    {
      name: 'Прогулки на свежем воздухе',
      duration: '1-2 часа',
      icon: 'Trees',
      color: 'bg-green-100 text-green-700',
      benefits: 'Насыщает кислородом, укрепляет иммунитет'
    },
    {
      name: 'Спортивные игры',
      duration: '30-60 минут',
      icon: 'Trophy',
      color: 'bg-blue-100 text-blue-700',
      benefits: 'Развивает координацию, командный дух'
    },
    {
      name: 'Плавание',
      duration: '30-45 минут',
      icon: 'Waves',
      color: 'bg-cyan-100 text-cyan-700',
      benefits: 'Укрепляет все группы мышц'
    }
  ];

  const recommendations = [
    { text: 'Минимум 60 минут активности в день', icon: 'Clock' },
    { text: 'Разминка перед упражнениями', icon: 'Zap' },
    { text: 'Чередуйте виды активности', icon: 'Repeat' },
    { text: 'Занимайтесь с удовольствием!', icon: 'Heart' }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">Физическая активность</h2>
        <p className="text-lg text-muted-foreground">
          Движение — это жизнь!
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <img
          src="https://cdn.poehali.dev/projects/18fd8331-4361-489f-b325-f9ed107fdb3d/files/3f791d5a-5ddb-4ddc-b2e4-8504f7042c5c.jpg"
          alt="Физическая активность"
          className="rounded-xl shadow-lg max-w-md w-full"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className={`${activity.color} p-5 rounded-xl shadow-sm border`}
          >
            <div className="flex items-center gap-3 mb-3">
              <Icon name={activity.icon as any} size={28} />
              <div>
                <h3 className="font-bold text-lg">{activity.name}</h3>
                <p className="text-sm font-semibold">{activity.duration}</p>
              </div>
            </div>
            <p className="text-sm opacity-80">{activity.benefits}</p>
          </div>
        ))}
      </div>

      <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
        <h3 className="font-bold text-lg mb-4 text-purple-800">Рекомендации:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {recommendations.map((rec, index) => (
            <div key={index} className="flex items-center gap-3 bg-white p-3 rounded-lg">
              <Icon name={rec.icon as any} size={24} className="text-purple-600" />
              <span className="text-sm text-purple-900">{rec.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhysicalActivity;
