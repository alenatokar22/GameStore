import React from "react";
import { GameItem } from "../components/GameItem";

const GAMES = [
  {
    image: "/game-covers/forza_5.jpeg",
    title: "Forza Horizon 5",
    genres: ["Гонки", "Симулятор", "Відкритий світ"],
    price: 2343,
    video: "https://www.youtube.com/embed/FYH9n37B7Yw",
    id: 1,
    description:
      "Вас чекає нескінченний калейдоскоп пригод Horizon! Здійснюйте захоплюючі поїздки неймовірно красивим і самобутнім світом Мексики за кермом найбільших автомобілів в історії. Почніть свою пригоду Horizon вже сьогодні, додавши гру до свого списку бажань!",
  },
  {
    image: "/game-covers/battlefield_2042.jpg",
    title: "Battlefield 2042",
    genres: ["Екшен", "Шутер", "Війна"],
    video: "https://www.youtube.com/embed/ASzOzrB-a9E",
    price: 2433,
    id: 2,
    description:
      "Battlefield™ 2042 - це шутер від першої особи, в якому серія повертається до легендарних масштабних битв. У майбутньому, де панує хаос, адаптуйтеся і процвітайте на полях бою, що постійно змінюються, завдяки своєму загону і арсеналу новітніх технологій.",
  },
  {
    image: "/game-covers/life_is_strange_true_colors.jpeg",
    title: "Life is Strange True Colors",
    genres: ["Глибокий сюжет", "Протагоністка"],
    video: "https://www.youtube.com/embed/b6CkzwVAr0M",
    price: 3021,
    id: 3,
    description:
      "Алекс Чень від усіх приховує своє «прокляття» — надприродну здатність зчитувати сильні емоції інших та впливати на них. Але коли її брат гине - нібито внаслідок нещасного випадку, - Алекс використовує її, щоб дізнатися правду.",
  },
  {
    image: "/game-covers/gta_v.jpeg",
    title: "Grand Theft Auto V",
    genres: ["Відкритий світ", "Екшен"],
    video: "https://www.youtube.com/embed/QkkoHAzjnUs",
    price: 789,
    id: 4,
    description:
      "Grand Theft Auto V для PC дозволяє гравцям дослідити знаменитий світ Лос-Сантоса та округу Блейн у роздільній здатності до 4k і вище з частотою 60 кадрів на секунду.",
  },
  {
    image: "/game-covers/rainbow_siege.jpeg",
    title: "Tom Clancy's Rainbow Six® Siege",
    video: "https://www.youtube.com/embed/6wlvYh0h63k",
    genres: ["Тактика", "Шутер"],
    price: 982,
    id: 5,
    description:
      "Tom Clancy's Rainbow Six Осада – это продолжение нашумевшего шутера от первого лица, разработанного студией Ubisoft Montreal.",
  },
  {
    image: "/game-covers/assassins_creed_valhalla.png",
    title: "Assassin’s Creed Valhalla",
    genres: ["Паркур", "РПГ", "Відкритий світ"],
    video: "https://www.youtube.com/embed/ssrNcwxALS4",
    price: 2863,
    id: 6,
    description:
      "Assassin’s Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.",
  },
];

export const HomePage = () => {
  return (
    <div className="home-page">
      {GAMES.map((game) => (
        <GameItem game={game} key={game.id} />
      ))}
    </div>
  );
};
