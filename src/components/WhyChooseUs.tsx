import React from 'react';
import { Building, Shield, Star, Key } from 'lucide-react';

export function WhyChooseUs() {
  const features = [
    { icon: Building, title: "Amplia Experiencia", desc: "Más de 15 años en el mercado inmobiliario" },
    { icon: Shield, title: "Confianza", desc: "Garantizamos transparencia en cada operación" },
    { icon: Star, title: "Calidad", desc: "Servicio personalizado y profesional" },
    { icon: Key, title: "Resultados", desc: "Miles de clientes satisfechos" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">¿Por qué elegirnos?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <item.icon className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}