import React, { Component } from 'react'
import { Typography, Grid, Paper, Avatar } from '@material-ui/core'
import avatarSrc from '../assets/img/avatar.png'
import imgPet from '../assets/img/dog.jpg'
import PetBlock from '../Components/PetBlock'
import { connect } from 'react-redux';
import styled  from 'styled-components'
import { getPets } from '../actions'  

const StyledPaper = styled(Paper)`
  display: flex;
    overflow: auto;
    flex-grow: 1;
    padding-left: 35px;
    flex-direction: column;
    height: 180px;
    padding: 16px;
`

const StyledAvatarPaper = styled(Paper)`
    display: flex;
    overflow: auto;
    flex-grow: 1;
    padding-left: 35px;
    flex-direction: column;
    height: 180px;
    padding: 16px;
`

const StyledAvatar = styled(Avatar)`
    width: 140px !important;
    height: 140px !important;
`

class Home extends Component {  
    componentDidMount(){
        this.props.getPets()
    }

    render(){
       
        return (
            <>  
                <Grid item xs={12} md={2} lg={2}>
                    <StyledPaper>
                        <StyledAvatar alt="Cindy Baker" src={avatarSrc} />                   
                    </StyledPaper>
                </Grid>
                <Grid item xs={12} md={10} lg={10}>
                    <StyledAvatarPaper>                  
                            <Typography variant='h4'>{this.props.owner.firstName} {this.props.owner.lastName}</Typography>
                            <Typography variant='subtitle1'>E-mail: {this.props.owner.email}</Typography>
                            <Typography variant='subtitle1'>Ilość zwierzaków: {this.props.pets.length}</Typography>                   
                    </StyledAvatarPaper>
                </Grid>
                
                {this.props.pets.map(pet => <PetBlock key={pet.id} xs={12} md={12} lg={12} imgPet={imgPet} dog={pet} />)}
                
            </>
        )
    }
}

const mapStateToProps = ({ pets, owner }) => ({ pets, owner })


const mapDispatchToProps  = dispatch => ({
    getPets: () => dispatch(getPets())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);