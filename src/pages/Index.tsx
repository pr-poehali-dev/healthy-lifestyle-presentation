import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";

const slides = [
  {
    id: 0,
    title: "Здоровьесберегающие технологии",
    subtitle: "В школе и дома",
    description: "Комплексный подход к сохранению и укреплению здоровья детей",
    type: "cover",
  },
  {
    id: 1,
    title: "Режим дня",
    subtitle: "Основа здорового образа жизни",
    description: "Правильный режим дня помогает организму работать эффективно и снижает стресс",
    image: "https://cdn.poehali.dev/projects/18fd8331-4361-489f-b325-f9ed107fdb3d/files/1674a76c-9530-44fb-a32f-3721f21e6739.jpg",
    points: [
      { icon: "Sun", text: "Подъём в одно и то же время (7:00-7:30)", color: "text-amber-600" },
      { icon: "BookOpen", text: "Учёба и занятия (8:00-14:00)", color: "text-blue-600" },
      { icon: "Utensils", text: "Регулярное питание 4-5 раз в день", color: "text-green-600" },
      { icon: "Gamepad2", text: "Отдых и хобби (15:00-18:00)", color: "text-purple-600" },
      { icon: "Moon", text: "Сон не менее 8-9 часов", color: "text-indigo-600" },
    ],
    type: "content",
  },
  {
    id: 2,
    title: "Правильное питание",
    subtitle: "Энергия и здоровье на каждый день",
    description: "Сбалансированный рацион — залог роста, развития и хорошего самочувствия",
    image: "https://cdn.poehali.dev/projects/18fd8331-4361-489f-b325-f9ed107fdb3d/files/3f717675-26f7-4a9f-bbde-f83dacfafa26.jpg",
    points: [
      { icon: "Apple", text: "Фрукты и овощи — 5 порций в день", color: "text-green-600" },
      { icon: "Milk", text: "Молочные продукты для крепких костей", color: "text-blue-500" },
      { icon: "Beef", text: "Белки: мясо, рыба, бобовые", color: "text-red-600" },
      { icon: "Wheat", text: "Цельнозерновые крупы и хлеб", color: "text-amber-700" },
      { icon: "Droplets", text: "Вода — 1,5-2 литра в день", color: "text-cyan-600" },
    ],
    type: "content",
  },
  {
    id: 3,
    title: "Физическая активность",
    subtitle: "Движение — это жизнь",
    description: "Регулярные физические нагрузки укрепляют мышцы, кости и иммунитет",
    image: "https://cdn.poehali.dev/projects/18fd8331-4361-489f-b325-f9ed107fdb3d/files/4125bcb2-e6f6-405b-a529-4bb5dc389347.jpg",
    points: [
      { icon: "Activity", text: "60 минут активности каждый день", color: "text-red-600" },
      { icon: "Bike", text: "Прогулки, велосипед, ролики", color: "text-blue-600" },
      { icon: "Dumbbell", text: "Утренняя зарядка 10-15 минут", color: "text-purple-600" },
      { icon: "Users", text: "Командные виды спорта", color: "text-green-600" },
      { icon: "Timer", text: "Перерывы каждые 45 минут занятий", color: "text-orange-600" },
    ],
    type: "content",
  },
  {
    id: 4,
    title: "Профилактика заболеваний",
    subtitle: "Предупредить легче, чем лечить",
    description: "Простые правила для защиты здоровья",
    points: [
      { icon: "Waves", text: "Мытьё рук перед едой и после улицы", color: "text-blue-600" },
      { icon: "Wind", text: "Проветривание помещений 3-4 раза в день", color: "text-cyan-600" },
      { icon: "Eye", text: "Гимнастика для глаз каждый час", color: "text-purple-600" },
      { icon: "ShieldCheck", text: "Вакцинация по календарю прививок", color: "text-green-600" },
      { icon: "Smile", text: "Позитивный настрой и хорошее настроение", color: "text-amber-600" },
    ],
    type: "content",
  },
  {
    id: 5,
    title: "Спасибо за внимание!",
    subtitle: "Будьте здоровы!",
    description: "Помните: здоровье — главная ценность",
    type: "final",
  },
];

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const slide = slides[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex flex-col">
      <div className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-5xl">
          <Card className="shadow-2xl border-2 border-primary/20 overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-[16/9] relative bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
                {slide.type === "cover" && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-8">
                      <Icon name="Heart" className="text-primary" size={48} />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 text-primary">
                      {slide.title}
                    </h1>
                    <p className="text-2xl md:text-3xl text-secondary font-semibold mb-6">
                      {slide.subtitle}
                    </p>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                      {slide.description}
                    </p>
                  </div>
                )}

                {slide.type === "content" && (
                  <div className="absolute inset-0 p-8 md:p-12 flex flex-col">
                    <div className="mb-6">
                      <h2 className="text-4xl md:text-5xl font-bold text-primary mb-2">
                        {slide.title}
                      </h2>
                      <p className="text-xl md:text-2xl text-secondary font-semibold mb-2">
                        {slide.subtitle}
                      </p>
                      <p className="text-base text-muted-foreground">
                        {slide.description}
                      </p>
                    </div>

                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        {slide.points?.map((point, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 p-4 bg-white/80 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                          >
                            <div className={cn("flex-shrink-0 mt-1", point.color)}>
                              <Icon name={point.icon} size={24} />
                            </div>
                            <p className="text-base font-medium text-foreground">
                              {point.text}
                            </p>
                          </div>
                        ))}
                      </div>

                      {slide.image && (
                        <div className="hidden md:flex items-center justify-center">
                          <div className="w-full h-full rounded-2xl overflow-hidden shadow-xl">
                            <img
                              src={slide.image}
                              alt={slide.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {slide.type === "final" && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-8 shadow-lg">
                      <Icon name="Sparkles" className="text-white" size={56} />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 text-primary">
                      {slide.title}
                    </h1>
                    <p className="text-3xl md:text-4xl text-secondary font-semibold mb-6">
                      {slide.subtitle}
                    </p>
                    <p className="text-xl text-muted-foreground max-w-2xl">
                      {slide.description}
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 flex items-center justify-between gap-4">
            <Button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              size="lg"
              variant="outline"
              className="gap-2"
            >
              <Icon name="ChevronLeft" size={20} />
              Назад
            </Button>

            <div className="flex gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all",
                    currentSlide === idx
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  )}
                  aria-label={`Перейти к слайду ${idx + 1}`}
                />
              ))}
            </div>

            <Button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              size="lg"
              className="gap-2"
            >
              Далее
              <Icon name="ChevronRight" size={20} />
            </Button>
          </div>

          <div className="mt-4 text-center text-sm text-muted-foreground">
            Слайд {currentSlide + 1} из {slides.length}
          </div>
        </div>
      </div>
    </div>
  );
}
