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
    { id: 1, type: 'image', url: '/imgs/1stofit.webp', title: "The Judge", category: 'candids' },
    { id: 2, type: 'image', url: '/imgs/2ndofit.webp', title: 'Artist in motion', category: 'candids' },
    { id: 3, type: 'image', url: '/imgs/3rdofit.webp', title: 'The Judge', category: 'candids' },

    {
      id: 4,
      type: 'video',
      url: 'https://drive.google.com/file/d/1rdKKU2XAHYT07Z3fkFNOdjQxhZLuT_FY/view',
      thumbnail: '/imgs/4thofit.PNG',
      title: 'Brand Promo',
      category: 'video',
    },
    {
      id: 5,
      type: 'video',
      url: 'https://drive.google.com/file/d/1KbX5QDDm5se1Ny9qfPQ3Z4THvBpDM2Xl/view',
      thumbnail: '/imgs/5thofit.PNG',
      title: 'A story of a Realtor',
      category: 'video',
    },
    {
      id: 6,
      type: 'video',
      url: 'https://drive.google.com/file/d/1D9t_z2mqbDOo6oBWw0t81ZfcrXEpu-Of/view',
      thumbnail: '/imgs/6thofit.PNG',
      title: 'Brand Promo',
      category: 'video',
    },

    { id: 7, type: 'image', url: '/imgs/7thofit.webp', title: 'Foodcourt@YVR', category: 'Urbans' },
    { id: 8, type: 'image', url: '/imgs/8thofit.webp', title: 'Foodcourt@YVR', category: 'Urbans' },
    { id: 9, type: 'image', url: '/imgs/9thofit.webp', title: 'Foodcourt@YVR', category: 'Urbans' },


{ 
  id: 10, 
  type: 'video',
  url: 'https://drive.google.com/file/d/1G_IBjtOFUadywp6JyvptTwILsuInsm0C/view?usp=drive_link',
  thumbnail: '/imgs/10thofit.PNG',
  title: 'Informational Reel',
  category: 'video', 
},
{ 
  id: 11, 
  type: 'video', 
  url: 'https://drive.google.com/file/d/1Qv_M4sF819J6luLFz8jIODM17JuBV6Jo/view?usp=drive_link', 
  thumbnail: '/imgs/11thofit.PNG', 
  title: 'Informational Reel', 
  category: 'video', 
},
{ 
  id: 12, 
  type: 'video', 
  url: 'https://drive.google.com/file/d/149HG9UmKbCDLePE_jkZaMuMXLri7ey2d/view?usp=drive_link', 
  thumbnail: '/imgs/12thofit.PNG', 
  title: 'Shivesh_Food Vlogger', 
  category: 'video', 
}, 

{ id: 13, type: 'image', url: '/imgs/13thofit.webp', title: 'Lowered Whips', category: 'Automobiles' },
 { id: 14, type: 'image', url: '/imgs/14thofit.webp', title: 'Lowered Whips', category: 'Automobiles' }, 
 { id: 15, type: 'image', url: '/imgs/15thofit.webp', title: 'Lowered Whips', category: 'Automobiles' }, 

 { 
  id: 16, 
  type: 'video', 
  url: 'https://drive.google.com/file/d/1u3a6VNTEApy6qbpDI_-U76vT-A8VAJg0/view?usp=drive_link', 
  thumbnail: '/imgs/16thofit.PNG', 
  title: 'Music Video_MMA', 
  category: 'video', 
}, 
 { 
  id: 17, 
  type: 'video', 
  url: 'https://drive.google.com/file/d/1E5EKEyOhh2oEWrj4R7_C5IDPUxMY4oFn/view?usp=drive_link', 
  thumbnail: '/imgs/17thofit.PNG', 
  title: 'Music Video_Hollywood', 
  category: 'video', 
},
 { 
  id: 18, type: 'video', 
  url: 'https://drive.google.com/file/d/1sDHhSeYUt5ODwXZ4gBNKmcakoarJdkLy/view?usp=drive_link', 
  thumbnail: '/imgs/18thofit.PNG', 
  title: 'Music Video_Jewellery Promo', 
  category: 'video', 
}, 
 
 { id: 19, type: 'image', url: '/imgs/19thofit.webp', title: 'Artist in Motion', category: 'candids' }, 
 { id: 20, type: 'image', url: '/imgs/20thofit.webp', title: 'Artist in Motion', category: 'candids' },
 { id: 21, type: 'image', url: '/imgs/21stofit.webp', title: 'Artist in Motion', category: 'candids' },

  { id: 22, 
    type: 'video', 
    url: 'https://drive.google.com/file/d/1tc-T8SUuGuHD_d9C6okJ6aHkgVjrtDgl/view?usp=drive_link', 
    thumbnail: '/imgs/22ndofit.PNG', 
    title: 'Fashion Brand@DeeClothing', 
    category: 'video', 
  },
   { 
    id: 23, 
    type: 'video', 
    url: 'https://drive.google.com/file/d/13Gb-6up4nytrK-i8OugmkZzmc0nDBmSh/view?usp=drive_link', 
    thumbnail: '/imgs/23rdofit.PNG', 
    title: 'Fashion Brand@DeeClothing', 
    category: 'video', 
  },
   { 
    id: 24, 
    type: 'video', 
    url: 'https://drive.google.com/file/d/1OdgHHF9PInYFTakU-TyhIsF_iHFkzFBg/view?usp=drive_link', 
    thumbnail: '/imgs/24thofit.PNG', 
    title: 'Fashion Brand@DeeClothing', 
    category: 'video', 
  }, 
   
   { id: 25, type: 'image', url: '/imgs/25thofit.webp', title: 'Party People', category: 'candids' }, 
   { id: 26, type: 'image', url: '/imgs/26thofit.webp', title: 'Magician', category: 'candids' }, 
   { id: 27, type: 'image', url: '/imgs/27thofit.webp', title: 'Party People', category: 'candids' },
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
            OUR <span className="text-red-600">WORK</span>
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
              className="relative aspect-square overflow-hidden rounded-2xl cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Image */}
              <img
                src={item.type === 'video' ? item.thumbnail : item.url}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              {/* ALWAYS VISIBLE OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <div className="absolute bottom-0 p-4">
                  <h3 className="text-white font-bold text-sm sm:text-base">
                    {item.title}
                  </h3>
                  <p className="text-red-400 text-xs uppercase">
                    {item.type === 'video' ? 'Opens on Google Drive' : item.category}
                  </p>
                </div>
              </div>

              {/* Play Icon */}
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                    <Play className="w-7 h-7 text-white ml-1" fill="white" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* IMAGE MODAL */}
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
