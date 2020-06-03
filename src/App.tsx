import { Label } from './components/label/label';
import { Counter } from './components/Counter';
import { Button } from './components/button/button'
import { Card } from './components/card/card';
import { BottomBar } from './components/bottom-bar/bottom-bar';
import { Header, HeaderProperties } from './components/header/header';
import { Navigation } from './components/navigation/navigation';
import { Backlink } from './components/navigation/backlink';
import { Badge } from './components/label/badge';
import { SkipLink } from './components/skiplink/skliplink';

function App() {

  const cte: HeaderProperties = {
    logo: "cte",
    title: "College voor Toetsen en Examens",
    screenreader: "college voor toetsen en examens, naar de homepage"
  }

  const ocw: HeaderProperties = {
    logo: "ocw",
    title: "Logo Ministerie van Onderwijs, Cultuur en Wetenschap",
    screenreader: "ministerie van onderwijs, cultuur en wetenschap, naar de homepage"
  }

  const duo: HeaderProperties = {
    title: "Logo Dienst Uitvoering Onderwijs",
    screenreader: "dienst uitvoering onderwijs, naar de homepage"
  }

  return (
    <>
    <SkipLink title="Ga direct naar inhoud" href="#main-content"/>
      <Header white={ true } { ...duo }/>
      <Navigation block={ true }/>
      <main class="skiplink-target main" id="content" tabindex="-1">
        <div class="container">
          <Card title="Lorum ipsum" image="https://nl-design-system.gitlab.io/nl-design-system/images/img-1.png" />
          <Button title="Default"></Button>
          <Button title="Primary" primary={ true }></Button>
          <Button title="Default disabled" disabled={ true }></Button>
          <Button title="Primary disabled" primary={ true } disabled={ true }></Button>
          <Counter></Counter>
          <Badge color="rood" icon="user" value={ 1 }/>
          <Label title="Hemelblauw" color="hemelblauw" />
          <Backlink content="Leerlingenadministratie" title="Naar Leerlingenadministratie"/>
        </div>
      </main>
      <BottomBar>
        <div class="container">
          <div class="row">
            <div class="col-xl-9 col-lg-10 col-lg-offset-1">
              <p>De bottom bar kan in principe alles bevatten. Dus ook een <Button title="Knop" /></p>
            </div>
          </div>
        </div>
      </BottomBar>
    </>
  );
}

export default App;
