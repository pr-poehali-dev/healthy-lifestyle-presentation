import Icon from '@/components/ui/icon';

const Prevention = () => {
  const preventionTips = [
    {
      category: 'Гигиена',
      icon: 'Droplet',
      color: 'bg-blue-100 text-blue-700 border-blue-200',
      tips: [
        'Мыть руки перед едой и после улицы',
        'Чистить зубы 2 раза в день',
        'Принимать душ ежедневно'
      ]
    },
    {
      category: 'Зрение',
      icon: 'Eye',
      color: 'bg-purple-100 text-purple-700 border-purple-200',
      tips: [
        'Делать перерывы при работе с экраном',
        'Гимнастика для глаз каждый час',
        'Правильное освещение при чтении'
      ]
    },
    {
      category: 'Осанка',
      icon: 'User',
      color: 'bg-green-100 text-green-700 border-green-200',
      tips: [
        'Следить за посадкой за столом',
        'Правильно носить рюкзак',
        'Упражнения для спины'
      ]
    },
    {
      category: 'Психическое здоровье',
      icon: 'Brain',
      color: 'bg-pink-100 text-pink-700 border-pink-200',
      tips: [
        'Достаточный сон (8-10 часов)',
        'Общение с друзьями',
        'Любимые увлечения и хобби'
      ]
    }
  ];

  const emergencyContacts = [
    { service: 'Скорая помощь', number: '103', icon: 'Plus' },
    { service: 'Полиция', number: '102', icon: 'Shield' },
    { service: 'Пожарная', number: '101', icon: 'Flame' }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">Профилактика и безопасность</h2>
        <p className="text-lg text-muted-foreground">
          Предупредить легче, чем лечить
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {preventionTips.map((section, index) => (
          <div
            key={index}
            className={`${section.color} p-5 rounded-xl border`}
          >
            <div className="flex items-center gap-3 mb-4">
              <Icon name={section.icon as any} size={28} />
              <h3 className="font-bold text-lg">{section.category}</h3>
            </div>
            <ul className="space-y-2">
              {section.tips.map((tip, tipIndex) => (
                <li key={tipIndex} className="flex items-start gap-2 text-sm">
                  <Icon name="Check" size={16} className="mt-1 flex-shrink-0" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6">
        <h3 className="font-bold text-xl mb-4 text-red-900 flex items-center gap-2">
          <Icon name="Phone" size={24} />
          Экстренные службы
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {emergencyContacts.map((contact, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg text-center border-2 border-red-200"
            >
              <Icon name={contact.icon as any} size={32} className="mx-auto mb-2 text-red-600" />
              <div className="font-bold text-lg text-gray-900">{contact.service}</div>
              <div className="text-3xl font-bold text-red-600 mt-1">{contact.number}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-6 text-center">
        <Icon name="Heart" size={48} className="mx-auto mb-3 text-red-500" />
        <p className="text-lg font-semibold text-gray-800">
          Здоровье — наше главное богатство!
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Берегите себя и будьте здоровы!
        </p>
      </div>
    </div>
  );
};

export default Prevention;
