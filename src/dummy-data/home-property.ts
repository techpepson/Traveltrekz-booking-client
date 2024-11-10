import Hotel from '../assets/user/hotel.png'
import Hotel2 from '../assets/user/hotel2.png'
import Hotel3 from '../assets/user/hotel3.png'
import Hotel4 from '../assets/user/hotel4.png'
import Hotel5 from '../assets/user/hotel5.png'
import Hotel6 from '../assets/user/hotel6.png'
import Hotel7 from '../assets/user/hotel7.png'
import Hotel8 from '../assets/user/hotel8.png'
import Hotel9 from '../assets/user/hotel9.png'
import Hotel10 from '../assets/user/hotel10.png'
import Hotel11 from '../assets/user/hotel11.png'
import Hotel12 from '../assets/user/hotel12.png'
import Hotel13 from '../assets/user/hotel13.png'
import Hotel14 from '../assets/user/hotel14.png'


export const properties = {
    latest: [
      { id: 1, title: 'Best Penthouse in City', location: 'Downtown', image: Hotel },
      { id: 2, title: 'Luxury Suite with View', location: 'Beachfront', image: Hotel2 },
      { id: 3, title: 'Modern City Apartment', location: 'Central', image: Hotel3 },
      { id: 4, title: 'Cozy Studio Space', location: 'Arts District', image: Hotel4 },
    ],
    nearby: [
      { id: 5, title: 'Downtown Loft', location: 'City Center', image: Hotel },
      { id: 6, title: 'Historic Building', location: 'Old Town', image: Hotel2 },
      { id: 7, title: 'Modern Complex', location: 'Business District', image: Hotel3 },
      { id: 8, title: 'Riverside Apartment', location: 'Waterfront', image: Hotel4 }
    ],
    topRated: [
      { id: 9, title: 'Luxury Beach House', location: 'Coastal Area', image: Hotel5 },
      { id: 10, title: 'Mountain View Lodge', location: 'Highland', image: Hotel6 },
      { id: 11, title: 'Seaside Villa', location: 'Beach Road', image: Hotel7 },
      { id: 12, title: 'Forest Retreat', location: 'Nature Reserve', image: Hotel8 }
    ]
  }

// Dummy data for property details
export const propertyDetails = [
  {
    id: 1,
    title: 'Well Furnished Apartment',
    location: '100 Smart Street, LA, USA',
    amount: "2000 - 4000",
    description: 'A beautiful and spacious apartment located in the heart of LA, featuring modern amenities and a vibrant neighborhood. With two well-appointed bedrooms, a cozy living area, and a fully equipped kitchen, this apartment is perfect for both relaxation and entertaining. Enjoy nearby parks, restaurants, and shopping, all just a short walk away.',
    features: ['2 Bedrooms', '1 Bathroom', '1 Car', 'Pet Friendly'],
    amenities: ['Kitchen', 'Balcony', 'Air Conditioner', 'Washer', 'Television', 'Wifi'],
    images: [Hotel9, Hotel10, Hotel11, Hotel12],
    coordinates: { lat: 34.0522, lng: -118.2437 },
  },
  {
    id: 2,
    title: 'Luxury Apartment',
    location: '200 Smart Avenue, LA, USA',
    amount: "2000 - 4000",
    description: 'An exquisite luxury apartment with breathtaking views and top-of-the-line finishes. This stunning residence boasts three spacious bedrooms, a gourmet kitchen, and expansive living areas that invite natural light. Located in a prestigious neighborhood, residents have access to exclusive amenities, including a rooftop pool and fitness center.',
    features: ['3 Bedrooms', '2 Bathrooms', '1 Car', 'No Pets'],
    amenities: ['Kitchen', 'Balcony', 'Air Conditioner', 'Washer', 'Television', 'Wifi'],
    images: [Hotel10, Hotel11, Hotel12, Hotel13],
    coordinates: { lat: 34.0525, lng: -118.2438 },
  },
  {
    id: 3,
    title: 'Cozy Cottage',
    location: '300 Nature Lane, LA, USA',
    amount: "2000 - 4000",
    description: 'A charming cottage surrounded by nature, perfect for a peaceful getaway. Featuring two comfortable bedrooms and a lovely garden, this home provides a serene escape from the hustle and bustle of the city. Enjoy cozy evenings by the fireplace and outdoor activities in the nearby nature reserves.',
    features: ['2 Bedrooms', '1 Bathroom', '1 Car', 'Pet Friendly'],
    amenities: ['Kitchen', 'Balcony', 'Air Conditioner', 'Washer', 'Television', 'Wifi'],
    images: [Hotel11, Hotel12, Hotel13, Hotel14],
    coordinates: { lat: 34.0510, lng: -118.2450 },
  },
  {
    id: 4,
    title: 'Modern Loft',
    location: '400 Urban Way, LA, USA',
    amount: "2000 - 4000",
    description: 'Stylish loft in a trendy neighborhood, ideal for those who love the urban lifestyle. This one-bedroom space combines modern design with comfort, featuring high ceilings, large windows, and an open-concept layout. Located close to art galleries, cafes, and nightlife, this loft is perfect for young professionals.',
    features: ['1 Bedroom', '1 Bathroom', '1 Car', 'No Pets'],
    amenities: ['Kitchen', 'Air Conditioner', 'Washer', 'Television', 'Wifi'],
    images: [Hotel12, Hotel13, Hotel14, Hotel9],
    coordinates: { lat: 34.0530, lng: -118.2500 },
  },
  {
    id: 5,
    title: 'Spacious Family Home',
    location: '500 Family Ave, LA, USA',
    amount: "2000 - 4000",
    description: 'A spacious home with a large backyard, perfect for families with children. This residence features four bedrooms, three bathrooms, and an open floor plan ideal for family gatherings. Enjoy the benefits of a safe neighborhood with excellent schools, parks, and recreational facilities just minutes away.',
    features: ['4 Bedrooms', '3 Bathrooms', '2 Cars', 'Pet Friendly'],
    amenities: ['Kitchen', 'Balcony', 'Air Conditioner', 'Washer', 'Television', 'Wifi'],
    images: [Hotel13, Hotel14, Hotel9, Hotel10],
    coordinates: { lat: 34.0500, lng: -118.2430 },
  },
  {
    id: 6,
    title: 'Stylish Studio Apartment',
    location: '600 Studio Blvd, LA, USA',
    amount: "2000 - 4000",
    description: 'Compact and stylish studio in the heart of the city, ideal for young professionals. This well-designed space maximizes functionality with a modern kitchen and cozy living area. Experience city living with easy access to public transportation, shops, and vibrant nightlife just steps away.',
    features: ['1 Bedroom', '1 Bathroom', '0 Cars', 'No Pets'],
    amenities: ['Kitchen', 'Air Conditioner', 'Washer', 'Television', 'Wifi'],
    images: [Hotel14, Hotel9, Hotel10, Hotel11],
    coordinates: { lat: 34.0540, lng: -118.2490 },
  },
  {
    id: 7,
    title: 'Penthouse Suite',
    location: '700 Sky High St, LA, USA',
    amount: "2000 - 4000",
    description: 'Luxury penthouse with panoramic views of the city skyline. This expansive three-bedroom suite features top-tier finishes, a gourmet kitchen, and an oversized terrace perfect for entertaining. Located in a premier building, residents enjoy amenities such as a concierge service, gym, and rooftop lounge.',
    features: ['3 Bedrooms', '3 Bathrooms', '2 Cars', 'Pet Friendly'],
    amenities: ['Kitchen', 'Balcony', 'Air Conditioner', 'Washer', 'Television', 'Wifi'],
    images: [Hotel9, Hotel10, Hotel11, Hotel12],
    coordinates: { lat: 34.0550, lng: -118.2550 },
  },
  {
    id: 8,
    title: 'Seaside Retreat',
    location: '800 Beachfront Ave, LA, USA',
    amount: "2000 - 4000",
    description: 'Beautiful seaside apartment with direct beach access and stunning ocean views. This two-bedroom retreat features an open layout with large windows that invite the sea breeze. Enjoy morning walks on the beach and sunset views from your private balcony, making this the perfect coastal getaway.',
    features: ['2 Bedrooms', '2 Bathrooms', '1 Car', 'Pet Friendly'],
    amenities: ['Kitchen', 'Balcony', 'Air Conditioner', 'Washer', 'Television', 'Wifi'],
    images: [Hotel10, Hotel11, Hotel12, Hotel13],
    coordinates: { lat: 34.0560, lng: -118.2570 },
  },
  {
    id: 9,
    title: 'Charming Townhouse',
    location: '900 Community Rd, LA, USA',
    amount: "2000 - 4000",
    description: 'A lovely townhouse in a friendly neighborhood with great amenities nearby. Featuring three bedrooms and two bathrooms, this home is perfect for families. Enjoy a private backyard for entertaining and a community park just a block away, ideal for outdoor activities and social gatherings.',
    features: ['3 Bedrooms', '2 Bathrooms', '1 Car', 'No Pets'],
    amenities: ['Kitchen', 'Balcony', 'Air Conditioner', 'Washer', 'Television', 'Wifi'],
    images: [Hotel11, Hotel12, Hotel13, Hotel14],
    coordinates: { lat: 34.0570, lng: -118.2580 },
  },
  {
    id: 10,
    title: 'Luxurious Villa',
    location: '1000 Exclusive Ln, LA, USA',
    amount: "2000 - 4000",
    description: 'An extravagant villa offering ultimate privacy and luxury in a prime location. This five-bedroom estate features grand living spaces, a private pool, and beautifully landscaped gardens. Perfect for those seeking a lavish lifestyle, enjoy exclusive amenities and a serene environment just minutes from the city’s best attractions.',
    features: ['5 Bedrooms', '5 Bathrooms', '3 Cars', 'Pet Friendly'],
    amenities: ['Kitchen', 'Balcony', 'Air Conditioner', 'Washer', 'Television', 'Wifi'],
    images: [Hotel12, Hotel13, Hotel14, Hotel9],
    coordinates: { lat: 34.0580, lng: -118.2590 },
  },
];


