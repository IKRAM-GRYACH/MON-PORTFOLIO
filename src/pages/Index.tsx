
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, GraduationCap, Code, Database, Shield, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "Plateforme collaborative sécurisée pour le partage des fichiers",
      description: "Développement d'une plateforme de partage de fichiers permettant à plusieurs utilisateurs d'envoyer et de télécharger des fichiers via un espace collaboratif commun, avec un contrôle d'accès sécurisé assuré par un système d'authentification.",
      tech: ["JavaScript", "HTML", "CSS", "UML", "MySQL", "Python"],
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Augmentation de données pour la détection de Ransomwares",
      description: "Génération des données synthétiques à partir d'un dataset Excel relatif à la détection de Ransomwares en utilisant les algorithmes CTGAN, TGAN et TVAE, puis évaluation et comparaison de la qualité des jeux de données augmentés.",
      tech: ["Python", "Machine Learning", "Deep Learning"],
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Gestion d'irrigation automatisée avec ThingsBoard",
      description: "Gestion de système d'irrigation via la plateforme ThingsBoard avec des données simulées des capteurs virtuels pour la surveillance de la température et l'humidité du sol.",
      tech: ["JSON", "IoT", "ThingsBoard"],
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "La valeur de Shapley au service de l'intelligence artificielle",
      description: "L'application informatique de la valeur mathématique de Shapley pour expliquer les décisions prises par les modèles d'apprentissage automatique et évaluation de la contribution de chaque caractéristique dans les prédictions générées.",
      tech: ["Python", "Machine Learning", "Mathematics"],
      icon: <Award className="w-6 h-6" />
    }
  ];

  const education = [
    {
      period: "2024 – 2027",
      school: "INPT (RABAT, MAROC)",
      degree: "Diplôme d'ingénieur en cybersécurité et confiance numérique",
      description: "1ère année du cycle d'ingénieur",
      courses: ["Mathématiques pour l'ingénieur", "Administration système", "Réseaux informatiques", "Développement logiciel", "Développement web", "Programmation et bases de données"]
    },
    {
      period: "2022 – 2024",
      school: "Lycée MOULAY IDRISS (FÈS, MAROC)",
      degree: "Classes préparatoires",
      description: "MPSI, MP*",
      courses: ["Mathématiques intensives", "Physique avancée"]
    },
    {
      period: "2021 – 2022",
      school: "Lycée AL Jabr FÈS (FÈS, MAROC)",
      degree: "Baccalauréat sciences mathématiques B",
      description: "Mention très bien",
      courses: []
    }
  ];

  const skills = {
    "Langages de programmation": ["C", "Java", "Python", "SQL", "JavaScript", "HTML", "CSS", "R", "Assembleur"],
    "Domaines d'expertise": ["Cybersécurité", "Machine Learning", "Deep Learning", "IoT", "Développement Web"],
    "Langues": ["Français (C1)", "Anglais (C1)", "Arabe (Native)"]
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header/Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-gray-900">IKRAM GRYACH</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">À propos</a>
              <a href="#education" className="text-gray-700 hover:text-blue-600 transition-colors">Éducation</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">Projets</a>
              <a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors">Compétences</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <img 
                  src="/lovable-uploads/2591ad32-2020-4454-a1c8-8ed6385f2217.png" 
                  alt="IKRAM GRYACH" 
                  className="w-40 h-40 rounded-full mx-auto shadow-2xl border-4 border-white"
                />
                <div className="absolute -bottom-2 -right-2 bg-blue-600 rounded-full p-2">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              IKRAM GRYACH
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Étudiante Ingénieure en Cybersécurité et Confiance Numérique
            </p>
            <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto leading-relaxed">
              Passionnée par la cybersécurité, l'intelligence artificielle et le développement logiciel. 
              Actuellement en formation à l'INPT, je développe des solutions innovantes pour sécuriser 
              le monde numérique de demain.
            </p>
            <div className="flex justify-center space-x-4">
              <Button 
                variant="default" 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="w-4 h-4 mr-2" />
                Me contacter
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('projects')}
              >
                <Github className="w-4 h-4 mr-2" />
                Voir mes projets
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Éducation</h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <CardTitle className="text-xl text-blue-600">{edu.school}</CardTitle>
                      <CardDescription className="text-lg font-semibold text-gray-900 mt-1">
                        {edu.degree}
                      </CardDescription>
                      <p className="text-gray-600 mt-1">{edu.description}</p>
                    </div>
                    <Badge variant="outline" className="mt-2 md:mt-0 bg-blue-50 text-blue-700">
                      {edu.period}
                    </Badge>
                  </div>
                </CardHeader>
                {edu.courses.length > 0 && (
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, courseIndex) => (
                        <Badge key={courseIndex} variant="secondary" className="text-xs">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Projets</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      {project.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="bg-blue-50 text-blue-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Compétences</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Expériences Académiques</h2>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-xl text-blue-600">MENTOR - Programme DIGIGIRLZ</CardTitle>
              <CardDescription className="text-lg font-semibold text-gray-900">
                Association ANOUAL
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                Monitrice dans le programme DIGIGIRLZ, 8ème édition, visant à encourager l'intégration 
                des filles âgées de 15 à 18 ans dans les domaines STEM, avec pour thème "Safe and Secure", 
                centré sur la cybersécurité.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-purple-50 text-purple-700">Mentorat</Badge>
                <Badge variant="outline" className="bg-purple-50 text-purple-700">STEM</Badge>
                <Badge variant="outline" className="bg-purple-50 text-purple-700">Cybersécurité</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Contactez-moi</h2>
          <p className="text-xl mb-8 opacity-90">
            N'hésitez pas à me contacter pour discuter de projets ou d'opportunités
          </p>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-2">
              <MapPin className="w-8 h-8 text-blue-300" />
              <span className="font-semibold">Localisation</span>
              <span className="text-blue-200">FÈS, MAROC</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Mail className="w-8 h-8 text-blue-300" />
              <span className="font-semibold">Email</span>
              <a href="mailto:ikramgryachlinkedin@gmail.com" className="text-blue-200 hover:text-white transition-colors">
                ikramgryachlinkedin@gmail.com
              </a>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Phone className="w-8 h-8 text-blue-300" />
              <span className="font-semibold">Téléphone</span>
              <a href="tel:+212658615511" className="text-blue-200 hover:text-white transition-colors">
                06 58 61 55 11
              </a>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Linkedin className="w-8 h-8 text-blue-300" />
              <span className="font-semibold">LinkedIn</span>
              <a href="https://linkedin.com/in/IKRAM-GRYACH" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors">
                IKRAM GRYACH
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 IKRAM GRYACH. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
