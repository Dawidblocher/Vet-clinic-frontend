import React, { Component } from 'react'
import { Typography, Grid, Paper, Avatar } from '@material-ui/core'
import avatarSrc from '../assets/img/avatar.png'
import imgPet from '../assets/img/dog.jpg'
import PetBlock from '../Components/PetBlock'
import { connect } from 'react-redux';
import styled  from 'styled-components'
import { getPets } from '../actions'  
import DoctorList from '../Components/DoctorList'


const StyledPaper = styled(Paper)`
  display: flex;
    overflow: auto;
    flex-grow: 1;
    padding-left: 35px;
    flex-direction: column;
    height: 180px;
    padding: 16px;
    background: #FCF9F3;
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
    width: 90px !important;
    height: 90px !important;
`

const StyledGrid = styled(Grid)`
    & .MuiPaper-elevation1{
        box-shadow: none;
         background: #FCF9F3;
        padding: 30px;
        border-radius: 20px;
    }
`

const StyledTitlePaper = styled.h2`
    margin-top: 0;
    font-size: 16px;
    text-align: ${({center}) => center ? 'center' : 'left'};

`

const StyledAccountInfoWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
`
const StyledText = styled.p`
    margin: 0;
`
const StyledH4 = styled.h4`
    margin: 0;
`
const StyledInformationBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 20px;
`

const StyledPetAvatarWrapper = styled.div`
    display:flex;
`

const StyledAvatarPet = styled(Avatar)`
    width: 40px !important;
    height: 40px !important;
    margin: 0px 5px;
`
const StyledCounterWrapper = styled.div`
    text-align: center;
`

const StyledCounter = styled.span`
        font-size: 82px;
    margin: 0;
    line-height: 82px;
    font-weight: bold;
`

const StyledConterP = styled.p`
    margin: 0;

`
const StyledCounterFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 35px;
    padding-top: 20px;
    border-top: 1px solid #000;

    & span:first-child{
        display: block;
        width: 100px;
        text-align: left;
    }
    & span:last-child{
        display: block;
        width: 100px;
        text-align: right;
    }

`

class Home extends Component {  
    componentDidMount(){
        this.props.getPets()
    }

    render(){
       
        return (
            <>  
                <StyledGrid item xs={12} md={4} lg={4}>
                    <Paper>
                        <StyledTitlePaper >Konto</StyledTitlePaper>   
                        <StyledAccountInfoWrapper>
                            <StyledAvatar  alt="Remy Sharp" src={avatarSrc}/>
                            <StyledInformationBlock>
                                <StyledH4>Dawid Blocher</StyledH4>
                                <StyledText>blocher1997@gmail.com</StyledText>
                                

                            </StyledInformationBlock>
                        </StyledAccountInfoWrapper>
                            <StyledTitlePaper >Twoje zwierzaki:</StyledTitlePaper>
                            <StyledPetAvatarWrapper>
                                <StyledAvatarPet src={imgPet}/>
                                <StyledAvatarPet src={imgPet}/>
                                <StyledAvatarPet src={imgPet}/>
                            </StyledPetAvatarWrapper>
                          
                    </Paper>
                </StyledGrid>
                <StyledGrid item xs={12} md={4} lg={4}>
                    <Paper>                  
                       <StyledTitlePaper center> Najbliższa wizyta </StyledTitlePaper>   
                       <StyledCounterWrapper>
                            <StyledCounter>28</StyledCounter>
                            <StyledConterP>dni do wizyty</StyledConterP> 
                            <StyledCounterFooter>
                                <span>14.02.2021</span>   
                                <StyledAvatarPet src={imgPet}/>
                                <span>09:00</span>  
                            </StyledCounterFooter> 
                        </StyledCounterWrapper>              
                    </Paper>
                </StyledGrid>
                <StyledGrid item xs={12} md={4} lg={4}>
                    <Paper>                  
                        <StyledTitlePaper>Twoja recepta</StyledTitlePaper>      
                    </Paper>
                </StyledGrid>
                <StyledGrid item xs={12} md={12} lg={12}>
                <StyledTitlePaper>Polecani lekarze </StyledTitlePaper>  
                    <DoctorList ></DoctorList>
                </StyledGrid>                
            </>
        )
    }
}

const mapStateToProps = ({ pets, owner }) => ({ pets, owner })


const mapDispatchToProps  = dispatch => ({
    getPets: () => dispatch(getPets())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);