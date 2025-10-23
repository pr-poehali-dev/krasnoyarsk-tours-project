import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const tours = [
    {
      id: 1,
      title: 'Топ. Самая полноценная экскурсия Красноярск-Дивногорск',
      description: `Насыщенная экскурсия по главным достопримечательностям региона:

1) Вначале мы посетим главный символ Красноярска - Часовню Параскевы Пятницы, откуда открывается шикарный вид на исторический центр. Я покажу, откуда начинался город. Эта часовня изображена на десятирублёвой купюре.

2) Далее мы отправимся на Николаевскую сопку. Именно там находится один из самых высоких флагштоков в России. А ещё мы увидим Красноярск с высоты птичьего полёта!

3) Теперь наш путь лежит на правобережье. Едем на Восточный вход Красноярских столбов. Мы посетим Сиенитовый карьер с красивым видом на скальный массив Такмак, а ещё я расскажу про Красноярские Столбы и Столбистов. Там будет возможность немного перекусить, попробовать из живого источника вкуснейшую и полезную воду, а в визит-центре вы сможете отправить открытку домой.

4) Вторая часть нашей экскурсии - Дивногорье. Едем в сторону Дивногорска и заезжаем на шикарную смотровую площадку "Царь рыба" с великолепным видом на Енисей и Карауленское нагорье.

5) Заезжаем в Овсянку - родину нашего писателя В. П. Астафьева. Проедем мимо национального центра и посетим набережную, откуда нам откроется потрясающий вид на скалы Караульного быка.

6) Далее отправимся в Дивногорск - город гидростроителей. По дороге остановимся у берега Енисея с видом на скалу "Монах". Вы узнаете трогательную легенду о монахе и его возлюбленной.

7) Едем на самую красивую набережную Красноярского края, которая находится в Дивногорске. Тут мы сможем спуститься к Енисею, ощутить его прохладную воду и, конечно же, покормить целую армию уток с шикарными видами на дивные скалы. Далее будет кафе, где можно будет покушать.

8) Отправляемся на Красноярскую ГЭС, увидим плотину с нижней смотровой площадки. Узнаете, как строилась станция и для чего её возводили!

9) Теперь увидим ГЭС с верхнего бьефа, ощутим всю мощь плотины и сделаем фотографии с десятирублёвой купюрой. Частично откроется Красноярское море. А ещё посмотрим на единственный в России судоподъёмник, расскажу принцип его работы.

Далее, в обратном направлении, едем в Красноярск. По дороге, при желании, я завезу вас в рыбные магазины, где можно будет приобрести вкуснейшую енисейскую рыбу!

Такая экскурсия займёт по времени примерно 8-9 часов.
Стоимость 14000 руб. Заберу вас из гостиницы и привезу обратно (в пределах Красноярска).`,
      duration: '8-9 часов',
      difficulty: 'Средняя',
      price: '14 000 ₽',
      image: 'https://cdn.poehali.dev/files/4b434e8b-d7ca-4311-a598-0efb4f8a84e9.jpg',
      gallery: [
        'https://cdn.poehali.dev/files/e6fa57ba-d8c2-4323-8d13-6d9ae0a17099.jpg',
        'https://cdn.poehali.dev/files/36b3e32b-d331-4b3f-a46a-8c12acce7cf6.jpg'
      ]
    },
    {
      id: 2,
      title: 'Енисей и окрестности',
      description: 'Панорамная экскурсия вдоль великой сибирской реки с лучшими видовыми точками',
      duration: '3-4 часа',
      difficulty: 'Легкая',
      price: 'от 2500 ₽',
      image: 'https://cdn.poehali.dev/projects/bfbb56ee-f92a-4bba-90ab-3a6fd5390bd5/files/47568c1d-b34b-4bfe-be8f-93c6a986a39a.jpg'
    },
    {
      id: 3,
      title: 'Тайга: Дикая природа',
      description: 'Пешеходный маршрут по сибирской тайге с опытным проводником',
      duration: '6-7 часов',
      difficulty: 'Высокая',
      price: 'от 4500 ₽',
      image: 'https://cdn.poehali.dev/projects/bfbb56ee-f92a-4bba-90ab-3a6fd5390bd5/files/f2b07f56-7d4b-4f9f-ab8b-ca8874e9a699.jpg'
    }
  ];

  const reviews = [
    {
      name: 'Екатерина М.',
      text: 'Потрясающая экскурсия на Столбы! Гид показал такие места, до которых сами бы мы никогда не добрались.',
      rating: 5
    },
    {
      name: 'Андрей К.',
      text: 'Индивидуальный подход — это то, что нужно. Маршрут был составлен специально под наши интересы.',
      rating: 5
    },
    {
      name: 'Ольга С.',
      text: 'Красноярск открылся с совершенно новой стороны. Спасибо за незабываемые впечатления!',
      rating: 5
    }
  ];

  const features = [
    {
      icon: 'User',
      title: 'Персональный маршрут',
      description: 'Каждая экскурсия создается индивидуально под ваши интересы и физическую подготовку'
    },
    {
      icon: 'Map',
      title: 'Опытные гиды',
      description: 'Профессиональные проводники с глубоким знанием природы и истории региона'
    },
    {
      icon: 'Camera',
      title: 'Фотосессия в подарок',
      description: 'Качественные фотографии на память о вашем путешествии включены в стоимость'
    },
    {
      icon: 'Shield',
      title: 'Безопасность',
      description: 'Все маршруты проверены, предоставляется необходимое снаряжение'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Users" size={28} className="text-primary" />
            <span className="text-xl font-bold text-primary">Сибирский гид</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#tours" className="text-sm font-medium hover:text-primary transition-colors">Экскурсии</a>
            <a href="#routes" className="text-sm font-medium hover:text-primary transition-colors">Маршруты</a>
            <a href="#gallery" className="text-sm font-medium hover:text-primary transition-colors">Галерея</a>
            <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">Отзывы</a>
            <a href="#booking" className="text-sm font-medium hover:text-primary transition-colors">Бронирование</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="hidden md:flex">Связаться</Button>
        </div>
      </header>

      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `linear-gradient(rgba(44, 122, 123, 0.7), rgba(44, 122, 123, 0.5)), url('https://cdn.poehali.dev/files/a5a5d2e4-dde4-4eda-a9d9-e92258dda857.jpg')`
          }}
        />
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Откройте красоту Сибири
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-95">
            Индивидуальные экскурсии по Красноярску и природным объектам с персональным маршрутом
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              <Icon name="Calendar" size={20} className="mr-2" />
              Забронировать тур
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 backdrop-blur border-white text-white hover:bg-white hover:text-primary">
              <Icon name="Info" size={20} className="mr-2" />
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={feature.icon as any} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tours" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Популярные маршруты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите готовый маршрут или создайте свой индивидуальный тур
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <Card key={tour.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {tour.price}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{tour.title}</CardTitle>
                  <CardDescription>{tour.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="TrendingUp" size={16} />
                      <span>{tour.difficulty}</span>
                    </div>
                  </div>
                  {tour.gallery && tour.gallery.length > 0 && (
                    <div className="grid grid-cols-2 gap-2">
                      {tour.gallery.map((img: string, idx: number) => (
                        <img 
                          key={idx}
                          src={img} 
                          alt={`${tour.title} - фото ${idx + 1}`}
                          className="w-full h-24 object-cover rounded-md hover:opacity-80 transition-opacity cursor-pointer"
                        />
                      ))}
                    </div>
                  )}
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline">
                    <Icon name="MapPin" size={16} className="mr-2" />
                    Подробнее
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Галерея</h2>
            <p className="text-lg text-muted-foreground">
              Красота сибирской природы в объективе
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tours.map((tour) => (
              <div key={tour.id} className="relative h-64 overflow-hidden rounded-lg group cursor-pointer">
                <img 
                  src={tour.image} 
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white font-semibold">{tour.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Отзывы</h2>
            <p className="text-lg text-muted-foreground">
              Что говорят наши туристы
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="fill-secondary text-secondary" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 bg-muted/30">
        <div className="container max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Забронировать тур</h2>
            <p className="text-lg text-muted-foreground">
              Оставьте заявку, и мы свяжемся с вами для обсуждения деталей
            </p>
          </div>
          
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input 
                    id="name" 
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="ivan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Дополнительная информация</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Расскажите о ваших пожеланиях к маршруту, количестве человек, датах..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                
                <Button type="submit" className="w-full" size="lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <CardTitle className="text-lg">Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">+7 (391) 123-45-67</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <CardTitle className="text-lg">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">info@krsk-tours.ru</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <CardTitle className="text-lg">Адрес</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">г. Красноярск</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Mountain" size={24} />
              <span className="font-bold">Краснoyарск Tours</span>
            </div>
            <p className="text-sm opacity-80">© 2024 Все права защищены</p>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Icon name="Mail" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;