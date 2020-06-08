import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Badge } from 'react-bootstrap'

export default function Detail() {
    let [job, setJob] = useState(null)
    const { id } = useParams()

    const getDetailData = async() => {
        let url = `http://localhost:3001/jobs/${id}`
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
        <Container>
            <h1>{job.title}</h1>
            <div>
                {job.tags.map(tag => (
                    <Badge variant="secondary" className="badge">
                        {tag}
                    </Badge>
                ))}
            </div>
        </Container>
    )
}
