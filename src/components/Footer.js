import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import linkedin from '../assets/img/linkedin.svg';
import github from '../assets/img/github.svg';
import yt from '../assets/img/yt.svg';
import insta from '../assets/img/insta.svg';
import fb from '../assets/img/fb.svg';
import resume from '../assets/img/Manthan_Patel.pdf'


export const Footer = () => {
        return (
          <footer className="footer">
            <Container>
              <Row className="align-items-center">
                <Col>
                  <a href="mailto:patelmanthan291997@gmail.com" target="_blank"><h6>Contact at: patelmanthan291997@gmail.com</h6></a>
                </Col>
                <Col className="resume">
               <a href={resume} download><h6>Resume: Manthan Patel</h6></a> 
                </Col>
                  <Col size={12} sm={6} className="text-center text-sm-end">
                    <div className="social-icon">
                      <a href="https://www.linkedin.com/in/manthan-patel-137689168/" target="_blank"><img src={linkedin} alt="" /></a>
                      <a href="https://github.com/Manthan02" target="_blank"><img src={github} alt="" /></a>
                      <a href="https://www.youtube.com/channel/UCcEQV6yax6fSswcDIUW_RWw" target="_blank"><img src={yt} alt="" /></a>
                      <a href="https://www.instagram.com/manthan_02/" target="_blank"><img src={insta} alt="" /></a>
                      <a href="https://www.facebook.com/Manthan0209/" target="_blank"><img src={fb} alt="" /></a>
                      </div>
                  </Col>
              </Row>
            </Container>
          </footer>
        )
      }