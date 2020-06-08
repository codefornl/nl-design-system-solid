import { CardList } from "../components/list/list-card";
import { Notification } from "../components/notification/notification"
import { CardProperties } from "../components/card/card";
interface Properties {
    children: any;
}

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
  
export const Home = () => (
    <>
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
    </>
);