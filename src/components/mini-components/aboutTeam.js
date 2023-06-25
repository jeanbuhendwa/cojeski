import Accordion from "react-bootstrap/Accordion";

const AboutTeam = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>STAFF</Accordion.Header>
        <Accordion.Body>
          <ul>
            <li>Provincial Coordinator</li>
            <li>Provincial Secretary</li>
            <li>
              Provincial Animator in charge of Monitoring, Advocacy and Context
              Analysis
            </li>

            <li>Provincial animator in charge of projects and programs</li>
            <li>Provincial Animator in charge of Gender and Social Issues</li>
            <li>
              Provincial animator in charge of the social, economic and cultural
              rights of refugees
            </li>
            <li>
              Provincial Animator in charge of Peacebuilding and Peaceful
              Conflict Resolution
            </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Support staff</Accordion.Header>
        <Accordion.Body>
          <ul>
            <li>A Secretary-Cashier</li>
            <li>An Accounting Secretary</li>
            <li>
              An Assistant in charge of Communication, IT maintenance and
              updating the COJESKI/NK website
            </li>
            <li>
              An Assistant in charge of Reception, Reception and dispatching of
              mail
            </li>
            <li>
              A Driver, Assistant in charge of Logistics and car transport
            </li>
            <li>A security officer during the day</li>
            <li>
              A sentry responsible for the cleanliness of the enclosure and
              night security
            </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>SCHOOL AND UNIVERSITY BRANCHES</Accordion.Header>
        <Accordion.Body>
          The cores of school and academic actions are focal points of COJESKI's
          provincial liaison base. Their activities are autonomous, centered on
          raising awareness, mobilizing Congolese school and student youth in
          COJESKI/NK programs as well as in the self-development actions of
          their respective establishments. Each action core is made up of a
          maximum of 10 facilitators, under the responsibility of a supervisor
          assisted by his Deputy. Their terms of office are one year,
          non-renewable.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default AboutTeam;
