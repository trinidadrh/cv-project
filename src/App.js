import React, { Component } from 'react';
import uniqid from 'uniqid';
import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Skillset from './components/Skillset';
import Objective from './components/Objective';
import './style.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      address: '',
      phone: '',
      email: '',
      headerArr: [],

      institution: '',
      degree: '',
      major: '',
      year: '',
      educArr: [],

      position: '',
      employer: '',
      location: '',
      years: '',
      duties: '',
      experArr: [],

      skill: {
        text: '',
        id: uniqid()
      },
      skills: [],

      objective: '',
      objectArr: []
    }
  }  
  
  handleChangeName = (e) => {
    this.setState({ name: e.target.value })
  }

  handleChangeAddress = (e) => {
    this.setState({ address: e.target.value })
  }

  handleChangePhone = (e) => {
    this.setState({ phone: e.target.value })
  }

  handleChangeEmail = (e) => {
    this.setState({ email: e.target.value })
  }
  
  handleChangeInstitution = (e) => {
    this.setState({ institution: e.target.value })
  }

  handleChangeDegree = (e) => {
    this.setState({ degree: e.target.value })
  }

  handleChangeMajor = (e) => {
    this.setState({ major: e.target.value })
  }

  handleChangeYear = (e) => {
    this.setState({ year: e.target.value })
  }

  handleChangePosition = (e) => {
    this.setState({ position: e.target.value })
  }

  handleChangeEmployer = (e) => {
    this.setState({ employer: e.target.value })
  }

  handleChangeLocation = (e) => {
    this.setState({ location: e.target.value })
  }

  handleChangeYears = (e) => {
    this.setState({ years: e.target.value })
  }

  handleChangeDuties = (e) => {
    this.setState({ duties: e.target.value })
  }
  
  handleChangeSkills = (e) => {
    this.setState({
      skill: {
        text: e.target.value,
        id: this.state.skill.id,
      }
    });
  }

  handleChangeObj = (e) => {
    this.setState({ objective: e.target.value })
  }

  onSubmitHeader = (e) => {
    e.preventDefault();
    this.setState({
      headerArr: {
        name: this.state.name,
        address: this.state.address,
        phone: this.state.phone,
        email: this.state.email,
      },
        name: '',
        address: '',
        phone: '',
        email: '',
    });
  };

  onSubmitEducation = (e) => {
    e.preventDefault();
    this.setState({
      educArr: this.state.educArr.concat({
        institution: this.state.institution,
        degree: this.state.degree,
        major: this.state.major,
        year: this.state.year,
        id: uniqid()
      }),

      institution: '',
      degree: '',
      major: '',
      year: ''
    });
  };

  onSubmitExperience = (e) => {
    e.preventDefault();
    this.setState({
      experArr: this.state.experArr.concat({
        position: this.state.position,
        employer: this.state.employer,
        location: this.state.location,
        years: this.state.years,
        duties: this.state.duties,
        id: uniqid()
      }),

      position: '',
      employer: '',
      location: '',
      years: '',
      duties: ''
    });
  };

  onSubmitSkills = (e) => {
    e.preventDefault();
    this.setState({
      skills: this.state.skills.concat(this.state.skill),
      skill: { 
        text: '',
        id: uniqid()
      }
    });
  };

  onSubmitObjective = (e) => {
    e.preventDefault();
    this.setState({
      objectArr: {
        objective: this.state.objective
      },
        objective: ''
    });
  };
  
  render() {
    const { headerArr, name, address, phone, email } = this.state;
    const { educArr, institution, degree, major, year } = this.state;
    const { experArr, position, employer, location, years, duties } = this.state;
    const { skill, skills } = this.state;
    const { objectArr, objective } = this.state;

    return (
      <div id='container'>
        <div id='app-title'>
          <h1>Resu-maker</h1>
        </div>
        <div id='forms-section'>
          <div id='header-form'>
            <form onSubmit={this.onSubmitHeader}>

              <div>
                <label htmlFor='name'>Name:
                <input 
                onChange={this.handleChangeName}
                value={name}
                type='text' 
                id='name'
                />
                </label>
              </div>

              <div>
                <label htmlFor='address'>Address:
                <input 
                onChange={this.handleChangeAddress}
                value={address}
                type='text' 
                id='address'
                />
                </label>
              </div>

              <div>
                <label htmlFor='phone'>Phone:
                <input 
                onChange={this.handleChangePhone}
                value={phone}
                type='text' 
                id='phone'
                />
                </label>
              </div>

              <div>
                <label htmlFor='email'>Email:
                <input 
                onChange={this.handleChangeEmail}
                value={email}
                type='text' 
                id='email'
                />
                </label>
              </div>

              <button type='submit'>Add/Edit Header</button>
            </form>
          </div>

          <div id='education-form'>
            <form onSubmit={this.onSubmitEducation}>

              <div>
                <label htmlFor='institution'>Institution:
                <input 
                onChange={this.handleChangeInstitution}
                value={institution}
                type='text' 
                id='institution'
                />
                </label>
              </div>

              <div>
                <label htmlFor='degree'>Degree:
                <input 
                onChange={this.handleChangeDegree}
                value={degree}
                type='text' 
                id='degree'
                />
                </label>
              </div>

              <div>
                <label htmlFor='major'>Major:
                <input 
                onChange={this.handleChangeMajor}
                value={major}
                type='text' 
                id='major'
                />
                </label>
              </div>

              <div>
                <label htmlFor='year'>Graduation Year:
                <input 
                onChange={this.handleChangeYear}
                value={year}
                type='text' 
                id='year'
                />
                </label>
              </div>

              <button type='submit'>Add Education</button>
            </form>
          </div>  

          <div id='experience-form'>
            <form onSubmit={this.onSubmitExperience}>

              <div>
                <label htmlFor='position'>Position:
                <input 
                onChange={this.handleChangePosition}
                value={position}
                type='text' 
                id='position'
                />
                </label>
              </div>

              <div>
                <label htmlFor='employer'>Employer:
                <input 
                onChange={this.handleChangeEmployer}
                value={employer}
                type='text' 
                id='employer'
                />
                </label>
              </div>

              <div>
                <label htmlFor='location'>Location:
                <input 
                onChange={this.handleChangeLocation}
                value={location}
                type='text' 
                id='location'
                />
                </label>
              </div>

              <div>
                <label htmlFor='years'>Years Employed:
                <input 
                onChange={this.handleChangeYears}
                value={years}
                type='text' 
                id='years'
                />
                </label>
              </div>

              <div>
                <label htmlFor='duties'>Duties:
                <input 
                onChange={this.handleChangeDuties}
                value={duties}
                type='text' 
                id='duties'
                />
                </label>
              </div>

              <button type='submit'>Add Experience</button>
            </form>
          </div>  

          <div id='skills-form'>
            <form onSubmit={this.onSubmitSkills}>
              <div>
                <label htmlFor='skillInput'>Skill:</label>
                <input 
                onChange ={this.handleChangeSkills}
                value={skill.text}
                type='text' 
                id='skillInput'
                />
              </div>
              <button type='submit'>Add Skill</button>
            </form>
          </div>
        </div>

        <div id='objective-form'>
          <form onSubmit={this.onSubmitObjective}>
            <div>
              <label htmlFor='objInput'>Objective:</label>
              <textarea 
              onChange={this.handleChangeObj}
              value={objective}
              // type='textarea'
              id='objInput'
              rows={3}
              cols={75}
              />
            </div>
            <button type='submit'>Add/Edit Objective</button>
          </form>
        </div>

        <div id='contents'>
          <div id='header-content'>
            <Header name={headerArr.name} address={headerArr.address} phone={headerArr.phone} email={headerArr.email}/>
          </div>
          <div>
            <h3>Objective</h3>
            <Objective obj={objectArr.objective}/>
          </div>
          <div>
            <h3>Education</h3>
            <Education arr={educArr}/>
          </div>  
          <div>
            <h3>Experience</h3>
            <Experience arr={experArr}/>
          </div>
          <div>
            <h3>Skills</h3>
            <Skillset skills={skills} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;