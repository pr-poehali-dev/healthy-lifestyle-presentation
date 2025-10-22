import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Card, CardContent } from '@/components/ui/card';

const slides = [
  {
    id: 0,
    title: 'Здоровьесберегающие технологии',
    subtitle: 'В школе и дома',
    type: 'title',
    content: null,
  },
  {
    id: 1,
    title: 'Режим дня',
    type: 'content',
    image: 'https://cdn.poehali.dev/projects/18fd8331-4361-489f-b325-f9ed107fdb3d/files/8b7039be-d177-4855-a582-7c50a10b9aea.jpg',
    points: [
      { icon: 'Sun', text: 'Подъём в одно и то же время (7:00-7:30)', color: 'text-amber-500' },
      { icon: 'BookOpen', text: 'Время для учёбы и домашних заданий', color: 'text-blue-500' },
      { icon: 'Utensils', text: 'Регулярное питание 4-5 раз в день', color: 'text-green-500' },
      { icon: 'Moon', text: 'Сон не менее 8-9 часов (22:00-7:00)', color: 'text-indigo-500' },
    ],
  },
  {
    id: 2,
    title: 'Правильное питание',
    type: 'content',
    image: 'https://cdn.poehali.dev/projects/18fd8331-4361-489f-b325-f9ed107fdb3d/files/eb7755f5-f0a3-4270-8716-736774d6dd94.jpg',
    points: [
      { icon: 'Apple', text: 'Фрукты и овощи - основа рациона', color: 'text-red-500' },
      { icon: 'Milk', text: 'Молочные продукты каждый день', color: 'text-blue-400' },
      { icon: 'Droplets', text: 'Вода 1,5-2 литра в день', color: 'text-cyan-500' },
      { icon: 'XCircle', text: 'Минимум сладкого и фастфуда', color: 'text-orange-500' },
    ],
  },
  {
    id: 3,
    title: 'Физическая активность',
    type: 'content',
    image: 'https://cdn.poehali.dev/projects/18fd8331-4361-489f-b325-f9ed107fdb3d/files/74219dca-68db-4dee-a696-38dae5b502b7.jpg',
    points: [
      { icon: 'Dumbbell', text: 'Утренняя зарядка 10-15 минут', color: 'text-purple-500' },
      { icon: 'Activity', text: 'Спортивные секции 2-3 раза в неделю', color: 'text-pink-500' },
      { icon: 'PersonStanding', text: 'Прогулки на свежем воздухе 1-2 часа', color: 'text-green-600' },
      { icon: 'Bike', text: 'Активные игры и хобби', color: 'text-emerald-500' },
    ],
  },
  {
    id: 4,
    title: 'Профилактика',
    type: 'content',
    image: null,
    grid: [
      { icon: 'Hand', title: 'Гигиена', desc: 'Мытье рук перед едой и после прогулки', color: 'bg-blue-50 text-blue-600' },
      { icon: 'Eye', title: 'Зрение', desc: 'Перерывы при работе с экраном каждые 20 минут', color: 'bg-purple-50 text-purple-600' },
      { icon: 'Smile', title: 'Осанка', desc: 'Правильная посадка за партой и столом', color: 'bg-green-50 text-green-600' },
      { icon: 'Wind', title: 'Проветривание', desc: 'Свежий воздух в комнате 3-4 раза в день', color: 'bg-cyan-50 text-cyan-600' },
    ],
  },
  {
    id: 5,
    title: 'Помни!',
    type: 'final',
    quote: 'Здоровье - это самое ценное, что у нас есть. Береги его с детства!',
    tips: [
      'Соблюдай режим дня',
      'Питайся правильно',
      'Двигайся каждый день',
      'Следи за гигиеной',
    ],
  },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const slide = slides[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex flex-col">
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-5xl">
          {slide.type === 'title' && (
            <div className="text-center space-y-8 animate-fade-in">
              <div className="flex justify-center mb-8">
                <div className="bg-gradient-to-r from-primary to-secondary p-6 rounded-full">
                  <Icon name="Heart" size={64} className="text-white" />
                </div>
              </div>
              <h1 className="text-6xl font-bold text-foreground mb-4">{slide.title}</h1>
              <p className="text-3xl text-muted-foreground font-semibold">{slide.subtitle}</p>
              <div className="flex justify-center gap-4 mt-12">
                <div className="flex items-center gap-2 text-primary">
                  <Icon name="Home" size={32} />
                  <span className="text-xl font-semibold">Дома</span>
                </div>
                <div className="flex items-center gap-2 text-secondary">
                  <Icon name="School" size={32} />
                  <span className="text-xl font-semibold">В школе</span>
                </div>
              </div>
            </div>
          )}

          {slide.type === 'content' && slide.image && (
            <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">{slide.title}</h2>
                <div className="space-y-4">
                  {slide.points?.map((point, idx) => (
                    <Card key={idx} className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                      <CardContent className="p-4 flex items-start gap-3">
                        <Icon name={point.icon} size={24} className={point.color} />
                        <p className="text-lg">{point.text}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              <div className="flex items-center">
                <img 
                  src={slide.image} 
                  alt={slide.title}
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
              </div>
            </div>
          )}

          {slide.type === 'content' && slide.grid && (
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-foreground mb-8 text-center">{slide.title}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {slide.grid.map((item, idx) => (
                  <Card key={idx} className="hover:shadow-xl transition-shadow border-2">
                    <CardContent className="p-6">
                      <div className={`w-16 h-16 rounded-full ${item.color} flex items-center justify-center mb-4`}>
                        <Icon name={item.icon} size={32} />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-lg text-muted-foreground">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {slide.type === 'final' && (
            <div className="text-center space-y-8 animate-fade-in">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-r from-green-400 to-blue-500 p-6 rounded-full">
                  <Icon name="Star" size={64} className="text-white" />
                </div>
              </div>
              <h2 className="text-5xl font-bold text-foreground mb-6">{slide.title}</h2>
              <blockquote className="text-2xl italic text-muted-foreground max-w-3xl mx-auto border-l-4 border-primary pl-6 py-4">
                {slide.quote}
              </blockquote>
              <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mt-12">
                {slide.tips?.map((tip, idx) => (
                  <div key={idx} className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 rounded-lg flex items-center gap-3">
                    <Icon name="CheckCircle2" size={24} className="text-primary flex-shrink-0" />
                    <span className="text-lg font-semibold">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="p-6 bg-white/50 backdrop-blur-sm border-t">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            variant="outline"
            size="lg"
            className="gap-2"
          >
            <Icon name="ChevronLeft" size={20} />
            Назад
          </Button>

          <div className="flex items-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === currentSlide
                    ? 'bg-primary w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <Button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            size="lg"
            className="gap-2"
          >
            Вперёд
            <Icon name="ChevronRight" size={20} />
          </Button>
        </div>

        <div className="text-center mt-4 text-sm text-muted-foreground">
          Слайд {currentSlide + 1} из {slides.length}
        </div>
      </div>
    </div>
  );
};

export default Index;
