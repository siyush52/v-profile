import React from 'react';
import './Testimonials.css';

const testimonials = [
  "https://cdn.pixabay.com/photo/2024/01/15/11/36/batman-8510027_640.png",
  "https://cdn.pixabay.com/photo/2023/08/01/12/31/ai-generated-8162871_640.jpg",
  "https://c4.wallpaperflare.com/wallpaper/159/478/334/marvel-comics-spider-man-vs-venom-artwork-wallpaper-preview.jpg",
"https://c4.wallpaperflare.com/wallpaper/551/425/85/superman-dc-comics-movies-henry-cavill-wallpaper-preview.jpg"
];

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h1>Products</h1>
      <div className="grid-container">
        {testimonials.map((url, index) => (
          <div key={index} className="grid-item">
            <img src={url} alt={`Demon Slayer Character ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
