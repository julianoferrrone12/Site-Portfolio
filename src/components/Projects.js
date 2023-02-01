import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { i18n } from "../translate/i18n";
import cripto from "../assets/img/bitcoin.jpg";
import expert from "../assets/img/expert.png";
import insta from "../assets/img/instagram.jpg";
import compet from "../assets/img/compet.jpg";
import python from "../assets/img/python.jpg";
import reunioes from "../assets/img/reunioes.jpg";
import tempo from "../assets/img/tempo.png";
import API from "../assets/img/brasil.webp";
import site from "../assets/img/J.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {

  const projects_1 = [
    {
      title: i18n.t('projects.title_1'),
      description: i18n.t('projects.description_1'),
      imgUrl: site,
      URL: "https://github.com/julianoferrrone12/Site-Portfolio",
    },
    {
      title: i18n.t('projects.title_2'),
      description: i18n.t('projects.description_2'),
      imgUrl: expert,
      URL: "https://github.com/julianoferrrone12/Call-an-expert",
    },
    {
      title: i18n.t('projects.title_3'),
      description: i18n.t('projects.description_3'),
      imgUrl: insta,
      URL: "https://github.com/julianoferrrone12/InstagramProject",
    },
  ];

  const projects_2 = [
    {
      title: "Compet Site",
      description: "Repository for backup and development of COMPET's website",
      imgUrl: compet,
      URL: "https://github.com/julianoferrrone12/compet_site",
    },
    {
      title: "Automating Processes",
      description: "Process automation using Python, Anaconda Jupyter, Pyautogui and Pyperclip",
      imgUrl: python,
      URL: "https://github.com/julianoferrrone12/Automatizacao-de-Processos",
    },
    {
      title: "Meeting Room Manager ",
      description: "Meeting Room Manager with angular",
      imgUrl: reunioes,
      URL: "https://github.com/julianoferrrone12/Gerenciador_de_salas_de_reunioes",
    },
    
  ]

  const projects_3 = [
    {
      title: "Cryptocoins",
      description: "Requesting data from a cryptocurrency API",
      imgUrl: cripto,
      URL: "https://github.com/julianoferrrone12/Criptomoedas",
    },
    {
      title: "Brazilian Cities API",
      description: "Rest API for querying Brazilian cities with Spring Boot",
      imgUrl: API,
      URL: "https://github.com/julianoferrrone12/Brazilian_Cities_API",
    },
    {
      title: "Weather forecast via API",
      description: "Creating a project to consult the weather forecast via API",
      imgUrl: tempo,
      URL: "https://github.com/julianoferrrone12/Previs-o-do-tempo-via-API",
    },
    
  ]

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>{i18n.t('projects.pageTitle')}</h2>
                <p>{i18n.t('projects.pageDescription')}</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">{i18n.t('projects.tab_1')}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">{i18n.t('projects.tab_2')}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">{i18n.t('projects.tab_3')}</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects_1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects_2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects_3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
