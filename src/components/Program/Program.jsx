import React from 'react'
import Title from '../Title'
import program1 from '../../assets/program-1.png'
import program2 from '../../assets/program-2.png'
import program3 from '../../assets/program-3.png'
import programIcon1 from '../../assets/program-icon-1.png'
import programIcon2 from '../../assets/program-icon-2.png'
import programIcon3 from '../../assets/program-icon-3.png'
import ProgramImage from './ProgramImage'

const Program = () => {
  return (
    <div className="program relative flex flex-col">
        <Title heading={"Our Program"} subheading={"What we Offer"}/>
        <div className="program-images flex justify-center items-center gap-[2vw] mt-[11vh] sm:flex-col sm:gap-[11vw] sm:mt-[6vh]">
        {[{address:program1,icon:programIcon1,text:"Graduation Degree"},{address:program2,icon:programIcon2,text:"Masters Degree"},{address:program3,icon:programIcon3,text:"Post Graduation"}].map((el,idx)=>{
        return <ProgramImage el={el} idx={idx} key={idx}/>
      })}
      </div>
    </div>
  )
}

export default Program