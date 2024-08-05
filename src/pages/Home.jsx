import React, { useEffect, useState } from 'react';
import { Card, Col, Modal, Row } from 'react-bootstrap';
import video from '../assets/kerala.mp4';



import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';

import './Home.css';

function Home() {
    const [show, setShow] = useState(false);
    const [loggedin, setloggedin] = useState(false);
    const [currentModal, setCurrentModal] = useState(null);

    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            setloggedin(true);
        } else {
            setloggedin(false);
        }
    }, []);

    const bookNow = () => {
        const user = localStorage.getItem('user');
        if (user) {
            window.location.href = '/user-booknow';
        } else {
            window.location.href = '/user-login';
        }
    };

    const handleClose = () => setCurrentModal(null);

    const handleShow = (index) => {
        setCurrentModal(index);
    };

    const cardImages = [
        'https://t4.ftcdn.net/jpg/06/46/89/93/360_F_646899398_Ytdesvb5psPcBUeD0HtzBUVh3OuOgXPI.jpg',
        'https://static.toiimg.com/thumb/106353366/Kochi.jpg?width=1200&height=900',
        'https://s3.india.com/wp-content/uploads/2024/06/Places-to-visit-in-Wayanad.jpg?impolicy=Medium_Widthonly&w=700',
        'https://www.indiatravel.app/wp-content/uploads/2024/03/places-to-visit-in-vagamon.jpg',
        'https://roamaround.app/api/getDestinationPicture?placeName=Thrissur',
        'https://www.keralatourism.org/images/picture/large/Malampuzha_Dam_2429.jpg',
        'https://www.beachheritage.com/admin/uploads/news/e3d40f40045133f2d7f97ed58a4f3e42.jpg',
        'https://lh5.googleusercontent.com/p/AF1QipM1Gla7gxL1dy4a7Q1JzVNkdOGZqjprTxGUej1S=w675-h390-n-k-no',
        'https://lp-cms-production.imgix.net/2022-03/shutterstockRF_606110843.jpg'
    ];

    const cardTitles = [
        'Alleppey',
        'Kochi',
        'Wayanad',
        'Idukki',
        'Thrissur',
        'Palakkad',
        'Kozhikode',
        'Kollam',
        'Trivandrum'
    ];

    const cardDescriptions = [
        'Description for Alleppey',
        'Description for Kochi',
        'Description for Wayanad',
        'Description for Idukki',
        'Description for Thrissur',
        'Description for Palakkad',
        'Description for Kozhikode',
        'Description for Kollam',
        'Description for Trivandrum'
    ];

    const mapLinks = [
        'https://www.google.com/maps/place/Alleppey,+Kerala,+India/@9.4980669,76.3388484,13z',
        'https://www.google.com/maps/place/Kochi,+Kerala,+India/@9.9312328,76.2673041,13z',
        'https://www.google.com/maps/place/Wayanad,+Kerala,+India/@11.7152139,76.0802455,13z',
        'https://www.google.com/maps/place/Idukki,+Kerala,+India/@9.856346,76.8324416,13z',
        'https://www.google.com/maps/place/Thrissur,+Kerala,+India/@10.5276416,76.2144349,13z',
        'https://www.google.com/maps/place/Palakkad,+Kerala,+India/@10.7867303,76.6547932,13z',
        'https://www.google.com/maps/place/Kozhikode,+Kerala,+India/@11.2587531,75.78041,13z',
        'https://www.google.com/maps/place/Kollam,+Kerala,+India/@8.8932118,76.6141396,13z',
        'https://www.google.com/maps/place/Thiruvananthapuram,+Kerala,+India/@8.5241391,76.9366376,13z'
    ];

    const modalContents = [
        {
            title: 'Alleppey',
            description: 'Description for Alleppey',
            details: `
                <h2>Alleppey (Alappuzha)</h2>
                <p><b>Location:</b> Kerala, India</p>
                <ul>
                    <li><b>Backwaters and Houseboats:</b> Known as the "Venice of the East" for its picturesque canals and traditional houseboat cruises.</li>
                    <li><b>Beaches:</b> Alleppey Beach offers beautiful sunsets and a historic pier.</li>
                    <li><b>Cultural Events:</b> Famous for the annual Nehru Trophy Boat Race.</li>
                    <li><b>Cuisine:</b> Renowned for fresh seafood and traditional Kerala dishes.</li>
                    <li><b>Best Time to Visit:</b> November to February.</li>
                </ul>
            `
        },
        {
            title: 'Kochi',
            description: 'Description for Kochi',
            details: `
                <h2>Kochi (Cochin)</h2>
                <p><b>Location:</b> Kerala, India</p>
                <ul>
                    <li><b>Historical Significance:</b> A vibrant port city with a mix of colonial and local culture.</li>
                    <li><b>Fort Kochi:</b> Known for its Chinese fishing nets, historic churches, and colonial architecture.</li>
                    <li><b>Jew Town:</b> Famous for the Paradesi Synagogue and antique shops.</li>
                    <li><b>Marine Drive:</b> A picturesque promenade overlooking the backwaters.</li>
                    <li><b>Best Time to Visit:</b> October to March.</li>
                </ul>
            `
        },
        {
            title: 'Wayanad',
            description: 'Description for Wayanad',
            details: `
                <h2>Wayanad</h2>
                <p><b>Location:</b> Kerala, India</p>
                <ul>
                    <li><b>Natural Beauty:</b> A lush green district known for its hills, forests, and wildlife.</li>
                    <li><b>Edakkal Caves:</b> Famous for ancient petroglyphs.</li>
                    <li><b>Wayanad Wildlife Sanctuary:</b> Home to elephants, tigers, and other wildlife.</li>
                    <li><b>Tea and Coffee Plantations:</b> Explore the scenic plantations and enjoy fresh brews.</li>
                    <li><b>Best Time to Visit:</b> October to May.</li>
                </ul>
            `
        },
        {
            title: 'Idukki',
            description: 'Description for Idukki',
            details: `
                <h2>Idukki</h2>
                <p><b>Location:</b> Kerala, India</p>
                <ul>
                    <li><b>Hill Station:</b> Known for its cool climate and scenic beauty.</li>
                    <li><b>Idukki Arch Dam:</b> One of the highest arch dams in Asia.</li>
                    <li><b>Periyar Wildlife Sanctuary:</b> Famous for its elephants and boat rides on the Periyar Lake.</li>
                    <li><b>Tea and Spice Plantations:</b> Visit plantations and learn about tea and spice cultivation.</li>
                    <li><b>Best Time to Visit:</b> October to May.</li>
                </ul>
            `
        },
        {
            title: 'Thrissur',
            description: 'Description for Thrissur',
            details: `
                <h2>Thrissur</h2>
                <p><b>Location:</b> Kerala, India</p>
                <ul>
                    <li><b>Cultural Capital:</b> Known for its cultural, spiritual, and religious significance.</li>
                    <li><b>Thrissur Pooram:</b> One of the most famous temple festivals in Kerala.</li>
                    <li><b>Vadakkumnathan Temple:</b> An ancient Shiva temple known for its architecture and murals.</li>
                    <li><b>Athirappilly Waterfalls:</b> Often referred to as the "Niagara of India".</li>
                    <li><b>Best Time to Visit:</b> October to March.</li>
                </ul>
            `
        },
        {
            title: 'Palakkad',
            description: 'Description for Palakkad',
            details: `
                <h2>Palakkad</h2>
                <p><b>Location:</b> Kerala, India</p>
                <ul>
                    <li><b>Gateway to Kerala:</b> Known for its historical and natural attractions.</li>
                    <li><b>Palakkad Fort:</b> A well-preserved fort built by Hyder Ali in 1766.</li>
                    <li><b>Silent Valley National Park:</b> A pristine stretch of tropical rainforest.</li>
                    <li><b>Malampuzha Dam and Gardens:</b> A popular picnic spot with a beautiful garden and ropeway.</li>
                    <li><b>Best Time to Visit:</b> September to March.</li>
                </ul>
            `
        },
        {
            title: 'Kozhikode',
            description: 'Description for Kozhikode',
            details: `
                <h2>Kozhikode (Calicut)</h2>
                <p><b>Location:</b> Kerala, India</p>
                <ul>
                    <li><b>Historical Significance:</b> Known as the City of Spices for its role in the spice trade.</li>
                    <li><b>Kozhikode Beach:</b> A popular spot with a lighthouse and an aquarium.</li>
                    <li><b>Mananchira Square:</b> A historic place surrounded by important buildings.</li>
                    <li><b>Thali Temple:</b> An ancient temple known for its intricate woodwork.</li>
                    <li><b>Best Time to Visit:</b> October to March.</li>
                </ul>
            `
        },
        {
            title: 'Kollam',
            description: 'Description for Kollam',
            details: `
                <h2>Kollam</h2>
                <p><b>Location:</b> Kerala, India</p>
                <ul>
                    <li><b>Backwaters:</b> Known for its beautiful Ashtamudi Lake and houseboat cruises.</li>
                    <li><b>Thangassery Lighthouse:</b> Offers panoramic views of the Arabian Sea.</li>
                    <li><b>Palaruvi Waterfalls:</b> One of the most picturesque waterfalls in Kerala.</li>
                    <li><b>Beaches:</b> Kollam Beach is a popular spot for tourists and locals alike.</li>
                    <li><b>Best Time to Visit:</b> October to March.</li>
                </ul>
            `
        },
        {
            title: 'Trivandrum',
            description: 'Description for Trivandrum',
            details: `
                <h2>Trivandrum (Thiruvananthapuram)</h2>
                <p><b>Location:</b> Kerala, India</p>
                <ul>
                    <li><b>Capital City:</b> The administrative capital of Kerala.</li>
                    <li><b>Padmanabhaswamy Temple:</b> An iconic temple known for its wealth and architecture.</li>
                    <li><b>Kovalam Beach:</b> A world-famous beach known for its crescent-shaped coastline.</li>
                    <li><b>Napier Museum:</b> A 19th-century museum with a vast collection of artifacts.</li>
                    <li><b>Best Time to Visit:</b> October to March.</li>
                </ul>
            `
        }
    ];

    return (
        <>
            <div style={{ width: '100%', height: "80vh" }} className="container-fluid rounded" id='home1'>
                <video autoPlay muted loop id="background-video">
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <Row className='align-items-center p-5'>
                    <Col sm={12} md={6}>
                        <h3 id='tag' style={{fontSize:'40px'}}>Welcome to Kerala: Where Nature Meets Culture in Perfect Harmony!</h3>
                        <br />
                        <p className='align-items-justify' id='para' style={{ textAlign: 'justify', color: 'white' ,fontSize:'21px'}}>Nestled in the lush landscapes of southern India, Kerala beckons with its enchanting blend of scenic beauty, rich cultural heritage, and warm hospitality. As you step into this verdant paradise, prepare to be mesmerized by the emerald backwaters, swaying palm trees, and pristine beaches that stretch along the Arabian Sea.</p>
                        <br />
                    </Col>
                </Row>
            </div>

            <div className="all-places mt-5">
                <h1 className='text-center' style={{ fontFamily: 'Dancing Script',fontWeight:'bolder' ,color:'green',fontSize:'50px'}}>Explore Your Places</h1>
                <Row className="align-items-center p-5">
                    {cardImages.map((image, index) => (
                        <Col key={index} sm={12} md={6} lg={4}>
                            <Card className="card-style" onClick={() => handleShow(index)}>
                                <Card.Img variant="top" src={image} height={300} width={300} />
                                <Card.Body>
                                    <Card.Title>{cardTitles[index]}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                {currentModal !== null && (
                    <Modal size="lg" show={currentModal !== null} onHide={handleClose} className="modal-style">
                        <Modal.Header closeButton>
                            <Modal.Title>{modalContents[currentModal].title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <img src={cardImages[currentModal]} alt="" style={{ width: '100%', height: 'auto' }} />
                            <p>{modalContents[currentModal].description}</p>
                            <div dangerouslySetInnerHTML={{ __html: modalContents[currentModal].details }} />
                            <a href={mapLinks[currentModal]} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">View on Map</a>
                            <button onClick={bookNow} className="btn btn-primary py-md-3 px-md-5 mt-2" id="button-default">Book Now</button>
                        </Modal.Body>
                    </Modal>
                )}
                <br /><br />
            </div>
            <MDBCarousel showControls interval={3000}>
                <MDBCarouselItem itemId={1} interval={1000}>
                    <Row>
                        <Col style={{ marginLeft: "10px" }}>
                            <div className='card'>
                                <div className='image-box'>
                                    <img src="https://www.bestbus.in/assets/images/news-cms/Kerala_Tourism.jpg" alt="" height={200} />
                                </div>
                                <div className='content'></div>
                            </div>
                        </Col>
                        <Col style={{ marginLeft: "10px" }}>
                            <div className='card'>
                                <div className='image-box'>
                                    <img src="https://static.wixstatic.com/media/c8e24e_8734146da4f241b591e5f0ede582f9e0~mv2.jpg/v1/fill/w_640,h_360,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Kerala-tourism.jpg" alt="" height={200} />
                                </div>
                                <div className='content'></div>
                            </div>
                        </Col>
                        <Col style={{ marginLeft: "10px" }}>
                            <div className='card'>
                                <div className='image-box'>
                                    <img src="https://www.bestbus.in/assets/images/news-cms/Kerala_Tourism.jpg" alt="" height={200} />
                                </div>
                                <div className='content'></div>
                            </div>
                        </Col>
                    </Row>
                </MDBCarouselItem>
                <MDBCarouselItem itemId={2} interval={1000}>
                    <Row>
                        <Col style={{ marginLeft: "10px" }}>
                            <div className='card'>
                                <div className='image-box'>
                                    <img src="https://www.bestbus.in/assets/images/news-cms/Kerala_Tourism.jpg" alt="" height={200} />
                                </div>
                                <div className='content'></div>
                            </div>
                        </Col>
                        <Col style={{ marginLeft: "10px" }}>
                            <div className='card'>
                                <div className='image-box'>
                                    <img src="https://static.wixstatic.com/media/c8e24e_8734146da4f241b591e5f0ede582f9e0~mv2.jpg/v1/fill/w_640,h_360,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Kerala-tourism.jpg" alt="" height={200} />
                                </div>
                                <div className='content'></div>
                            </div>
                        </Col>
                        <Col style={{ marginLeft: "10px" }}>
                            <div className='card'>
                                <div className='image-box'>
                                    <img src="https://www.bestbus.in/assets/images/news-cms/Kerala_Tourism.jpg" alt="" height={200} />
                                </div>
                                <div className='content'></div>
                            </div>
                        </Col>
                    </Row>
                </MDBCarouselItem>
            </MDBCarousel>
        </>
    );
}

export default Home;
