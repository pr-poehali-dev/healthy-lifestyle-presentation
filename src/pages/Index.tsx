import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const slides = [
  {
    id: 1,
    title: "Здоровьесбережение в школе и дома",
    subtitle: "Режим дня • Питание • Физическая активность • Профилактика",
    type: "cover",
  },
  {
    id: 2,
    title: "Режим дня",
    subtitle: "Основа здорового образа жизни",
    type: "section",
    icon: "Clock",
    color: "from-blue-500 to-cyan-500",
    image: "https://cdn.poehali.dev/projects/18fd8331-4361-489f-b325-f9ed107fdb3d/files/7cca27e1-5901-4042-9c3f-d03852752537.jpg",
    content: [
      { time: "7:00 - 8:00", activity: "Подъём, утренняя гигиена, зарядка" },
      { time: "8:00 - 9:00", activity: "Завтрак" },
      { time: "9:00 - 14:00", activity: "Учебные занятия" },
      { time: "14:00 - 15:00", activity: "Обед, отдых" },
      { time: "15:00 - 17:00", activity: "Домашние задания" },
      { time: "17:00 - 19:00", activity: "Физическая активность, прогулка" },
      { time: "19:00 - 20:00", activity: "Ужин" },
      { time: "20:00 - 21:30", activity: "Свободное время, хобби" },
      { time: "21:30 - 22:00", activity: "Подготовка ко сну" },
    ],
  },
  {
    id: 3,
    title: "Важность режима дня",
    type: "info",
    icon: "Heart",
    color: "from-blue-500 to-cyan-500",
    points: [
      {
        icon: "Brain",
        title: "Улучшение концентрации",
        description: "Регулярный режим помогает мозгу лучше усваивать информацию",
      },
      {
        icon: "Battery",
        title: "Больше энергии",
        description: "Правильное распределение нагрузки даёт силы на весь день",
      },
      {
        icon: "Moon",
        title: "Качественный сон",
        description: "Постоянное время отхода ко сну улучшает восстановление",
      },
    ],
  },
  {
    id: 4,
    title: "Правильное питание",
    subtitle: "Сбалансированный рацион для здоровья",
    type: "section",
    icon: "Apple",
    color: "from-orange-500 to-amber-500",
    image: "https://cdn.poehali.dev/projects/18fd8331-4361-489f-b325-f9ed107fdb3d/files/4e1cef29-de8b-4dd5-a634-c47a27830cea.jpg",
    content: [
      { category: "Завтрак (25%)", items: "Каши, яйца, молочные продукты, фрукты" },
      { category: "Обед (35%)", items: "Суп, мясо/рыба, гарнир, овощи, компот" },
      { category: "Полдник (15%)", items: "Фрукты, йогурт, орехи" },
      { category: "Ужин (25%)", items: "Лёгкие блюда: овощи, творог, рыба" },
    ],
  },
  {
    id: 5,
    title: "Принципы здорового питания",
    type: "info",
    icon: "Sparkles",
    color: "from-orange-500 to-amber-500",
    points: [
      {
        icon: "Droplets",
        title: "Водный баланс",
        description: "1.5-2 литра чистой воды в день",
      },
      {
        icon: "Salad",
        title: "Овощи и фрукты",
        description: "Не менее 400 г в день разных цветов",
      },
      {
        icon: "Ban",
        title: "Ограничить сахар",
        description: "Меньше газировки и сладостей",
      },
      {
        icon: "Clock3",
        title: "Регулярность",
        description: "4-5 приёмов пищи в одно время",
      },
    ],
  },
  {
    id: 6,
    title: "Физическая активность",
    subtitle: "Движение — это жизнь",
    type: "section",
    icon: "Dumbbell",
    color: "from-purple-500 to-pink-500",
    image: "https://cdn.poehali.dev/projects/18fd8331-4361-489f-b325-f9ed107fdb3d/files/eecac57f-c085-46a5-ac9d-b92bce1db005.jpg",
    content: [
      { activity: "Утренняя зарядка", duration: "10-15 минут", benefit: "Пробуждение организма" },
      { activity: "Физкультура в школе", duration: "45 минут", benefit: "Общая физподготовка" },
      { activity: "Прогулки на свежем воздухе", duration: "60 минут", benefit: "Насыщение кислородом" },
      { activity: "Спортивные секции", duration: "2-3 раза в неделю", benefit: "Развитие навыков" },
      { activity: "Активные игры", duration: "30-60 минут", benefit: "Координация, общение" },
    ],
  },
  {
    id: 7,
    title: "Норма физической активности",
    type: "stats",
    icon: "Activity",
    color: "from-purple-500 to-pink-500",
    stats: [
      { label: "Школьники 6-17 лет", value: "60 минут в день", description: "Умеренная и интенсивная активность" },
      { label: "Силовые упражнения", value: "3 раза в неделю", description: "Укрепление мышц и костей" },
      { label: "Экранное время", value: "Не более 2 часов", description: "Кроме учебных целей" },
    ],
  },
  {
    id: 8,
    title: "Профилактика заболеваний",
    subtitle: "Здоровые привычки каждый день",
    type: "section",
    icon: "ShieldPlus",
    color: "from-green-500 to-emerald-500",
    content: [
      { habit: "Мытьё рук", frequency: "Перед едой, после улицы", importance: "⭐⭐⭐" },
      { habit: "Чистка зубов", frequency: "2 раза в день", importance: "⭐⭐⭐" },
      { habit: "Проветривание комнаты", frequency: "3-4 раза в день", importance: "⭐⭐⭐" },
      { habit: "Влажная уборка", frequency: "2-3 раза в неделю", importance: "⭐⭐" },
      { habit: "Осанка за столом", frequency: "Постоянно", importance: "⭐⭐⭐" },
    ],
  },
  {
    id: 9,
    title: "Укрепление иммунитета",
    type: "info",
    icon: "Shield",
    color: "from-green-500 to-emerald-500",
    points: [
      {
        icon: "Sun",
        title: "Закаливание",
        description: "Контрастный душ, прогулки в любую погоду",
      },
      {
        icon: "Pill",
        title: "Витамины",
        description: "Сезонные фрукты, овощи, при необходимости — комплексы",
      },
      {
        icon: "Bed",
        title: "Полноценный сон",
        description: "8-10 часов для школьников",
      },
      {
        icon: "Smile",
        title: "Позитивный настрой",
        description: "Меньше стресса, больше положительных эмоций",
      },
    ],
  },
  {
    id: 10,
    title: "Главные правила здоровья",
    type: "summary",
    icon: "CheckCircle2",
    rules: [
      "Соблюдай режим дня и спи 8-10 часов",
      "Питайся разнообразно и регулярно",
      "Двигайся не менее 60 минут в день",
      "Соблюдай правила гигиены",
      "Проводи время на свежем воздухе",
      "Ограничь время у экранов",
      "Пей достаточно воды",
      "Береги свою осанку",
    ],
  },
];

export default function Index() {
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

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const slide = slides[currentSlide];
  const progress = ((currentSlide + 1) / slides.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <Progress value={progress} className="mb-6" />

        <Card className="relative overflow-hidden shadow-2xl">
          <div className="aspect-[16/9] p-8 md:p-12 flex flex-col justify-center">
            {slide.type === "cover" && (
              <div className="text-center space-y-6">
                <div className="inline-block p-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-4">
                  <Icon name="HeartPulse" size={64} className="text-white" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground">{slide.subtitle}</p>
              </div>
            )}

            {slide.type === "section" && (
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r ${slide.color} text-white`}>
                    <Icon name={slide.icon} size={24} />
                    <span className="font-semibold">Раздел {Math.floor(slide.id / 3) + 1}</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-foreground">{slide.title}</h2>
                  <p className="text-lg text-muted-foreground">{slide.subtitle}</p>

                  <div className="space-y-3 mt-6">
                    {slide.content?.map((item, index) => (
                      <div key={index} className="bg-white/50 backdrop-blur p-4 rounded-lg border border-slate-200">
                        <div className="flex items-start gap-3">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${slide.color} mt-2`}></div>
                          <div className="flex-1">
                            <p className="font-semibold text-foreground">
                              {item.time || item.category || item.activity}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {item.activity || item.items || item.duration}
                              {item.benefit && <span className="text-xs block mt-1">→ {item.benefit}</span>}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="hidden md:block">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            )}

            {slide.type === "info" && (
              <div className="space-y-8">
                <div className="text-center space-y-3">
                  <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r ${slide.color} text-white`}>
                    <Icon name={slide.icon} size={24} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">{slide.title}</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {slide.points?.map((point, index) => (
                    <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-2">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${slide.color} flex items-center justify-center mb-4`}>
                        <Icon name={point.icon} size={24} className="text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">{point.title}</h3>
                      <p className="text-muted-foreground">{point.description}</p>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {slide.type === "stats" && (
              <div className="space-y-8">
                <div className="text-center space-y-3">
                  <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r ${slide.color} text-white`}>
                    <Icon name={slide.icon} size={24} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">{slide.title}</h2>
                </div>

                <div className="space-y-6">
                  {slide.stats?.map((stat, index) => (
                    <Card key={index} className="p-8 border-l-4 border-l-purple-500">
                      <div className="grid md:grid-cols-3 gap-4 items-center">
                        <h3 className="text-lg font-semibold text-foreground">{stat.label}</h3>
                        <div className={`text-3xl font-bold bg-gradient-to-r ${slide.color} bg-clip-text text-transparent text-center`}>
                          {stat.value}
                        </div>
                        <p className="text-muted-foreground">{stat.description}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {slide.type === "summary" && (
              <div className="space-y-8">
                <div className="text-center space-y-3">
                  <div className="inline-block p-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mb-4">
                    <Icon name={slide.icon} size={48} className="text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">{slide.title}</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {slide.rules?.map((rule, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-white/70 backdrop-blur rounded-lg border border-green-200">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <p className="text-lg text-foreground pt-0.5">{rule}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Card>

        <div className="flex items-center justify-between mt-6 gap-4">
          <Button
            variant="outline"
            size="lg"
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="gap-2"
          >
            <Icon name="ChevronLeft" size={20} />
            <span className="hidden md:inline">Назад</span>
          </Button>

          <div className="flex gap-2 overflow-x-auto max-w-md">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSlide === index
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Перейти к слайду ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="lg"
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="gap-2"
          >
            <span className="hidden md:inline">Вперёд</span>
            <Icon name="ChevronRight" size={20} />
          </Button>
        </div>

        <div className="text-center mt-4 text-sm text-muted-foreground">
          Слайд {currentSlide + 1} из {slides.length}
        </div>
      </div>
    </div>
  );
}
