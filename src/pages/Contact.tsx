
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Linkedin, Send, User, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation simple
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive",
      });
      return;
    }

    // Simulation d'envoi de message
    toast({
      title: "Message envoyé !",
      description: "Merci pour votre message. Je vous répondrai dans les plus brefs délais.",
    });

    // Reset du formulaire
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Téléphone",
      value: "06 92 63 92 03",
      href: "tel:0692639203",
      color: "bg-blue-500"
    },
    {
      icon: Mail,
      label: "Email",
      value: "alexpinguin450@gmail.com",
      href: "mailto:alexpinguin450@gmail.com",
      color: "bg-green-500"
    },
    {
      icon: MapPin,
      label: "Localisation",
      value: "Saint-Louis, La Réunion",
      href: "#",
      color: "bg-purple-500"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "alexandre-pinguin",
      href: "https://www.linkedin.com/in/alexandre-pinguin-071b4531a",
      color: "bg-blue-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Me Contacter
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            N'hésitez pas à me contacter pour toute question, collaboration ou opportunité professionnelle
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div className="space-y-8 animate-slide-in">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <User className="mr-3 text-primary" size={28} />
                Informations de contact
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : '_self'}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 group"
                    >
                      <div className={`${info.color} text-white p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{info.label}</h3>
                        <p className="text-gray-600">{info.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-4">Disponibilité</h3>
              <p className="text-blue-100 mb-4">
                Je suis actuellement étudiant en première année de BUT Réseaux et Télécommunications 
                et je suis ouvert aux opportunités de stage, projets collaboratifs et échanges professionnels.
              </p>
              <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                <p className="text-sm">
                  <strong>Meilleur moment pour me contacter :</strong><br />
                  Lundi - Vendredi : 9h00 - 18h00<br />
                  Réponse sous 24-48h
                </p>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="animate-slide-in" style={{animationDelay: '0.2s'}}>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <MessageCircle className="mr-3 text-secondary" size={28} />
                Envoyez-moi un message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Votre nom"
                      className="w-full"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="votre@email.com"
                      className="w-full"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet
                  </label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Sujet de votre message"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Écrivez votre message ici..."
                    rows={6}
                    className="w-full"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary-dark text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
                >
                  <Send className="mr-2" size={20} />
                  Envoyer le message
                </Button>
              </form>
              
              <p className="text-sm text-gray-500 mt-4 text-center">
                * Champs obligatoires
              </p>
            </div>
          </div>
        </div>

        {/* Section supplémentaire */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Restons connectés !
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Je suis toujours intéressé par de nouveaux projets, des collaborations et des opportunités 
              d'apprentissage dans le domaine des réseaux et télécommunications. N'hésitez pas à me contacter !
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-tech-blue-light text-primary px-4 py-2 rounded-full text-sm font-medium">
                Étudiant motivé
              </span>
              <span className="bg-tech-green-light text-secondary px-4 py-2 rounded-full text-sm font-medium">
                Passionné de tech
              </span>
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                Ouvert aux opportunités
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
