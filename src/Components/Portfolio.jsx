
import React from 'react'
import Cards from '../Components/Cards'
import portfolio from '../assets/portfolio.jpg'
import { MdDirectionsRun } from 'react-icons/md'
import SkillCard from '../Components/SkillCard'

const portfolioData = [
  {
    title: 'Chaintech Product',
    image: portfolio,
    tags: ['UX Design', 'Angular', 'JavaScript']
  },
  {
    title: 'Chaintech Product',
    image: portfolio,
    tags: ['UX Design', 'Angular', 'JavaScript']
  },
  {
    title: 'Chaintech Product',
    image: portfolio,
    tags: ['UX Design', 'Angular', 'JavaScript']
  },
  {
    title: 'Chaintech Product',
    image: portfolio,
    tags: ['UX Design', 'Angular', 'JavaScript']
  }
]


const portfolioDataLarge = [
  {
    title: 'Chaintech Product',
    image: portfolio,
    tags: ['UX Design', 'Angular', 'JavaScript']
  },
  {
    title: 'Chaintech Product',
    image: portfolio,
    tags: ['UX Design', 'Angular', 'JavaScript']
  },
  {
    title: 'Chaintech Product',
    image: portfolio,
    tags: ['UX Design', 'Angular', 'JavaScript']
  },
  {
    title: 'Chaintech Product',
    image: portfolio,
    tags: ['UX Design', 'Angular', 'JavaScript']
  },
  {
    title: 'Chaintech Product',
    image: portfolio,
    tags: ['UX Design', 'Angular', 'JavaScript']
  },
  {
    title: 'Chaintech Product',
    image: portfolio,
    tags: ['UX Design', 'Angular', 'JavaScript']
  },
  {
    title: 'Chaintech Product',
    image: portfolio,
    tags: ['UX Design', 'Angular', 'JavaScript']
  },
  {
    title: 'Chaintech Product',
    image: portfolio,
    tags: ['UX Design', 'Angular', 'JavaScript']
  }
]



const skillsData = [
  {
    percentage: 97,
    title: 'UX Design',
    description: "UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users."
  },
  {
    percentage: 97,
    title: 'UX Design',
    description: "UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users."
  },
  {
    percentage: 97,
    title: 'UX Design',
    description: "UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users."
  },
  {
    percentage: 97,
    title: 'UX Design',
    description: "UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users."
  }
]

const Portfolio = () => {
  return (
    <div className='mt-24 '>
      <section className="bg-black  p-4">
        <h2 className="text-white font-bold text-xl mb-6 md:text-[36px] md:pl-8 md:mb-9 xl:text-[52px] xl:pl-5 ">PORTFOLIO</h2>
        <div className="flex flex-col items-center gap-6 md:grid md:grid-cols-2 xl:hidden">
          {portfolioData.map((item, index) => (
            <Cards
              key={index}
              title={item.title}
              image={item.image}
              tags={item.tags}
            />
          ))}

        </div>
        <div className="hidden xl:grid xl:grid-cols-4 gap-10 ">
          {portfolioDataLarge.map((item, index) => (
            <Cards
              key={index}
              title={item.title}
              image={item.image}
              tags={item.tags}
            />
          ))}
        </div>
      </section>


      <section className='mt-5 md:mt-16 text-white font-poppins '>
        <h2 className=' font-bold text-[26px] mb-2 md:text-[36px] md:mb-4 xl:text-[52px]'>SKILLS</h2>
        <div className='flex flex-col gap-5 xl:grid xl:grid-cols-2'>


          {skillsData.map((skill, index) => {

            return (<SkillCard
              key={index}
              percentage={skill.percentage}
              title={skill.title}
              description={skill.description}

            />)

          })}
        </div>

      </section>
    </div>

  )
}

export default Portfolio
