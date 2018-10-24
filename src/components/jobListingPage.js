import React from "react"

import JobListingTable from "./jobListingTable/jobListingTable"
import Header from "./header/header"
import Footer from "./footer/footer"

const allJobOpenings = "http://hellotechnigo.comprendwebsites.net/api/jobs"
const allDepartments = "http://hellotechnigo.comprendwebsites.net/api/departments"

class JobListingPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      jobs: [],
      departments: [],
      filterDepartment: null,
      filterCity: null
    }

    this.filterDepartmentTech = this.filterDepartmentTech.bind(this)
    this.filterDepartmentCreative = this.filterDepartmentCreative.bind(this)
    this.filterCityStockholm = this.filterCityStockholm.bind(this)
    this.filterCityLondon = this.filterCityLondon.bind(this)
    this.filterAllDepartment = this.filterAllDepartment.bind(this)
    this.filterAllCities = this.filterAllCities.bind(this)
  }

  componentDidMount() {
    fetch(allJobOpenings).then(response => response.json()).then(json => {
      this.setState({
        jobs: json
      })
    })
    fetch(allDepartments).then(response => response.json()).then(json => {
      this.setState({
        departments: json
      })
    })
  }

  getDepartmentName(deptId) {
    let deptName = ""
    this.state.departments
      .forEach(department => {
        if (department.id === deptId) {
          deptName = department.name
        }
      })
    return deptName
  }

  filterAllDepartment() {
    this.setState({ filterDepartment: null })
  }

  filterDepartmentTech() {
    this.setState({ filterDepartment: "3502" })
  }

  filterDepartmentCreative() {
    this.setState({ filterDepartment: "3503" })
  }

  filterAllCities() {
    this.setState({ filterCity: null })
  }

  filterCityStockholm() {
    this.setState({ filterCity: "Stockholm" })
  }

  filterCityLondon() {
    this.setState({ filterCity: "London" })
  }

  showAllJobs() {
    fetch(allJobOpenings).then(response => response.json()).then(json => {
      this.setState({
        jobs: json
      })
    })
  }

  render() {
    return (

      <div>
        <Header />
        <div className="pageContent">
          <div className="jobListingText">
            <h1>Job openings</h1>
            <p>
            We are Comprend. If you’re curious, creative and
            passionate about digital communication –
            get in touch to explore our world!
            </p>
          </div>
          <div className="filterButtonsContainer">
            <div className="filterButtonsContainerInner">
              <button onClick={this.filterAllDepartment} className="filterButtons">All Departments</button>
              <button onClick={this.filterDepartmentTech} className="filterButtons filterButtonsSpec">Tech</button>
              <button onClick={this.filterDepartmentCreative} className="filterButtons filterButtonsSpec">Creative</button>
            </div>
            <div className="filterButtonsContainerInner">
              <button onClick={this.filterAllCities} className="filterButtons">All Cities</button>
              <button onClick={this.filterCityStockholm} className="filterButtons filterButtonsSpec">Stockholm</button>
              <button onClick={this.filterCityLondon} className="filterButtons filterButtonsSpec">London</button>
            </div>
          </div>
          <div className="jobTable">
            <div className="jobHeadlines">
              <p className="jobHeadlineTitle">Title</p>
              <p className="jobHeadelineDepartment">Department</p>
              <p className="jobHeadlineCity">City</p>
            </div>
            <div className="jobListContainer">
              {this.state.jobs
                .filter(job => {
                  if (this.state.filterDepartment) {
                    return job.department === this.state.filterDepartment
                  } else {
                    return true
                  }
                })
                .filter(job => {
                  if (this.state.filterCity) {
                    return job.city === this.state.filterCity
                  } else {
                    return true
                  }
                })
                .map(jobs =>
                  <JobListingTable
                    title={jobs.title}
                    department={this.getDepartmentName(jobs.department)}
                    city={jobs.city}
                    id={jobs.id} />)}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

}

export default JobListingPage
