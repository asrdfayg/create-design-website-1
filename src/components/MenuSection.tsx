import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const MenuSection = () => {
  const menuItems = [
    {
      category: "Appetizers",
      items: [
        { name: "Bruschetta Classica", price: "$12", description: "Toasted bread with fresh tomatoes, basil, and garlic" },
        { name: "Antipasto Platter", price: "$18", description: "Selection of cured meats, cheeses, and olives" },
        { name: "Calamari Fritti", price: "$16", description: "Crispy fried squid with marinara sauce" }
      ]
    },
    {
      category: "Main Courses",
      items: [
        { name: "Spaghetti Carbonara", price: "$22", description: "Classic Roman pasta with eggs, cheese, and pancetta" },
        { name: "Osso Buco", price: "$32", description: "Braised veal shanks with risotto Milanese" },
        { name: "Margherita Pizza", price: "$18", description: "Fresh mozzarella, tomatoes, and basil" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">Our Menu</h2>
          <p className="text-xl text-gray-600">Crafted with passion, served with pride</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {menuItems.map((section) => (
            <Card key={section.category} className="shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur">
              <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                <CardTitle className="text-2xl font-bold">{section.category}</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                {section.items.map((item) => (
                  <div key={item.name} className="mb-6 last:mb-0">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                      <Badge variant="secondary" className="bg-orange-100 text-orange-800 font-bold">
                        {item.price}
                      </Badge>
                    </div>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;