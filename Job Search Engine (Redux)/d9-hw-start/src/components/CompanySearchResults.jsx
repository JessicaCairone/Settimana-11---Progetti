import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getCompanyResult } from "../actions/actions";

const CompanySearchResults = () => {
  const [jobs, setJobs] = useState([]);
  const params = useParams();
 // const dispatch = useDispatch();
  const companyResult = useSelector((state) => state.companyResult);
  const jobCompany = companyResult.company;

  /*const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  useEffect(() => {
    getJobs();
  }, []);

  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.company);
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
       // dispatch(getCompanyResult(data));
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };*/


  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {jobCompany.company}</h1>
          {jobs.map(jobData => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;

