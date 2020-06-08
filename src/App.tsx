import { Header } from './components/header/header';
import { SkipLink } from './components/skiplink/skliplink';
import { Footer } from './components/footer/footer'
import { Switch, Match, Show } from 'solid-js'
import { Home } from './pages/Home'
import { Components } from './pages/Components'
import { createRouteHandler } from './Router'
import { NotFound } from './pages/NotFound'
import { Navigation } from './components/navigation/navigation'
import { NavigationItemProperties } from './components/navigation/navigation-item'
import { NavigationProvider, useNavigationProvider } from './Providers'

const NavToggler = () => {
  const [navigationState, { hide }] = useNavigationProvider();
  const navItems: NavigationItemProperties[] = [
    { title: "NL Design System", href: "#home", icon: "home", onclick: hide },
    { title: "Aan de slag", href: "#aan-de-slag" },
    { title: "Basis", href: "#basis" },
    { title: "Componenten", href: "#componenten" },
    { title: "Voorbeelden", href: "#voorbeelden" }
  ]
  
  return (
    <>
      <Navigation items={navItems} show={navigationState.visible} />
    </>
  )
}

function App() {
  const matches = createRouteHandler()
  return (
    <NavigationProvider visible={false}>
      <SkipLink id="content" title="Ga direct naar inhoud" />
      <Header hide={true} transparent={true} />
      <NavToggler />    
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
            <Switch fallback={<NotFound />}>
              <Match when={matches("home")}>
                <Home />
              </Match>
              <Match when={matches("componenten")}>
                <Components />
              </Match>
            </Switch>

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
    </NavigationProvider>
  )
}

export default App
