import { Header } from './components/header/header';
import { SkipLink } from './components/skiplink/skliplink';
import { Notification } from './components/notification/notification';
import { CardList } from './components/list/list-card';
import { CardProperties } from './components/card/card';
import { Footer } from './components/footer/footer';

function App() {

  const cards: CardProperties[] = [
    {
      title: "Aan de slag",
      image: "https://nl-design-system.gitlab.io/nl-design-system/images/img-1.png",
      content: "Installatie, richtlijnen en layout.",
      href: "#aan-de-slag"
    },
    {
      title: "Basis",
      image: "https://nl-design-system.gitlab.io/nl-design-system/images/img-2.png",
      content: "Kleuren, iconen en typografie.",
      href: "#basis"
    },
    {
      title: "Componenten",
      image: "https://nl-design-system.gitlab.io/nl-design-system/images/img-3.png",
      content: "Kant-en-klare onderdelen.",
      href: "#componenten"
    }
  ];

  const sampleCards: CardProperties[] = [
    {
      title: "Patronen",
      image: "https://nl-design-system.gitlab.io/nl-design-system/images/img-3.png",
      content: "Validatie en forumlieropbouw.",
      href: "#patronen"

    },
    {
      title: "Voorbeelden",
      image: "https://nl-design-system.gitlab.io/nl-design-system/images/img-2.png",
      content: "Kant-en-klare pagina's.",
      href: "#voorbeelden"
    }
  ]

  return (
    <>
      <SkipLink id="content" title="Ga direct naar inhoud" />
      <Header hide={true} transparent={true} />
      <main class="skiplink-target main" id="content" tabindex="-1">
        <div class="container">
          <section class="row">
            <div class="col-xs-12 col-sm-11 col-md-10 col-lg-9 col-xl-8">
              <div class="content">
                <header class="content__header">
                  <h1 class="content__header-title">NL Design System - implementatie in <a href="https://solidjs.com">SolidJs</a></h1>
                  <p>broncode: <a href="https://github.com/codefornl/nl-design-system-solid/">github</a></p>
                </header>
              </div>
            </div>
          </section>
          <article>
            <div class="row">
              <div class="col-sm-12">
                <Notification
                  type="warning"
                  title="NL Design System in pilotfase"
                  description={`Het NL Design System bevindt 
                    zich momenteel nog in de pilotfase. 
                    Hierdoor is het nu nog niet volwassen genoeg om volledig gebruikt 
                    te worden. Houdt hier dus rekening mee voor je aan de slag gaat. We 
                    zouden het op prijs stellen als je wilt bijdragen om het NLDS tot een 
                    succes te maken. Dit kan in onze gitlab of met een 
                    mailtje aan: NLDesignSystem@gebruikercentraal.nl`} />
                <CardList cards={cards} />
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <CardList cards={sampleCards} />
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer>
        <div class="col-xs-4">
          <span class="footer__header">NL Design System 0.1.2-Solid</span>

          <ul class="list list--links footer__nav">
            <li><a href="upgrade/index.html">Upgraden</a></li>
          </ul>
        </div>
        <div class="col-xs-4">
          <span class="footer__header">Bijdragen</span>
          <ul class="list list--links footer__nav">
            <li><a rel="external" href="https://gitlab.com/nl-design-system/nl-design-system">GitLab</a></li>
          </ul>
        </div>
        <div class="col-xs-4">
          <span class="footer__header">Contact</span>
          <ul class="list list--links footer__nav">
            <li><a href="">Stuur een e-mail</a></li>
          </ul>
        </div>
      </Footer>
    </>
  );
}

export default App;
