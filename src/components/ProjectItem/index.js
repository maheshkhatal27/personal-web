import './index.css'

const ProjectItem = props => {
  const {projectDetails} = props
  const {id,title,description,projectUrl} = projectDetails
  return (
    <>
      <li className="project-item-container" key={id}>
        <div className="project-item-details-container">
          <h1 className="project-item-title">{title}</h1>
          <p className="project-item-description">{description}</p>
          <iframe  id="projecturls" type="text/html" 
          src={projectUrl} className="custom-frame" frameBorder={"0"}/>
          <a className='link-items' href={projectUrl} target="_blank" rel="noreferrer">Click To View The Project</a>
        </div>
      </li>
    </>
  )
}

export default ProjectItem
