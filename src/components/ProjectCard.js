import { Col } from "react-bootstrap";


export const ProjectCard = ({ title, description, imgUrl, URL}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br></br>
          <br></br>
          <a className="github" href={URL}><button>GitHub</button></a>
        </div>
      </div>
    </Col>
  )
}
