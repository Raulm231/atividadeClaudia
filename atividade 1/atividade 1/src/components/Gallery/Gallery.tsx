import './Gallery.css';

function Gallery({ images }) {
  return (
    <div className="gallery-grid">
      {images.map((image, index) => (
        <img 
          key={index}
          src={image}
          alt={`Gallery item ${index + 1}`}
          className="gallery-item"
        />
      ))}
    </div>
  );
}

export default Gallery;