

import './App.css'

import {
  Star,
  MapPin,
  Phone,
  Clock,
  MessageSquare,
  ShieldCheck,
  HeartPulse,
  UserCheck,
  ChevronRight,
  // Menu,
  // X,
  Award,
  Smile,
} from "lucide-react";
import { reviews, stats, type Review } from "./data/reviews";
import {useState} from "react";

import TuscanyDentalLogo from "./assets/TuscanyDental.png";
import * as React from "react";


const Navbar = () => (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <HeartPulse className="text-blue-500" size={28} />
            </div>
            <span className="text-lg sm:text-xl font-bold text-gray-900">
            Tuscany Dental
          </span>
          </div>
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <a
                href="#services"
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              Services
            </a>
            <a
                href="#about"
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              About
            </a>
            <a
                href="#reviews"
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              Reviews
            </a>
            <a
                href="#contact"
                className="bg-blue-600 text-white px-4 lg:px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors"
            >
              Book Appointment
            </a>
          </div>
          <div className="md:hidden">
           menu
          </div>
        </div>
      </div>
    </nav>
);

const Hero = () => (
    <section className="relative bg-gradient-to-br from-blue-50 to-white py-12 sm:py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
              <Star size={16} fill="currentColor" />
              4.8 Rated on Google
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-tight mb-4 sm:mb-6">
              Your Smile's Home in{" "}
              <span className="text-blue-600">NW Calgary</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
              Professional, gentle, and comprehensive dental care for your whole
              family. Experience the warmth of Tuscany Dental Centre.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <button className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-bold hover:bg-blue-700 shadow-lg transition-all hover:scale-105">
                Schedule a Visit
              </button>
              <button className="bg-white text-gray-700 px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-bold hover:bg-gray-50 shadow-md border border-gray-200 transition-all hover:scale-105">
                View Services
              </button>
            </div>
          </div>
          <div className="flex-1 w-full relative">
            <div className="w-full aspect-square sm:aspect-video lg:aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl relative">

              <img src={TuscanyDentalLogo} alt="Tuscany Dental" className="w-full h-full object-cover" />

              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 bg-white/95 backdrop-blur-md p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl border border-white/20">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                        <div
                            key={i}
                            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center"
                        >
                          <UserCheck
                              size={16}
                              className="text-blue-600 sm:w-[18px] sm:h-[18px]"
                          />
                        </div>
                    ))}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm sm:text-base">
                      Over 600+ Happy Patients
                    </p>
                    <div className="flex gap-0.5 sm:gap-1 text-yellow-400">
                      {[1, 2, 3, 4, 5].map(() => (

                          <Star size={16} fill="currentColor" />

                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
);

const Services = () => {
  const serviceList = [
    {
      title: "General Dentistry",
      desc: "Routine checkups, cleanings, and preventative care.",
      icon: ShieldCheck,
    },
    {
      title: "Invisalign",
      desc: "Discreetly straighten your teeth with clear aligners.",
      icon: Star,
    },
    {
      title: "Wisdom Teeth",
      desc: "Expert extraction with a focus on patient comfort.",
      icon: HeartPulse,
    },
    {
      title: "Kids Dentistry",
      desc: "Gentle care designed specifically for our youngest patients.",
      icon: UserCheck,
    },
  ];

  return (
      <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Complete Dental Solutions
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
              From preventative maintenance to advanced procedures, we offer a
              full range of services to keep your smile healthy.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {serviceList.map((service, idx) => (
                <div
                    key={idx}
                    className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-blue-50 hover:bg-blue-100 transition-all group hover:scale-105 cursor-pointer"
                >
                  <div className="bg-white w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center text-blue-600 mb-4 sm:mb-6 shadow-sm group-hover:scale-110 transition-transform">
                    <service.icon size={24} className="sm:w-7 sm:h-7" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};

const VisualShowcase = () => (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left side - Images */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="col-span-2 aspect-video rounded-2xl overflow-hidden shadow-lg">
              <img
                  src="https://raw.createusercontent.com/4b46a97a-afea-471b-954e-64dc2a7a20a5/"
                  alt="Modern Dental Equipment"
                  className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
              <img
                  src="https://raw.createusercontent.com/e934e8e0-cd89-4505-9c65-073b8b678c7a/"
                  alt="Happy Patient"
                  className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
              <img
                  src="https://raw.createusercontent.com/03ffcee2-0659-4d29-8d31-c1b290938239/"
                  alt="Professional Dentist"
                  className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
              <Award size={16} />
              Premium Care
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              State-of-the-Art Facility, Old-Fashioned Care
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              We combine cutting-edge technology with the personal touch that
              makes every visit comfortable. Our modern equipment ensures
              precision and efficiency, while our experienced team ensures you
              feel like family.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-2 rounded-lg shrink-0">
                  <ShieldCheck className="text-blue-600" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">
                    Latest Technology
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Digital X-rays, 3D imaging, and advanced diagnostic tools
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-2 rounded-lg shrink-0">
                  <Smile className="text-blue-600" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">
                    Comfort First
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Gentle techniques and a calming atmosphere for anxiety-free
                    visits
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
);


const ReviewsSection = () => (
    <section id="reviews" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            What Our Patients Say
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="flex text-yellow-400">
              {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                      key={i}
                      size={20}
                      fill={i <= 4 ? "currentColor" : "currentColor"}
                      className={`${i === 5 ? "text-gray-300" : ""} sm:w-6 sm:h-6`}
                  />
              ))}
            </div>
            <span className="text-xl sm:text-2xl font-bold text-gray-900">
            {stats.averageRating}
          </span>
            <span className="text-sm sm:text-base text-gray-500">
            ({stats.totalReviews} Google reviews)
          </span>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12">
            {stats.categories.slice(0, 6).map((cat, idx) => (
                <span
                    key={idx}
                    className="bg-white px-3 py-1.5 rounded-full border border-gray-200 text-xs sm:text-sm text-gray-600 font-medium"
                >
              {cat.label} ({cat.count})
            </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <button className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-all flex items-center gap-2 mx-auto text-sm sm:text-base hover:scale-105">
            Read More on Google <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
);


type ReviewCardProps = {
  review: Review;
};

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
      <article className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
            {review.avatar ? (
                <img
                    src={review.avatar}
                    alt={review.author}
                    className="w-full h-full rounded-full object-cover"
                />
            ) : (
                <UserCheck size={20} className="text-blue-600" />
            )}
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="font-bold text-gray-900 text-sm sm:text-base truncate">
              {review.author}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500">{review.date}</p>
          </div>
        </div>

        <div className="flex items-center gap-1 text-yellow-400 mb-3">
          {[1, 2, 3, 4, 5].map((star) => (
              <Star
                  key={star}
                  size={16}
                  fill={star <= review.rating ? "currentColor" : "none"}
                  className={star <= review.rating ? "text-yellow-400" : "text-gray-300"}
              />
          ))}
        </div>

        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          {review.text}
        </p>
      </article>
  );
};

const Footer = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    service: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/book-appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit appointment request");
      }

      setSubmitStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        preferredDate: "",
        preferredTime: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
      <footer
          id="contact"
          className="bg-gray-900 text-white pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Booking Form Section */}
          <div className="mb-12 sm:mb-16 bg-gray-800 rounded-2xl p-6 sm:p-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
              Book Your Appointment
            </h3>

            {submitStatus === "success" && (
                <div className="bg-green-500 text-white px-4 py-3 rounded-lg mb-6 text-center">
                  Thank you! We've received your appointment request and will
                  contact you soon to confirm.
                </div>
            )}

            {submitStatus === "error" && (
                <div className="bg-red-500 text-white px-4 py-3 rounded-lg mb-6 text-center">
                  Sorry, there was an error submitting your request. Please try
                  again or call us directly.
                </div>
            )}

            <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div>
                <label className="block text-sm font-medium mb-1">
                  First Name
                </label>
                <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                    }
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Last Name
                </label>
                <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                    }
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Preferred Date
                </label>
                <input
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={(e) =>
                        setFormData({ ...formData, preferredDate: e.target.value })
                    }
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Preferred Time
                </label>
                <select
                    required
                    value={formData.preferredTime}
                    onChange={(e) =>
                        setFormData({ ...formData, preferredTime: e.target.value })
                    }
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                >
                  <option value="">Select time</option>
                  <option value="8:00 AM">8:00 AM</option>
                  <option value="9:00 AM">9:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="1:00 PM">1:00 PM</option>
                  <option value="2:00 PM">2:00 PM</option>
                  <option value="3:00 PM">3:00 PM</option>
                  <option value="4:00 PM">4:00 PM</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">
                  Service Needed
                </label>
                <select
                    required
                    value={formData.service}
                    onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                >
                  <option value="">Select service</option>
                  <option value="General Checkup">General Checkup</option>
                  <option value="Cleaning">Cleaning</option>
                  <option value="Invisalign">Invisalign</option>
                  <option value="Wisdom Teeth">Wisdom Teeth</option>
                  <option value="Kids Dentistry">Kids Dentistry</option>
                  <option value="Emergency">Emergency</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">
                  Additional Message (Optional)
                </label>
                <textarea
                    value={formData.message}
                    onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                    }
                    rows={3}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Submitting..." : "Request Appointment"}
                </button>
              </div>
            </form>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
            <div>
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <HeartPulse className="text-blue-500" size={28} />
                <span className="text-xl sm:text-2xl font-bold">
                Tuscany Dental
              </span>
              </div>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4 sm:mb-6">
                Providing NW Calgary with exceptional dental care for over 20
                years. Your comfort is our priority.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <MessageSquare size={18} />
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-400">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a
                      href="#services"
                      className="hover:text-blue-400 transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                      href="#about"
                      className="hover:text-blue-400 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                      href="#reviews"
                      className="hover:text-blue-400 transition-colors"
                  >
                    Patient Reviews
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">
                Contact Us
              </h4>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start gap-3 text-sm sm:text-base text-gray-400">
                  <MapPin className="text-blue-500 shrink-0 mt-1" size={18} />
                  <span>Tuscany NW Calgary, AB</span>
                </li>
                <li className="flex items-center gap-3 text-sm sm:text-base text-gray-400">
                  <Phone className="text-blue-500 shrink-0" size={18} />
                  <span>(403) 555-0123</span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-gray-400">
                  <Clock className="text-blue-500 shrink-0 mt-1" size={18} />
                  <span>Mon - Fri: 8:00 AM - 5:00 PM</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">
                Book Online
              </h4>
              <p className="text-gray-400 mb-4 sm:mb-6 text-xs sm:text-sm">
                Ready for a healthier smile? Book your next appointment online in
                seconds.
              </p>
              <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-all text-sm sm:text-base hover:scale-105">
                Request Appointment
              </button>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-gray-500 text-xs sm:text-sm">
            <p>&copy; 2026 Tuscany Dental Centre. All rights reserved.</p>
          </div>
        </div>
      </footer>
  );
};

function App() {


  return (
      <>
      <Navbar />
      <Hero />
      <Services />
      <VisualShowcase />
        <section
            id="about"
            className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-600 to-blue-700 relative overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-12 text-white">
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                  Trusted by the Community for Generations
                </h2>
                <p className="text-blue-100 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed">
                  At Tuscany Dental, we believe dentistry is about more than just
                  teeth—it's about people. Our clinic was founded on the
                  principles of integrity, honesty, and exceptional clinical care.
                </p>
                <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-md mx-auto lg:mx-0">
                  <div className="bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/20">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">
                      20+
                    </h3>
                    <p className="text-blue-200 text-xs sm:text-sm">
                      Years of Service
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/20">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">
                      4.8
                    </h3>
                    <p className="text-blue-200 text-xs sm:text-sm">
                      Google Rating
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full max-w-lg">
                <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-2xl text-gray-900">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                    Meet Dr. Cam Brauer
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 italic leading-relaxed">
                    "Our goal is to make every patient feel like family. We take
                    the time to listen, explain, and care for each individual with
                    the same gentle touch we'd want for our own children."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                      <UserCheck size={28} className="sm:w-8 sm:h-8" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base sm:text-lg">
                        Dr. Cam Brauer
                      </h4>
                      <p className="text-xs sm:text-sm text-blue-600 font-semibold uppercase tracking-wider">
                        Lead Dentist
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-700 -skew-x-12 translate-x-1/2 opacity-30"></div>
        </section>
        <ReviewsSection />
        <Footer />
      </>
  )
}

export default App
