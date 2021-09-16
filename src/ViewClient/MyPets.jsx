import React, { Component } from 'react'
import imgPet from '../assets/img/dog.jpg'
import PetBlock from '../Components/PetBlock'
import  styled  from 'styled-components'
import { Typography
} from '@material-ui/core';
import { connect } from 'react-redux'
import { getPets } from '../actions';

const StyledTypography = styled(Typography)`
  margin-bottom: 35px;
  text-align: center;
`

class MyPets extends Component 
{
    componentDidMount(){
        this.props.getPets()
    }
    
    render(){    
    return (
        <>  <StyledTypography variant='h4'>Twoje zwierzaki</StyledTypography>
             {this.props.pets.map(pet => <PetBlock key={pet.id} xs={12} md={12} lg={12} imgPet={imgPet} dog={pet} />)}
        </>
)
    }
}

const mapStateToProps = ({ pets }) => ({ pets })

const mapDispatchToProps = dispatch =>({
    getPets: () => dispatch(getPets())
})

export default connect(mapStateToProps, mapDispatchToProps)(MyPets)