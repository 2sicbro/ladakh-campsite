import React from 'react';
import { 
  FaCampground, 
  FaCalendarAlt, 
  FaHiking, 
  FaCompass, 
  FaMountain, 
  FaSuitcase,
  FaBuilding,
  FaFileAlt,
  FaSearch,
  FaCheck,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTimes,
  FaArrowRight,
  FaEye,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaUsers,
  FaMapMarked,
  FaChartLine,
  FaChevronDown
} from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { WiDaySunny } from 'react-icons/wi';

export default function LadakhCampsiteWebsite() {
  const heroImages = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1440&h=600&fit=crop',
    'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1440&h=600&fit=crop',
    'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1440&h=600&fit=crop',
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1440&h=600&fit=crop',
    'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1440&h=600&fit=crop'
  ];

  const campingLocations = [
    { name: 'Pangong Tso Lakeside', capacity: 50, bookings: 32, rating: 4.9 },
    { name: 'Nubra Valley Base', capacity: 80, bookings: 58, rating: 4.8 },
    { name: 'Tso Moriri Camp', capacity: 40, bookings: 28, rating: 4.7 },
    { name: 'Leh Outskirts', capacity: 100, bookings: 75, rating: 4.8 },
    { name: 'Hanle Dark Sky Zone', capacity: 30, bookings: 45, rating: 5.0 }
  ];

  const dayVenueLocations = [
    { name: 'Pangong Beach Area', capacity: 200, bookings: 145 },
    { name: 'Nubra Picnic Grounds', capacity: 150, bookings: 112 },
    { name: 'Magnetic Hill Zone', capacity: 100, bookings: 68 }
  ];

  const guidedHikes = [
    { name: 'Markha Valley', difficulty: 'Moderate', bookings: 45, color: 'bg-yellow-500' },
    { name: 'Chadar Trek', difficulty: 'Difficult', bookings: 28, color: 'bg-red-500' },
    { name: 'Sham Valley', difficulty: 'Easy', bookings: 62, color: 'bg-green-500' },
    { name: 'Stok Kangri', difficulty: 'Difficult', bookings: 18, color: 'bg-red-500' }
  ];

  const services = [
    {
      icon: FaCampground,
      title: 'Camping & Lodging',
      description: 'Experience authentic camping under starlit Himalayan skies with comfortable accommodation options.',
      locations: '5 Locations',
      capacity: '300+ guests',
      bookings: '238 bookings this month'
    },
    {
      icon: FaBuilding,
      title: 'Day Use Venue',
      description: 'Perfect spaces for day visitors to enjoy picnics, photography, and mountain views.',
      locations: '3 Locations',
      capacity: '450 guests',
      bookings: '325 day passes issued'
    },
    {
      icon: FaFileAlt,
      title: 'Passes & Permits',
      description: 'Hassle-free permit services for protected areas and endangered wildlife sanctuaries.',
      locations: '5 Protected Areas',
      capacity: 'Unlimited',
      bookings: '1,250+ processed monthly'
    },
    {
      icon: FaCalendarAlt,
      title: 'Event Organization',
      description: 'Host memorable gatherings, team retreats, and celebrations in pristine mountain settings.',
      locations: '4 Venues',
      capacity: '50-200 per event',
      bookings: '45 events this year'
    },
    {
      icon: FaHiking,
      title: 'Guided Hikes',
      description: 'Expert-led treks through breathtaking trails with experienced local mountaineers.',
      locations: '8 Routes',
      capacity: '4-10 per group',
      bookings: '180+ trekkers monthly'
    },
    {
      icon: FaCompass,
      title: 'Things To Do',
      description: 'Discover adventure activities from rafting to cultural experiences in Ladakh.',
      locations: '12 Activities',
      capacity: 'Varies',
      bookings: '520+ participants'
    },
    {
      icon: FaMountain,
      title: 'Places To See',
      description: 'Explore monasteries, lakes, and iconic landmarks with our curated travel guides.',
      locations: '15 Sites',
      capacity: 'Open access',
      bookings: '890+ visitors guided'
    },
    {
      icon: FaSuitcase,
      title: 'Trip Information',
      description: 'Complete travel planning resources including packing lists and altitude tips.',
      locations: 'Comprehensive',
      capacity: 'All travelers',
      bookings: '2,100+ downloads'
    }
  ];

  const accommodations = [
    {
      name: 'Luxury Dome Tents',
      image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=380&h=240&fit=crop',
      capacity: '2-4 persons',
      price: '₹3,500/night',
      locations: 3,
      monthlyBookings: 67,
      occupancy: 85
    },
    {
      name: 'Alpine Cottages',
      image: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=380&h=240&fit=crop',
      capacity: '4-6 persons',
      price: '₹5,000/night',
      locations: 2,
      monthlyBookings: 42,
      occupancy: 78
    },
    {
      name: 'Traditional Tents',
      image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=380&h=240&fit=crop',
      capacity: '2-3 persons',
      price: '₹2,000/night',
      locations: 5,
      monthlyBookings: 98,
      occupancy: 92
    },
    {
      name: 'Group Camps',
      image: 'https://images.unsplash.com/photo-1445308394109-4ec2920981b1?w=380&h=240&fit=crop',
      capacity: '8-10 persons',
      price: '₹8,000/night',
      locations: 4,
      monthlyBookings: 28,
      occupancy: 65
    },
    {
      name: 'Premium Yurts',
      image: 'https://images.unsplash.com/photo-1517824806704-9040b037703b?w=380&h=240&fit=crop',
      capacity: '2-4 persons',
      price: '₹4,500/night',
      locations: 3,
      monthlyBookings: 54,
      occupancy: 81
    }
  ];

  return (
    <div className="w-[1440px] min-h-[900px] bg-white font-['Poppins']">
      {/* Header Navigation Bar with Dropdown Menus */}
      <div className="w-full min-h-[80px] bg-white shadow-md flex items-center justify-between px-16 relative z-50">
        <div className="w-[150px] h-[50px] border-2 border-[#1B7F79] rounded-lg flex items-center justify-center">
          <span className="text-base text-[#1B7F79] font-semibold">Ladakh Camps</span>
        </div>
        <div className="flex items-center gap-10">
          <div className="relative group">
            <div className="flex items-center gap-2 text-[#2C3E50] text-base font-medium cursor-pointer transition-colors hover:text-[#1B7F79]">
              <span>Home</span>
            </div>
          </div>
          
          <div className="relative group">
            <div className="flex items-center gap-2 text-[#2C3E50] text-base font-medium cursor-pointer transition-colors hover:text-[#1B7F79]">
              <span>Experiences</span>
              <FaChevronDown className="w-3 h-3" />
            </div>
            <div className="absolute top-full left-0 w-[420px] bg-white shadow-xl rounded-lg p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all mt-2 grid grid-cols-2 gap-4">
              {services.slice(0, 4).map((service, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                  <service.icon className="w-6 h-6 text-[#1B7F79] mt-1" />
                  <div>
                    <div className="text-[#2C3E50] text-sm font-semibold mb-1">{service.title}</div>
                    <div className="text-[#6C757D] text-xs">{service.locations}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative group">
            <div className="flex items-center gap-2 text-[#2C3E50] text-base font-medium cursor-pointer transition-colors hover:text-[#1B7F79]">
              <span>Accommodations</span>
              <FaChevronDown className="w-3 h-3" />
            </div>
            <div className="absolute top-full left-0 w-[360px] bg-white shadow-xl rounded-lg p-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all mt-2">
              {accommodations.slice(0, 3).map((acc, idx) => (
                <div key={idx} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors mb-2">
                  <img src={acc.image} alt={acc.name} className="w-16 h-12 object-cover rounded" />
                  <div className="flex-1">
                    <div className="text-[#2C3E50] text-sm font-semibold">{acc.name}</div>
                    <div className="text-[#E67E22] text-xs font-bold">{acc.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative group">
            <div className="flex items-center gap-2 text-[#2C3E50] text-base font-medium cursor-pointer transition-colors hover:text-[#1B7F79]">
              <span>Permits</span>
              <FaChevronDown className="w-3 h-3" />
            </div>
            <div className="absolute top-full left-0 w-[320px] bg-white shadow-xl rounded-lg p-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all mt-2">
              {['Hemis National Park', 'Changthang Sanctuary', 'Tso Moriri Protected Area', 'Nubra Valley Permits', 'Pangong Tso Entry'].map((permit, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                  <span className="text-[#2C3E50] text-sm">{permit}</span>
                  <FaArrowRight className="w-3 h-3 text-[#1B7F79]" />
                </div>
              ))}
            </div>
          </div>
          
          <span className="text-[#2C3E50] text-base font-medium cursor-pointer transition-colors hover:text-[#1B7F79]">About</span>
          <span className="text-[#2C3E50] text-base font-medium cursor-pointer transition-colors hover:text-[#1B7F79]">Contact</span>
          
          <button className="border-2 border-[#1B7F79] text-[#1B7F79] px-6 py-2.5 rounded-lg font-medium transition-all hover:bg-[#1B7F79] hover:text-white">
            Log In
          </button>
          <button className="bg-[#1B7F79] text-white px-6 py-2.5 rounded-lg font-medium transition-all hover:bg-[#156B66]">
            Sign Up
          </button>
        </div>
      </div>

      {/* Hero Section with Image Slider */}
      <div className="w-full min-h-[600px] relative overflow-hidden">
        <img 
          src={heroImages[0]}
          alt="Ladakh Mountains" 
          className="w-full h-full min-h-[600px] object-cover absolute"
        />
        <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-black/40"></div>
        
        {/* Slider Navigation Arrows */}
        <button className="absolute left-8 top-1/2 -translate-y-1/2 w-[60px] h-[60px] bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all z-10">
          <FaChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button className="absolute right-8 top-1/2 -translate-y-1/2 w-[60px] h-[60px] bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all z-10">
          <FaChevronRight className="w-6 h-6 text-white" />
        </button>
        
        <div className="relative w-full h-full min-h-[600px] flex flex-col items-center justify-center gap-6 px-4">
          <h1 className="text-white text-[64px] font-bold text-center" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
            Discover Ladakh Wilderness
          </h1>
          <p className="text-white text-[28px] font-light text-center">
            Your Gateway to Himalayan Adventures
          </p>
          <div className="w-[600px] h-[60px] bg-white rounded-[30px] flex items-center px-6 mt-4">
            <input 
              type="text" 
              placeholder="Search camps, activities, destinations..." 
              className="flex-1 text-lg text-gray-600 outline-none"
            />
            <button className="bg-[#1B7F79] text-white px-8 py-3 rounded-full font-medium hover:bg-[#156B66] transition-colors">
              <FaSearch className="w-5 h-5" />
            </button>
          </div>
          <div className="flex gap-6 mt-12">
            {[
              { number: '250+', label: 'Campsites' },
              { number: '50+', label: 'Guided Treks' },
              { number: 'Year-round', label: 'Access' }
            ].map((stat, index) => (
              <div key={index} className="w-[180px] h-[120px] bg-white rounded-xl flex flex-col items-center justify-center gap-2 shadow-lg">
                <span className="text-[#1B7F79] text-3xl font-bold">{stat.number}</span>
                <span className="text-[#2C3E50] text-base font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
          
          {/* Slider Progress Bar and Dots */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
            <div className="flex gap-2">
              {heroImages.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`w-3 h-3 rounded-full cursor-pointer transition-all ${idx === 0 ? 'bg-[#1B7F79] w-8' : 'bg-white/50'}`}
                />
              ))}
            </div>
            <div className="w-[200px] h-1 bg-white/30 rounded-full overflow-hidden">
              <div className="w-[40%] h-full bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Features Grid Section with Statistics */}
      <div className="w-full min-h-[580px] bg-[#FAF8F3] px-16 py-20">
        <h2 className="text-[#2C3E50] text-[42px] font-semibold text-center mb-16">Our Experiences</h2>
        <div className="grid grid-cols-4 gap-5">
          {services.map((service, index) => (
            <div key={index} className="w-[320px] min-h-[360px] bg-white rounded-2xl p-6 flex flex-col items-center text-center cursor-pointer transition-all hover:shadow-xl hover:-translate-y-1">
              <service.icon className="w-20 h-20 text-[#1B7F79]" />
              <h3 className="text-[#2C3E50] text-[22px] font-semibold mt-5 mb-3">{service.title}</h3>
              <p className="text-[#6C757D] text-[15px] leading-relaxed mb-4 flex-1">{service.description}</p>
              
              {/* Enhanced Statistics */}
              <div className="w-full space-y-2 mb-4">
                <div className="flex items-center gap-2 text-[#2C3E50] text-xs">
                  <FaMapMarked className="w-3 h-3 text-[#1B7F79]" />
                  <span>{service.locations}</span>
                </div>
                <div className="flex items-center gap-2 text-[#2C3E50] text-xs">
                  <FaUsers className="w-3 h-3 text-[#1B7F79]" />
                  <span>Up to {service.capacity}</span>
                </div>
                <div className="flex items-center gap-2 text-[#2C3E50] text-xs">
                  <FaChartLine className="w-3 h-3 text-[#E67E22]" />
                  <span>{service.bookings}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-[#1B7F79] text-base font-medium">
                <span>Explore Details</span>
                <FaArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Camping & Lodging Detail Modal with Ladakh Locations */}
      <div className="w-full min-h-[750px] bg-black/60 flex items-center justify-center px-16 py-12">
        <div className="w-full max-w-[1200px] min-h-[750px] bg-white rounded-2xl overflow-hidden relative">
          <button className="absolute top-6 right-6 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors z-10">
            <FaTimes className="w-5 h-5 text-gray-600" />
          </button>
          
          <div className="flex">
            <div className="w-[60%] min-h-[750px]">
              <img 
                src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&h=750&fit=crop"
                alt="Camping & Lodging"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="w-[40%] p-10 flex flex-col overflow-y-auto">
              <h2 className="text-[#2C3E50] text-[36px] font-semibold mb-4">Camping & Lodging in Ladakh</h2>
              <p className="text-[#6C757D] text-base leading-relaxed mb-6">
                Experience authentic camping across Ladakh's most breathtaking locations with premium facilities and stunning views.
              </p>
              
              <h3 className="text-[#2C3E50] text-xl font-semibold mb-4">Available Locations</h3>
              <div className="space-y-3 mb-6">
                {campingLocations.map((location, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-lg p-4 border-l-4 border-[#1B7F79]">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-[#2C3E50] font-semibold text-base">{location.name}</h4>
                      <div className="flex items-center gap-1">
                        <FaStar className="w-4 h-4 text-yellow-500" />
                        <span className="text-[#2C3E50] text-sm font-bold">{location.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-[#6C757D]">
                      <div className="flex items-center gap-1">
                        <FaUsers className="w-3 h-3 text-[#1B7F79]" />
                        <span>Capacity: {location.capacity}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaCalendarAlt className="w-3 h-3 text-[#E67E22]" />
                        <span>{location.bookings} bookings</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <h3 className="text-[#2C3E50] text-xl font-semibold mb-4">Aggregate Statistics</h3>
              <div className="bg-[#E8F5E9] rounded-lg p-5 mb-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[#2C3E50] text-sm">Total Capacity</span>
                    <span className="text-[#1B7F79] font-bold text-lg">300+ guests</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#2C3E50] text-sm">Monthly Bookings</span>
                    <span className="text-[#E67E22] font-bold text-lg">238 bookings</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#2C3E50] text-sm">Average Rating</span>
                    <span className="text-yellow-600 font-bold text-lg">4.8★ (450 reviews)</span>
                  </div>
                  <div className="pt-2 border-t border-gray-300">
                    <span className="text-[#6C757D] text-xs">Peak Season: Limited spots June-August</span>
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-[#1B7F79] text-white py-4 rounded-lg font-semibold text-lg hover:bg-[#156B66] transition-colors">
                Book This Experience
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Login Modal with Google Sign-In */}
      <div className="w-full min-h-[720px] bg-black/50 flex items-center justify-center px-4 py-12">
        <div className="w-[520px] min-h-[720px] bg-white rounded-2xl p-10 relative">
          <button className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-gray-100 rounded-full transition-colors">
            <FaTimes className="w-5 h-5 text-gray-600" />
          </button>
          
          <h2 className="text-[#2C3E50] text-[32px] font-semibold text-center mb-3">Welcome Back</h2>
          <p className="text-[#6C757D] text-base font-light text-center mb-8">Sign in to continue your adventure</p>
          
          {/* Google Sign-In Button - Prominent */}
          <button className="w-full min-h-[64px] bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center gap-3 cursor-pointer hover:bg-gray-50 transition-all hover:border-gray-400 mb-6 shadow-sm">
            <FcGoogle className="w-8 h-8" />
            <span className="text-[#2C3E50] text-base font-medium">Continue with Google</span>
          </button>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-[1px] bg-gray-300"></div>
            <span className="text-gray-400 text-sm">OR</span>
            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>
          
          <div className="space-y-4 mb-4">
            <input 
              type="email"
              placeholder="Email address"
              className="w-full h-[48px] border-2 border-gray-300 rounded-lg px-4 text-base text-[#2C3E50] outline-none focus:border-[#1B7F79] transition-colors"
            />
            
            <div className="relative">
              <input 
                type="password"
                placeholder="Password"
                className="w-full h-[48px] border-2 border-gray-300 rounded-lg px-4 pr-12 text-base text-[#2C3E50] outline-none focus:border-[#1B7F79] transition-colors"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <FaEye className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="text-right mb-6">
            <span className="text-[#1B7F79] text-sm cursor-pointer hover:underline">Forgot Password?</span>
          </div>
          
          <button className="w-full h-[52px] bg-[#1B7F79] text-white rounded-lg font-semibold text-base hover:bg-[#156B66] transition-colors mb-6">
            Sign In
          </button>
          
          <p className="text-center text-[#6C757D] text-sm">
            New to Ladakh Camps? <span className="text-[#1B7F79] font-semibold cursor-pointer hover:underline">Sign Up</span>
          </p>
        </div>
      </div>

      {/* Sign Up Modal with Google Sign-Up */}
      <div className="w-full min-h-[820px] bg-black/50 flex items-center justify-center px-4 py-12">
        <div className="w-[520px] min-h-[820px] bg-white rounded-2xl p-10 relative">
          <button className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-gray-100 rounded-full transition-colors">
            <FaTimes className="w-5 h-5 text-gray-600" />
          </button>
          
          <h2 className="text-[#2C3E50] text-[32px] font-semibold text-center mb-3">Create Account</h2>
          <p className="text-[#6C757D] text-base font-light text-center mb-8">Start your Himalayan journey today</p>
          
          {/* Google Sign-Up Button - Prominent */}
          <button className="w-full min-h-[64px] bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center gap-3 cursor-pointer hover:bg-gray-50 transition-all hover:border-gray-400 mb-6 shadow-sm">
            <FcGoogle className="w-8 h-8" />
            <span className="text-[#2C3E50] text-base font-medium">Sign up with Google</span>
          </button>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-[1px] bg-gray-300"></div>
            <span className="text-gray-400 text-sm">OR</span>
            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>
          
          <div className="space-y-4 mb-4">
            <input 
              type="text"
              placeholder="Full Name"
              className="w-full h-[48px] border-2 border-gray-300 rounded-lg px-4 text-base text-[#2C3E50] outline-none focus:border-[#1B7F79] transition-colors"
            />
            
            <input 
              type="email"
              placeholder="Email address"
              className="w-full h-[48px] border-2 border-gray-300 rounded-lg px-4 text-base text-[#2C3E50] outline-none focus:border-[#1B7F79] transition-colors"
            />
            
            <div>
              <div className="relative">
                <input 
                  type="password"
                  placeholder="Password"
                  className="w-full h-[48px] border-2 border-gray-300 rounded-lg px-4 pr-12 text-base text-[#2C3E50] outline-none focus:border-[#1B7F79] transition-colors"
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <FaEye className="w-5 h-5" />
                </button>
              </div>
              <div className="mt-2 flex gap-1">
                <div className="flex-1 h-1 bg-green-500 rounded"></div>
                <div className="flex-1 h-1 bg-green-500 rounded"></div>
                <div className="flex-1 h-1 bg-gray-200 rounded"></div>
              </div>
              <span className="text-xs text-green-600 mt-1">Medium strength</span>
            </div>
            
            <div className="relative">
              <input 
                type="password"
                placeholder="Confirm Password"
                className="w-full h-[48px] border-2 border-gray-300 rounded-lg px-4 pr-12 text-base text-[#2C3E50] outline-none focus:border-[#1B7F79] transition-colors"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <FaEye className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="flex items-start gap-3 mb-6">
            <input 
              type="checkbox" 
              className="w-5 h-5 mt-0.5 accent-[#1B7F79] cursor-pointer"
            />
            <span className="text-[#6C757D] text-sm leading-relaxed">
              I agree to the <span className="text-[#1B7F79] cursor-pointer hover:underline">Terms of Service</span> and <span className="text-[#1B7F79] cursor-pointer hover:underline">Privacy Policy</span>
            </span>
          </div>
          
          <button className="w-full h-[52px] bg-[#1B7F79] text-white rounded-lg font-semibold text-base hover:bg-[#156B66] transition-colors mb-6">
            Create Account
          </button>
          
          <p className="text-center text-[#6C757D] text-sm">
            Already have an account? <span className="text-[#1B7F79] font-semibold cursor-pointer hover:underline">Log In</span>
          </p>
        </div>
      </div>

      {/* Day Venue Detail with Location Stats */}
      <div className="w-full min-h-[650px] bg-white px-16 py-20">
        <div className="max-w-[1200px] mx-auto bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl overflow-hidden">
          <div className="flex">
            <div className="w-[50%] p-12">
              <h2 className="text-[#2C3E50] text-[36px] font-semibold mb-4">Day Use Venues</h2>
              <p className="text-[#6C757D] text-base leading-relaxed mb-6">
                Perfect locations for day visitors with parking, amenities, and stunning photography opportunities.
              </p>
              
              <h3 className="text-[#2C3E50] text-lg font-semibold mb-4">Available Locations</h3>
              <div className="space-y-3 mb-6">
                {dayVenueLocations.map((venue, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-[#2C3E50] font-semibold text-sm">{venue.name}</h4>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-[#6C757D]">
                      <div className="flex items-center gap-1">
                        <FaUsers className="w-3 h-3 text-[#1B7F79]" />
                        <span>Cap: {venue.capacity}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaChartLine className="w-3 h-3 text-[#E67E22]" />
                        <span>{venue.bookings} passes</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-white rounded-lg p-5">
                <div className="text-[#2C3E50] font-semibold mb-2">Total Statistics</div>
                <div className="text-[#E67E22] text-2xl font-bold mb-1">325 Day Passes</div>
                <div className="text-[#6C757D] text-sm">Issued this month across all venues</div>
              </div>
            </div>
            <div className="w-[50%]">
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=650&fit=crop"
                alt="Day Venue"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Guided Hikes with Routes Statistics */}
      <div className="w-full min-h-[450px] bg-[#FAF8F3] px-16 py-20">
        <h2 className="text-[#2C3E50] text-[42px] font-semibold text-center mb-4">Guided Hiking Adventures</h2>
        <p className="text-[#6C757D] text-lg text-center mb-12 max-w-2xl mx-auto">
          Join certified mountain guides on expertly planned treks with proper safety equipment and small group sizes
        </p>
        
        <div className="grid grid-cols-4 gap-6 max-w-6xl mx-auto">
          {guidedHikes.map((hike, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className={`${hike.color} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                  {hike.difficulty}
                </span>
                <FaHiking className="w-8 h-8 text-[#1B7F79]" />
              </div>
              <h3 className="text-[#2C3E50] text-lg font-semibold mb-4">{hike.name}</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-[#6C757D]">
                  <FaUsers className="w-4 h-4 text-[#1B7F79]" />
                  <span>4-10 per group</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#E67E22] font-semibold">
                  <FaChartLine className="w-4 h-4" />
                  <span>{hike.bookings} bookings</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="text-[#2C3E50] text-3xl font-bold mb-2">180+ Trekkers</div>
          <div className="text-[#6C757D] text-lg">Successfully guided this month with 15 certified guides</div>
        </div>
      </div>

      {/* Accommodation Showcase */}
      <div className="w-full min-h-[500px] bg-white px-16 py-20">
        <h2 className="text-[#2C3E50] text-[42px] font-semibold mb-12">Stay in Comfort</h2>
        <div className="flex gap-6 overflow-x-auto pb-4">
          {accommodations.map((accommodation, index) => (
            <div key={index} className="min-w-[380px] min-h-[400px] bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer group relative transition-all hover:shadow-xl">
              <img 
                src={accommodation.image} 
                alt={accommodation.name} 
                className="w-full h-[240px] object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-[240px] bg-[#1B7F79]/0 group-hover:bg-[#1B7F79]/80 transition-all flex items-center justify-center">
                <button className="opacity-0 group-hover:opacity-100 bg-white text-[#1B7F79] px-8 py-3 rounded-lg font-semibold transition-all">
                  View Details
                </button>
              </div>
              <div className="p-5">
                <h3 className="text-[#2C3E50] text-xl font-semibold mb-3">{accommodation.name}</h3>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[#6C757D] text-sm">{accommodation.capacity}</span>
                  <span className="text-[#E67E22] text-xl font-bold">{accommodation.price}</span>
                </div>
                <div className="space-y-2 pt-3 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-xs text-[#6C757D]">
                    <FaMapMarked className="w-3 h-3 text-[#1B7F79]" />
                    <span>Available at {accommodation.locations} locations</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#E67E22] font-semibold">
                    <FaCalendarAlt className="w-3 h-3" />
                    <span>{accommodation.monthlyBookings} bookings this month</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-green-600 font-semibold">
                    <FaChartLine className="w-3 h-3" />
                    <span>{accommodation.occupancy}% occupancy rate</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <div className="w-full min-h-[280px] bg-[#2C3E50] text-white px-16 py-12">
        <div className="grid grid-cols-4 gap-12 mb-8">
          <div>
            <div className="text-2xl font-bold text-[#1B7F79] mb-4">Ladakh Camps</div>
            <p className="text-white/80 text-[15px] leading-relaxed font-light">
              Experience the untouched beauty of Ladakh with our premium camping and adventure services. Your Himalayan journey starts here.
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {['Home', 'Experiences', 'Accommodations', 'Permits', 'About', 'Contact'].map((link, index) => (
                <div key={index} className="text-white/80 text-base cursor-pointer hover:text-white transition-colors">{link}</div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="w-4 h-4 mt-1 text-[#1B7F79]" />
                <span className="text-white/80 text-[15px]">Leh, Ladakh, India 194101</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="w-4 h-4 text-[#1B7F79]" />
                <span className="text-white/80 text-[15px]">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="w-4 h-4 text-[#1B7F79]" />
                <span className="text-white/80 text-[15px]">info@ladakhcamps.com</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
                <FaFacebookF className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
                <FaInstagram className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
                <FaYoutube className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 pt-6 text-center">
          <p className="text-white/60 text-sm font-light">© 2024 Ladakh Campsites. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}