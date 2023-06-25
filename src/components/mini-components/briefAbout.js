import Accordion from "react-bootstrap/Accordion";

const BriefAbout = () => {
  return (
    <>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Main objective of Asbl COJESKI / DRCongo
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Promote and defend Human Rights, Good Governance and the
              Sustainable Development in the Democratic Republic of Congo and in
              several countries.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Specific objectives of Asbl COJESKI/DR Congo
          </Accordion.Header>
          <Accordion.Body>
            <ol>
              <li>
                Contribute to the socio-economic promotion and the emergence of
                movements, associations and initiatives of young people in the
                Democratic Republic of Congo in particular, and organizations
                and movements of young people from different countries in
                general;
              </li>
              <li>
                Serve as a spokesperson and standard bearer for the aspirations
                and concerns of the Youth of the Democratic Republic of Congo
                with national, regional and international institutions, through
                national, regional and international advocacy activities;
              </li>{" "}
              <li>
                Involve the young people of the Democratic Republic of Congo in
                all major national and international decision-making processes
                affecting their future, in the following areas: Human Rights,
                Good Governance and Sustainable Development;
              </li>
              <li>
                Make social, economic and political analyzes of the immediate,
                sub-regional and international environment in which the youth of
                the Democratic Republic of Congo evolve, with a view to
                proposing avenues for sustainable solutions;
              </li>
              <li>
                Promote programs of distributive justice, participatory
                democracy and Sustainable Development, for the benefit of the
                working and rural masses of the Democratic Republic of Congo and
                several countries;{" "}
              </li>
              <li>
                Denounce all possible forms of violations of human rights and
                international humanitarian law, recorded, observed or
                experienced, throughout the Democratic Republic of Congo and in
                several countries;{" "}
              </li>
              <li>
                Accompany the youth of the Democratic Republic of Congo during
                the process of National Reconstruction, the electoral process by
                popularizing electoral techniques as well as during the profound
                socio-political changes and other humanitarian crises;
              </li>
              <li>
                Consolidate peace through the prevention, management and
                peaceful resolution of conflicts in the DR Congo as well as in
                the countries of the African sub-region of the Great Lakes,
                Central Africa and Southern Africa.
              </li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>SCHOOL AND UNIVERSITY BRANCHES</Accordion.Header>
          <Accordion.Body>
            The cores of school and academic actions are focal points of
            COJESKI's provincial liaison base. Their activities are autonomous,
            centered on raising awareness, mobilizing Congolese school and
            student youth in COJESKI/NK programs as well as in the
            self-development actions of their respective establishments. Each
            action core is made up of a maximum of 10 facilitators, under the
            responsibility of a supervisor assisted by his Deputy. Their terms
            of office are one year, non-renewable.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default BriefAbout;
