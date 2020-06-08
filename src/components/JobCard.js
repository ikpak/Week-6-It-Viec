import React from 'react'
import { Row, Col, Badge} from 'react-bootstrap'
import Moment from 'react-moment'
import { useHistory } from 'react-router-dom'

export default function JobCard({job}) {
    let history = useHistory()

    const jobSelect = () => {
        history.push(`/jobs/${job.id}`)
    }

    return (
        <Row className="jobRow">
            <Col className="imgCol">
                <div>
                    <img src={job.img} />
                </div>
            </Col>
            <Col md={8}>
                <div className="jobDesc">
                    <h2 onClick={() => jobSelect()}>{job.title}</h2>
                    <div className="salary">${job.salary}</div>
                    <ul>
                        {job.benefits.map(benefit => (
                            <li>{benefit}</li>
                        ))}
                    </ul>
                    <div>
                        {job.tags.map(tag => (
                            <Badge variant="secondary" className="badge">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </div>
            </Col>
            <Col className="addCol">
                <div>
                    {job.isHotjob ? (
                        <Badge variant="secondary" className="hotBadge">Hot Job</Badge>
                    ) : (
                        <div></div>
                    )}
                    <div className="jobAdd">
                        <div>{job.city}</div>
                        <div>District {job.district}</div>
                    </div>
                    <div className="jobPosted"><Moment fromNow>{job.time}</Moment></div>
                </div>
            </Col>
        </Row>
    )
}
