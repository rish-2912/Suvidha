import React from "react"
import { list } from "../../data/Data"

const RecentCard = () => {
  return (
    <>
      <div className='content grid3 mtop'>
        {list.map((val, index) => {
          const { cover, description, name,   } = val
          return (
            <div className='box shadow' key={index}>
              <div className='img'>
                <img src={cover} alt='' />
              </div>
              <div className='text'>
               
                <h4>{name}</h4>
                <p>
                   {description}
                </p>
              </div>
              <div className='button flex'>
                <div>
                  <button className='btn2'>Donate</button>
                </div>
              
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default RecentCard
