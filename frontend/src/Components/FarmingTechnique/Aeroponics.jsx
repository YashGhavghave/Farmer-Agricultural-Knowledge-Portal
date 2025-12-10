import React from 'react'
import Navbar from '../Navbar'

function Aeroponics() {
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
    <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
      <Navbar />
      <h1>Aeroponics Videos</h1>
      <p>Explore these videos to understand aeroponics principles, DIY setups, and commercial applications.</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
        {videos.map((video, index) => (
          <div key={index} style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '20px', background: '#f9f9f9' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#0277bd' }}>{video.title}</h3>
            <iframe
              width="100%"
              height="250"
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: '8px' }}
            />
            <p style={{ margin: '10px 0 0 0', fontSize: '14px', color: '#555' }}>{video.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Aeroponics;
