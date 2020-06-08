import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Badge } from 'react-bootstrap'
import Moment from 'react-moment'
import { useHistory } from 'react-router-dom'
import JobCard from '../components/JobCard'

export default function Jobs() {
    let [jobList, setJobList] = useState(null)
    let history = useHistory()

    const getJobList = async() => {
        let url = 'http://localhost:3001/jobs'
        let data = await fetch(url)
        let result = await data.json()
        
        setJobList(result)
    }

    useEffect(() => {
        getJobList()
    }, [])

    return (
        <div>
            <div className="filter">
                <Container>
                    <Row>
                        <Col md={7} className="search">
                        <span className="searchIcon"><i class="fas fa-search"></i></span>
                        <input type="text" placeholder="Search"></input>
                        </Col>
                        <Col md={3} className="cityFilter">
                        <select>
                            <option>All Cities</option>
                            <option>Ho Chi Minh</option>
                            <option>Hanoi</option>
                            <option>Da Nang</option>
                            <option>Other</option>
                        </select>
                        </Col>
                        <Col md={2} className="searchBtn">
                        <button>Search</button>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Container>
                {jobList && jobList.map(item => <JobCard job={item} key={item.id} /> )}
            </Container>
        </div>
    )
}
