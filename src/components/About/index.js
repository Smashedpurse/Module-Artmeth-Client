import React from 'react'

const About = () => {
  return (
    <div className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center '>
                <h2 className='text-5xl fon'>All the art for all the world</h2>
                <p>We are creating the most importart community of artists providing the best tools to sell your art and to show the magic of your creations</p>
            </div>
            
            <div className='grid md:grid-cols-2 gap-1 px-2 text-center'>
                <div className='border py-8 rounded-xl bg-zinc-300 shadow-lg mt-5'>
                    <p className='text-3xl font-bold'>100% </p>
                    <p>Talent Love and IA</p>
                </div>
                <div className='border py-8 rounded-xl bg-zinc-300 shadow-lg mt-5'>
                    <p className='text-3xl font-bold'>365</p>
                    <p>Upload your content wherever you want</p>
                </div>
            </div>
        </div>    
    </div>
  )
}

export default About