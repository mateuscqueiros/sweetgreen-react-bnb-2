import {
  Header,
  HomeBannerSection,
  HomeCarouselSection,
} from './components/layout';

function App() {
  return (
    <>
      <Header />
      <main className="w-full max-w-content-width mx-auto">
        <HomeBannerSection />
        <HomeCarouselSection />
      </main>
    </>
  );
}

export default App;
