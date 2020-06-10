import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Badge, Row, Col, Button } from 'react-bootstrap'
import Moment from 'react-moment'

export default function Detail() {
    let [job, setJob] = useState(null)
    const { id } = useParams()

    const getDetailData = async() => {
        let url = `${process.env.REACT_APP_BACKEND_SERVER_URL}/jobs/${id}`
        let data = await fetch(url)
        let result = await data.json()

        setJob(result)
    }

    useEffect(() => {
        getDetailData()
    }, [])

    if(job === null) {
        return <span>Loading...</span>
    }

    return (
        <Container className="detailContainer">
            <Row className="detailRow">
                <Col md={4}>
                    <img src={job.img} />
                </Col>
                <Col md={8}>
                    <h1 className="detailTitle">{job.title}</h1>
                    <div>
                        {job.tags.map(tag => (
                            <Badge variant="secondary" className="detailBadge">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                    <div className="detailInfo">
                        <div><i class="fas fa-dollar-sign"></i>{job.salary}</div>
                        <div><i class="fas fa-map-marker-alt"></i>{job.city}, District {job.district}</div>
                        <div><i class="far fa-clock"></i><Moment fromNow>{job.time}</Moment></div>
                    </div>
                    <div className="detailDesc">
                        <h6>Job Description:</h6>
                        <p>{job.description}</p>
                    </div>
                    <div className="detailBen">
                        <h6>Benefits:</h6>
                        <ul>
                            {job.benefits.map(benefit => (
                                <li>{benefit}</li>
                            ))}
                        </ul>
                    </div>
                    <Button variant="primary" className="detailBtn">Apply Now</Button>
                </Col>
            </Row>
        </Container>
    )
}
