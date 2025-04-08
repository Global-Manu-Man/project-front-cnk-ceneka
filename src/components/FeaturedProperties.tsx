import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export const properties = [
  {
    id: 1,
    title: "Casa Moderna en Valle Real",
    price: "$4,500,000",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    beds: 4,
    baths: 3,
    sqft: 280,
    description: "Hermosa casa moderna con acabados de lujo, amplios espacios y vista panorámica. Ubicada en una de las zonas más exclusivas.",
    features: [
      "Cocina integral",
      "Jardín amplio",
      "Terraza",
      "Estacionamiento para 2 autos",
      "Seguridad 24/7"
    ],
    location: "Valle Real, Zapopan",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    // Nuevos campos
    propertyType: "CASA HABITACIONAL",
    saleType: "Cesión de derechos adjudicatarios",
    legalStatus: "Cesión de Derechos C/ posesión",
    commercialValue: "$5,000,000",
    state: "TLAXCALA",
    municipality: "IXTENCO",
    colony: "BARRIO DE RESURRECCION",
    street: "2 ORIENTE",
    landSize: 313.87,
    constructionSize: 400,
    hasGarden: true,
    hasStudy: true,
    hasServiceRoom: true,
    hasCondominium: true
  },
  {
    id: 2,
    title: "Apartamento de Lujo Centro",
    price: "$2,800,000",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    beds: 2,
    baths: 2,
    sqft: 120,
    description: "Exclusivo apartamento en el corazón de la ciudad. Diseño moderno y amenidades de primera clase.",
    features: [
      "Gimnasio",
      "Alberca",
      "Área de coworking",
      "Seguridad 24/7",
      "Estacionamiento"
    ],
    location: "Centro, Guadalajara",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    propertyType: "DEPARTAMENTO",
    saleType: "Venta directa",
    legalStatus: "Escrituras",
    commercialValue: "$3,000,000",
    state: "JALISCO",
    municipality: "GUADALAJARA",
    colony: "CENTRO",
    street: "AV JUAREZ",
    landSize: 120,
    constructionSize: 120,
    hasGarden: false,
    hasStudy: true,
    hasServiceRoom: false,
    hasCondominium: true
  },
  // ... (rest of the properties with the new fields)
];

export function FeaturedProperties() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">{t('propiedades-destacadas')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div 
              key={property.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => navigate(`/property/${property.id}`)}
            >
              <img 
                src={property.image} 
                alt={property.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                <p className="text-2xl text-blue-600 font-bold mb-4">{property.price}</p>
                <div className="flex justify-between text-gray-600">
                  <span>{property.beds} {t('recamaras')}</span>
                  <span>{property.baths} {t('banos')}</span>
                  <span>{property.sqft} {t('metros')}</span>
                </div>
                <div className="mt-4 text-sm text-gray-500">
                  <p>{property.propertyType}</p>
                  <p>{property.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}