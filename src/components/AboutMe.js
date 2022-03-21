import React from "react";
import aga2 from "../assets/aga2.jpg";
import {Image, Container, Row, Col,} from "react-bootstrap";

const AboutMe = () => {
    return (
        <Container id="about-me">
            <h1 className="my-4 logo">O mnie</h1>
            <Row>
                <Col xxl={8} xl={8} lg={8} md={7} className="about-me-text">
                    <p>Cała przygoda zaczęła się od pracy na fermie krów mlecznych. Pomysł narodził się z dnia na dzień. Całoroczny dostęp do dobrego, świeżego mleka pomógł mi rozwijać się i uczyć na błędach. Skończyłam szkolenie z serów miękkich i żółtych u najlepszego serowara na Dolnym Śląsku. Teraz chce tworzyć sery dla Was.
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae lacinia libero. Suspendisse tortor neque, semper nec felis eu, auctor gravida dui. Integer vel tellus eu velit finibus porta. Phasellus id orci quis nulla vestibulum euismod sed sed augue. Sed auctor, mi quis commodo venenatis, risus dui tristique mauris, at efficitur nunc tortor sed mi. Phasellus eget mi neque. Proin elementum lobortis sollicitudin. Pellentesque pulvinar mollis quam ac rhoncus.
                    </p>
                </Col>
                <Col xxl={4} xl={4} lg={4} md={5}>
                    <Image src={aga2} alt="Na zdjęciu Agnieszka Domachowska" className="author-picture"></Image>   
                </Col>
            </Row>
            <hr></hr>
        </Container>
    )
}

export default AboutMe;