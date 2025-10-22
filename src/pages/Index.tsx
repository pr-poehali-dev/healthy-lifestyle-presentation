import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const slides = [
  {
    id: 1,
    title: "Здоровьесберегающие технологии",
    subtitle: "Режим дня, питание, физическая активность",
    description: "Основы здорового образа жизни в школе и дома",
    image: "https://cdn.poehali.dev/projects/18fd8331-4361-489f-b325-f9ed107fdb3d/files/7d859645-a338-449a-a684-3c8e2cf3aea8.jpg",
    type: "cover"
  },
  {
    id: 2,
    title: "Режим дня",
    items: [
      {
        icon: "Sun",
        time: "7:00-8:00",
        title: "Подъём и утренняя гигиена",
        description: "Зарядка, душ, завтрак"
      },
      {
        icon: "BookOpen",
        time: "8:30-14:00",
        title: "Учебные занятия",
        description: "Уроки с перерывами на отдых"
      },
      {
        icon: "Utensils",
        time: "14:00-15:00",
        title: "Обед и отдых",
        description: "Полноценный приём пищи"
      },
      {
        icon: "Bike",
        time: "15:00-17:00",
        title: "Активность и кружки",
        description: "Спорт, прогулки, хобби"
      },
      {
        icon: "Home",
        time: "17:00-19:00",
        title: "Домашние задания",
        description: "С перерывами каждые 45 минут"
      },
      {
        icon: "Moon",
        time: "21:00-22:00",
        title: "Подготовка ко сну",
        description: "Гигиена, спокойные занятия"
      }
    ],
    type: "timeline"
  },
  {
    id: 3,
    title: "Правильное питание",
    image: "https://cdn.poehali.dev/projects/18fd8331-4361-489f-b325-f9ed107fdb3d/files/eccadebe-662e-4c21-873e-8215afc6967a.jpg",
    groups: [
      {
        title: "Что нужно есть",
        icon: "Check",
        items: [
          "Овощи и фрукты (5 порций в день)",
          "Цельнозерновые продукты",
          "Белки: мясо, рыба, яйца, бобовые",
          "Молочные продукты",
          "Чистая вода (1.5-2 литра)"
        ],
        color: "primary"
      },
      {
        title: "Что ограничить",
        icon: "X",
        items: [
          "Сладкие газированные напитки",
          "Фастфуд и полуфабрикаты",
          "Избыток сладостей",
          "Чипсы и снеки",
          "Энергетические напитки"
        ],
        color: "destructive"
      }
    ],
    type: "nutrition"
  },
  {
    id: 4,
    title: "Физическая активность",
    image: "https://cdn.poehali.dev/projects/18fd8331-4361-489f-b325-f9ed107fdb3d/files/2699a5d6-9a67-44c7-b8fc-074fd87a88ee.jpg",
    stats: [
      {
        icon: "Clock",
        value: "60 минут",
        label: "Ежедневная активность для детей"
      },
      {
        icon: "Footprints",
        value: "10 000",
        label: "Шагов в день"
      },
      {
        icon: "Heart",
        value: "3-4 раза",
        label: "Занятия спортом в неделю"
      }
    ],
    activities: [
      { name: "Утренняя зарядка", duration: "10-15 мин" },
      { name: "Уроки физкультуры", duration: "45 мин" },
      { name: "Активные игры", duration: "30-60 мин" },
      { name: "Спортивные секции", duration: "60-90 мин" },
      { name: "Прогулки на свежем воздухе", duration: "60 мин" }
    ],
    type: "activity"
  },
  {
    id: 5,
    title: "Профилактика заболеваний",
    cards: [
      {
        icon: "HandWash",
        title: "Гигиена рук",
        description: "Мыть руки перед едой, после улицы, туалета"
      },
      {
        icon: "Wind",
        title: "Проветривание",
        description: "Регулярное проветривание помещений"
      },
      {
        icon: "Eye",
        title: "Здоровье глаз",
        description: "Перерывы при работе с гаджетами каждые 20 минут"
      },
      {
        icon: "Moon",
        title: "Качественный сон",
        description: "8-10 часов для школьников, режим сна"
      },
      {
        icon: "Droplets",
        title: "Питьевой режим",
        description: "Пить воду регулярно в течение дня"
      },
      {
        icon: "Shield",
        title: "Закаливание",
        description: "Контрастный душ, прогулки в любую погоду"
      }
    ],
    type: "prevention"
  },
  {
    id: 6,
    title: "Здоровье — это богатство!",
    subtitle: "Соблюдайте режим, питайтесь правильно, двигайтесь активно",
    highlights: [
      "Регулярный распорядок дня",
      "Сбалансированное питание",
      "Физическая активность",
      "Профилактика и гигиена"
    ],
    type: "conclusion"
  }
];

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const slide = slides[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden min-h-[600px] flex flex-col">
          <div className="flex-1 p-8 md:p-12">
            {slide.type === "cover" && (
              <div className="text-center space-y-8 animate-fade-in">
                <div className="space-y-4">
                  <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-2xl md:text-3xl text-secondary font-semibold">
                    {slide.subtitle}
                  </p>
                  <p className="text-xl text-muted-foreground">{slide.description}</p>
                </div>
                <img 
                  src={slide.image} 
                  alt="Здоровье" 
                  className="w-full max-w-3xl mx-auto rounded-xl shadow-lg"
                />
              </div>
            )}

            {slide.type === "timeline" && (
              <div className="space-y-8 animate-fade-in">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
                  {slide.title}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {slide.items?.map((item, index) => (
                    <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-2">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                          <Icon name={item.icon} className="text-primary" size={28} />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-bold text-primary mb-1">{item.time}</div>
                          <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {slide.type === "nutrition" && (
              <div className="space-y-8 animate-fade-in">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-8">
                  {slide.title}
                </h2>
                <img 
                  src={slide.image} 
                  alt="Питание" 
                  className="w-full max-w-2xl mx-auto rounded-xl shadow-lg mb-8"
                />
                <div className="grid md:grid-cols-2 gap-8">
                  {slide.groups?.map((group, index) => (
                    <Card key={index} className="p-8 border-2">
                      <div className="flex items-center gap-3 mb-6">
                        <div className={`p-3 bg-${group.color}/10 rounded-lg`}>
                          <Icon 
                            name={group.icon} 
                            className={`text-${group.color}`} 
                            size={32} 
                          />
                        </div>
                        <h3 className="text-2xl font-bold">{group.title}</h3>
                      </div>
                      <ul className="space-y-3">
                        {group.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-primary mt-1">•</span>
                            <span className="text-lg">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {slide.type === "activity" && (
              <div className="space-y-8 animate-fade-in">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-8">
                  {slide.title}
                </h2>
                <img 
                  src={slide.image} 
                  alt="Физическая активность" 
                  className="w-full max-w-2xl mx-auto rounded-xl shadow-lg mb-8"
                />
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {slide.stats?.map((stat, index) => (
                    <Card key={index} className="p-6 text-center border-2">
                      <Icon name={stat.icon} className="text-primary mx-auto mb-4" size={48} />
                      <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </Card>
                  ))}
                </div>
                <Card className="p-8 border-2">
                  <h3 className="text-2xl font-bold mb-6 text-center">Виды активности</h3>
                  <div className="space-y-4">
                    {slide.activities?.map((activity, index) => (
                      <div key={index} className="flex justify-between items-center p-4 bg-muted/30 rounded-lg">
                        <span className="text-lg font-medium">{activity.name}</span>
                        <span className="text-primary font-bold">{activity.duration}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            )}

            {slide.type === "prevention" && (
              <div className="space-y-8 animate-fade-in">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
                  {slide.title}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {slide.cards?.map((card, index) => (
                    <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-2 text-center">
                      <div className="p-4 bg-primary/10 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                        <Icon name={card.icon} className="text-primary" size={36} />
                      </div>
                      <h3 className="font-bold text-xl mb-3">{card.title}</h3>
                      <p className="text-muted-foreground">{card.description}</p>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {slide.type === "conclusion" && (
              <div className="text-center space-y-12 animate-fade-in">
                <div className="space-y-6">
                  <div className="text-6xl">🌟</div>
                  <h2 className="text-5xl md:text-6xl font-bold text-foreground">
                    {slide.title}
                  </h2>
                  <p className="text-2xl md:text-3xl text-secondary font-semibold max-w-3xl mx-auto">
                    {slide.subtitle}
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                  {slide.highlights?.map((highlight, index) => (
                    <Card key={index} className="p-6 border-2 border-primary/20 bg-primary/5">
                      <div className="flex items-center gap-3">
                        <Icon name="CheckCircle2" className="text-primary flex-shrink-0" size={28} />
                        <span className="text-lg font-semibold">{highlight}</span>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="bg-muted/30 px-8 py-6 border-t">
            <div className="flex items-center justify-between">
              <Button
                onClick={prevSlide}
                variant="outline"
                size="lg"
                className="gap-2"
                disabled={currentSlide === 0}
              >
                <Icon name="ChevronLeft" size={20} />
                Назад
              </Button>

              <div className="flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentSlide
                        ? "bg-primary w-8"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Слайд ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                onClick={nextSlide}
                variant="outline"
                size="lg"
                className="gap-2"
                disabled={currentSlide === slides.length - 1}
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
      </div>
    </div>
  );
}
