import "./about.css";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import AboutTeam from "./mini-components/aboutTeam";
import BriefAbout from "./mini-components/briefAbout";
import AboutCard from "./mini-components/aboutCard";

const About = () => {
  return (
    <>
      <main className="aboutPage">
        <h2 className="aboutUs">About Us</h2>
        <p className="aboutUsP">
          COJESKI-DRC is a national platform composed of 60 Youth Organizations,
          operational throughout the province of North Kivu. (www.cojeski.org).
          He is a founding member of the National Network of Human Rights NGOs
          of the Democratic Republic of Congo (RENADHOC), a founding member of
          the Civil Society Dynamics of the DRC for peace in the African Great
          Lakes Region, (DYSOCIV ), Member of the National Preparatory Committee
          for the International Conference on Peace in the African Great Lakes
          Region (CPN-RDC/CIRGL), member of the National Youth Council of the
          DRC (CNJ / RDC), member of the International Coalition NGOs for the
          International Criminal Court (CICC), full member of the International
          Peace Bureau (IPB: www.ipb.org), member of the African Democracy Forum
          (ADF), member of the Mouvement Mondial pour la Démocratie / World
          Movement for Democracy ( WMD), member of the Coordinating Council of
          the World Civil Society Forum (WCSF: www.worldcivilsociety.org),
          currently coordinates the Youth component of Civil Society in the
          Democratic Republic of Congo and animates the Africa zone of the World
          Youth Forum. He is also a member of the World Coalition Against the
          Death Penalty / World Coalition Against the Death Penalty (
          www.worldcoalition.org ), member of Global Youth Action Network
          (GYAN), member of Youth Employment Summit (YES Network), member of the
          Coalition for an Effective African Court on Human Rights and peoples'
          Rights, member of the African Civil Society early warning system to
          the African Union (SALAAMNET), and member of the Global Campaign for
          the Reform of International Institutions ( www.reformcampaign.net ).
        </p>
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#History">
          <Row>
            <Col sm={4} className="fixed-list">
              <ListGroup className="list-group-flush">
                <ListGroup.Item action href="#History" className="fw-bolder">
                  HISTORY OF COJESKI DRC
                </ListGroup.Item>
                <ListGroup.Item action href="#Action" className="fw-bolder">
                  RANGE OF ACTION
                </ListGroup.Item>
                <ListGroup.Item action href="#Members" className="fw-bolder">
                  DUTIES OF MEMBERS
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  href="#Presentation"
                  className="fw-bolder"
                >
                  BRIEF PRESENTATION OF COJESKI
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={8}>
              <Tab.Content>
                <Tab.Pane eventKey="#History">
                  COJESKI RDC was created on October 21, 1995 at the Center
                  Olame, in South Kivu. The Collective of Youth Organizations
                  and Associations of South Kivu "COJESKI" subsequently became,
                  from September 1, 2000, a platform of Congolese Law, Network
                  of pressure and lobbying with National and international
                  vocation of Actions for the Defense of Good Governance through
                  the promotion of Peace, Human Rights, Endogenous Democracy and
                  Sustainable Development, called "Collective of Solidarity
                  Youth Organizations of Congo-Kinshasa", in acronym Asbl
                  COJESKI-RDC. Head office and Administration established at
                  n°22, avenue Cimbushi, Motel FIKIN, Municipality of Limete,
                  City of Kinshasa, Province of Kinshasa, DR Congo.
                </Tab.Pane>
                <Tab.Pane eventKey="#Action">
                  With legal personality, Observer Status with the National
                  Commission on Human and People's Rights / African Union and
                  Special Consultative Status with the Economic and Social
                  Council (ECOSOC), as such, COJESKI DRC, also carries out its
                  activities with the statutory, institutional bodies and
                  Conventional mechanisms of the OAU and the United Nations. The
                  members of the Asbl COJESKI RDC, come from organizations and
                  Associations and associations of the young people of the
                  social and thematic components of 26 constitutional Provinces
                  of the DRC, hereafter namely:
                  <ul>
                    <li>Non-Governmental Development Organizations (NGDOs);</li>
                    <li>Local development initiatives (L.I.D);</li>
                    <li>
                      Colleges of students from Universities and Higher
                      Institutes;
                    </li>
                    <li>Secondary and vocational schools;</li>
                    <li>
                      Youth ministry of all religious denominations; Pressure
                      and lobbying groups;
                    </li>
                    <li>
                      Independent Youth Movements; the units of the Scout
                      Movement and the Xaveri Movement, the nuclei of democratic
                      influence;
                    </li>
                    <li>Youth sports and cultural organizations;</li>

                    <li>
                      Organizations of young girls and women's associations of
                      young people; Etc.
                    </li>
                  </ul>
                  It is since October 2000, that the Provincial Coordination of
                  COJESKI / North Kivu has been installed and is operational
                  until today. It began to be directed by Mr Guy Kajemba until
                  2004 and followed by Jean Pascal MUGARUKA, since 2005 until
                  today.
                </Tab.Pane>
                <Tab.Pane eventKey="#Members">
                  The attributions of the members of the National Coordination
                  are Mutatitis Mutandis of the Provincial Coordination in
                  accordance with the Statutes.
                  <h4>COMPOSITION OF THE COJESKI/NK PROVINCIAL OFFICE</h4>
                  <AboutTeam />
                </Tab.Pane>
                <Tab.Pane eventKey="#Presentation">
                  <BriefAbout />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
        <section className="aboutCard">
          <AboutCard />
        </section>
      </main>
    </>
  );
};

export default About;
