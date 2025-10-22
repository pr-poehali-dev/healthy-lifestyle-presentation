import Icon from '@/components/ui/icon';

const DailyRoutine = () => {
  const schedule = [
    { time: '7:00', activity: 'Подъём', icon: 'Sunrise', color: 'text-orange-500' },
    { time: '7:30', activity: 'Зарядка и завтрак', icon: 'Dumbbell', color: 'text-green-500' },
    { time: '8:30', activity: 'Школа', icon: 'BookOpen', color: 'text-blue-500' },
    { time: '14:00', activity: 'Обед', icon: 'Utensils', color: 'text-red-500' },
    { time: '15:00', activity: 'Прогулка', icon: 'Trees', color: 'text-green-600' },
    { time: '17:00', activity: 'Домашние задания', icon: 'PencilLine', color: 'text-purple-500' },
    { time: '19:00', activity: 'Ужин', icon: 'Soup', color: 'text-orange-600' },
    { time: '21:00', activity: 'Сон', icon: 'Moon', color: 'text-indigo-500' }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">Режим дня</h2>
        <p className="text-lg text-muted-foreground">
          Правильный режим дня — основа здоровья и успеха
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <img
          src="https://cdn.poehali.dev/projects/18fd8331-4361-489f-b325-f9ed107fdb3d/files/5e1dc9ff-21fc-492b-b27c-9152b10dc49b.jpg"
          alt="Режим дня"
          className="rounded-xl shadow-lg max-w-md w-full"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {schedule.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-gray-50 to-white border border-gray-200 hover:shadow-md transition-shadow"
          >
            <div className={`${item.color}`}>
              <Icon name={item.icon as any} size={32} />
            </div>
            <div className="flex-1">
              <div className="font-bold text-lg">{item.time}</div>
              <div className="text-muted-foreground">{item.activity}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
        <p className="text-sm font-semibold text-blue-900">
          Соблюдение режима дня помогает организму работать как часы!
        </p>
      </div>
    </div>
  );
};

export default DailyRoutine;
