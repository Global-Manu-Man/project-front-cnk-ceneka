import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Bed, Bath, Square, MapPin, Check, Home, FileText, Scale, DollarSign, MapPinned, Building, Map, Ruler } from 'lucide-react';
import { properties } from './FeaturedProperties';
import { useLanguage } from '../contexts/LanguageContext';

export function PropertyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const property = properties.find(p => p.id === Number(id));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">{t('propiedad-no-encontrada')}</h2>
          <button
            onClick={() => navigate('/')}
            className="text-blue-600 hover:text-blue-800"
          >
            {t('volver')}
          </button>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  const handleNavigation = (sectionId: string) => {
    navigate('/', { state: { scrollTo: sectionId } });
  };

  return (
    <div className="pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          <ChevronLeft className="h-5 w-5" />
          <span>{t('volver')}</span>
        </button>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Image Gallery */}
          <div className="relative h-[500px]">
            <img
              src={property.images[currentImageIndex]}
              alt={property.title}
              className="w-full h-full object-cover"
            />
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {property.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentImageIndex === index ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
                <p className="text-gray-600 flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  {property.location}
                </p>
              </div>
              <p className="text-3xl font-bold text-blue-600">{property.price}</p>
            </div>

            {/* Información básica */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <Bed className="h-6 w-6 text-blue-600 mr-2" />
                <span>{property.beds} {t('recamaras')}</span>
              </div>
              <div className="flex items-center">
                <Bath className="h-6 w-6 text-blue-600 mr-2" />
                <span>{property.baths} {t('banos')}</span>
              </div>
              <div className="flex items-center">
                <Square className="h-6 w-6 text-blue-600 mr-2" />
                <span>{property.constructionSize} m² construcción</span>
              </div>
              <div className="flex items-center">
                <Ruler className="h-6 w-6 text-blue-600 mr-2" />
                <span>{property.landSize} m² terreno</span>
              </div>
            </div>

            {/* Información detallada */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Información General</h2>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Home className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="font-medium">Tipo de Propiedad:</span>
                    <span className="ml-2">{property.propertyType}</span>
                  </div>
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="font-medium">Tipo de Venta:</span>
                    <span className="ml-2">{property.saleType}</span>
                  </div>
                  <div className="flex items-center">
                    <Scale className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="font-medium">Estatus Legal:</span>
                    <span className="ml-2">{property.legalStatus}</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="font-medium">Valor Comercial:</span>
                    <span className="ml-2">{property.commercialValue}</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Ubicación</h2>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <MapPinned className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="font-medium">Estado:</span>
                    <span className="ml-2">{property.state}</span>
                  </div>
                  <div className="flex items-center">
                    <Building className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="font-medium">Municipio:</span>
                    <span className="ml-2">{property.municipality}</span>
                  </div>
                  <div className="flex items-center">
                    <Map className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="font-medium">Colonia:</span>
                    <span className="ml-2">{property.colony}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="font-medium">Calle:</span>
                    <span className="ml-2">{property.street}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Características adicionales */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Características Adicionales</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {property.hasGarden && (
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Jardín</span>
                  </div>
                )}
                {property.hasStudy && (
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Estudio</span>
                  </div>
                )}
                {property.hasServiceRoom && (
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Cuarto de Servicio</span>
                  </div>
                )}
                {property.hasCondominium && (
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Condominio</span>
                  </div>
                )}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">{t('descripcion')}</h2>
              <p className="text-gray-700">{property.description}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">{t('caracteristicas')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-blue-600 mr-2" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}