import { useState } from 'react';
import { Play, X } from 'lucide-react';

interface MediaItem {
  id: number;
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
  title: string;
  category: string;
}

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  const mediaItems: MediaItem[] = [
    {
      id: 1,
      type: 'image',
      url: 'src/firstimg.jpg',
      title: 'Urban Portrait',
      category: 'portrait',
    },
    {
      id: 2,
      type: 'image',
      url: 'src/2ndimg.jpg',
      title: 'Fashion Editorial',
      category: 'fashion',
    },
    {
      id: 3,
      type: 'video',
      url: 'https://videos.pexels.com/video-files/3045163/3045163-uhd_2560_1440_25fps.mp4',
      thumbnail: 'https://images.pexels.com/photos/3045163/pexels-photo-3045163.jpeg',
      title: 'Cinematic Reel',
      category: 'video',
    },
    {
      id: 4,
      type: 'image',
      url: 'src/3rdimg.jpg',
      title: 'Lifestyle',
      category: 'lifestyle',
    },
    {
      id: 5,
      type: 'image',
      url: 'src/4thimg.jpg',
      title: 'Street Photography',
      category: 'street',
    },
    {
      id: 6,
      type: 'video',
      url: 'https://videos.pexels.com/video-files/4621023/4621023-uhd_2560_1440_25fps.mp4',
      thumbnail: 'https://images.pexels.com/photos/4621023/pexels-photo-4621023.jpeg',
      title: 'Motion Graphics',
      category: 'video',
    },
    {
      id: 7,
      type: 'image',
      url: 'src/5th.jpg',
      title: 'Portrait Art',
      category: 'portrait',
    },
    {
      id: 8,
      type: 'image',
      url: 'src/6th.jpg',
      title: 'Fashion Week',
      category: 'fashion',
    },
    {
      id: 9,
      type: 'image',
      url: 'src/7th.jpg',
      title: 'Fashion Week',
      category: 'fashion',
    },
    {
      id: 10,
      type: 'image',
      url: 'src/8th.jpg',
      title: 'Fashion Week',
      category: 'fashion',
    },
    {
      id: 11,
      type: 'image',
      url: 'src/9th.jpg',
      title: 'Fashion Week',
      category: 'fashion',
    },
    {
      id: 12,
      type: 'image',
      url: 'src/10th.jpg',
      title: 'Fashion Week',
      category: 'fashion',
    },
    {
      id: 13,
      type: 'image',
      url: 'src/11th.jpg',
      title: 'Fashion Week',
      category: 'fashion',
    },
    {
      id: 14,
      type: 'image',
      url: 'src/12th.jpg',
      title: 'Fashion Week',
      category: 'fashion',
    },
    {
      id: 15,
      type: 'image',
      url: 'src/13th.jpg',
      title: 'Fashion Week',
      category: 'fashion',
    },
  ];

  const categories = ['all', 'portrait', 'fashion', 'lifestyle', 'street', 'video'];

  const filteredItems =
    selectedCategory === 'all'
      ? mediaItems
      : mediaItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-4 tracking-tight">
            MY <span className="text-red-600">WORK</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 uppercase tracking-wide ${
                selectedCategory === category
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/50'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedMedia(item)}
              className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <img
                src={item.type === 'video' ? item.thumbnail : item.url}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-red-400 text-sm uppercase tracking-wide">{item.category}</p>
                </div>
              </div>

              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-125 group-hover:bg-red-700">
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {selectedMedia && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-6 animate-fade-in"
          onClick={() => setSelectedMedia(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-all duration-300 hover:scale-110"
            onClick={() => setSelectedMedia(null)}
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div
            className="max-w-5xl max-h-[90vh] animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedMedia.type === 'image' ? (
              <img
                src={selectedMedia.url}
                alt={selectedMedia.title}
                className="max-w-full max-h-[85vh] rounded-lg shadow-2xl"
              />
            ) : (
              <video
                src={selectedMedia.url}
                controls
                autoPlay
                className="max-w-full max-h-[85vh] rounded-lg shadow-2xl"
              />
            )}
            <div className="text-center mt-6">
              <h3 className="text-white text-2xl font-bold mb-2">{selectedMedia.title}</h3>
              <p className="text-red-400 uppercase tracking-wide">{selectedMedia.category}</p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}
