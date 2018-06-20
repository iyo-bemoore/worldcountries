import React from 'react'



const CountryDetail = ({country}) => {



if(!country){
	return  <div>Loading </div>

}

const flag = country.flag
const name = country.name
const population = country.population
const region = country.region
const capital = country.capital

    return (
        <div>
         <div className="card">
       
           <img className="card-img-top animated fadeIn" src={flag} alt="Card image cap"/>
           
            <div className="card-body">
           <p className="card-text">Country Name : {name} <br/> Capital: {capital} <br/> Region : {region} <br/> Population : {population.toLocaleString()} </p>
         </div>
       </div>
       
    </div> 
  )
}

export default CountryDetail 