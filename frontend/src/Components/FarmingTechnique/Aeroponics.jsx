import React from 'react'
import PageTemplate from '../ui/PageTemplate'
import hero from '../../assets/farming.svg'

function Aeroponics() {
  const intro = 'Aeroponics: soilless farming with mist-based nutrient delivery for faster growth and higher yields.'

  const videos = [
    {
      id: 'kT9r-CqZ7iY',
      title: 'Introduction to Aeroponics',
      desc: 'Explains the basics of aeroponics systems, including how plants grow in air/mist environments and benefits over soil farming.'
    },
    {
      id: '7Sb0UoghFoE',
      title: 'DIY Aeroponics at Home',
      desc: 'Step-by-step guide to building a small-scale aeroponics system perfect for home gardening and herbs.'
    },
    {
      id: 'xXJJzRNeB9c',
      title: 'Aeroponics Farming Advantages & Challenges',
      desc: 'Covers commercial aeroponics farming, highlighting water efficiency, faster growth, and some operational challenges.'
    }
  ];

  return (
    <>
      <PageTemplate title={'Aeroponics Farming'} >
        <div className="space-y-6">
          {videos.map((video, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-xl font-semibold text-green-800 mb-3">{video.title}</h3>
              <iframe
                width="100%"
                height="250"
                // height="280"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg mb-3"
              />
              <p className="text-gray-700">{video.desc}</p>
            </div>
          ))}
        </div>
      {/* </div> */}
    </PageTemplate >
  </>
  )
}

export default Aeroponics;
