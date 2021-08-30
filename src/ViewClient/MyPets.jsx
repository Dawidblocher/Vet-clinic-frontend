import React from 'react'
import imgPet from '../assets/img/dog.jpg'
import PetBlock from '../Components/PetBlock'

const dog = {
    name: "Spencer",
    specs:  'Pies',
    breed: "Bernardyn",
    birthdate: '2017-05-04',
    owner: 'Adam Nowak'
}

const MyPets = () => {
    
    return (
        <>  
            <PetBlock xs={12} md={12} lg={12} imgPet={imgPet} dog={dog}/>
            <PetBlock xs={12} md={12} lg={12} imgPet={imgPet} dog={dog}/>
            <PetBlock xs={12} md={12} lg={12} imgPet={imgPet} dog={dog}/>
            <PetBlock xs={12} md={12} lg={12} imgPet={imgPet} dog={dog}/>
        </>
)
}

export default MyPets