import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import wware from "../Img/illustration/wware.svg";
import wwdo from "../Img/illustration/wwdo.svg";
import admin from "../Img/illustration/admin.svg";
import infowware from "../Img/Info/wware.jpeg";
import infowwdo from "../Img/Info/wwdo.jpeg";
import infoadmin from "../Img/Info/admin.jpeg";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

const HomeCard = () => {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);

  const toggleModal1 = () => setModal1(!modal1);
  const toggleModal2 = () => setModal2(!modal2);
  const toggleModal3 = () => setModal3(!modal3);

  return (
    <>
      <section className="card-container" id="homeCard">
        <article className="cardBox">
          <img src={wware} alt="who we are" />
          <h1 className="cardText">who we are</h1>
          <p className="cardPara">
            COJESKI is a human rights Forum by nature and brings together
            various interested parties which are involved in human rights
            without exclusion.
          </p>
          <button className="cardBtn" onClick={toggleModal1}>
            Read more
          </button>
        </article>
        <article className="cardBox">
          <img src={wwdo} alt="what we do" />
          <h1 className="cardText">what we do</h1>
          <p className="cardPara">
            COJESKI DRC has the following main thematic orientation Human
            Rights: Human Rights awareness, documentation of human rights
            violations, legal assistance, Policy Analysis.
          </p>
          <button className="cardBtn" onClick={toggleModal2}>
            Read more
          </button>
        </article>
        <article className="cardBox">
          <img src={admin} alt="administration" />
          <h1 className="cardText">Administration</h1>
          <p className="cardPara">
            We are governed by the General Assembly, then the Board of
            Directors, then the Coordination and then the departments, then
            staff members and volunteers.
          </p>
          <button className="cardBtn" onClick={toggleModal3}>
            Read more
          </button>
        </article>
      </section>
      <Modal
        show={modal1}
        onHide={toggleModal1}
        className="modalStyle"
        scrollable
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <span className="modalTitle">Who We Are</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modalImgContainer">
            <img src={infowware} alt="who we are" className="imgWho" />
            <p className="modal-intro">
              <span>‟</span>
              The Collective of Youth Organizations for Solidarity in the
              Democratic Republic of Congo known as COJESKI-DRC, COJESKI is a
              forum bringing together youth organizations, associations, groups,
              think tanks and any other youth initiative. It was created in
              October 1993.
            </p>
          </div>

          <p>
            Currently COJESKI is present in all the former 11 Provinces of the
            Democratic Republic of Congo with the main offices in Kinshasa. The
            Coordination of North Kivu enjoys autonomy to work on its various
            programs like other COJESKI Representations in the country. In North
            Kivu we are present in all the seven Territories and the main office
            is based in Goma.
          </p>
          <div className="joinUs-container">
            <a href="#" className="btnContainer">
              <button type="button">Read more</button>
            </a>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={modal2}
        onHide={toggleModal2}
        className="modalStyle"
        scrollable
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <span className="modalTitle">What We Do</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modalImgContainer">
            <img src={infowwdo} alt="what we do" className="imgWho" />
            <p className="modal-intro">
              <span>‟</span>The Collective of Youth Organizations for Solidarity
              in the Democratic Republic of Congo known as COJESKI-DRC, COJESKI
              has the following main thematic orientation :
            </p>
          </div>
          <ol className="list-wwdo">
            <li>
              <b>Human Rights:</b> Human Rights awareness, documentation of
              human rights violations, legal assistance, Policy Analysis
            </li>{" "}
            <li>
              <b>Peace and Conflict Resolution:</b>Peace education, dialogue,
              negotiation, non-violence, mediation,
            </li>{" "}
            <li>
              <b>Democracy:</b>Civic education, leadership, participation,
              freedom of speech, access to information,
            </li>{" "}
            <li>
              <b>Good Governance:</b>Transparency, Access to Justice, and
              Accountability,
            </li>{" "}
            <li>
              <b>Sustainable Development:</b>Income Generating Activities,
              Infrastructure, Economy, Culture, Health and Education,{" "}
            </li>{" "}
            <li>
              <b>Humanitarian Actions:</b>Emergency, Prevention of Natural
              Risks, Relief Aid, Settlement, Internally Displaced Persons, and
              Refugees,{" "}
            </li>{" "}
            <li>
              <b>Climate Change:</b>Clean Environment, Planting of trees, and
              the protection of bio-diversity,
            </li>
          </ol>
        </Modal.Body>
      </Modal>

      <Modal
        show={modal3}
        onHide={toggleModal3}
        className="modalStyle"
        scrollable
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <span className="modalTitle">Administration</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modalImgContainer">
            <img src={infoadmin} alt="administration" className="imgWho" />
            <p className="modal-intro">
              <span>‟</span>We are governed by the General Assembly, then the
              Board of Directors, then the Coordination and then the
              departments, then staff members and volunteers.
            </p>
          </div>
          <ul className="list-wwdo">
            <li>
              <b>The General Assembly:</b>It is composed of all members and
              defines the strategic orientation of COJESKI-DRC, we have have
              various General Assemblies at various levels: First of all at the
              Territory Level where members focus on the realities in their
              territory, the at the Province level where all the representatives
              from various territories meet in General Assembly to deliberate on
              issues in their province, and then at the national where delegates
              from various provinces meet and discuss about the orientation of
              COJESKI.
            </li>
            <li>
              <b>The Board of Directors:</b> It is a team that is elected from
              members of the General Assembly in order to supervise the
              implementation of the programmes of COJESKI. The Board of
              Directors is spearheaded by the President of the Board who is the
              face of COJESKI at all levels.
            </li>
            <li>
              <b>The Coordination/ the Executive:</b> Is also mandated to
              execute the programmes of COJESKI under the supervision on the
              Board of Directors.
            </li>
            <li>
              <b>The heads of Departments: </b>These are various persons in
              charge of the implementation of various activities and projects.
            </li>
            <li>
              <b>Staffs and Volunteers: </b>These are people who daily involved
              in the implementation of activities and programmes of COJESKI.
            </li>
            At National level the Coordination is composed of members
            representing various provinces and at the provincial level like here
            in North Kivu, the Coordination is composed of representatives from
            different Territories.
          </ul>
          <p className="joinUs-container">
            <b>
              Membership form for all those who want to join us, Please download
              the form below
            </b>
            <div className="btnContainer">
              <Button>
                <span>English Form</span>
                <CloudDownloadIcon />
              </Button>
              <Button>
                <span>French Form</span>
                <CloudDownloadIcon />
              </Button>
            </div>
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default HomeCard;
