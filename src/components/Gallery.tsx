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
    { id: 1, type: 'image', url: 'src/imgs/1stofit (2).webp', title: 'Urban Portrait', category: 'portrait' },
    { id: 2, type: 'image', url: 'src/imgs/2ndofit.webp', title: 'Fashion Editorial', category: 'fashion' },
    { id: 3, type: 'image', url: 'src/imgs/3rdofit.webp', title: 'Fashion Editorial', category: 'fashion' },

    {
      id: 4,
      type: 'video',
      url: 'https://drive.google.com/file/d/1rdKKU2XAHYT07Z3fkFNOdjQxhZLuT_FY/view?usp=drive_link',
      thumbnail: 'src/imgs/4thofit.PNG',
      title: 'Cinematic Reel',
      category: 'video',
    },
    {
      id: 5,
      type: 'video',
      url: 'https://drive.google.com/file/d/1KbX5QDDm5se1Ny9qfPQ3Z4THvBpDM2Xl/view?usp=drive_link',
      thumbnail: 'src/imgs/5thofit.PNG',
      title: 'Cinematic Reel',
      category: 'video',
    },
    {
      id: 6,
      type: 'video',
      url: 'https://drive.google.com/file/d/1D9t_z2mqbDOo6oBWw0t81ZfcrXEpu-Of/view?usp=drive_link',
      thumbnail: 'src/imgs/6thofit.PNG',
      title: 'Cinematic Reel',
      category: 'video',
    },

    { id: 7, type: 'image', url: 'src/imgs/7thofit.webp', title: 'Urban Portrait', category: 'portrait' },
    { id: 8, type: 'image', url: 'src/imgs/8thofit.webp', title: 'Fashion Editorial', category: 'fashion' },
    { id: 9, type: 'image', url: 'src/imgs/9thofit.webp', title: 'Fashion Editorial', category: 'fashion' },
     {
      id: 10,
      type: 'video',
      url: 'https://drive.google.com/file/d/1G_IBjtOFUadywp6JyvptTwILsuInsm0C/view?usp=drive_link',
      thumbnail: 'src/imgs/10thit.PNG',
      title: 'Motion Graphics',
      category: 'video',
    },
    {
      id: 11,
      type: 'video',
      url: 'https://drive.google.com/file/d/1Qv_M4sF819J6luLFz8jIODM17JuBV6Jo/view?usp=drive_link',
      thumbnail: 'src/imgs/11thofit.PNG',
      title: 'Motion Graphics',
      category: 'video',
    },{
      id: 12,
      type: 'video',
      url: 'https://drive.google.com/file/d/149HG9UmKbCDLePE_jkZaMuMXLri7ey2d/view?usp=drive_link',
      thumbnail: 'src/imgs/12thofit.PNG',
      title: 'Motion Graphics',
      category: 'video',
    },

    { id: 13, type: 'image', url: 'src/imgs/13thofit.webp', title: 'Portrait Art', category: 'portrait' },
    { id: 14, type: 'image', url: 'src/imgs/14thofit.webp', title: 'Fashion Week', category: 'fashion' },
    { id: 15, type: 'image', url: 'src/imgs/15thofit.webp', title: 'Fashion Week', category: 'fashion' },
      {
      id: 16,
      type: 'video',
      url: 'https://drive.google.com/file/d/1u3a6VNTEApy6qbpDI_-U76vT-A8VAJg0/view?usp=drive_link',
      thumbnail: 'src/imgs/16thofit.PNG',
      title: 'Motion Graphics',
      category: 'video',
    },
    {
      id: 17,
      type: 'video',
      url: 'https://drive.google.com/file/d/1E5EKEyOhh2oEWrj4R7_C5IDPUxMY4oFn/view?usp=drive_link',
      thumbnail: 'src/imgs/17thofit.PNG',
      title: 'Motion Graphics',
      category: 'video',
    },{
      id: 18,
      type: 'video',
      url: 'https://drive.google.com/file/d/1sDHhSeYUt5ODwXZ4gBNKmcakoarJdkLy/view?usp=drive_link',
      thumbnail: 'src/imgs/18thofit.PNG',
      title: 'Motion Graphics',
      category: 'video',
    },
    { id: 19, type: 'image', url: 'src/imgs/19thofit.webp', title: 'Portrait Art', category: 'portrait' },
    { id: 20, type: 'image', url: 'src/imgs/20thofit.webp', title: 'Fashion Week', category: 'fashion' },
    { id: 21, type: 'image', url: 'src/imgs/21thofit.webp', title: 'Fashion Week', category: 'fashion' },
    {
      id: 22,
      type: 'video',
      url: 'https://drive.google.com/file/d/1tc-T8SUuGuHD_d9C6okJ6aHkgVjrtDgl/view?usp=drive_link',
      thumbnail: 'src/imgs/22ndofit.PNG',
      title: 'Motion Graphics',
      category: 'video',
    },
    {
      id: 23,
      type: 'video',
      url: 'https://drive.google.com/file/d/13Gb-6up4nytrK-i8OugmkZzmc0nDBmSh/view?usp=drive_link',
      thumbnail: 'src/imgs/23rdofit.PNG',
      title: 'Motion Graphics',
      category: 'video',
    },{
      id: 24,
      type: 'video',
      url: 'https://drive.google.com/file/d/1OdgHHF9PInYFTakU-TyhIsF_iHFkzFBg/view?usp=drive_link',
      thumbnail: 'src/imgs/25thofit.PNG',
      title: 'Motion Graphics',
      category: 'video',
    },
    { id: 25, type: 'image', url: 'src/imgs/25thofit.webp', title: 'Portrait Art', category: 'portrait' },
    { id: 26, type: 'image', url: 'src/imgs/26thofit.webp', title: 'Fashion Week', category: 'fashion' },
    { id: 27, type: 'image', url: 'src/imgs/27thofit.webp', title: 'Fashion Week', category: 'fashion' },
  ];

  const categories = ['all', 'portrait', 'fashion', 'video'];

  const filteredItems =
    selectedCategory === 'all'
      ? mediaItems
      : mediaItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-gray-900 mb-4">
            MY <span className="text-red-600">WORK</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold uppercase transition-all ${
                selectedCategory === category
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                if (item.type === 'video') {
                  window.open(item.url, '_blank');
                } else {
                  setSelectedMedia(item);
                }
              }}
              className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer transition-all hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={item.type === 'video' ? item.thumbnail : item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all">
                <div className="absolute bottom-0 p-4">
                  <h3 className="text-white font-bold">{item.title}</h3>
                  <p className="text-red-400 text-xs uppercase">
                    {item.type === 'video' ? 'Opens on Google Drive' : item.category}
                  </p>
                </div>
              </div>

              {/* Play Icon */}
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center">
                    <Play className="w-7 h-7 text-white ml-1" fill="white" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* IMAGE MODAL ONLY */}
      {selectedMedia && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center"
            onClick={() => setSelectedMedia(null)}
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <img
            src={selectedMedia.url}
            alt={selectedMedia.title}
            className="max-w-full max-h-[85vh] rounded-lg shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}
