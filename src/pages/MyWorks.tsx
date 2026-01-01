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
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [mode, setMode] = useState<'all' | 'photo' | 'video'>('all');

  /* ================= MEDIA ITEMS (UNCHANGED) ================= */
  const mediaItems: MediaItem[] = [
      { id: 1, type: 'image', url: '/imgs/1stofit.webp', title: 'The Judge', category: 'human-moments' },
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
      url: 'https://drive.google.com/file/d/1KbX5QDDm5se1Ny9qfPQ3Z4THvBpDM2Xl/view',
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


    { id: 13, type: 'image', url: '/imgs/13thofit.webp', title: 'Lowered Whips', category: 'automobiles' },
    { id: 14, type: 'image', url: '/imgs/14thofit.webp', title: 'Lowered Whips', category: 'automobiles' },
    { id: 15, type: 'image', url: '/imgs/15thofit.webp', title: 'Lowered Whips', category: 'automobiles' },

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
    url: 'https://drive.google.com/file/d/1tc-T8SUuGuHD_d9C6okJ6aHkgVjrtDgl/view?usp=drive_link', 
    thumbnail: '/imgs/22ndofit.PNG', 
    title: 'Fashion Brand@DeeClothing', 
    category: 'commercial-films', 
  },
   { 
    id: 23, 
    type: 'video', 
    url: 'https://drive.google.com/file/d/13Gb-6up4nytrK-i8OugmkZzmc0nDBmSh/view?usp=drive_link', 
    thumbnail: '/imgs/23rdofit.PNG', 
    title: 'Fashion Brand@DeeClothing', 
    category: 'commercial-films', 
  },
   { 
    id: 24, 
    type: 'video', 
    url: 'https://drive.google.com/file/d/1OdgHHF9PInYFTakU-TyhIsF_iHFkzFBg/view?usp=drive_link', 
    thumbnail: '/imgs/24thofit.PNG', 
    title: 'Fashion Brand@DeeClothing', 
    category: 'commercial-films', 
  }, 
   
  
   { id: 25, type: 'image', url: '/imgs/25thofit.webp', title: 'Party People', category: 'human-moments' }, 
   { id: 26, type: 'image', url: '/imgs/26thofit.webp', title: 'Magician', category: 'human-moments' }, 
   { id: 27, type: 'image', url: '/imgs/27thofit.webp', title: 'Party People', category: 'human-moments' },

 { 
    id: 10001, 
    type: 'video', 
    url: 'https://drive.google.com/file/d/1N9QHBhG4wmwApei-KDKHyxNzN_kY8w3f/view?usp=drive_link', 
    thumbnail: '/imgs/001.jpeg', 
    title: 'I Got no Chill@Chinkography', 
    category: 'original-films', 
  },  { 
    id: 10002, 
    type: 'video', 
    url: 'https://drive.google.com/file/d/1Hrpjbza89nOwEGXrIS6m70NTbRL80e3s/view?usp=drive_link', 
    thumbnail: '/imgs/002.jpeg', 
    title: 'Reunited siblings@Chinkography', 
    category: 'original-films', 
  },  { 
    id: 10003, 
    type: 'video', 
    url: 'https://drive.google.com/file/d/1e_SVGfNdnvyQTCWCYXFfnS4An1nckE06/view?usp=drive_link', 
    thumbnail: '/imgs/003.jpeg', 
    title: 'Now was a Dream Before & Before is Dream Now@Chinkography', 
    category: 'original-films', 
  },

   { id: 28, type: 'image', url: '/imgs/28thofit.webp', title: 'YYR Airport', category: 'urban-stories' }, 
   { id: 29, type: 'image', url: '/imgs/29thofit.webp', title: 'YYR Airport', category: 'urban-stories' }, 
   { id: 30, type: 'image', url: '/imgs/30thofit.webp', title: 'YYR Airport', category: 'urban-stories' },
{ 
    id: 10004, 
    type: 'video', 
    url: 'https://drive.google.com/file/d/1R6ZS-JLKWnqzBTSXn7OHBchHjTo-ItP1/view?usp=drive_link', 
    thumbnail: '/imgs/004.jpeg', 
    title: 'SopMotion Music Video@Chinkography', 
    category: 'original-films', 
  },{ 
    id: 10005, 
    type: 'video', 
    url: 'https://drive.google.com/file/d/1ZtbcaiFOR3hckIr_Hzo1MIn_Aumj90N7/view?usp=drive_link', 
    thumbnail: '/imgs/005.jpeg', 
    title: 'Dr. MoonLight@Chinkography', 
    category: 'original-films', 
  },
  {
    id: 10006,
    type: 'video',
    url: 'https://drive.google.com/file/d/1p1ZvBaoGBoyiRjh42iQp9V5mcysESDnN/view?usp=drive_link',
    thumbnail: '/imgs/006.png',
    title: 'Brand Promo@Chinkography',
    category: 'commercial-films',
  }
   ,{ id: 31, type: 'image', url: '/imgs/36thofit.webp', title: 'Mount Abu', category: 'visual-narratives' }, 
   { id: 32, type: 'image', url: '/imgs/31stodit.webp', title: 'Mount Abu', category: 'visual-narratives' }, 
   { id: 33, type: 'image', url: '/imgs/32thofit.webp', title: 'Mount Abu', category: 'visual-narratives' },
{ 
    id: 10007, 
    type: 'video', 
    url: 'https://drive.google.com/file/d/14OP4AtXArj7FJi8T8wGt1zn1inxKYT66/view?usp=drive_link', 
    thumbnail: '/imgs/007.png', 
    title: 'Shivesh_Food Vlogger', 
    category: 'brand-stories', 
  },{ 
    id: 10008, 
    type: 'video', 
    url: 'https://drive.google.com/file/d/1zhCcO69gEzILlmfi9EiSZ8Sh5UmABdkD/view?usp=sharing', 
    thumbnail: '/imgs/008.png', 
    title: 'Shivesh_Food Vlogger', 
    category: 'brand-stories', 
  },
  {
    id: 10009,
    type: 'video',
    url: 'https://drive.google.com/file/d/1fJRz6Zqv3cTfTMdZ49p2vXpMUVKSmL3e/view?usp=sharing',
    thumbnail: '/imgs/009.png',
    title: 'Shivesh_Food Vlogger',
    category: 'brand-stories',
  },
   { id: 34, type: 'image', url: '/imgs/34thofit.webp', title: 'Mount Abu', category: 'visual-narratives' }, 
   { id: 35, type: 'image', url: '/imgs/35thofit.webp', title: 'Mount Abu', category: 'visual-narratives' }, 
   { id: 36, type: 'image', url: '/imgs/33thofit.webp', title: 'Mount Abu', category: 'visual-narratives' },
{ 
    id: 100010, 
    type: 'video', 
    url: 'https://drive.google.com/file/d/19IV3-6i911GsFLtS_MWU4i3UGEZUztbM/view?usp=drive_link', 
    thumbnail: '/imgs/010.png', 
    title: 'RealEstate Listing', 
    category: 'music-videos & performance-films', 
  },{ 
    id: 100011, 
    type: 'video', 
    url: 'https://drive.google.com/file/d/1XdmqeCLtBmwOsYC_eXj2c_PBhGiv9LP-/view?usp=sharing', 
    thumbnail: '/imgs/011.png', 
    title: 'RealEstate Listing', 
    category: 'music-videos & performance-films', 
  },
  {
    id: 100012,
    type: 'video',
    url: 'https://drive.google.com/file/d/1IlxX3jOPvpcr3VE90u0_PseYIMzhV5Q5/view?usp=sharing',
    thumbnail: '/imgs/012.png',
    title: 'Business Ads',
    category: 'brand-stories',
  },
   { id: 37, type: 'image', url: '/imgs/37thofit.webp', title: 'Mount Abu', category: 'urban-stories' }, 
   { id: 38, type: 'image', url: '/imgs/38thofit.webp', title: 'Mount Abu', category: 'urban-stories' }, 
   { id: 39, type: 'image', url: '/imgs/39thofit.webp', title: 'Mount Abu', category: 'urban-stories' }
   , 
      { 
    id: 100013, 
    type: 'video', 
    url: 'https://drive.google.com/file/d/1KbX5QDDm5se1Ny9qfPQ3Z4THvBpDM2Xl/view?usp=sharing', 
    thumbnail: '/imgs/013.png', 
    title: 'Bloopers', 
    category: 'brand-stories', 
  },{ 
    id: 100014, 
    type: 'video', 
    url: 'https://drive.google.com/file/d/1bK7BGm3ro9u0-CPF10Z8FRipas4Shoes/view?usp=sharing', 
    thumbnail: '/imgs/014.png', 
    title: 'Brand Promo', 
    category: 'music-videos & performance-films', 
  },
  {
    id: 100015,
    type: 'video',
    url: 'https://drive.google.com/file/d/1ilvbdPYBHmZSs1swmjDRAcwTosIDn7wM/view?usp=sharing',
    thumbnail: '/imgs/015.png',
    title: 'DocStyle talkingheads',
    category: 'brand-stories',
  },
   { id: 40, type: 'image', url: '/imgs/40thofit.webp', title: 'My BMRR', category: 'automobiles' }, 
   { id: 41, type: 'image', url: '/imgs/41thofit.webp', title: 'My BMRR', category: 'automobiles' }, 
   { id: 42, type: 'image', url: '/imgs/42thofit.webp', title: 'My BMRR', category: 'automobiles' }, 
    { 
    id: 100016, 
    type: 'video', 
    url: 'https://drive.google.com/file/d/1DEfhz1iALRVfqlNsPKJoA_i4BKbfb4bq/view?usp=sharing', 
    thumbnail: '/imgs/016.png', 
    title: 'Informational Reel', 
    category: 'brand-stories', 
  },{ 
    id: 100017, 
    type: 'video', 
    url: 'https://drive.google.com/file/d/1sxA327dT0nrAxkRmDB6d15aLnc5b8h1H/view?usp=sharing', 
    thumbnail: '/imgs/017.png', 
    title: 'Fashion Brand@DeeClothing', 
    category: 'commercial-films',
  },
  {
    id: 100018,
    type: 'video',
    url: 'https://drive.google.com/file/d/1No7l41aEH1YOGjd6Hx4gBJNhTTw8dcAr/view?usp=sharing',
    thumbnail: '/imgs/018.png',
   title: 'Fashion Brand@DeeClothing', 
    category: 'commercial-films',
  },
   { id: 43, type: 'image', url: '/imgs/43thofit.webp', title: 'Party People', category: 'human-moments' }, 
   { id: 44, type: 'image', url: '/imgs/44thofit.webp', title: 'Magician', category: 'human-moments' }, 
   { id: 45, type: 'image', url: '/imgs/45thofit.webp', title: 'Party People', category: 'human-moments' },
   { 
    id: 100019, 
    type: 'video', 
    url: 'https://drive.google.com/file/d/1D4pFVNc-KN544XZMECgkq9cW3CQVJ347/view?usp=sharing', 
    thumbnail: '/imgs/019.png', 
   title: 'Fashion Brand@DeeClothing', 
    category: 'commercial-films',
  },{ 
    id: 100020, 
    type: 'video', 
    url: 'https://drive.google.com/file/d/1nuMp5x-WdL8SdrCcCmuvgawfM_3BH49U/view?usp=sharing', 
    thumbnail: '/imgs/020.png', 
   title: 'Fashion Brand@DeeClothing', 
    category: 'commercial-films', 
  },
  {
    id: 100021,
    type: 'video',
    url: 'https://drive.google.com/file/d/1CdCLwp72aozRosJ3rCaBql_Xbx0bsRCo/view?usp=sharing',
    thumbnail: '/imgs/021.png',
   title: 'Fashion Brand@DeeClothing', 
    category: 'commercial-films',
  },
   { id: 46, type: 'image', url: '/imgs/46thofit.webp', title: 'Party People', category: 'human-moments' }, 
   { id: 47, type: 'image', url: '/imgs/47thofit.webp', title: 'Magician', category: 'human-moments' }, 
   { id: 48, type: 'image', url: '/imgs/48thofit.webp', title: 'Party People', category: 'human-moments' },
   { 
    id: 100022, 
    type: 'video', 
    url: 'https://drive.google.com/file/d/1_qKBlliJd3HANTbPWT7YkY66A3xiFl7b/view?usp=sharing', 
    thumbnail: '/imgs/022.png', 
   title: 'Fashion Brand@DeeClothing', 
    category: 'commercial-films', 
  },
  { 
    id: 100023, 
    type: 'video', 
    url: 'https://drive.google.com/file/d/1uRXNtVMPRh0nmVcQYLk1OlnAYN5x0f3s/view?usp=sharing', 
    thumbnail: '/imgs/023.png', 
   title: 'Fashion Brand@DeeClothing', 
    category: 'commercial-films',},
  {
    id: 100024,
    type: 'video',
    url: 'https://drive.google.com/file/d/1h9VlCicsjZFeM0aijHoKBUWxLWgeuDE1/view?usp=sharing',
    thumbnail: '/imgs/024.png',
   title: 'Fashion Brand@DeeClothing', 
    category: 'commercial-films',
  },
   { id: 49, type: 'image', url: '/imgs/49thofit.webp', title: 'Party People', category: 'human-moments' }, 
   { id: 50, type: 'image', url: '/imgs/50thofit.webp', title: 'Magician', category: 'human-moments' }, 
   { id: 51, type: 'image', url: '/imgs/51thofit.webp', title: 'Party People', category: 'human-moments' },
   { 
    id: 100025, 
    type: 'video', 
    url: 'https://drive.google.com/file/d/1mkod3-N1Yi358vPpIiFkYFghVaJN8v5k/view?usp=sharing', 
    thumbnail: '/imgs/025.png', 
    title: 'Fashion Brand@DeeClothing', 
    category: 'commercial-films', 
  },
  { 
    id: 100026, 
    type: 'video', 
    url: 'https://drive.google.com/file/d/1LbGg-mXCaWq2Pkgcjs6E_FmqaZZ-8iF3/view?usp=sharing', 
    thumbnail: '/imgs/026.png', 
   title: 'Fashion Brand@DeeClothing', 
    category: 'commercial-films', 
  },
  {
    id: 100027,
    type: 'video',
    url: 'https://drive.google.com/file/d/1Pnfvb_RrITKfvQFOX1rNgL37_W7RgQFj/view?usp=sharing',
    thumbnail: '/imgs/027.png',
    title: 'Fashion Brand@DeeClothing', 
    category: 'commercial-films',
  },
   { id: 52, type: 'image', url: '/imgs/52thofit.webp', title: 'Party People', category: 'human-moments' }, 
   { id: 53, type: 'image', url: '/imgs/53thofit.webp', title: 'Magician', category: 'human-moments' }, 
   { id: 54, type: 'image', url: '/imgs/54thofit.webp', title: 'Party People', category: 'human-moments' },
      { 
    id: 100028, 
    type: 'video', 
    url: 'https://drive.google.com/file/d/1jSTcu1DNWW1kLp2oRrjoNvsS_N6ElY10/view?usp=sharing', 
    thumbnail: '/imgs/028.png', 
    title: 'Fashion Brand@DeeClothing', 
    category: 'commercial-films',
  },
  { 
    id: 100029, 
    type: 'video', 
    url: 'https://drive.google.com/file/d/1Hg0_rD_lwQic6wZ9Z0P_8PzXLDqgR4MG/view?usp=sharing', 
    thumbnail: '/imgs/029.png', 
    title: 'Fashion Brand@DeeClothing', 
    category: 'commercial-films',
  },
  {
    id: 100030,
    type: 'video',
    url: 'https://drive.google.com/file/d/19RfdjAZO2RKid7c11qPNSVOQn9khWIYV/view?usp=sharing',
    thumbnail: '/imgs/030.png',
    title: 'Fashion Brand@DeeClothing', 
    category: 'commercial-films',
  },
   { id: 55, type: 'image', url: '/imgs/55thofit.webp', title: 'Party People', category: 'human-moments' }, 
   { id: 56, type: 'image', url: '/imgs/56thofit.webp', title: 'Magician', category: 'human-moments' }, 
   { id: 57, type: 'image', url: '/imgs/57thofit.webp', title: 'Party People', category: 'human-moments' },
   { 
    id: 100031, 
    type: 'video', 
    url: 'https://drive.google.com/file/d/1cEygRToEWuiIRPBClVNfT3D95wn4ZGfJ/view?usp=sharing', 
    thumbnail: '/imgs/031.png', 
    title: 'Fashion Brand@DeeClothing', 
    category: 'commercial-films', 
  },
  { 
    id: 100032, 
    type: 'video', 
    url: 'https://www.instagram.com/reel/DFD1kRmTpme/?igsh=MXBra2FsdW9rMTJjZw==', 
    thumbnail: '/imgs/032.png', 
    title: 'The Goodbye to Canada', 
    category: 'music-videos & performance-films', 
  },
  {
    id: 100033,
    type: 'video',
    url: 'https://www.instagram.com/reel/DFWwPSAoDKL/?igsh=dnB5Ym40eTFkdHc2',
    thumbnail: '/imgs/033.png',
    title: 'Coldplay#Ahmedabad',
    category: 'music-videos & performance-films',
  },
   { id: 58, type: 'image', url: '/imgs/58thofit.webp', title: 'Party People', category: 'human-moments' }, 
   { id: 59, type: 'image', url: '/imgs/59thofit.webp', title: 'Magician', category: 'human-moments' }, 
   { id: 60, type: 'image', url: '/imgs/60thofit.webp', title: 'Party People', category: 'human-moments' },
   { id: 61, type: 'image', url: '/imgs/61thofit.webp', title: 'Party People', category: 'human-moments' }, 
   { id: 62, type: 'image', url: '/imgs/62thofit.webp', title: 'Magician', category: 'human-moments' }, 
   { id: 63, type: 'image', url: '/imgs/63thofit.webp', title: 'Party People', category: 'human-moments' },
   { id: 64, type: 'image', url: '/imgs/64thofit.webp', title: 'Party People', category: 'human-moments' }, 
   { id: 65, type: 'image', url: '/imgs/65thofit.webp', title: 'Magician', category: 'human-moments' }, 
   { id: 66, type: 'image', url: '/imgs/66thofit.webp', title: 'Party People', category: 'human-moments' },
   { id: 67, type: 'image', url: '/imgs/67thofit.webp', title: 'Party People', category: 'human-moments' }, 
   { id: 68, type: 'image', url: '/imgs/68thofit.webp', title: 'Magician', category: 'human-moments' }, 
   { id: 69, type: 'image', url: '/imgs/69thofit.webp', title: 'Party People', category: 'human-moments' },
   { id: 70, type: 'image', url: '/imgs/70thofit.webp', title: 'Party People', category: 'human-moments' }, 
   { id: 71, type: 'image', url: '/imgs/71thofit.webp', title: 'Magician', category: 'human-moments' }, 
   { id: 72, type: 'image', url: '/imgs/72thofit.webp', title: 'Party People', category: 'human-moments' },
   { id: 73, type: 'image', url: '/imgs/73thofit.webp', title: 'Party People', category: 'human-moments' }, 
   { id: 74, type: 'image', url: '/imgs/74thofit.webp', title: 'Magician', category: 'human-moments' }, 
   { id: 75, type: 'image', url: '/imgs/75thofit.webp', title: 'Party People', category: 'human-moments' },
   { id: 76, type: 'image', url: '/imgs/76thofit.webp', title: 'Party People', category: 'human-moments' },
   { id: 77, type: 'image', url: '/imgs/77thofit.webp', title: 'Magician', category: 'human-moments' }, 
   { id: 78, type: 'image', url: '/imgs/78thofit.webp', title: 'Party People', category: 'human-moments' },
   { id: 79, type: 'image', url: '/imgs/79thofit.webp', title: 'Party People', category: 'human-moments' }, 
   { id: 80, type: 'image', url: '/imgs/80thofit.webp', title: 'Magician', category: 'human-moments' }, 
   { id: 81, type: 'image', url: '/imgs/81thofit.webp', title: 'Party People', category: 'human-moments' },
   { id: 82, type: 'image', url: '/imgs/82thofit.webp', title: 'Party People', category: 'human-moments' }, 
   { id: 83, type: 'image', url: '/imgs/83thofit.webp', title: 'Magician', category: 'human-moments' }, 
   { id: 84, type: 'image', url: '/imgs/84thofit.webp', title: 'Party People', category: 'human-moments' },
   { id: 85, type: 'image', url: '/imgs/85thofit.webp', title: 'Party People', category: 'human-moments' }, 
   { id: 86, type: 'image', url: '/imgs/86thofit.webp', title: 'Magician', category: 'human-moments' }, 
   { id: 87, type: 'image', url: '/imgs/87thofit.webp', title: 'Party People', category: 'human-moments' },
   { id: 88, type: 'image', url: '/imgs/88thofit.webp', title: 'Party People', category: 'human-moments' }, 
   { id: 89, type: 'image', url: '/imgs/89thofit.webp', title: 'Magician', category: 'human-moments' }, 
   { id: 90, type: 'image', url: '/imgs/90thofit.webp', title: 'Party People', category: 'human-moments' },
   { id: 91, type: 'image', url: '/imgs/91thofit.webp', title: 'Party People', category: 'human-moments' }, 
   { id: 92, type: 'image', url: '/imgs/92thofit.webp', title: 'Magician', category: 'human-moments' }, 
   { id: 93, type: 'image', url: '/imgs/93thofit.webp', title: 'Party People', category: 'human-moments' },
   { id: 94, type: 'image', url: '/imgs/94thofit.webp', title: 'Party People', category: 'human-moments' }, 
   { id: 95, type: 'image', url: '/imgs/95thofit.webp', title: 'Magician', category: 'human-moments' }, 
   { id: 96, type: 'image', url: '/imgs/96thofit.JPG', title: 'Party People', category: 'human-moments' },
   { id: 97, type: 'image', url: '/imgs/97thofit.JPG', title: 'Party People', category: 'human-moments' }, 
   { id: 98, type: 'image', url: '/imgs/98thofit.webp', title: 'Magician', category: 'human-moments' }, 
   { id: 99, type: 'image', url: '/imgs/99thofit.webp', title: 'Party People', category: 'human-moments' },
   { id: 100, type: 'image', url: '/imgs/100thofit.webp', title: 'Party People', category: 'human-moments' }, 
   { id: 101, type: 'image', url: '/imgs/101thofit.webp', title: 'Magician', category: 'human-moments' }, 
   { id: 102, type: 'image', url: '/imgs/102thofit.webp', title: 'Party People', category: 'human-moments' },
   { id: 103, type: 'image', url: '/imgs/103thofit.webp', title: 'Party People', category: 'human-moments' },
   { id: 104, type: 'image', url: '/imgs/104thofit.webp', title: 'Magician', category: 'human-moments' }, 
   { id: 105, type: 'image', url: '/imgs/105thofit.JPG', title: 'Party People', category: 'human-moments' },
{ id: 106, type: 'image', url: '/imgs/106thofit.webp', title: 'Party People', category: 'human-moments' }, 
   { id: 107, type: 'image', url: '/imgs/107thofit.webp', title: 'Magician', category: 'human-moments' }, 
   { id: 108, type: 'image', url: '/imgs/108thofit.webp', title: 'Party People', category: 'human-moments' },
  { id: 109, type: 'image', url: '/imgs/109thofit.webp', title: 'Party People', category: 'human-moments' }, 
   { id: 110, type: 'image', url: '/imgs/110thofit.webp', title: 'Magician', category: 'human-moments' }, 
   { id: 111, type: 'image', url: '/imgs/111thofit.webp', title: 'Party People', category: 'human-moments' },
   { id: 112, type: 'image', url: '/imgs/112thofit.webp', title: 'Party People', category: 'human-moments' }, 
   { id: 113, type: 'image', url: '/imgs/113thofit.webp', title: 'Magician', category: 'human-moments' }, 
   { id: 114, type: 'image', url: '/imgs/114thofit.webp', title: 'Party People', category: 'human-moments' },
   { id: 115, type: 'image', url: '/imgs/115thofit.webp', title: 'Party People', category: 'human-moments' }, 
    { id: 116, type: 'image', url: '/imgs/116thofit.webp', title: 'Magician', category: 'human-moments' },
    { id: 117, type: 'image', url: '/imgs/117thofit.webp', title: 'Party People', category: 'portraits & branding' },
    { id: 118, type: 'image', url: '/imgs/118thofit.webp', title: 'Party People', category: 'portraits & branding' },
    { id: 119, type: 'image', url: '/imgs/119thofit.webp', title: 'Magician', category: 'portraits & branding' },
    { id: 120, type: 'image', url: '/imgs/120thofit.webp', title: 'Party People', category: 'portraits & branding' },
    { id: 121, type: 'image', url: '/imgs/121thofit.webp', title: 'Party People', category: 'portraits & branding' },
    { id: 122, type: 'image', url: '/imgs/122thofit.webp', title: 'Magician', category: 'portraits & branding' },
    { id: 123, type: 'image', url: '/imgs/123thofit.webp', title: 'Party People', category: 'human-moments' },
   
    { id: 124, type: 'image', url: '/imgs/124thofit.webp', title: 'Party People', category: 'human-moments' },
    { id: 125, type: 'image', url: '/imgs/125thofit.webp', title: 'Magician', category: 'human-moments' },
    { id: 126, type: 'image', url: '/imgs/126thofit.webp', title: 'Party People', category: 'portraits & branding' },

    { id: 127, type: 'image', url: '/imgs/127thofit.webp', title: 'Party People', category: 'portraits & branding' },
    { id: 128, type: 'image', url: '/imgs/128thofit.webp', title: 'Magician', category: 'portraits & branding' },
    { id: 129, type: 'image', url: '/imgs/129thofit.webp', title: 'Party People', category: 'human-moments' },

    { id: 130, type: 'image', url: '/imgs/130thofit.webp', title: 'Party People', category: 'portraits & branding' },
    { id: 131, type: 'image', url: '/imgs/131thofit.webp', title: 'Magician', category: 'portraits & branding' },
    { id: 132, type: 'image', url: '/imgs/132thofit.webp', title: 'Party People', category: 'human-moments' },


  ];

  /* ================= CATEGORY LOGIC ================= */

  const photoCategories = Array.from(
    new Set(mediaItems.filter(i => i.type === 'image').map(i => i.category))
  );

  const videoCategories = Array.from(
    new Set(mediaItems.filter(i => i.type === 'video').map(i => i.category))
  );

  /* ================= FILTERED ITEMS ================= */

  const filteredItems = mediaItems.filter(item => {
    if (mode === 'all') return true;
    if (mode === 'photo') return item.type === 'image' && (selectedCategory === 'all' || item.category === selectedCategory);
    if (mode === 'video') return item.type === 'video' && (selectedCategory === 'all' || item.category === selectedCategory);
    return true;
  });

  return (
    <section className="min-h-screen bg-white py-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-gray-900 mb-4">
            MY <span className="text-red-600">WORKS</span>
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto" />
        </div>

        {/* ================= MODE BUTTONS ================= */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {['all', 'photo', 'video'].map(val => (
            <button
              key={val}
              onClick={() => {
                setMode(val as any);
                setSelectedCategory('all');
              }}
              className={`px-6 py-3 rounded-full font-bold uppercase transition-all
                ${mode === val ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}
              `}
            >
              {val === 'photo' ? 'Photography' : val === 'video' ? 'Cinematography' : 'All'}
            </button>
          ))}
        </div>

        {/* ================= CATEGORY FILTERS ================= */}
        {mode !== 'all' && (
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-5 py-2 rounded-full font-semibold uppercase
                ${selectedCategory === 'all' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
              `}
            >
              All
            </button>

            {(mode === 'photo' ? photoCategories : videoCategories).map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full font-semibold uppercase
                  ${selectedCategory === cat ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* ================= RESPONSIVE GRID ================= */}
        <div className="
          grid gap-4
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          xl:grid-cols-4
        ">
          {filteredItems.map(item => (
            <div
              key={item.id}
              onClick={() =>
                item.type === 'video'
                  ? window.open(item.url, '_blank')
                  : setSelectedMedia(item)
              }
              className="group cursor-pointer"
            >
              {/* MEDIA WRAPPER */}
              <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] md:aspect-square overflow-hidden rounded-2xl bg-black">
                <img
                  src={item.type === 'video' ? item.thumbnail : item.url}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-contain sm:object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <div className="absolute bottom-0 p-4">
                    <h3 className="text-white font-bold text-sm">{item.title}</h3>
                    <p className="text-red-400 text-xs uppercase">{item.category}</p>
                  </div>
                </div>

                {/* PLAY ICON */}
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center">
                      <Play className="w-7 h-7 text-white ml-1" fill="white" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= IMAGE MODAL ================= */}
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
            className="max-w-full max-h-[90vh] object-contain rounded-xl"
          />
        </div>
      )}
    </section>
  );
}
