import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import imgDoc from "../../Img/Info/document.svg";

const AboutCard = () => {
  return (
    <>
      <Card className="cardItem">
        <Card.Img variant="top" src={imgDoc} className="cardImg" />
        <Card.Body>
          <Card.Title className="cardTitle">FOUNDING DOCUMENT</Card.Title>
          <Card.Text className="cardText">
            Here in the constitution of the Collective of Youth Organizations
            for Solidarity in the Democratic Republic of Congo, please find it
            here on the attachemnt
          </Card.Text>
        </Card.Body>
        <Button className="cardBtn">Download</Button>
      </Card>
      <Card className="cardItem">
        <Card.Img variant="top" src={imgDoc} className="cardImg" />
        <Card.Body>
          <Card.Title className="cardTitle">LEGAL DOCUMENT</Card.Title>
          <Card.Text className="cardText">
            This is legal permit which was granted by the Government of DRC
            which helps us to abide with all our legal duties, please find the
            docment here
          </Card.Text>
        </Card.Body>
        <Button className="cardBtn">Download</Button>
      </Card>
      <Card className="cardItem">
        <Card.Img variant="top" src={imgDoc} className="cardImg" />
        <Card.Body>
          <Card.Title className="cardTitle">
            ECOSOC OBSERVER DOCUMENT
          </Card.Title>
          <Card.Text className="cardText">
            We also obtained the status of observer at the United Nations
            ECOSOC, please find the document here attached
          </Card.Text>
        </Card.Body>
        <Button className="cardBtn">Download</Button>
      </Card>
      <Card className="cardItem">
        <Card.Img variant="top" src={imgDoc} className="cardImg" />
        <Card.Body>
          <Card.Title className="cardTitle">HUMAN RIGHTS COMMISSION</Card.Title>
          <Card.Text className="cardText">
            In order to expand our work, we also obtained the sonsultative
            status at the African Union Human Rights Commission, please find the
            document here attached
          </Card.Text>
        </Card.Body>
        <Button className="cardBtn">Download</Button>
      </Card>
    </>
  );
};

export default AboutCard;
