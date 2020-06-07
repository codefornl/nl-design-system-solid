import { Header } from './components/header/header';
import { SkipLink } from './components/skiplink/skliplink';
import { Notification } from './components/notification/notification';
import { Show, createState } from 'solid-js';

function App() {


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
                  <h1 class="content__header-title">NL Design System</h1>
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
                    mailtje aan: NLDesignSystem@gebruikercentraal.nl`}/>
              </div>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}

export default App;
