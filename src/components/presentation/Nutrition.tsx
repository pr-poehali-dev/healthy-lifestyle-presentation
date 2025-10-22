import Icon from '@/components/ui/icon';

const Nutrition = () => {
  const foodGroups = [
    {
      name: 'Фрукты и овощи',
      icon: 'Apple',
      color: 'bg-green-100 text-green-700',
      serving: '5 порций в день',
      examples: 'Яблоки, морковь, капуста, апельсины'
    },
    {
      name: 'Злаки и каши',
      icon: 'Wheat',
      color: 'bg-yellow-100 text-yellow-700',
      serving: '3-4 порции в день',
      examples: 'Овсянка, гречка, рис, хлеб из цельнозерновой муки'
    },
    {
      name: 'Белки',
      icon: 'Fish',
      color: 'bg-red-100 text-red-700',
      serving: '2-3 порции в день',
      examples: 'Мясо, рыба, яйца, бобовые'
    },
    {
      name: 'Молочные продукты',
      icon: 'Milk',
      color: 'bg-blue-100 text-blue-700',
      serving: '2-3 порции в день',
      examples: 'Молоко, творог, йогурт, сыр'
    }
  ];

  const rules = [
    'Завтрак — самый важный приём пищи',
    'Пить 6-8 стаканов воды в день',
    'Меньше сладкого и фастфуда',
    'Есть в одно и то же время'
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">Правильное питание</h2>
        <p className="text-lg text-muted-foreground">
          Ты — то, что ты ешь!
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <img
          src="https://cdn.poehali.dev/projects/18fd8331-4361-489f-b325-f9ed107fdb3d/files/66b37fcf-465a-45c2-bd18-1e871336dc6c.jpg"
          alt="Пирамида питания"
          className="rounded-xl shadow-lg max-w-md w-full"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {foodGroups.map((group, index) => (
          <div
            key={index}
            className={`${group.color} p-5 rounded-xl shadow-sm border`}
          >
            <div className="flex items-center gap-3 mb-3">
              <Icon name={group.icon as any} size={28} />
              <h3 className="font-bold text-lg">{group.name}</h3>
            </div>
            <p className="font-semibold text-sm mb-2">{group.serving}</p>
            <p className="text-sm opacity-80">{group.examples}</p>
          </div>
        ))}
      </div>

      <div className="bg-green-50 border border-green-200 rounded-xl p-5">
        <h3 className="font-bold text-lg mb-3 text-green-800">Правила здорового питания:</h3>
        <ul className="space-y-2">
          {rules.map((rule, index) => (
            <li key={index} className="flex items-start gap-2">
              <Icon name="CheckCircle2" size={20} className="text-green-600 mt-0.5" />
              <span className="text-green-900">{rule}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nutrition;
