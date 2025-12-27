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

export default function MyWorks() {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const mediaItems: MediaItem[] = [
    { id: 1, type: 'image', url: '/imgs/1stofit.webp', title: 'The Judge', category: 'candids' },
    { id: 2, type: 'image', url: '/imgs/2ndofit.webp', title: 'Artist in motion', category: 'candids' },
    { id: 3, type: 'image', url: '/imgs/3rdofit.webp', title: 'The Judge', category: 'candids' },

    {
      id: 4,
      type: 'video',
      url: 'https://drive.google.com/file/d/1rdKKU2XAHYT07Z3fkFNOdjQxhZLuT_FY/view',
      thumbnail: '/imgs/4thofit.PNG',
      title: 'Brand Promo',
      category: 'talkingheads',
    },
    {
      id: 5,
      type: 'video',
      url: 'https://drive.google.com/file/d/1KbX5QDDm5se1Ny9qfPQ3Z4THvBpDM2Xl/view',
      thumbnail: '/imgs/5thofit.PNG',
      title: 'A story of a Realtor',
      category: 'talkingheads',
    },
    {
      id: 6,
      type: 'video',
      url: 'https://drive.google.com/file/d/1D9t_z2mqbDOo6oBWw0t81ZfcrXEpu-Of/view',
      thumbnail: '/imgs/6thofit.PNG',
      title: 'Brand Promo',
      category: 'talkingheads',
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
  category: 'Talkingheads', 
},
{ 
  id: 11, 
  type: 'video', 
  url: 'https://drive.google.com/file/d/1Qv_M4sF819J6luLFz8jIODM17JuBV6Jo/view?usp=drive_link', 
  thumbnail: '/imgs/11thofit.PNG', 
  title: 'Informational Reel', 
  category: 'Talkingheads', 
},
{ 
  id: 12, 
  type: 'video', 
  url: 'https://drive.google.com/file/d/149HG9UmKbCDLePE_jkZaMuMXLri7ey2d/view?usp=drive_link', 
  thumbnail: '/imgs/12thofit.PNG', 
  title: 'Shivesh_Food Vlogger', 
  category: 'Talkingheads', 
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
  category: 'Music Video', 
}, 
 { 
  id: 17, 
  type: 'video', 
  url: 'https://drive.google.com/file/d/1E5EKEyOhh2oEWrj4R7_C5IDPUxMY4oFn/view?usp=drive_link', 
  thumbnail: '/imgs/17thofit.PNG', 
  title: 'Music Video_Hollywood', 
  category: 'Music Video', 
},
 { 
  id: 18, type: 'video', 
  url: 'https://drive.google.com/file/d/1sDHhSeYUt5ODwXZ4gBNKmcakoarJdkLy/view?usp=drive_link', 
  thumbnail: '/imgs/18thofit.PNG', 
  title: 'Music Video_Jewellery Promo', 
  category: 'Music Video', 
}, 

    { id: 19, type: 'image', url: '/imgs/19thofit.webp', title: 'Artist in Motion', category: 'candids' },
    { id: 20, type: 'image', url: '/imgs/20thofit.webp', title: 'Artist in Motion', category: 'candids' },
    { id: 21, type: 'image', url: '/imgs/21stofit.webp', title: 'Artist in Motion', category: 'candids' },

    
  { id: 22, 
    type: 'video', 
    url: 'https://drive.google.com/file/d/1tc-T8SUuGuHD_d9C6okJ6aHkgVjrtDgl/view?usp=drive_link', 
    thumbnail: '/imgs/22ndofit.PNG', 
    title: 'Fashion Brand@DeeClothing', 
    category: 'BRAND PROMO', 
  },
   { 
    id: 23, 
    type: 'video', 
    url: 'https://drive.google.com/file/d/13Gb-6up4nytrK-i8OugmkZzmc0nDBmSh/view?usp=drive_link', 
    thumbnail: '/imgs/23rdofit.PNG', 
    title: 'Fashion Brand@DeeClothing', 
    category: 'BRAND PROMO', 
  },
   { 
    id: 24, 
    type: 'video', 
    url: 'https://drive.google.com/file/d/1OdgHHF9PInYFTakU-TyhIsF_iHFkzFBg/view?usp=drive_link', 
    thumbnail: '/imgs/24thofit.PNG', 
    title: 'Fashion Brand@DeeClothing', 
    category: 'BRAND PROMO', 
  }, 
   
  
   { id: 25, type: 'image', url: '/imgs/25thofit.webp', title: 'Party People', category: 'candids' }, 
   { id: 26, type: 'image', url: '/imgs/26thofit.webp', title: 'Magician', category: 'candids' }, 
   { id: 27, type: 'image', url: '/imgs/27thofit.webp', title: 'Party People', category: 'candids' },



   { id: 28, type: 'image', url: '/imgs/28thofit.webp', title: 'Party People', category: 'candids' }, 
   { id: 29, type: 'image', url: '/imgs/29thofit.webp', title: 'Magician', category: 'candids' }, 
   { id: 30, type: 'image', url: '/imgs/30thofit.webp', title: 'Party People', category: 'candids' },

   { id: 31, type: 'image', url: '/imgs/36thofit.webp', title: 'Party People', category: 'candids' }, 
   { id: 32, type: 'image', url: '/imgs/31stodit.webp', title: 'Magician', category: 'candids' }, 
   { id: 33, type: 'image', url: '/imgs/32thofit.webp', title: 'Party People', category: 'candids' },

   { id: 34, type: 'image', url: '/imgs/34thofit.webp', title: 'Party People', category: 'candids' }, 
   { id: 35, type: 'image', url: '/imgs/35thofit.webp', title: 'Magician', category: 'candids' }, 
   { id: 36, type: 'image', url: '/imgs/33thofit.webp', title: 'Party People', category: 'candids' },

   { id: 37, type: 'image', url: '/imgs/37thofit.webp', title: 'Party People', category: 'candids' }, 
   { id: 38, type: 'image', url: '/imgs/38thofit.webp', title: 'Magician', category: 'candids' }, 
   { id: 39, type: 'image', url: '/imgs/39thofit.webp', title: 'Party People', category: 'candids' }
   ,
   { id: 40, type: 'image', url: '/imgs/40thofit.webp', title: 'Party People', category: 'candids' }, 
   { id: 41, type: 'image', url: '/imgs/41thofit.webp', title: 'Magician', category: 'candids' }, 
   { id: 42, type: 'image', url: '/imgs/42thofit.webp', title: 'Party People', category: 'candids' },

   { id: 43, type: 'image', url: '/imgs/43thofit.webp', title: 'Party People', category: 'candids' }, 
   { id: 44, type: 'image', url: '/imgs/44thofit.webp', title: 'Magician', category: 'candids' }, 
   { id: 45, type: 'image', url: '/imgs/45thofit.webp', title: 'Party People', category: 'candids' },

   { id: 46, type: 'image', url: '/imgs/46thofit.webp', title: 'Party People', category: 'candids' }, 
   { id: 47, type: 'image', url: '/imgs/47thofit.webp', title: 'Magician', category: 'candids' }, 
   { id: 48, type: 'image', url: '/imgs/48thofit.webp', title: 'Party People', category: 'candids' },

   { id: 49, type: 'image', url: '/imgs/49thofit.webp', title: 'Party People', category: 'candids' }, 
   { id: 50, type: 'image', url: '/imgs/50thofit.webp', title: 'Magician', category: 'candids' }, 
   { id: 51, type: 'image', url: '/imgs/51thofit.webp', title: 'Party People', category: 'candids' },
   
   { id: 52, type: 'image', url: '/imgs/52thofit.webp', title: 'Party People', category: 'candids' }, 
   { id: 53, type: 'image', url: '/imgs/53thofit.webp', title: 'Magician', category: 'candids' }, 
   { id: 54, type: 'image', url: '/imgs/54thofit.webp', title: 'Party People', category: 'candids' },
   { id: 55, type: 'image', url: '/imgs/55thofit.webp', title: 'Party People', category: 'candids' }, 
   { id: 56, type: 'image', url: '/imgs/56thofit.webp', title: 'Magician', category: 'candids' }, 
   { id: 57, type: 'image', url: '/imgs/57thofit.webp', title: 'Party People', category: 'candids' },
   
   { id: 58, type: 'image', url: '/imgs/58thofit.webp', title: 'Party People', category: 'candids' }, 
   { id: 59, type: 'image', url: '/imgs/59thofit.webp', title: 'Magician', category: 'candids' }, 
   { id: 60, type: 'image', url: '/imgs/60thofit.webp', title: 'Party People', category: 'candids' },
   { id: 61, type: 'image', url: '/imgs/61thofit.webp', title: 'Party People', category: 'candids' }, 
   { id: 62, type: 'image', url: '/imgs/62thofit.webp', title: 'Magician', category: 'candids' }, 
   { id: 63, type: 'image', url: '/imgs/63thofit.webp', title: 'Party People', category: 'candids' },

   { id: 64, type: 'image', url: '/imgs/64thofit.webp', title: 'Party People', category: 'candids' }, 
   { id: 65, type: 'image', url: '/imgs/65thofit.webp', title: 'Magician', category: 'candids' }, 
   { id: 66, type: 'image', url: '/imgs/66thofit.webp', title: 'Party People', category: 'candids' },

   { id: 67, type: 'image', url: '/imgs/67thofit.webp', title: 'Party People', category: 'candids' }, 
   { id: 68, type: 'image', url: '/imgs/68thofit.webp', title: 'Magician', category: 'candids' }, 
   { id: 69, type: 'image', url: '/imgs/69thofit.webp', title: 'Party People', category: 'candids' },
   
   { id: 70, type: 'image', url: '/imgs/70thofit.webp', title: 'Party People', category: 'candids' }, 
   { id: 71, type: 'image', url: '/imgs/71thofit.webp', title: 'Magician', category: 'candids' }, 
   { id: 72, type: 'image', url: '/imgs/72thofit.webp', title: 'Party People', category: 'candids' },

   { id: 73, type: 'image', url: '/imgs/73thofit.webp', title: 'Party People', category: 'candids' }, 
   { id: 74, type: 'image', url: '/imgs/74thofit.webp', title: 'Magician', category: 'candids' }, 
   { id: 75, type: 'image', url: '/imgs/75thofit.webp', title: 'Party People', category: 'candids' },
  
   { id: 76, type: 'image', url: '/imgs/76thofit.webp', title: 'Party People', category: 'candids' },
   { id: 77, type: 'image', url: '/imgs/77thofit.webp', title: 'Magician', category: 'candids' }, 
   { id: 78, type: 'image', url: '/imgs/78thofit.webp', title: 'Party People', category: 'candids' },

   { id: 79, type: 'image', url: '/imgs/79thofit.webp', title: 'Party People', category: 'candids' }, 
   { id: 80, type: 'image', url: '/imgs/80thofit.webp', title: 'Magician', category: 'candids' }, 
   { id: 81, type: 'image', url: '/imgs/81thofit.webp', title: 'Party People', category: 'candids' },

   { id: 82, type: 'image', url: '/imgs/82thofit.webp', title: 'Party People', category: 'candids' }, 
   { id: 83, type: 'image', url: '/imgs/83thofit.webp', title: 'Magician', category: 'candids' }, 
   { id: 84, type: 'image', url: '/imgs/84thofit.webp', title: 'Party People', category: 'candids' },

   { id: 85, type: 'image', url: '/imgs/85thofit.webp', title: 'Party People', category: 'candids' }, 
   { id: 86, type: 'image', url: '/imgs/86thofit.webp', title: 'Magician', category: 'candids' }, 
   { id: 87, type: 'image', url: '/imgs/87thofit.webp', title: 'Party People', category: 'candids' },

   { id: 88, type: 'image', url: '/imgs/88thofit.webp', title: 'Party People', category: 'candids' }, 
   { id: 89, type: 'image', url: '/imgs/89thofit.webp', title: 'Magician', category: 'candids' }, 
   { id: 90, type: 'image', url: '/imgs/90thofit.webp', title: 'Party People', category: 'candids' },
   { id: 91, type: 'image', url: '/imgs/91thofit.webp', title: 'Party People', category: 'candids' }, 
   { id: 92, type: 'image', url: '/imgs/92thofit.webp', title: 'Magician', category: 'candids' }, 
   { id: 93, type: 'image', url: '/imgs/93thofit.webp', title: 'Party People', category: 'candids' },

   { id: 94, type: 'image', url: '/imgs/94thofit.webp', title: 'Party People', category: 'candids' }, 
   { id: 95, type: 'image', url: '/imgs/95thofit.webp', title: 'Magician', category: 'candids' }, 
   { id: 96, type: 'image', url: '/imgs/96thofit.JPG', title: 'Party People', category: 'candids' },

   { id: 97, type: 'image', url: '/imgs/97thofit.JPG', title: 'Party People', category: 'candids' }, 
   { id: 98, type: 'image', url: '/imgs/98thofit.webp', title: 'Magician', category: 'candids' }, 
   { id: 99, type: 'image', url: '/imgs/99thofit.webp', title: 'Party People', category: 'candids' },
   { id: 100, type: 'image', url: '/imgs/100thofit.webp', title: 'Party People', category: 'candids' }, 
   { id: 101, type: 'image', url: '/imgs/101thofit.webp', title: 'Magician', category: 'candids' }, 
   { id: 102, type: 'image', url: '/imgs/102thofit.webp', title: 'Party People', category: 'candids' },

   { id: 103, type: 'image', url: '/imgs/103thofit.webp', title: 'Party People', category: 'candids' },
   { id: 104, type: 'image', url: '/imgs/104thofit.webp', title: 'Magician', category: 'candids' }, 
   { id: 105, type: 'image', url: '/imgs/105thofit.JPG', title: 'Party People', category: 'candids' },
   { id: 106, type: 'image', url: '/imgs/106thofit.webp', title: 'Party People', category: 'candids' }, 
   { id: 107, type: 'image', url: '/imgs/107thofit.webp', title: 'Magician', category: 'candids' }, 
   { id: 108, type: 'image', url: '/imgs/108thofit.webp', title: 'Party People', category: 'candids' },

   { id: 109, type: 'image', url: '/imgs/109thofit.webp', title: 'Party People', category: 'candids' }, 
   { id: 110, type: 'image', url: '/imgs/110thofit.webp', title: 'Magician', category: 'candids' }, 
   { id: 111, type: 'image', url: '/imgs/111thofit.webp', title: 'Party People', category: 'candids' },

   { id: 112, type: 'image', url: '/imgs/112thofit.webp', title: 'Party People', category: 'candids' }, 
   { id: 113, type: 'image', url: '/imgs/113thofit.webp', title: 'Magician', category: 'candids' }, 
   { id: 114, type: 'image', url: '/imgs/114thofit.webp', title: 'Party People', category: 'candids' },
  
   { id: 115, type: 'image', url: '/imgs/115thofit.webp', title: 'Party People', category: 'candids' }, 
    { id: 116, type: 'image', url: '/imgs/116thofit.webp', title: 'Magician', category: 'candids' },
    { id: 117, type: 'image', url: '/imgs/117thofit.webp', title: 'Party People', category: 'portrait' },

    { id: 118, type: 'image', url: '/imgs/118thofit.webp', title: 'Party People', category: 'portrait' },
    { id: 119, type: 'image', url: '/imgs/119thofit.webp', title: 'Magician', category: 'portrait' },
    { id: 120, type: 'image', url: '/imgs/120thofit.webp', title: 'Party People', category: 'portrait' },
   
    { id: 121, type: 'image', url: '/imgs/121thofit.webp', title: 'Party People', category: 'portrait' },
    { id: 122, type: 'image', url: '/imgs/122thofit.webp', title: 'Magician', category: 'portrait' },
    { id: 123, type: 'image', url: '/imgs/123thofit.webp', title: 'Party People', category: 'candids' },
   
    { id: 124, type: 'image', url: '/imgs/124thofit.webp', title: 'Party People', category: 'candids' },
    { id: 125, type: 'image', url: '/imgs/125thofit.webp', title: 'Magician', category: 'candids' },
    { id: 126, type: 'image', url: '/imgs/126thofit.webp', title: 'Party People', category: 'portrait' },

    { id: 127, type: 'image', url: '/imgs/127thofit.webp', title: 'Party People', category: 'portrait' },
    { id: 128, type: 'image', url: '/imgs/128thofit.webp', title: 'Magician', category: 'portrait' },
    { id: 129, type: 'image', url: '/imgs/129thofit.webp', title: 'Party People', category: 'candids' },
   
    { id: 130, type: 'image', url: '/imgs/130thofit.webp', title: 'Party People', category: 'portrait' },
    { id: 131, type: 'image', url: '/imgs/131thofit.webp', title: 'Magician', category: 'portrait' },
    { id: 132, type: 'image', url: '/imgs/132thofit.webp', title: 'Party People', category: 'candids' },















  ];

  const categories = ['all', 'candids', 'talkingheads', 'Urbans', 'Automobiles', 'Music Video', 'BRAND PROMO', 'portrait'];

  const filteredItems =
    selectedCategory === 'all'
      ? mediaItems
      : mediaItems.filter((item) => item.category === selectedCategory);

  return (
    <section className="min-h-screen bg-white py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-gray-900 mb-4">
            MY <span className="text-red-600">WORKS</span>
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        {/* FILTERS */}
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
              onClick={() =>
                item.type === 'video'
                  ? window.open(item.url, '_blank')
                  : setSelectedMedia(item)
              }
              className="relative aspect-square overflow-hidden rounded-2xl cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={item.type === 'video' ? item.thumbnail : item.url}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <div className="absolute bottom-0 p-4">
                  <h3 className="text-white font-bold text-sm sm:text-base">
                    {item.title}
                  </h3>
                  <p className="text-red-400 text-xs uppercase">
                    {item.category}
                  </p>
                </div>
              </div>

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
          <button className="absolute top-6 right-6 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
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
