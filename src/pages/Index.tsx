import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Slide {
  id: number;
  title: string;
  content: JSX.Element;
}

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      title: 'Здоровьесберегающие технологии',
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <h1 className="text-5xl font-bold text-primary">Здоровьесберегающие технологии</h1>
          <p className="text-2xl text-muted-foreground">в школе и дома</p>
          <div className="grid grid-cols-2 gap-6 mt-12">
            <Card className="p-6 bg-primary/10 border-primary/20">
              <Icon name="Sun" className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold">Режим дня</h3>
            </Card>
            <Card className="p-6 bg-secondary/10 border-secondary/20">
              <Icon name="Utensils" className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold">Питание</h3>
            </Card>
            <Card className="p-6 bg-accent/10 border-accent/20">
              <Icon name="Bike" className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold">Физическая активность</h3>
            </Card>
            <Card className="p-6 bg-primary/10 border-primary/20">
              <Icon name="ShieldCheck" className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold">Профилактика</h3>
            </Card>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: 'Режим дня',
      content: (
        <div className="flex flex-col h-full space-y-6">
          <h2 className="text-4xl font-bold text-primary flex items-center gap-3">
            <Icon name="Sun" className="w-10 h-10" />
            Режим дня
          </h2>
          <p className="text-xl text-muted-foreground">Правильное распределение времени — основа здоровья</p>
          
          <div className="grid grid-cols-3 gap-6 flex-1">
            <Card className="p-6 border-2 border-primary/30 hover:border-primary transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Icon name="Moon" className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Сон</h3>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>7-9 часов для взрослых</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>9-11 часов для школьников</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Ложиться до 22:00</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 border-2 border-secondary/30 hover:border-secondary transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Icon name="BookOpen" className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold">Учёба и работа</h3>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                  <span>Перерывы каждые 45-50 минут</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                  <span>Пик активности: 10:00-12:00</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                  <span>Уроки не более 6-7 часов</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 border-2 border-accent/30 hover:border-accent transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Icon name="Clock" className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Отдых</h3>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <span>Прогулки на свежем воздухе</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <span>Хобби и творчество</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <span>Минимум 2 часа в день</span>
                </li>
              </ul>
            </Card>
          </div>

          <Card className="p-6 bg-muted/50 border-2">
            <div className="flex items-start gap-3">
              <Icon name="Lightbulb" className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-2">Золотое правило</h4>
                <p className="text-sm text-muted-foreground">Соблюдайте режим в будни и выходные. Организм привыкает к графику, что улучшает самочувствие и продуктивность.</p>
              </div>
            </div>
          </Card>
        </div>
      )
    },
    {
      id: 3,
      title: 'Питание',
      content: (
        <div className="flex flex-col h-full space-y-6">
          <h2 className="text-4xl font-bold text-secondary flex items-center gap-3">
            <Icon name="Utensils" className="w-10 h-10" />
            Правильное питание
          </h2>
          <p className="text-xl text-muted-foreground">Сбалансированный рацион для энергии и здоровья</p>
          
          <div className="grid grid-cols-2 gap-6 flex-1">
            <div className="space-y-4">
              <Card className="p-6 border-2 border-primary/30">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Icon name="Calendar" className="w-5 h-5 text-primary" />
                  Режим питания
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl">🌅</span>
                    </div>
                    <div>
                      <p className="font-semibold">Завтрак</p>
                      <p className="text-sm text-muted-foreground">7:00 - 9:00 (25-30%)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <span className="text-2xl">☀️</span>
                    </div>
                    <div>
                      <p className="font-semibold">Обед</p>
                      <p className="text-sm text-muted-foreground">12:00 - 14:00 (40-45%)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center">
                      <span className="text-2xl">🌆</span>
                    </div>
                    <div>
                      <p className="font-semibold">Ужин</p>
                      <p className="text-sm text-muted-foreground">18:00 - 19:00 (20-25%)</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-destructive/10 border-2 border-destructive/30">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Icon name="X" className="w-5 h-5 text-destructive" />
                  Избегать
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Icon name="Ban" className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Фастфуд и полуфабрикаты</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Ban" className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Избыток сахара и соли</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Ban" className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Газированные напитки</span>
                  </li>
                </ul>
              </Card>
            </div>

            <div className="space-y-4">
              <Card className="p-6 border-2 border-secondary/30">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Icon name="Apple" className="w-5 h-5 text-secondary" />
                  Тарелка здорового питания
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Овощи и фрукты</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-4 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{width: '50%'}}></div>
                      </div>
                      <span className="text-sm font-semibold">50%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Белки (мясо, рыба, яйца)</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-4 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-secondary" style={{width: '25%'}}></div>
                      </div>
                      <span className="text-sm font-semibold">25%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Углеводы (крупы, хлеб)</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-4 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-accent" style={{width: '25%'}}></div>
                      </div>
                      <span className="text-sm font-semibold">25%</span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-primary/10 border-2 border-primary/30">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Icon name="Droplet" className="w-5 h-5 text-primary" />
                  Питьевой режим
                </h3>
                <p className="text-sm mb-3">1.5-2 литра воды в день</p>
                <div className="flex gap-2">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="w-8 h-12 bg-primary/20 rounded-md border-2 border-primary/40"></div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-2">8 стаканов по 250 мл</p>
              </Card>

              <Card className="p-6 bg-muted/50">
                <div className="flex items-start gap-3">
                  <Icon name="Info" className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <p className="text-sm">Разнообразие рациона обеспечивает организм всеми необходимыми витаминами и минералами</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: 'Физическая активность',
      content: (
        <div className="flex flex-col h-full space-y-6">
          <h2 className="text-4xl font-bold text-accent flex items-center gap-3">
            <Icon name="Bike" className="w-10 h-10" />
            Физическая активность
          </h2>
          <p className="text-xl text-muted-foreground">Движение — это жизнь и здоровье</p>
          
          <div className="grid grid-cols-3 gap-6 flex-1">
            <Card className="p-6 border-2 border-primary/30">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                  <Icon name="School" className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">В школе</h3>
                <ul className="space-y-2 text-sm text-left w-full">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span>Уроки физкультуры (3 раза в неделю)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span>Физкультминутки на уроках</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span>Активные перемены</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span>Спортивные секции</span>
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="p-6 border-2 border-secondary/30">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Icon name="Home" className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold">Дома</h3>
                <ul className="space-y-2 text-sm text-left w-full">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                    <span>Утренняя зарядка (10-15 мин)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                    <span>Прогулки на свежем воздухе</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                    <span>Активные игры</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                    <span>Помощь по дому</span>
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="p-6 border-2 border-accent/30">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center">
                  <Icon name="Dumbbell" className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Виды активности</h3>
                <ul className="space-y-2 text-sm text-left w-full">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <span>Бег и плавание</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <span>Велосипед и ролики</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <span>Командные игры</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <span>Танцы и йога</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="p-5 bg-primary/10 border-2 border-primary/30">
              <div className="flex items-center gap-3 mb-3">
                <Icon name="Target" className="w-6 h-6 text-primary" />
                <h4 className="font-semibold">Рекомендации ВОЗ</h4>
              </div>
              <p className="text-sm">Детям и подросткам: минимум 60 минут умеренной или интенсивной физической активности ежедневно</p>
            </Card>

            <Card className="p-5 bg-muted/50 border-2">
              <div className="flex items-center gap-3 mb-3">
                <Icon name="AlertCircle" className="w-6 h-6 text-accent" />
                <h4 className="font-semibold">Важно помнить</h4>
              </div>
              <p className="text-sm">Ограничивайте экранное время (ТВ, компьютер, телефон) до 2 часов в день</p>
            </Card>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: 'Профилактика',
      content: (
        <div className="flex flex-col h-full space-y-6">
          <h2 className="text-4xl font-bold text-primary flex items-center gap-3">
            <Icon name="ShieldCheck" className="w-10 h-10" />
            Профилактика заболеваний
          </h2>
          <p className="text-xl text-muted-foreground">Лучше предупредить, чем лечить</p>
          
          <div className="grid grid-cols-2 gap-6 flex-1">
            <div className="space-y-4">
              <Card className="p-6 border-2 border-primary/30">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Icon name="Sparkles" className="w-5 h-5 text-primary" />
                  Гигиена
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">🖐️</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Мытьё рук</p>
                      <p className="text-xs text-muted-foreground">Перед едой, после улицы, туалета</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">🦷</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Уход за зубами</p>
                      <p className="text-xs text-muted-foreground">2 раза в день, посещение стоматолога</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">🚿</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Душ и чистота</p>
                      <p className="text-xs text-muted-foreground">Ежедневный душ, чистая одежда</p>
                    </div>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 border-2 border-secondary/30">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Icon name="Eye" className="w-5 h-5 text-secondary" />
                  Зрение и осанка
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                    <span>Правильное освещение рабочего места</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                    <span>Расстояние до экрана 50-70 см</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                    <span>Перерывы для глаз каждые 20 минут</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                    <span>Правильная посадка за столом</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                    <span>Ортопедический стул и матрас</span>
                  </li>
                </ul>
              </Card>
            </div>

            <div className="space-y-4">
              <Card className="p-6 border-2 border-accent/30">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Icon name="Wind" className="w-5 h-5 text-accent" />
                  Свежий воздух
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <span>Проветривание помещений 3-4 раза в день</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <span>Прогулки на улице минимум 1-2 часа</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <span>Поддержание температуры 18-22°C</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <span>Влажность воздуха 40-60%</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 border-2 border-primary/30">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Icon name="Heart" className="w-5 h-5 text-primary" />
                  Эмоциональное здоровье
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span>Позитивное общение с семьёй</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span>Управление стрессом</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span>Хобби и любимые занятия</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span>Дружеские отношения</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-muted/50 border-2">
                <div className="flex items-start gap-3">
                  <Icon name="Stethoscope" className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-2">Медицинские осмотры</h4>
                    <p className="text-sm">Регулярные профилактические осмотры и вакцинация помогают выявить проблемы на ранней стадии</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: 'Заключение',
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <Icon name="Heart" className="w-24 h-24 text-primary" />
          <h2 className="text-4xl font-bold text-center">Здоровье — это привычка!</h2>
          <p className="text-xl text-muted-foreground text-center max-w-2xl">
            Внедряйте здоровьесберегающие технологии постепенно. Начните с малого — 
            регулярного сна, завтрака и 15 минут зарядки. Через месяц это станет частью жизни.
          </p>
          
          <div className="grid grid-cols-4 gap-6 mt-8">
            <Card className="p-6 text-center border-2 border-primary/30">
              <Icon name="Sun" className="w-12 h-12 text-primary mx-auto mb-3" />
              <p className="font-semibold">Режим дня</p>
            </Card>
            <Card className="p-6 text-center border-2 border-secondary/30">
              <Icon name="Utensils" className="w-12 h-12 text-secondary mx-auto mb-3" />
              <p className="font-semibold">Питание</p>
            </Card>
            <Card className="p-6 text-center border-2 border-accent/30">
              <Icon name="Bike" className="w-12 h-12 text-accent mx-auto mb-3" />
              <p className="font-semibold">Активность</p>
            </Card>
            <Card className="p-6 text-center border-2 border-primary/30">
              <Icon name="ShieldCheck" className="w-12 h-12 text-primary mx-auto mb-3" />
              <p className="font-semibold">Профилактика</p>
            </Card>
          </div>

          <Card className="p-6 bg-primary/10 border-2 border-primary/30 max-w-2xl">
            <p className="text-center text-lg font-semibold">
              Помните: ваше здоровье в ваших руках! 💪
            </p>
          </Card>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5 p-8">
      <div className="max-w-7xl mx-auto">
        <Card className="shadow-2xl border-2 overflow-hidden">
          <div className="aspect-[16/9] p-12 relative">
            {slides[currentSlide].content}
          </div>

          <div className="border-t bg-muted/30 p-6">
            <div className="flex items-center justify-between">
              <Button
                onClick={prevSlide}
                variant="outline"
                size="lg"
                className="gap-2"
                disabled={currentSlide === 0}
              >
                <Icon name="ChevronLeft" className="w-5 h-5" />
                Назад
              </Button>

              <div className="flex items-center gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      index === currentSlide
                        ? 'w-8 bg-primary'
                        : 'w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50'
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
                <Icon name="ChevronRight" className="w-5 h-5" />
              </Button>
            </div>

            <div className="text-center mt-4 text-sm text-muted-foreground">
              Слайд {currentSlide + 1} из {slides.length}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;
