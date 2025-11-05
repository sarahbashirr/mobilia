import { useState } from 'react';
import './Gallery.css';
import project1 from '../images/project1.jpeg';
import project2 from '../images/project2.jpeg';
import project3 from '../images/project3.jpeg';
import project4 from '../images/project4.jpeg';
import project5 from '../images/project5.jpeg';
import project6 from '../images/project6.jpeg';
import project7 from '../images/project7.jpeg';
import project8 from '../images/project8.jpeg';
import project9 from '../images/project9.jpeg';

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
}

function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Description of your project',
      category: 'Custom Paint',
      image: project1
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description of your project',
      category: 'Restoration',
      image: project2
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Description of your project',
      category: 'Refinishing',
      image: project3
    },
    {
      id: 4,
      title: 'Project 4',
      description: 'Description of your project',
      category: 'Specialty Finish',
      image: project4
    },
    {
      id: 5,
      title: 'Project 5',
      description: 'Description of your project',
      category: 'Custom Paint',
      image: project5
    },
    {
      id: 6,
      title: 'Project 6',
      description: 'Description of your project',
      category: 'Room Project',
      image: project6
    },
    {
        id: 7,
        title: 'Project 7',
        description: 'Description of your project',
        category: 'Room Project',
        image: project7
      },
      {
        id: 8,
        title: 'Project 8',
        description: 'Description of your project',
        category: 'Room Project',
        image: project8
      },
      {
        id: 9,
        title: 'Project 9',
        description: 'Description of your project',
        category: 'Room Project',
        image: project9
      }
  ];

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2 className="section-title">View My Work</h2>
        <p className="section-subtitle">Browse our portfolio of completed projects</p>
        
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className="gallery-item"
              onClick={() => setSelectedImage(item)}
            >
              <img src={item.image} alt={item.title} />
              <div className="gallery-overlay">
                <div className="gallery-info">
                  <span className="gallery-category">{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedImage(null)}>×</button>
            <img src={selectedImage.image} alt={selectedImage.title} />
            <div className="modal-info">
              <span className="gallery-category">{selectedImage.category}</span>
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;