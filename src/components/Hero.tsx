import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-screen bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-pulse">
          Bella Vista
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light">
          Authentic Italian Cuisine in the Heart of the City
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            View Menu
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Make Reservation
          </Button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent"></div>
    </section>
  );
};

export default Hero;