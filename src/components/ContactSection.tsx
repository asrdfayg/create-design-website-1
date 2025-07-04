import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            Visit Us
          </h2>
          <p className="text-xl text-gray-300">We'd love to see you at Bella Vista</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="bg-white/10 backdrop-blur border-white/20 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-4">
                <MapPin className="text-orange-400 w-6 h-6" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-gray-300">123 Italian Street, Downtown, NY 10001</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-orange-400 w-6 h-6" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-300">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-orange-400 w-6 h-6" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-300">info@bellavista.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Clock className="text-orange-400 w-6 h-6" />
                <div>
                  <p className="font-semibold">Hours</p>
                  <p className="text-gray-300">Mon-Sun: 5:00 PM - 11:00 PM</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur border-white/20 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Make a Reservation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Your Name" className="bg-white/20 border-white/30 text-white placeholder:text-gray-300" />
              <Input placeholder="Email" className="bg-white/20 border-white/30 text-white placeholder:text-gray-300" />
              <Input placeholder="Phone" className="bg-white/20 border-white/30 text-white placeholder:text-gray-300" />
              <Input placeholder="Date & Time" className="bg-white/20 border-white/30 text-white placeholder:text-gray-300" />
              <Textarea placeholder="Special requests..." className="bg-white/20 border-white/30 text-white placeholder:text-gray-300" />
              <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 transform hover:scale-105 transition-all duration-300">
                Book Table
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;