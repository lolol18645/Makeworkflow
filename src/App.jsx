import React from 'react';
import { Gift, Sparkles, BookOpen, Users, Star, Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FF8DA1] via-[#FFC2CD] to-[#FFE5E5]">
      <div className="max-w-3xl mx-auto pt-2 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-[#FF8DA1] to-[#FFC2CD] px-4 py-4 sm:px-6 lg:px-8 text-center">
            <div className="relative w-full max-w-[12rem] sm:max-w-[14rem] lg:max-w-[16rem] aspect-square mx-auto mb-2">
              <img 
                src="https://static.wixstatic.com/media/d88ab2_186db385f43b4517b6f737c00597b3ae~mv2.jpg" 
                alt="1000 beauté Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white whitespace-nowrap mb-2">
              Bienvenue chez 1000 beauté !
            </h1>
            <p className="text-lg sm:text-xl text-white">
              Votre inscription à notre newsletter est confirmée
            </p>
          </div>
          <div className="p-6 sm:p-8 bg-pink-50">
            <div className="flex items-center justify-center space-x-2 text-xl sm:text-2xl text-[#FF8DA1] font-bold">
              <Gift className="w-6 h-6 sm:w-8 sm:h-8" />
              <span>Offre Spéciale</span>
            </div>
            <div className="text-center mt-4">
              <p className="text-base sm:text-lg mb-2">
                Profitez de <span className="font-bold">10% de réduction</span> sur toutes nos formations !
              </p>
              <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm inline-block mt-2">
                <p className="font-mono text-base sm:text-lg font-bold text-[#FF8DA1]">Code: BIENVENUE10</p>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                <p>Non cumulable avec d'autres promotions en cours</p>
              </div>
            </div>
          </div>
          <div className="p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center">
              Ce qui vous attend dans notre newsletter
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <BenefitCard
                icon={<Sparkles className="w-6 h-6" />}
                title="Astuces Exclusives"
                description="Des conseils professionnels pour sublimer votre beauté"
              />
              <BenefitCard
                icon={<BookOpen className="w-6 h-6" />}
                title="Tutoriels Détaillés"
                description="Des guides pas à pas pour maîtriser les techniques"
              />
              <BenefitCard
                icon={<Users className="w-6 h-6" />}
                title="Témoignages Inspirants"
                description="Des histoires réelles de réussite"
              />
              <BenefitCard
                icon={<Star className="w-6 h-6" />}
                title="Contenu Premium"
                description="Accès à du contenu exclusif réservé aux abonnés"
              />
            </div>
          </div>
          <div className="p-6 sm:p-8 bg-gradient-to-r from-[#FFE5E5] to-[#FFC2CD]">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center">
              Pourquoi se former avec nous ?
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-[#FF8DA1] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <p className="text-gray-700">Formation professionnelle de haute qualité</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-[#FF8DA1] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <p className="text-gray-700">Accompagnement personnalisé</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-[#FF8DA1] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
                <p className="text-gray-700">Flexibilité des horaires de formation</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-[#FF8DA1] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">4</span>
                </div>
                <p className="text-gray-700">Support continu post-formation</p>
              </div>
            </div>
          </div>
          <div className="px-6 sm:px-8 pt-6 sm:pt-8">
            <img 
              src="https://static.wixstatic.com/media/d88ab2_a3ae73f5076c40eda3111637b8c48107~mv2.jpg"
              alt="1000 beauté Formation"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="p-6 sm:p-8 text-center bg-gray-50">
            <div className="flex items-center justify-center space-x-2 text-[#FF8DA1] mb-4">
              <Mail className="w-5 h-5" />
              <span>Surveillez votre boîte mail pour nos prochaines communications</span>
            </div>
            <p className="text-gray-600">
              Merci de faire partie de la communauté 1000 beauté !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BenefitCard({ icon, title, description }) {
  return (
    <div className="flex items-start space-x-4 p-4 rounded-lg bg-white border border-[#FF8DA1] shadow-sm hover:shadow-md transition-shadow">
      <div className="flex-shrink-0 text-[#FF8DA1]">{icon}</div>
      <div>
        <h3 className="font-semibold text-gray-800 mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default App;
