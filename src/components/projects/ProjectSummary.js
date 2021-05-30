import React from 'react'

export default function ProjectSummary({project}) {
    return (
        <div className="card z-depth-1 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>Posted by the net Ninja</p>
                <p className="grey-text">3rd Sept, 2am</p>
            </div>
        </div>
    )
}
