import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addToFavourites } from '../actions/actions'

const Job = ({ data }) => {
const dispatch = useDispatch()

return (
      <Row
        className="mx-0 mt-3 p-3"
        style={{ border: '1px solid #00000033', borderRadius: 4 }}
      >
        <Col xs={6}>
          <button 
            className='me-4 border border-0 bg-transparent'
            onClick={() => dispatch(addToFavourites(data.title))}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
</svg>
            </button>
          <Link to={`/${data.company_name}`} className='text-decoration-none text-dark fw-bold'><span className='fw-light'>Compagnia:</span>  {data.company_name}</Link>
        </Col>
        <Col xs={6}>
          <a href={data.url} target="_blank" rel="noreferrer" className='text-decoration-none text-dark fw-bold'>
          <span className='fw-light'>Posizione ricercata:</span>  {data.title}
          </a>
        </Col>
      </Row>
  )
}

export default Job
