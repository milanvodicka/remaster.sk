import React from "react"
import Layout from "../../components/Layout"
import Hero from "../../components/Hero"
import { Typography, Container, Box } from "@material-ui/core"
import mainImage from "../../images/domacnost/smart-home/main.jpg"
import iphoneImage from "../../images/domacnost/smart-home/iphone.png"
import smartApartment from "../../images/domacnost/smart-home/smart-apartment.jpg"
import smartAssistans from "../../images/domacnost/smart-home/assistans.jpg"
import homekitGears from "../../images/domacnost/smart-home/homekits-gear.png"
import Link from "../../components/Link"
import TopSpace from "../../components/TopSpace"
import SideBySide from "../../components/SideBySide"
import WideImage from "../../components/WideImage"
import Bold from "../../components/Bold"
import List from "../../components/List"
import FourCells from "../../components/FourCells"
import Breadcrumbs from "../../components/Breadcrumbs"

const Page = () => (
  <Layout>
    <Hero title="Smart Home" subtitle="Inteligentná domácnosť" imageSrc={mainImage} />
    <Breadcrumbs breadcrumbs={[["Služby", "/#sluzby"], ["Domácnosť"], ["Smart Home"]]} />
    <Container>
      <TopSpace>
        <SideBySide image={iphoneImage} alt="Bezdrôtová inteligentná domácnosť.">
          <Typography variant="body1" paragraph>
            Ak máte malý byt, alebo veľký dom, ak staviate, alebo už máte staršiu stavbu a chcete pre ňu jednoduché a intuitívne zabezpečenie, ovládanie a kontrolu, potom ste na
            správnom mieste!
          </Typography>
        </SideBySide>
      </TopSpace>
      <TopSpace spacing={3}>
        <Box>
          <Typography variant="h4" gutterBottom>
            Naša ponuka
          </Typography>
          <FourCells
            cells={[
              <>
                Cenovo dostupné systémy <Bold>Fibaro, Homey, Jablotron, Apple Homekit, Philips HUE, Lutron, RTI</Bold>.
              </>,
              <>
                Použitie <Bold>bezdrotových technológií Z-WAVE, Zigbee, Wifi</Bold>, a iných, bez nutnosti ťahania káblov.
              </>,
              <>
                Spočiatku môže domácnosť obsahovať iba niekoľko základných funkcií a <Bold>cenou sa Vám prispôsobí</Bold>.
              </>,
              <>
                Ovládanie pomocou smartphone alebo hlasového ovládania <Bold>Alexa, Siri, Google Assistant</Bold>.
              </>,
            ]}
          />
        </Box>
      </TopSpace>
    </Container>

    <TopSpace>
      <WideImage image={smartApartment} alt="Smart apartment" />
    </TopSpace>

    <Container>
      <TopSpace>
        <SideBySide image={homekitGears} alt="Homepod a homekit zariadenia">
          <Typography variant="h4" gutterBottom>
            Čo dnes dokáže inteligentná domácnosť
          </Typography>
          <Typography variant="body1" component="div">
            <List
              items={[
                <>
                  automatizované <Bold>ovládanie svetiel a žalúzií</Bold> (možné realizovať aj na pôvodných elektroinštaláciách)
                </>,
                <>
                  automatizované <Bold>ovládanie kúrenia</Bold> (ovládanie kotla, podlahového kúrenia, alebo radiátorových hlavíc)
                </>,
                <>
                  <Bold>zabezpečenie domácnosti</Bold> pomocou pohybových a dverových čidiel a kamery
                </>,
                <>
                  automatické <Bold>zabránenie vytopeniu</Bold> uzatvorením prívodu vody
                </>,
              ]}
            />
          </Typography>
        </SideBySide>
      </TopSpace>
      <TopSpace>
        <SideBySide reverse image={smartAssistans} alt="Alexa, Siri a Google Assistant">
          <Typography variant="body1" component="div">
            <List
              items={[
                <>
                  prebudenie osôb v prípade <Bold>detekcie dymu a požiaru</Bold>
                </>,
                <>
                  ovládanie <Bold>audio-video zariadení a domáceho kina</Bold>
                </>,
                <>
                  zónové bezdrôtové mutliroom <Bold>ozvučenie SONOS</Bold>, alebo <Bold>Bluesound</Bold>
                </>,
                <>
                  <Bold>kontrola kvality ovzdušia</Bold>, teploty a vlhkosti v danej miestnosti, a riadenie vzduchotechniky
                </>,
              ]}
            />
          </Typography>
        </SideBySide>
      </TopSpace>
      <TopSpace>
        <Typography variant="body1" paragraph>
          Okrem návrhu a inštalácie sa sústreďujeme na pohotový popredajný servis a starostlivosť o našich zákazníkov.
          <br />
          <Link href="/#kontakt">Kontaktujte nás</Link> a dohodnite si stretnutie v našom showroome.
        </Typography>
      </TopSpace>
    </Container>
    <div style={{ height: "33vh" }} />
  </Layout>
)

export default Page
