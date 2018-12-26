import React from "react";
import { Container, Row, Col } from "reactstrap";
//import randomColor from "randomcolor";

import { Discord }  from "../images/svg";
import { Twitter }  from "../images/svg";
import { Reddit }  from "../images/svg";
import { Bitcointalk }  from "../images/svg";
import { Github }  from "../images/svg";
import { Hush }  from "../images/svg";
import { Menu }  from "../images/svg";



const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          height: 0.25
      }}
  />
);


const styles = {
  center: {
    textAlign: 'center',
    width: '100%',
    height: '100%',
    verticalAlign: 'middle',
    fontWeight: 'normal'
  },
  normal: {
    fontWeight: 'normal'
  },
  bold: {
    fontWeight: 'bold'
  },
};


export default class ZContact extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
          <h1>Contact</h1>
            <ColoredLine color="grey" />
            <p>
            <br/><h3>
            <p style={styles.center}><b>JOIN US!</b></p>
              </h3>
              <br/>
              <br/>
              <p style={styles.center}><b>Hush</b> is a community project. Everyone is welcomed with open arms!</p>
            </p>

            <p>
              <br/>
              <br/>
              <p style={styles.center}>
                <div>
                  <a href="https://myhush.org/discord/index.html"><Discord size='60'/></a>
                  <a href=""><Twitter size='60'/></a>
                  <a href=""><Reddit size='60'/></a>
                  <a href=""><Bitcointalk size='60'/></a>
                  <a href=""><Github size='60'/></a>
                </div>
              </p>
             </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
