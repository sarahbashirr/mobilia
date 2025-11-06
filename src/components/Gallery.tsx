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

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Modern Bedroom Design',
      description: 'A cozy bedroom featuring custom paint and elegant finishes that create a warm, inviting atmosphere.',
      category: 'Custom Paint',
      image: project1
    },
    {
      id: 2,
      title: 'Entrance Hall Transformation',
      description: 'A beautifully restored home entrance that blends natural tones and textures for a welcoming first impression.',
      category: 'Restoration',
      image: project2
    },
    {
      id: 3,
      title: 'Office Refinishing Project',
      description: 'A refined office space with a smooth, professional finish that enhances productivity and comfort.',
      category: 'Refinishing',
      image: project3
    },
    {
      id: 4,
      title: 'Executive Office Design',
      description: 'A sleek modern office enhanced with specialty finishes and premium materials for a high-end look.',
      category: 'Specialty Finish',
      image: project4
    },
    {
      id: 5,
      title: 'Luxury Corridor & Salon',
      description: 'A spacious salon and corridor area featuring elegant detailing and a custom paint concept.',
      category: 'Custom Paint',
      image: project5
    },
    {
      id: 6,
      title: 'Living Room Makeover',
      description: 'A bright and inviting living room redesigned with smooth color transitions and refined textures.',
      category: 'Room Project',
      image: project6
    },
    {
      id: 7,
      title: 'Entrance Door Project',
      description: 'A detailed entrance renovation that highlights craftsmanship and balanced color coordination.',
      category: 'Room Project',
      image: project7
    },
    {
      id: 8,
      title: 'Contemporary Salon Area',
      description: 'A stylish salon space that combines comfort, elegance, and modern interior finishing touches.',
      category: 'Room Project',
      image: project8
    },
    {
      id: 9,
      title: 'Bathroom Cabinet Finish',
      description: 'A clean, functional bathroom cabinet design showcasing precision refinishing and modern aesthetic appeal.',
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
