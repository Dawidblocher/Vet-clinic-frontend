import React, {Component} from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { getVisits } from '../actions'
import { connect } from 'react-redux'

class MyVisits extends Component {
  componentDidMount(){
    getVisits()
  }  

  selectedDays = () => {
    const visits = this.props.visits
    const selectedDays = []
    if(visits){
    
      visits.forEach(visit => {
        const year =visit.date.substring(0, 4)
        const mounth =visit.date.substring(5, 7)
        const day =visit.date.substring(8, 10)
        
        selectedDays.push(new Date(year, Number(mounth) -1, day))
      })
    }
    
    return selectedDays
  }
  

  render(){
    return (
      <>  
        <DayPicker
          selectedDays={this.selectedDays()}
          numberOfMonths={12}
          pagedNavigation
      
      fixedWeeks
        />
      </>
  )
  }
    
}

const mapDispatchToProps = dispatch => ({
  getVisits: () => dispatch(getVisits())
})

const mapStateToProps = ({ visits }) => ({ visits })


export default connect(mapStateToProps, mapDispatchToProps)(MyVisits)