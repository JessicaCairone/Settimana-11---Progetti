import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import Job from "./Job";
import { getCompanyResult } from "../actions/actions";


const MainSearch = () => {
  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
        dispatch(getCompanyResult(data));
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <div className="d-flex justify-content-center">
            <div>
          <h1 className="display-1">Remote Jobs Search</h1>
          </div>
          <div className="mt-5 ms-5">
          <button onClick={() => navigate("/favourites")} className="border border-0 bg-transparent"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
</svg></button>
</div>
</div>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="cerca una posizione" />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map(jobData => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;