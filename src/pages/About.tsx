import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Leaf, Shield, Award, Users, Heart, BookOpen, Map, Calendar, Mountain, GitBranch, MapPin, MapPinIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const About: React.FC = () => {
  const teamMembers = [{
    name: "Lama Tenzin Norbu",
    role: "Senior Buddhist Scholar",
    bio: "With over 25 years studying Sikkimese Buddhist traditions, Lama Tenzin guides our cultural preservation efforts and monastery documentation.",
    image: "/lovable-uploads/2bbf5848-053c-4f28-96bc-dac23d6a8b34.png"
  }, {
    name: "Dr. Pema Choden",
    role: "Heritage Director",
    bio: "An expert in Himalayan Buddhist art and architecture, Dr. Pema leads our monastery conservation and restoration projects.",
    image: "/lovable-uploads/849faf99-8ef2-4028-bb7f-9b1fd88877ee.png"
  }, {
    name: "Karma Wangchuk",
    role: "Cultural Liaison",
    bio: "A native Sikkimese with deep monastery connections, Karma coordinates with local communities and monastic institutions.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80"
  }, {
    name: "Sonam Bhutia",
    role: "Documentation Specialist",
    bio: "Specializing in digital archiving and traditional art preservation, Sonam ensures monastery treasures are preserved for future generations.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80"
  }];

  const timeline = [{
    year: "8th Century",
    title: "Buddhist Arrival",
    description: "Buddhism first arrived in Sikkim through Guru Padmasambhava, laying the spiritual foundation for future monasteries."
  }, {
    year: "1642",
    title: "Kingdom Foundation", 
    description: "Phuntsog Namgyal established the Kingdom of Sikkim, making Buddhism the state religion and beginning systematic monastery construction."
  }, {
    year: "1705",
    title: "Pemayangtse Monastery",
    description: "Founded as Sikkim's second-oldest monastery, becoming a center of Nyingma Buddhist learning and cultural preservation."
  }, {
    year: "1840s",
    title: "Enchey Monastery",
    description: "Built on a site blessed by Lama Druptob Karpo, becoming one of the most important monasteries in Gangtok."
  }, {
    year: "Present",
    title: "Living Heritage",
    description: "Today, over 200 monasteries across Sikkim continue to preserve Buddhist traditions, art, and ancient wisdom for future generations."
  }];

  return <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28 md:pt-32">
        <section className="relative py-20 mb-8">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20 bg-lime-600"></div>
          <div className="relative z-10 container mx-auto text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 animate-fade-in hover:text-glow transition-all duration-300">
              Sacred Heritage of Sikkim
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground/80 animate-fade-in animation-delay-200">
              Journey through the spiritual heart of the Himalayas, where ancient Buddhist monasteries preserve centuries of wisdom, culture, and timeless traditions.
            </p>
            <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border-l-4 border-orange-500 max-w-4xl mx-auto animate-fade-in animation-delay-400">
              <blockquote className="text-xl md:text-2xl font-medium text-orange-800 italic">
                "In the silence of the mountains, the monasteries of Sikkim echo with prayers that have been chanted for over a thousand years, preserving not just faith, but the very soul of Himalayan civilization."
              </blockquote>
              <cite className="text-orange-600 font-semibold mt-4 block">- Ancient Sikkimese Wisdom</cite>
            </div>
          </div>
        </section>
        
        <section className="section-padding container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="relative">
                <img src="/lovable-uploads/fa6d6df3-ea4b-4f3f-9db1-81fbb2370f9f.png" alt="Dandeli Wildlife" className="w-full h-[500px] object-cover rounded-xl shadow-lg" />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl hidden md:block">
                  <img src="/lovable-uploads/627761c4-60f7-43ef-864e-7bfaab1c1dc6.png" alt="Zipline Adventure" className="w-40 h-32 object-cover rounded-md" />
                </div>
              </div>
            </div>
            
            <div className="animate-slide-up animation-delay-200">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Our Sacred Mission
              </h2>
              <p className="text-foreground/70 mb-6">
                At Sikkim Monasteries360, we are dedicated to preserving and sharing the profound spiritual heritage of Sikkimese Buddhism while fostering deep cultural understanding and reverence for these sacred spaces.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="bg-secondary p-6 rounded-xl transition-all duration-300 hover:shadow-md">
                  <div className="flex items-center mb-2">
                    <Heart size={22} className="text-accent mr-2" />
                    <h3 className="font-display text-xl font-semibold">Our Mission</h3>
                  </div>
                  <p className="text-foreground/70">
                    To preserve, protect, and share the sacred Buddhist heritage of Sikkim's monasteries while educating visitors about their profound spiritual and cultural significance.
                  </p>
                </div>
                
                <div className="bg-secondary p-6 rounded-xl transition-all duration-300 hover:shadow-md">
                  <div className="flex items-center mb-2">
                    <BookOpen size={22} className="text-accent mr-2" />
                    <h3 className="font-display text-xl font-semibold">Our Vision</h3>
                  </div>
                  <p className="text-foreground/70">
                    To be the bridge between ancient wisdom and modern understanding, ensuring Sikkim's monastic traditions continue to inspire and guide future generations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-secondary">
          <div className="container px-4">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Our Sacred Principles
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                The Buddhist values and principles that guide our mission to preserve Sikkim's monastic heritage.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[{
                icon: <BookOpen className="w-8 h-8" />,
                title: "Preservation",
                description: "Safeguarding ancient Buddhist texts, artifacts, and architectural heritage for future generations.",
                delay: 0
              }, {
                icon: <Heart className="w-8 h-8" />,
                title: "Compassion",
                description: "Following the Buddhist principle of compassion in all our interactions and cultural exchanges.",
                delay: 100
              }, {
                icon: <Users className="w-8 h-8" />,
                title: "Community",
                description: "Supporting local monastic communities and maintaining the living traditions of Sikkimese Buddhism.",
                delay: 200
              }, {
                icon: <Mountain className="w-8 h-8" />,
                title: "Wisdom",
                description: "Sharing the profound spiritual wisdom and cultural knowledge preserved in Sikkim's monasteries.",
                delay: 300
              }].map((value, index) => <div key={index} 
                  className="bg-white p-8 rounded-xl text-center shadow-sm animate-slide-up hover:scale-105 hover:shadow-xl transition-all duration-300" 
                  style={{animationDelay: `${value.delay}ms`}}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-700 mb-6 transition-transform duration-300 hover:scale-110 hover:bg-orange-200">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3 text-gray-900">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>)}
            </div>
          </div>
        </section>

        <section className="section-padding container">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Sacred Timeline
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              The spiritual journey of Buddhism through the centuries in the Land of Sikkim.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-green-200 transform md:translate-x-[-50%] hidden sm:block"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => <div key={index} className={cn("relative flex flex-col sm:flex-row items-start gap-8 animate-fade-in", index % 2 === 0 ? "md:flex-row-reverse text-left md:text-right" : "text-left")} style={{
                animationDelay: `${index * 200}ms`
              }}>
                  <div className="sm:w-1/2"></div>
                  
                  <div className={cn("hidden sm:block absolute top-8 w-8 h-0.5 bg-green-200", 
                    index % 2 === 0 ? "left-[calc(50%-2rem)] md:left-1/2" : "right-[calc(50%-2rem)] md:right-1/2"
                  )}></div>

                  <div className="absolute left-[-20px] md:left-1/2 transform md:translate-x-[-50%] w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold z-10 shadow-lg hover:scale-110 transition-transform duration-300">
                    <GitBranch size={20} />
                  </div>
                  
                  <div className={cn("sm:w-1/2 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300", index % 2 === 0 ? "sm:pr-12" : "sm:pl-12")}>
                    <div className="flex sm:hidden items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center mr-3">
                        <Calendar size={18} />
                      </div>
                      <span className="font-display font-bold text-lg">{item.year}</span>
                    </div>
                    <div className="sm:block">
                      <span className="font-display font-bold text-xl hidden sm:block mb-2">{item.year}</span>
                      <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                      <p className="text-foreground/70">{item.description}</p>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-secondary">
          <div className="container px-4">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Our Preservation Team
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                The dedicated scholars and experts who preserve and share Sikkim's sacred heritage.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm animate-slide-up card-hover" style={{
                animationDelay: `${index * 100}ms`
              }}>
                  <div className="aspect-[3/4] overflow-hidden">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-display font-semibold">{member.name}</h3>
                    <p className="text-accent font-medium mb-3">{member.role}</p>
                    <p className="text-foreground/70 text-sm">{member.bio}</p>
                  </div>
                </div>)}
            </div>
          </div>
        </section>
        
        <section className="section-padding container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Visit Sacred Sikkim
              </h2>
              <p className="text-foreground/70 mb-6">
                Nestled in the Eastern Himalayas between Tibet and Bhutan, Sikkim is home to over 200 monasteries that preserve the living heritage of Tibetan Buddhism in breathtaking mountain landscapes.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-secondary rounded-full text-accent">
                    <MapPinIcon size={24} className="animate-bounce" />
                  </div>
                  <div>
                    <h3 className="font-medium flex items-center">
                      Sacred Monasteries Location
                    </h3>
                    <p className="text-sm text-foreground/70">
                      Sikkim State, Northeast India - Gateway to the Eastern Himalayas
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-secondary rounded-full text-accent">
                    <Map size={24} className="animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-medium flex items-center">
                      Reaching Sikkim
                    </h3>
                    <p className="text-sm text-foreground/70">
                      2 hours flight to Bagdogra, then 4 hours drive to Gangtok. Train to New Jalpaiguri, then scenic mountain drive.
                    </p>
                  </div>
                </div>
              </div>
              
              <Link to="/contact" className="btn-primary">
                Plan Your Monastery Visit
              </Link>
            </div>
            
            <div className="animate-slide-up animation-delay-200">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61475.89343423126!2d74.57940594863278!3d15.244387199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf35941ce7aacd%3A0xcdbe67b4b8d98c2!2sDandeli%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1650120000000!5m2!1sen!2sin!4v1650120000000!5m2!1sen!2sin" width="100%" height="450" style={{
                border: 0
              }} allowFullScreen loading="lazy" title="Dandeli Adventures Location" className="w-full"></iframe>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-accent text-accent-foreground relative">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
          <div className="container relative z-10 px-4 text-center">
            <div className="max-w-3xl mx-auto animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                Ready to Explore Sacred Sikkim?
              </h2>
              <p className="text-xl mb-8 text-accent-foreground/90">
                Embark on a spiritual journey through ancient monasteries and discover the profound wisdom of Himalayan Buddhism.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/accommodation" className="inline-block px-8 py-4 bg-white text-accent font-medium text-lg rounded-md transition-all duration-300 hover:bg-white/90 hover:shadow-lg hover:translate-y-[-2px]">
                  Sacred Retreats
                </Link>
                <Link to="/booking" className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white font-medium text-lg rounded-md transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:translate-y-[-2px]">
                  Plan Visit
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>;
};

export default About;
