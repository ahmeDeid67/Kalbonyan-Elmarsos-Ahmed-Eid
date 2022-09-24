import React from "react";
import github from "../../images/github.svg"
import demo from '../../images/demo.svg'

function ProjectCard(prop) {
    let tags = prop.tags.map(tag => 
        <li 
            className='px-2 py-1 text-sm border bg-gray-300 bg-opacity-60 border-graphite border-opacity-20 rounded-full cursor-default 
            transition transform duration-400 ease-in-out hover:scale-110'>
            {tag}
        </li>
    )
    return (
        <div className='relative p-4 font-body flex-col space-y-4 justify-center h-full w-full'>
            <p className='tracking-wider text-3xl'>{prop.name}</p>
            <ul className='flex space-x-2 m-auto justify-center'>{tags}</ul>
            <p className='md:text-lg w-full md:w-11/12 2xl:w-3/4 m-auto leading-loose md:leading-loose'>{prop.description}</p>
            <div className='absolute top-2 right-1 flex space-x-2'>
                <a title='Source Code' href={prop.github} target='_blank' rel="noopener noreferrer">
                    <img className='h-6 w-6 hover:scale-125 active:scale-95 transition duration-150' alt='Github link' src={github} />
                </a>
                <a title='Live Demo' href={prop.liveDemo} target='_blank' rel="noopener noreferrer">
                    <img className='h-6 w-6 hover:scale-125 active:scale-95 transition duration-150' alt='Live Demo link' src={demo} />
                </a>
            </div>
        </div>
    )
}

export default ProjectCard