import { useState } from 'react';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MediaItem {
  id: number;
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
  title: string;
  category: string;
}

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  const mediaItems: MediaItem[] = [
    { id: 1, type: 'image', url: '/imgs/1stofit.webp', title: "The Judge", category: 'human-moments' },
    { id: 2, type: 'image', url: '/imgs/2ndofit.webp', title: 'Artist in motion', category: 'human-moments' },
    { id: 3, type: 'image', url: '/imgs/3rdofit.webp', title: 'The Judge', category: 'human-moments' },

    {
      id: 4,
      type: 'video',
      url: 'https://drive.google.com/file/d/1rdKKU2XAHYT07Z3fkFNOdjQxhZLuT_FY/view',
      thumbnail: '/imgs/4thofit.PNG',
      title: 'Brand Promo',
      category: 'brand-stories',
    },
    {
      id: 5,
      type: 'video',
      url: 'https://drive.google.com/file/d/1r_yB8DyTm30t4XKCkgiRpIGYN-G6yGgw/view?usp=drivesdk',
      thumbnail: '/imgs/5thofit.PNG',
      title: 'A story of a Realtor',
      category: 'brand-stories',
    },
    {
      id: 6,
      type: 'video',
      url: 'https://drive.google.com/file/d/1D9t_z2mqbDOo6oBWw0t81ZfcrXEpu-Of/view',
      thumbnail: '/imgs/6thofit.PNG',
      title: 'Brand Promo',
      category: 'brand-stories',
    },

    { id: 7, type: 'image', url: '/imgs/7thofit.webp', title: 'Foodcourt@YVR', category: 'urban-stories' },
    { id: 8, type: 'image', url: '/imgs/8thofit.webp', title: 'Foodcourt@YVR', category: 'urban-stories' },
    { id: 9, type: 'image', url: '/imgs/9thofit.webp', title: 'Foodcourt@YVR', category: 'urban-stories' },


{ 
  id: 10, 
  type: 'video',
  url: 'https://drive.google.com/file/d/1G_IBjtOFUadywp6JyvptTwILsuInsm0C/view?usp=drive_link',
  thumbnail: '/imgs/10thofit.PNG',
  title: 'Informational Reel',
  category: 'brand-stories', 
},
{ 
  id: 11, 
  type: 'video', 
  url: 'https://drive.google.com/file/d/1Qv_M4sF819J6luLFz8jIODM17JuBV6Jo/view?usp=drive_link', 
  thumbnail: '/imgs/11thofit.PNG', 
  title: 'Informational Reel', 
  category: 'brand-stories', 
},
{ 
  id: 12, 
  type: 'video', 
  url: 'https://drive.google.com/file/d/149HG9UmKbCDLePE_jkZaMuMXLri7ey2d/view?usp=drive_link', 
  thumbnail: '/imgs/12thofit.PNG', 
  title: 'Shivesh_Food Vlogger', 
  category: 'brand-stories', 
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
  category: 'music-videos & performance-films', 
}, 
 { 
  id: 17, 
  type: 'video', 
  url: 'https://drive.google.com/file/d/1E5EKEyOhh2oEWrj4R7_C5IDPUxMY4oFn/view?usp=drive_link', 
  thumbnail: '/imgs/17thofit.PNG', 
  title: 'Music Video_Hollywood', 
  category: 'music-videos & performance-films', 
},
 { 
  id: 18, type: 'video', 
  url: 'https://drive.google.com/file/d/1sDHhSeYUt5ODwXZ4gBNKmcakoarJdkLy/view?usp=drive_link', 
  thumbnail: '/imgs/18thofit.PNG', 
  title: 'Music Video_Jewellery Promo', 
  category: 'music-videos & performance-films', 
}, 
 
 { id: 19, type: 'image', url: '/imgs/19thofit.webp', title: 'Artist in Motion', category: 'human-moments' }, 
 { id: 20, type: 'image', url: '/imgs/20thofit.webp', title: 'Artist in Motion', category: 'human-moments' },
 { id: 21, type: 'image', url: '/imgs/21stofit.webp', title: 'Artist in Motion', category: 'human-moments' },

  { id: 22, 
    type: 'video', 
    url: 'https://www.instagram.com/reel/DS4MvxZEoVr/?igsh=MTI4aDNzNXIzeDA3Mg==', 
    thumbnail: '/imgs/pink hoodie.png', 
    title: 'Fashion Brand@DeeClothing', 
    category: 'commercial-films', 
  },
   { 
    id: 23, 
    type: 'video', 
    url: 'https://www.instagram.com/reel/DTMx6frEhiu/?igsh=aGhuZTA3Y3dpZnF1', 
    thumbnail: '/imgs/23rdofit.PNG', 
    title: 'Fashion Brand@DeeClothing', 
    category: 'commercial-films', 
  },
   { 
    id: 24, 
    type: 'video', 
    url: 'https://www.instagram.com/reel/DR2MQ0cEoL1/?igsh=MWxjbDh2Y3Nhd2preA==', 
    thumbnail: '/imgs/24thofit.PNG', 
    title: 'Fashion Brand@DeeClothing', 
    category: 'commercial-films', 
  }, 
   { id: 25, type: 'image', url: '/imgs/25thofit.webp', title: 'Party People', category: 'human-moments' }, 
   { id: 26, type: 'image', url: '/imgs/26thofit.webp', title: 'Magician', category: 'human-moments' }, 
   { id: 27, type: 'image', url: '/imgs/27thofit.webp', title: 'Party People', category: 'human-moments' },
  ];

  const categories = ['all','human-moments','music-videos & performance-films','commercial-films','brand-stories','urban-stories', 'Automobiles'];

  const filteredItems =
    selectedCategory === 'all'
      ? mediaItems
      : mediaItems.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-gray-900 mb-4">
            MY <span className="text-red-600">WORKS</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        {/* CATEGORY FILTER */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wide transition
                ${selectedCategory === cat
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {filteredItems.map(item => (
            <div
              key={item.id}
              onClick={() =>
                item.type === 'video'
                  ? window.open(item.url, '_blank')
                  : setSelectedMedia(item)
              }
              className="relative aspect-square overflow-hidden rounded-2xl cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <img
  src={
    item.type === 'video'
      ? item.thumbnail ?? '/imgs/video-placeholder.jpg'
      : item.url
  }
  alt={item.title}
  className="w-full h-full object-cover"
/>


              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <div className="absolute bottom-0 p-4">
                  <h3 className="text-white font-bold text-sm">{item.title}</h3>
                  <p className="text-red-400 text-xs uppercase">{item.category}</p>
                </div>
              </div>

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

      {/* MODAL */}
      {selectedMedia && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <img
            src={selectedMedia.url}
            alt={selectedMedia.title}
            className="max-w-full max-h-[85vh] rounded-lg"
          />
        </div>
      )}

      {/* VIEW ALL */}
      <div className="flex justify-center mt-20">
        <Link
          to="/my-works"
          className="px-10 py-4 bg-red-600 text-white font-bold tracking-widest rounded-full hover:bg-red-700 transition"
        >
          VIEW ALL →
        </Link>
      </div>
    </section>
  );
}
