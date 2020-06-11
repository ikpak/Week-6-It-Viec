import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import JobCard from '../components/JobCard'
import { useHistory, useLocation } from 'react-router-dom'

const QUERYSTR_PREFIX = 'q'

function useQuery() {
    return new URLSearchParams(useLocation().search)
}

let originalList = []

export default function Jobs() {
    let query = useQuery()
    let history = useHistory()
    let [jobList, setJobList] = useState(null)
    let [keyword, setKeyword] = useState(query.get(QUERYSTR_PREFIX))

    const getJobList = async() => {
        let url = `${process.env.REACT_APP_BACKEND_SERVER_URL}/jobs`
        let data = await fetch(url)
        let result = await data.json()
        
        originalList = result

        setJobList(result)

        searchByKeyword()
    }

    const searchByKeyword = (e) => {
        if(e) {
            e.preventDefault()
            history.push(`/jobs/?${QUERYSTR_PREFIX}=${keyword}`)
        }

        let filteredList = originalList

        if(keyword) {
            filteredList = originalList.filter(item => item.title.toLowerCase().includes(keyword.toLowerCase()))
        }

        setJobList(filteredList)
    }

    useEffect(() => {
        getJobList()
    }, [])

    if(jobList === null) {
        return <span>Loading...</span>
    }

    return (
        <div>
            <div className="filter">
                <Container>
                    <Row>
                        <Col md={7} className="search">
                        <span className="searchIcon"><i class="fas fa-search"></i></span>
                        <input type="text" placeholder="Search" onChange={(e) => setKeyword(e.target.value)}></input>
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
                        <button onClick={(e) => searchByKeyword(e)}>Search</button>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Container className="jobListCont">
                {jobList && jobList.map(item => <JobCard job={item} key={item.id} /> )}
            </Container>
        </div>
    )
}
