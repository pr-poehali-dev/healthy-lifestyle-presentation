import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 0,
      title: 'Здоровьесберегающие технологии',
      subtitle: 'Режим дня • Питание • Физическая активность • Профилактика',
      type: 'cover',
    },
    {
      id: 1,
      title: 'Режим дня',
      type: 'content',
      content: 'schedule',
    },
    {
      id: 2,
      title: 'Правильное питание',
      type: 'content',
      content: 'nutrition',
    },
    {
      id: 3,
      title: 'Физическая активность',
      type: 'content',
      content: 'activity',
    },
    {
      id: 4,
      title: 'Профилактика заболеваний',
      type: 'content',
      content: 'prevention',
    },
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const renderSlide = (slide: typeof slides[0]) => {
    if (slide.type === 'cover') {
      return (
        <div className="h-full flex flex-col items-center justify-center text-center px-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="mb-12">
            <Icon name="Heart" size={80} className="text-primary mx-auto mb-6" />
          </div>
          <h1 className="text-6xl font-bold mb-6 text-foreground">{slide.title}</h1>
          <p className="text-2xl text-muted-foreground mb-8">{slide.subtitle}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Icon name="Clock" size={40} className="text-primary mb-3 mx-auto" />
              <p className="font-medium text-sm">Режим дня</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Icon name="Apple" size={40} className="text-primary mb-3 mx-auto" />
              <p className="font-medium text-sm">Питание</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Icon name="Dumbbell" size={40} className="text-primary mb-3 mx-auto" />
              <p className="font-medium text-sm">Активность</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Icon name="Shield" size={40} className="text-primary mb-3 mx-auto" />
              <p className="font-medium text-sm">Профилактика</p>
            </Card>
          </div>
        </div>
      );
    }

    if (slide.content === 'schedule') {
      return (
        <div className="h-full p-12 overflow-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold mb-8 text-foreground flex items-center gap-4">
              <Icon name="Clock" size={48} className="text-primary" />
              Режим дня
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-foreground">Оптимальный распорядок</h3>
                <div className="space-y-4">
                  <Card className="p-5 border-l-4 border-l-primary">
                    <div className="flex items-center gap-4">
                      <Icon name="Moon" size={28} className="text-primary" />
                      <div>
                        <p className="font-bold text-lg">22:00 - 7:00</p>
                        <p className="text-muted-foreground">Сон (9 часов)</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-5 border-l-4 border-l-secondary">
                    <div className="flex items-center gap-4">
                      <Icon name="Coffee" size={28} className="text-secondary" />
                      <div>
                        <p className="font-bold text-lg">7:30 - 8:00</p>
                        <p className="text-muted-foreground">Завтрак</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-5 border-l-4 border-l-accent">
                    <div className="flex items-center gap-4">
                      <Icon name="BookOpen" size={28} className="text-accent" />
                      <div>
                        <p className="font-bold text-lg">8:30 - 14:00</p>
                        <p className="text-muted-foreground">Учеба в школе</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-5 border-l-4 border-l-primary">
                    <div className="flex items-center gap-4">
                      <Icon name="Utensils" size={28} className="text-primary" />
                      <div>
                        <p className="font-bold text-lg">14:00 - 14:30</p>
                        <p className="text-muted-foreground">Обед</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-5 border-l-4 border-l-secondary">
                    <div className="flex items-center gap-4">
                      <Icon name="Palette" size={28} className="text-secondary" />
                      <div>
                        <p className="font-bold text-lg">15:00 - 17:00</p>
                        <p className="text-muted-foreground">Отдых, хобби</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-5 border-l-4 border-l-accent">
                    <div className="flex items-center gap-4">
                      <Icon name="BookCheck" size={28} className="text-accent" />
                      <div>
                        <p className="font-bold text-lg">17:00 - 19:00</p>
                        <p className="text-muted-foreground">Домашние задания</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
              <div>
                <img 
                  src="https://cdn.poehali.dev/projects/18fd8331-4361-489f-b325-f9ed107fdb3d/files/9872deb5-0770-4586-af8e-1c27875d6fde.jpg" 
                  alt="Режим дня" 
                  className="rounded-lg shadow-lg mb-6 w-full"
                />
                <Card className="p-6 bg-primary/5">
                  <h4 className="font-bold text-xl mb-4 flex items-center gap-2">
                    <Icon name="Lightbulb" size={24} className="text-primary" />
                    Важно помнить:
                  </h4>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Постоянный режим дня помогает организму работать эффективнее</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Полноценный сон — основа здоровья и успеваемости</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Чередование учебы и отдыха повышает продуктивность</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (slide.content === 'nutrition') {
      return (
        <div className="h-full p-12 overflow-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold mb-8 text-foreground flex items-center gap-4">
              <Icon name="Apple" size={48} className="text-primary" />
              Правильное питание
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img 
                  src="https://cdn.poehali.dev/projects/18fd8331-4361-489f-b325-f9ed107fdb3d/files/63b2871d-9aff-40ab-8bb9-5617434f75cb.jpg" 
                  alt="Здоровое питание" 
                  className="rounded-lg shadow-lg mb-6 w-full"
                />
                <Card className="p-6 bg-secondary/10">
                  <h4 className="font-bold text-xl mb-4">Баланс питательных веществ</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
                        40%
                      </div>
                      <div>
                        <p className="font-semibold">Углеводы</p>
                        <p className="text-sm text-muted-foreground">Каши, хлеб, макароны</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white font-bold">
                        30%
                      </div>
                      <div>
                        <p className="font-semibold">Белки</p>
                        <p className="text-sm text-muted-foreground">Мясо, рыба, яйца, бобовые</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold">
                        30%
                      </div>
                      <div>
                        <p className="font-semibold">Жиры + овощи/фрукты</p>
                        <p className="text-sm text-muted-foreground">Масла, орехи, зелень</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-foreground">Основные принципы</h3>
                <div className="space-y-4">
                  <Card className="p-5">
                    <div className="flex items-start gap-4">
                      <Icon name="Droplets" size={32} className="text-blue-500 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-lg mb-2">Водный баланс</h4>
                        <p className="text-muted-foreground">Пить 1.5-2 литра чистой воды в день</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-5">
                    <div className="flex items-start gap-4">
                      <Icon name="Utensils" size={32} className="text-orange-500 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-lg mb-2">Регулярность</h4>
                        <p className="text-muted-foreground">4-5 приемов пищи в одно и то же время</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-5">
                    <div className="flex items-start gap-4">
                      <Icon name="Salad" size={32} className="text-green-500 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-lg mb-2">Разнообразие</h4>
                        <p className="text-muted-foreground">Включать овощи и фрукты каждый день</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-5">
                    <div className="flex items-start gap-4">
                      <Icon name="Candy" size={32} className="text-red-500 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-lg mb-2">Ограничения</h4>
                        <p className="text-muted-foreground">Меньше сладкого, жирного и фастфуда</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-5 bg-primary/5">
                    <div className="flex items-start gap-4">
                      <Icon name="Coffee" size={32} className="text-primary flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-lg mb-2">Завтрак обязателен!</h4>
                        <p className="text-muted-foreground">Самый важный прием пищи для учебы и энергии</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (slide.content === 'activity') {
      return (
        <div className="h-full p-12 overflow-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold mb-8 text-foreground flex items-center gap-4">
              <Icon name="Dumbbell" size={48} className="text-primary" />
              Физическая активность
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6 text-center">
                <div className="mb-4 bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="School" size={40} className="text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3">В школе</h3>
                <ul className="text-left space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                    <span>Утренняя зарядка</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                    <span>Физкультминутки на уроках</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                    <span>Уроки физкультуры</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                    <span>Активные игры на переменах</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 text-center">
                <div className="mb-4 bg-secondary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Home" size={40} className="text-secondary" />
                </div>
                <h3 className="font-bold text-xl mb-3">Дома</h3>
                <ul className="text-left space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={18} className="text-secondary mt-1 flex-shrink-0" />
                    <span>Прогулки на свежем воздухе</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={18} className="text-secondary mt-1 flex-shrink-0" />
                    <span>Помощь по дому</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={18} className="text-secondary mt-1 flex-shrink-0" />
                    <span>Танцы, йога</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={18} className="text-secondary mt-1 flex-shrink-0" />
                    <span>Игры с семьей</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 text-center">
                <div className="mb-4 bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Trophy" size={40} className="text-accent" />
                </div>
                <h3 className="font-bold text-xl mb-3">Секции и спорт</h3>
                <ul className="text-left space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={18} className="text-accent mt-1 flex-shrink-0" />
                    <span>Футбол, баскетбол</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={18} className="text-accent mt-1 flex-shrink-0" />
                    <span>Плавание</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={18} className="text-accent mt-1 flex-shrink-0" />
                    <span>Единоборства</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={18} className="text-accent mt-1 flex-shrink-0" />
                    <span>Гимнастика, легкая атлетика</span>
                  </li>
                </ul>
              </Card>
            </div>

            <Card className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <Icon name="Target" size={36} className="text-primary" />
                    Рекомендуемая норма
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                        60
                      </div>
                      <div>
                        <p className="font-bold text-lg">минут в день</p>
                        <p className="text-muted-foreground">для детей и подростков</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-2xl font-bold">
                        3-5
                      </div>
                      <div>
                        <p className="font-bold text-lg">раз в неделю</p>
                        <p className="text-muted-foreground">интенсивные тренировки</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <Card className="p-6 bg-background">
                    <h4 className="font-bold text-xl mb-4 flex items-center gap-2">
                      <Icon name="HeartPulse" size={24} className="text-red-500" />
                      Польза активности:
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                        <span>Укрепление мышц и костей</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                        <span>Улучшение настроения и сна</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                        <span>Повышение концентрации внимания</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                        <span>Профилактика лишнего веса</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                        <span>Развитие социальных навыков</span>
                      </li>
                    </ul>
                  </Card>
                </div>
              </div>
            </Card>
          </div>
        </div>
      );
    }

    if (slide.content === 'prevention') {
      return (
        <div className="h-full p-12 overflow-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold mb-8 text-foreground flex items-center gap-4">
              <Icon name="Shield" size={48} className="text-primary" />
              Профилактика заболеваний
            </h2>
            
            <Tabs defaultValue="hygiene" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="hygiene" className="text-sm">
                  <Icon name="Sparkles" size={18} className="mr-2" />
                  Гигиена
                </TabsTrigger>
                <TabsTrigger value="immunity" className="text-sm">
                  <Icon name="ShieldPlus" size={18} className="mr-2" />
                  Иммунитет
                </TabsTrigger>
                <TabsTrigger value="vision" className="text-sm">
                  <Icon name="Eye" size={18} className="mr-2" />
                  Зрение
                </TabsTrigger>
                <TabsTrigger value="posture" className="text-sm">
                  <Icon name="User" size={18} className="mr-2" />
                  Осанка
                </TabsTrigger>
              </TabsList>

              <TabsContent value="hygiene" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="p-6">
                    <h3 className="font-bold text-2xl mb-4 flex items-center gap-3">
                      <Icon name="HandHeart" size={28} className="text-primary" />
                      Личная гигиена
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                        <span>Мыть руки перед едой и после туалета</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                        <span>Чистить зубы утром и вечером</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                        <span>Принимать душ ежедневно</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                        <span>Использовать чистые полотенца</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                        <span>Регулярно стричь ногти</span>
                      </li>
                    </ul>
                  </Card>

                  <Card className="p-6">
                    <h3 className="font-bold text-2xl mb-4 flex items-center gap-3">
                      <Icon name="Home" size={28} className="text-secondary" />
                      Гигиена помещений
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                        <span>Проветривать комнату 2-3 раза в день</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                        <span>Делать влажную уборку регулярно</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                        <span>Поддерживать температуру 18-22°C</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                        <span>Обеспечить хорошее освещение</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                        <span>Избегать скопления пыли</span>
                      </li>
                    </ul>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="immunity" className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="p-6">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <Icon name="Sun" size={32} className="text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-center">Закаливание</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Контрастный душ</li>
                      <li>• Прогулки на свежем воздухе</li>
                      <li>• Обтирание прохладной водой</li>
                      <li>• Хождение босиком летом</li>
                    </ul>
                  </Card>

                  <Card className="p-6">
                    <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <Icon name="Pill" size={32} className="text-secondary" />
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-center">Витамины</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Свежие овощи и фрукты</li>
                      <li>• Витамин C (цитрусовые)</li>
                      <li>• Витамин D (рыба, солнце)</li>
                      <li>• Мультивитамины по назначению</li>
                    </ul>
                  </Card>

                  <Card className="p-6">
                    <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <Icon name="Activity" size={32} className="text-accent" />
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-center">Активность</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Регулярные тренировки</li>
                      <li>• Прогулки перед сном</li>
                      <li>• Активные игры</li>
                      <li>• Снижение стресса</li>
                    </ul>
                  </Card>
                </div>
                <Card className="p-6 bg-primary/5">
                  <h4 className="font-bold text-xl mb-4 flex items-center gap-2">
                    <Icon name="AlertCircle" size={24} className="text-primary" />
                    Важно при простуде:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold mb-2">✅ Делать:</p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Оставаться дома и отдыхать</li>
                        <li>• Пить много теплой жидкости</li>
                        <li>• Проветривать комнату</li>
                        <li>• Обратиться к врачу</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">❌ Не делать:</p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Ходить в школу больным</li>
                        <li>• Переохлаждаться</li>
                        <li>• Заниматься спортом</li>
                        <li>• Самостоятельно принимать лекарства</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="vision" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="p-6">
                    <h3 className="font-bold text-2xl mb-4 flex items-center gap-3">
                      <Icon name="Monitor" size={28} className="text-primary" />
                      Работа с экранами
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Icon name="Clock" size={20} className="text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold">Правило 20-20-20</p>
                          <p className="text-sm text-muted-foreground">Каждые 20 минут смотреть на 20 секунд вдаль (на 6 метров)</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="Ruler" size={20} className="text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold">Расстояние до экрана</p>
                          <p className="text-sm text-muted-foreground">Не менее 50-70 см от глаз</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="Sun" size={20} className="text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold">Освещение</p>
                          <p className="text-sm text-muted-foreground">Хорошее освещение, избегать бликов</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="Timer" size={20} className="text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold">Ограничение времени</p>
                          <p className="text-sm text-muted-foreground">Не более 2 часов развлечений в день</p>
                        </div>
                      </li>
                    </ul>
                  </Card>

                  <Card className="p-6">
                    <h3 className="font-bold text-2xl mb-4 flex items-center gap-3">
                      <Icon name="Dumbbell" size={28} className="text-secondary" />
                      Гимнастика для глаз
                    </h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-secondary/5 rounded-lg">
                        <p className="font-semibold mb-2">1. Движения глазами</p>
                        <p className="text-sm text-muted-foreground">Вверх-вниз, влево-вправо (по 5 раз)</p>
                      </div>
                      <div className="p-4 bg-secondary/5 rounded-lg">
                        <p className="font-semibold mb-2">2. Круговые движения</p>
                        <p className="text-sm text-muted-foreground">По часовой и против (по 5 раз)</p>
                      </div>
                      <div className="p-4 bg-secondary/5 rounded-lg">
                        <p className="font-semibold mb-2">3. Фокусировка</p>
                        <p className="text-sm text-muted-foreground">Смотреть на близкий предмет, затем вдаль</p>
                      </div>
                      <div className="p-4 bg-secondary/5 rounded-lg">
                        <p className="font-semibold mb-2">4. Моргание</p>
                        <p className="text-sm text-muted-foreground">Быстро поморгать 10-15 раз</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="posture" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="p-6">
                    <h3 className="font-bold text-2xl mb-4 flex items-center gap-3">
                      <Icon name="ChairAlt" size={28} className="text-primary" />
                      Правильная посадка
                    </h3>
                    <div className="space-y-4">
                      <div className="p-4 border-l-4 border-l-primary bg-primary/5">
                        <p className="font-semibold mb-1">Спина</p>
                        <p className="text-sm text-muted-foreground">Прямая, прижата к спинке стула</p>
                      </div>
                      <div className="p-4 border-l-4 border-l-primary bg-primary/5">
                        <p className="font-semibold mb-1">Ноги</p>
                        <p className="text-sm text-muted-foreground">Стопы полностью на полу, угол в коленях 90°</p>
                      </div>
                      <div className="p-4 border-l-4 border-l-primary bg-primary/5">
                        <p className="font-semibold mb-1">Руки</p>
                        <p className="text-sm text-muted-foreground">Локти на столе, предплечья параллельно полу</p>
                      </div>
                      <div className="p-4 border-l-4 border-l-primary bg-primary/5">
                        <p className="font-semibold mb-1">Голова</p>
                        <p className="text-sm text-muted-foreground">Ровно, глаза на уровне верхней трети монитора</p>
                      </div>
                      <div className="p-4 border-l-4 border-l-primary bg-primary/5">
                        <p className="font-semibold mb-1">Расстояние до стола</p>
                        <p className="text-sm text-muted-foreground">Можно поместить кулак между грудью и столом</p>
                      </div>
                    </div>
                  </Card>

                  <div className="space-y-6">
                    <Card className="p-6">
                      <h3 className="font-bold text-2xl mb-4 flex items-center gap-3">
                        <Icon name="Sparkles" size={28} className="text-secondary" />
                        Упражнения для спины
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                          <span>Наклоны корпуса вперед-назад</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                          <span>Повороты туловища влево-вправо</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                          <span>Плавание (лучший вид спорта для спины)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                          <span>Упражнение "кошка" (прогибы спины)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                          <span>Подтягивания и висы на турнике</span>
                        </li>
                      </ul>
                    </Card>

                    <Card className="p-6 bg-accent/10">
                      <h4 className="font-bold text-xl mb-3 flex items-center gap-2">
                        <Icon name="AlertTriangle" size={24} className="text-accent" />
                        Последствия плохой осанки:
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-accent">•</span>
                          <span>Искривление позвоночника (сколиоз)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent">•</span>
                          <span>Боли в спине и шее</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent">•</span>
                          <span>Головные боли и усталость</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent">•</span>
                          <span>Нарушение работы внутренних органов</span>
                        </li>
                      </ul>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-screen flex flex-col">
        <div className="flex-1 overflow-hidden">
          {renderSlide(slides[currentSlide])}
        </div>

        <div className="border-t bg-card p-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <Button
              variant="outline"
              size="lg"
              onClick={prevSlide}
              disabled={currentSlide === 0}
            >
              <Icon name="ChevronLeft" size={20} className="mr-2" />
              Назад
            </Button>

            <div className="flex items-center gap-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide
                      ? 'bg-primary w-8'
                      : 'bg-muted hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Слайд ${index + 1}`}
                />
              ))}
            </div>

            <Button
              size="lg"
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
            >
              Вперёд
              <Icon name="ChevronRight" size={20} className="ml-2" />
            </Button>
          </div>

          <div className="text-center mt-3 text-sm text-muted-foreground">
            Слайд {currentSlide + 1} из {slides.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
