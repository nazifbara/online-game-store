import './home_page.css';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

import { useEffect } from 'react';
import { API, Storage } from 'aws-amplify';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper/core';
import GameList from '../../components/game_list';
import Game from '../../components/game';
import Message from '../../components/message';
import { useAsync } from '../../hooks';
import { listGames } from '../../api/queries';

SwiperCore.use([Autoplay]);

const IMAGES_BASE_PATH = 'images/';
const IMAGES_SRC = [
  `${IMAGES_BASE_PATH}spider-man-hero.png`,
  `${IMAGES_BASE_PATH}uncharted4-hero.jpg`,
  `${IMAGES_BASE_PATH}god-of-war-hero.jpg`,
  `${IMAGES_BASE_PATH}horizon-zero-dawn-hero.jpg`,
  `${IMAGES_BASE_PATH}demon-soul-hero.jpg`,
  `${IMAGES_BASE_PATH}ratchet-and-clank-hero.jpg`,
];

function HomePage() {
  const { status, data, error, run } = useAsync();
  if (error) {
    throw error;
  }

  useEffect(() => {
    run(fetchGames());
  }, [run]);

  return (
    <div>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        style={{ position: 'relative' }}
      >
        <h2 className="title">Play Has No Limits</h2>
        {IMAGES_SRC.map((src) => (
          <SwiperSlide>
            <div
              className="carousel"
              style={{
                backgroundImage: `linear-gradient(
                  to bottom,
                  rgba(27, 38, 59, 0.6),
                  rgba(13, 27, 42, 0.8)
                  ),
                  url('${src}')`,
              }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
      {error && <Message type="failed">Something went wrong...</Message>}
      {status === 'pending' && <span>Loading...</span>}
      {status === 'resolved' && (
        <GameList list={data}>
          {(item) => <Game key={item.id} item={item} />}
        </GameList>
      )}
    </div>
  );
}

async function fetchGames() {
  const data = await API.graphql({ query: listGames, authMode: 'API_KEY' });
  const {
    data: {
      listGames: { items },
    },
  } = data;
  const signedGames = await getSignedGames(items);
  return signedGames;
}

async function getSignedGames(games) {
  const signedGames = await Promise.all(
    games.map(async (item) => {
      const signedUrl = await Storage.get(item.imageKey);
      item.imageUrl = signedUrl;
      return item;
    })
  );
  return signedGames;
}

const route = {
  routeProps: {
    path: '/',
    component: HomePage,
  },
  name: 'HomePage',
};

export default route;
