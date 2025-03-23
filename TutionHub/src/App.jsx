import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TutorImage from './assets/tutor-image.jpg'; // Your image
import { FaPhone, FaEnvelope, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const App = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    const fullText = 'Master School Subjects & Tech Skills with Fun!';

  // Typing effect for header
  useEffect(() => {
    let i = 0;
    const type = () => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
        setTimeout(type, 100);
      }
    };
    type();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://tutionhub-backend.onrender.com/api/contact', formData);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  // Subject selection for Rates
  const subjects = [
    { name: 'Science', id: 'science', price: 500 },
    { name: 'Maths', id: 'maths', price: 500 },
    { name: 'English', id: 'english', price: 500 },
    { name: 'Computer Field', id: 'computer', price: 500 },
  ];

  const handleSubjectChange = (subjectId) => {
    if (selectedSubjects.includes(subjectId)) {
      setSelectedSubjects(selectedSubjects.filter((id) => id !== subjectId));
    } else {
      setSelectedSubjects([...selectedSubjects, subjectId]);
    }
  };
  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu when any link is clicked
  };
  const baseRate = 0;
  const totalRate = baseRate + selectedSubjects.length * 500;

  return (
    <div className="font-sans relative bg-gradient-to-b from-[#CAF0F8] to-[#90E0EF]">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-[#0077B6] text-[#CAF0F8] p-4 shadow-lg z-10">
  <div className="max-w-6xl mx-auto flex justify-between items-center">
    <h1 className="text-2xl font-bold">Himanshu’s Tuition Hub</h1>
    <button
      className="md:hidden text-3xl focus:outline-none"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      {isMenuOpen ? '✖' : '☰'}
    </button>
    <ul
      className={`${
        isMenuOpen ? 'flex' : 'hidden'
      } md:flex flex-col md:flex-row items-center justify-center md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-[#0077B6] md:bg-transparent p-4 md:p-0 transition-all duration-300`}
    >
      <li className="md:inline-block">
        <a
          href="#home"
          onClick={handleLinkClick}
          className="block py-2 hover:text-[#00B4D8] transition-colors text-center"
        >
          Home
        </a>
      </li>
      <li className="md:inline-block">
        <a
          href="#about"
          onClick={handleLinkClick}
          className="block py-2 hover:text-[#00B4D8] transition-colors text-center"
        >
          About
        </a>
      </li>
      <li className="md:inline-block">
        <a
          href="#services"
          onClick={handleLinkClick}
          className="block py-2 hover:text-[#00B4D8] transition-colors text-center"
        >
          Services
        </a>
      </li>
      <li className="md:inline-block">
        <a
          href="#rates"
          onClick={handleLinkClick}
          className="block py-2 hover:text-[#00B4D8] transition-colors text-center"
        >
          Rates
        </a>
      </li>
      <li className="md:inline-block">
        <a
          href="#contact"
          onClick={handleLinkClick}
          className="block py-2 bg-[#F77F00] text-[#023E8A] px-4 rounded-full hover:scale-105 transition-transform w-full md:w-auto text-center"
        >
          Book Now
        </a>
      </li>
    </ul>
  </div>
</nav>

      {/* Header */}
      <header id="home" className="bg-[#0077B6] text-[#CAF0F8] min-h-screen flex items-center justify-center text-center p-6 pt-20">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold animate-pulse">Welcome to Your Learning Adventure!</h1>
          <p className="text-xl md:text-2xl mt-4">{typedText}</p>
          <img
            src={TutorImage}
            alt="Tutor"
            className="rounded-full mt-6 h-50 w-50 mx-auto border-4 border-[#00B4D8] animate-spin-slow"
          />
          <a href="#contact" className="mt-8 inline-block bg-[#F77F00] text-[#023E8A] py-3 px-8 rounded-full text-lg hover:bg-[#00B4D8] transition-all">
            Start Learning Now!
          </a>
        </div>
      </header>

      {/* About Me */}
      <section id="about" className="bg-gradient-to-b from-[#CAF0F8] to-[#90E0EF] text-[#023E8A] py-20 text-center">
        <h2 className="text-4xl font-bold">About Your Tutor</h2>
        <p className="mt-6 max-w-3xl mx-auto text-lg">
          Hey, I’m Himanshu Kasoudhan! I’m passionate about helping grades 1–10 students excel in Math, Science, English, and more, while also teaching awesome computer skills like coding and MS Office. Let’s make learning epic!
        </p>
        <div className="text-[#F77F00] mt-4 text-2xl animate-bounce">🌟 Ready to Shine?</div>
      </section>

      {/* Services */}
      <section id="services" className="bg-[#0077B6] text-[#023E8A] py-20">
        <h2 className="text-4xl font-bold text-center text-[#CAF0F8]">What I Teach</h2>
        <div className="max-w-5xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
          <div className="bg-[#CAF0F8] p-6 rounded-lg shadow-lg hover:shadow-xl hover:rotate-2 transition-all flex items-center space-x-4">
            <span className="text-4xl">📚</span>
            <div>
              <h3 className="text-2xl font-semibold">Grades 1–10</h3>
              <p className="mt-2">Ace Math, Science, English, and more—perfect for your syllabus!</p>
            </div>
          </div>
          <div className="bg-[#CAF0F8] p-6 rounded-lg shadow-lg hover:shadow-xl hover:-rotate-2 transition-all flex items-center space-x-4">
            <span className="text-4xl">💻</span>
            <div>
              <h3 className="text-2xl font-semibold">Computer Technology</h3>
              <p className="mt-2">Code, master MS Office, and surf the web like a pro!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rates */}
      <section id="rates" className="bg-[#0077B6] text-[#023E8A] py-20 text-center">
        <h2 className="text-4xl font-bold text-[#CAF0F8]">Rates</h2>
        <p className="mt-6 text-lg text-[#CAF0F8]">Pick your subjects—each one’s ₹500!</p>
        <div className="max-w-4xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
          {subjects.map((subject) => (
            <div
              key={subject.id}
              onClick={() => handleSubjectChange(subject.id)}
              className={`p-6 rounded-lg shadow-md cursor-pointer transition-all duration-300 ${
                selectedSubjects.includes(subject.id)
                  ? 'bg-[#F77F00] text-[#CAF0F8] scale-105 border-2 border-[#00B4D8]'
                  : 'bg-[#CAF0F8] text-[#023E8A] hover:bg-[#00B4D8] hover:text-[#023E8A]'
              }`}
            >
              <h3 className="text-xl font-semibold">{subject.name}</h3>
              <p className="mt-2 text-sm">₹{subject.price}/month</p>
              <p className="mt-1 text-xs">
                {selectedSubjects.includes(subject.id) ? 'Selected!' : 'Click to add'}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-lg text-[#CAF0F8]">
          Total: <span className="text-[#F77F00] font-bold">₹{totalRate}</span>/month
        </p>
        <a
          href="#contact"
          className="mt-6 inline-block bg-[#F77F00] text-[#023E8A] py-2 px-6 rounded-full hover:bg-[#00B4D8] transition-colors"
        >
          Book Your Plan
        </a>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-[#0077B6] text-[#023E8A] py-20">
        <h2 className="text-4xl font-bold text-center text-[#CAF0F8]">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-10 bg-[#CAF0F8] p-8 rounded-xl shadow-lg">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F77F00]"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F77F00]"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="What do you want to learn?"
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F77F00]"
            rows="4"
            required
          />
          <button type="submit" className="w-full bg-[#F77F00] text-[#023E8A] py-3 rounded-full hover:bg-[#00B4D8] transition-all">
            Send Message
          </button>
        </form>
        {submitted && (
          <div className="fixed top-20 right-4 bg-[#00B4D8] text-[#023E8A] p-4 rounded-lg shadow-lg animate-fade-in">
            Awesome! I’ll get back to you soon!
          </div>
        )}
<div className="flex justify-center space-x-6 mt-6 text-[#CAF0F8]">
  {/* Phone Icon */}
  <a href="tel:+918468087211" className="hover:text-[#24d800] transition-colors">
    <FaPhone className="w-8 h-8" />
  </a>
  {/* Email Icon */}
  <a href="mailto:himanshukasoudhan5421@gmail.com" className="hover:text-[#d82000] transition-colors">
    <FaEnvelope className="w-8 h-8" />
  </a>
  {/* Instagram Icon */}
  <a href="https://www.instagram.com/8822.himanshu" target="_blank" rel="noopener noreferrer" className="text-2xl transition-colors duration-300 hover:text-[#C13584]">
    <FaInstagram className="w-8 h-8" />
  </a>
  {/* WhatsApp Icon */}
  <a href="https://wa.me/+918468087211" target="_blank" rel="noopener noreferrer" className="hover:text-[#12d800] transition-colors">
    <FaWhatsapp className="w-8 h-8" />
  </a>
</div>     </section>

      {/* Floating Chat Bubble */}
      {/* <div className="fixed bottom-6 right-6 bg-[#F77F00] text-[#023E8A] p-4 rounded-full shadow-lg hover:scale-110 transition-transform cursor-pointer animate-bounce">
        💬 Chat with Me!
      </div> */}

      {/* Footer */}
      <footer className="bg-[#023E8A] text-[#CAF0F8] py-8 text-center">
        <p>© 2025 Himanshu. Let’s make learning legendary!</p>
      </footer>
    </div>
  );
};

export default App;