import {
  ArrowTopRightOnSquareIcon,
  ChevronRightIcon,
  EnvelopeIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

const HeroSection: React.FC = () => (
  <section className="w-full mx-auto md:py-4">
    <div className="relative bg-[url('/background.jpg')] bg-cover bg-center h-48">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-800/60"></div>

      {/* Content */}
      <div className="relative flex justify-center items-center text-2xl md:text-3xl text-center font-semibold text-white h-full max-w-2xl mx-auto">
        BEZPEČNOSTNÍ PRODUKTY A SLUŽBY
        <br /> PRO ZÍSKÁNÍ A OCHRANU INFORMACÍ
      </div>
    </div>
  </section>
);

const ContactsSection: React.FC = () => (
  <section id="kontakty" className="max-w-7xl mx-auto px-4 py-12 scroll-mt-10">
    <h2 className="text-center text-4xl font-semibold text-blue">Kontakty</h2>
    <hr className="my-4 border-gray-300" />
    <div className="flex flex-col md:flex-row gap-6 max-w-4xl mx-auto">
      <div className="md:w-1/2 space-y-3">
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <PhoneIcon className="h-4" />
            <a href="tel:+420730844366">
              +420 <strong>730 844 366</strong>
            </a>
          </li>
          <li className="flex items-center gap-2">
            <PhoneIcon className="h-4" />
            <a href="tel:+420739821829">
              +420 <strong>739 821 829</strong>
            </a>
          </li>
          <li className="flex items-center gap-2">
            <EnvelopeIcon className="h-4" />
            <a
              href="mailto:info@buttatrade.cz"
              className="text-primary underline"
            >
              info@buttatrade.cz
            </a>
          </li>
          <li className="flex items-center gap-2">
            <UserIcon className="h-4" />
            <strong>Jonáš Butta</strong> – jednatel
          </li>
          <li className="flex items-center gap-2">
            <EnvelopeIcon className="h-4" />
            <a
              href="mailto:jonas@buttatrade.cz"
              className="text-primary underline"
            >
              jonas@buttatrade.cz
            </a>
          </li>
        </ul>
      </div>
      <div className="md:w-1/2 space-y-2">
        <ul className="space-y-2 items-center">
          <li className="flex items-center">
            <ChevronRightIcon className="h-4" />
            <strong>Butta Trade s.r.o.</strong>
          </li>
          <li className="flex items-center">
            <ChevronRightIcon className="inline h-4" />
            <strong>IČ:</strong> 028 50 109, <strong>DIČ:</strong> CZ 028 50 109
          </li>
          <li className="italic">
            <span className="font-bold">Zapsána</span> u Městského soudu v
            Praze, oddíl C, vložka 224591
          </li>
          <li>
            <strong>Adresa:</strong>
            <a
              href="https://maps.app.goo.gl/UrNNtV2cQqNy5KQr5"
              target="_blank"
              className="hover:underline"
            >
              <div className="flex items-center">
                <ChevronRightIcon className="h-4" />
                Pod Turnovskou tratí 170/3
              </div>
              <div className="flex items-center">
                <ChevronRightIcon className="h-4" />
                198 00 Praha 9 Hloubětín
                <ArrowTopRightOnSquareIcon className="h-4 ml-1" />
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

const BankDetails: React.FC = () => (
  <section className="py-10 md:px-10">
    <div className="max-w-7xl mx-auto">
      <h4 className="text-center text-lg font-semibold mb-4">
        BANKOVNÍ SPOJENÍ
      </h4>
      <div className="overflow-x-auto max-w-5xl mx-auto">
        <table className="w-full table-auto border-collapse">
          <tbody className="divide-y divide-gray-200">
            <tr className="bg-white even:bg-gray-50">
              <td className="py-3 px-4 font-semibold">
                Bankovní spojení pro platby v CZK v ČR:
              </td>
              <td className="py-3 px-4">2900571262 / 2010</td>
            </tr>
            <tr className="bg-white even:bg-gray-50">
              <td className="py-3 px-4 font-semibold">IBAN:</td>
              <td className="py-3 px-4">CZ8320100000002900571262</td>
            </tr>
            <tr className="bg-white even:bg-gray-50">
              <td className="py-3 px-4 font-semibold">BIC kód / SWIFT:</td>
              <td className="py-3 px-4">FIOBCZPPXXX</td>
            </tr>
            <tr className="bg-white even:bg-gray-50">
              <td className="py-3 px-4 font-semibold">
                Adresa banky pro mezinárodní platby a platby v cizích měnách:
              </td>
              <td className="py-3 px-4">
                Fio banka, a.s., V Celnici 1028/10, Praha 1
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

const partners = [
  {
    name: "Advokátní kancelář Karel Fischer",
    items: [
      "naše právní zastoupení",
      "advokátní kancelář založena v roce 2003",
      "poskytuje komplexní právní služby a servis",
      "www.akfischer.cz",
    ],
    link: "http://www.akfischer.cz",
    image: "partners/Logo_AKFischer.PNG",
  },
  {
    name: "LEDaplikace.cz – vývoj a úpravy LED osvětlení na míru",
    items: [
      "kamufláž naší techniky v kombinaci s LED osvětlením",
      "zakázková výroba LED svítidel, LED modulů, a LED pásek",
      "dodají a naprogramují LED nápisy a LED obrazovky",
      "www.ledaplikace.cz",
    ],
    link: "http://www.ledaplikace.cz",
    image: "partners/Logo_LEDaplikace.cz.png",
  },
  {
    name: "Asociace soukromých bezpečnostních služeb České republiky o.s.",
    items: [
      "zvyšování profesní úrovně v poskytování privátních bezpečnostních služeb",
      "ochrana zájmů a zajištění potřeb podnikatelů působících v této sféře",
      "spolupráce se státními orgány i ostatními subjekty",
      "www.asbs.cz",
    ],
    link: "http://www.asbs.cz",
    image: "partners/Logo_ASBS.jpg",
  },
  {
    name: "CENSUS SECURITAS s.r.o. – JUDr. Jiří Kameník",
    items: [
      "detektivní služby od roku 1999",
      "opatřování informací o důkazech pro soudní nebo správní řízení",
      "vyšetřování, pátrání a sledování",
      "www.cenzus-detective.cz",
    ],
    link: "http://www.cenzus-detective.cz",
    image: "partners/Logo_Census.jpg",
  },
  {
    name: "RITAS, s.r.o. – vše pro bezpečnost",
    items: [
      "systémy požární ochrany, BOZP, systémy řízení kvality ISO",
      "bezpečnostní poradenství a audity, prodej hasicích přístrojů",
      "působí v ČR od roku 2001",
      "www.ritas.cz",
    ],
    link: "http://www.ritas.cz",
    image: "partners/Logo_Ritas.png",
  },
  {
    name: "Unie soukromých bezpečnostních služeb České republiky",
    items: [
      "organizace zajišťující školení a zkoušky profesní kvalifikace",
      "obory detektiv koncipient a strážný",
      "vznikla v roce 2004",
      "www.usbscr.cz",
    ],
    link: "http://www.usbscr.cz",
    image: "partners/Logo_UnieBS.png",
  },
  {
    name: "Security Club sdružení zaměstnavatelů",
    items: [
      "založen v lednu 2002",
      "sdružuje zaměstnavatele z oblasti soukromých bezpečnostních služeb",
      "předkládá orgánům a institucím legislativní podněty",
      "www.securityclub.cz",
    ],
    link: "http://www.securityclub.cz",
    image: "partners/Logo_SecurityClub.png",
  },
];

const PartnersSection = () => (
  <section id="partneri" className="max-w-7xl mx-auto px-4 py-12 scroll-mt-10">
    <h2 className="text-center text-4xl font-bold mb-4 text-blue">
      Partneři a reference
    </h2>
    <hr className="mb-6 border-t border-gray-300" />
    <ul className="space-y-10 max-w-4xl mx-auto">
      {partners.map((partner, idx) => (
        <li
          key={idx}
          className="flex flex-col md:flex-row md:items-start gap-6"
        >
          <div className="md:w-7/12 space-y-1">
            <h5 className="text-lg font-semibold">{partner.name}</h5>
            <ul className="list-disc text-gray-700 pl-5">
              {partner.items.map((item, i) => (
                <li key={i}>
                  {item.includes("www") ? (
                    <a
                      href={partner.link}
                      target="_blank"
                      className="text-primary underline"
                    >
                      {item}
                    </a>
                  ) : (
                    item
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/3 flex justify-center items-center">
            <a href={partner.link} target="_blank">
              <img
                src={partner.image}
                alt={partner.name}
                className="max-w-full h-auto"
              />
            </a>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

const ProjectsSection: React.FC = () => (
  <section id="projekty" className="max-w-7xl mx-auto px-4 py-12 scroll-mt-10">
    <h2 className="text-center text-4xl font-bold mb-4 text-blue">Projekty</h2>
    <hr className="mb-6 border-t border-gray-300" />

    <div className="flex flex-col items-center">
      <a href="http://topspy.cz" target="_blank">
        <img
          src="logos/topspy-logo-web.svg"
          alt="TopSpy logo"
          className="w-[300px] mx-auto"
        />
      </a>

      <div className="mt-6 w-full px-4 md:px-8 lg:px-16">
        <h4 className="text-center text-xl mt-4 font-semibold text-blue">
          Odposlechy a špionážní technika TopSpy.cz – Když chcete vědět!
        </h4>

        <ul className="list-none text-center mt-6 space-y-2">
          <li>
            <i className="fa fa-angle-right mr-2 text-blue-600"></i>
            špionážní odposlechy, skryté kamery, technika a služby proti
            odposlechu
          </li>
          <li>
            <i className="fa fa-angle-right mr-2 text-blue-600"></i>
            kvalitní technika a odborné služby
          </li>
          <li>
            <i className="fa fa-angle-right mr-2 text-blue-600"></i>
            elektronický obchod i kamenná prodejna
          </li>
          <li>
            <i className="fa fa-angle-right mr-2 text-blue-600"></i>
            více na{" "}
            <a
              href="http://topspy.cz"
              className="text-blue underline hover:text-blue-400"
            >
              Odposlechy a špionážní technika TopSpy.cz
            </a>
          </li>
        </ul>

        <div className="flex flex-col md:flex-row gap-8 mt-8">
          <div className="md:w-1/2 space-y-6">
            <div>
              <h4 className="text-xl font-bold text-black">PRODUKTY</h4>
              <h5 className="text-lg font-semibold mt-2 text-blue">
                Odposlechy a štěnice
              </h5>
              <p className="mt-2 text-gray-600">
                Nabízíme odposlouchávací zařízení - štěnice, které zajistí
                zvukové informace v každé situaci. Vyberte si z celé řady{" "}
                <strong>špičkových špionážních zařízení</strong>, na které je
                spolehnutí. Nabízíme{" "}
                <strong>kvalitní kamuflované odposlechy</strong> v běžných
                předmětech – USB flash disky, pera a propisky, klíčenky,
                kalkulačky apod. Rádi Vám poradíme, jaký typ odposlechu vybrat:
                záznamníky – diktafony a mikro diktafony, rádiové odposlechy,
                GSM štěnice nebo kombinované systémy. Aktuální nabídku naleznete
                na stránce{" "}
                <a
                  href="http://topspy.cz"
                  className="text-blue underline hover:text-blue-400"
                >
                  Odposlechy a štěnice
                </a>
                .
              </p>
            </div>

            <div>
              <h5 className="text-lg font-semibold text-blue">
                Další špionážní technika
              </h5>
              <p className="mt-2 text-gray-600">
                Dále v naší nabídce naleznete kvalitní{" "}
                <a
                  href="https://topspy.cz/skryte-kamery"
                  className="text-blue underline hover:text-blue-400"
                  target="_blank"
                >
                  skryté miniaturní kamery – mikrokamery
                </a>
                , bezpečnostní řešení pro{" "}
                <a
                  href="https://topspy.cz/odposlech-telefonu"
                  className="text-blue underline hover:text-blue-400"
                  target="_blank"
                >
                  odposlech mobilního telefonu – mobilu
                </a>{" "}
                , pevné i mobilní lokátory pro sledování vozidel a zabezpečovací
                <a
                  href="https://topspy.cz/ochrana-pred-odposlechy"
                  className="text-blue underline hover:text-blue-400"
                  target="_blank"
                >
                  {" "}
                  produkty pro ochranu před odposlechem, sledováním a nahráním
                </a>
                .
              </p>
            </div>
          </div>

          <div className="md:w-1/2 space-y-6">
            <div>
              <h4 className="text-xl font-bold text-black">SLUŽBY</h4>
              <h5 className="text-lg font-semibold mt-2 text-blue">
                Profesionální prohlídky proti odposlechu
              </h5>
              <p className="mt-2 text-gray-600">
                Bojíte se odposlechu u Vás ve firmě, doma nebo ve vozidle?
                Svěřte svou ochranu do našich rukou. Podrobné informace
                naleznete na stránce{" "}
                <a
                  href="https://topspy.cz/vyhledavani-odposlechu"
                  className="text-blue underline hover:text-blue-400"
                  target="_blank"
                >
                  vyhledávání odposlechů
                </a>
                .
              </p>
            </div>

            <div>
              <h5 className="text-lg font-semibold text-blue">Další služby</h5>
              <p className="mt-2 text-gray-600">
                Pokud potřebujete odposlech pouze na jednorázovou akci, nabízíme
                výhodné{" "}
                <a
                  href="https://topspy.cz/zapujceni-odposlechu"
                  className="text-blue underline hover:text-blue-400"
                  target="_blank"
                >
                  zapůjčení špionážní techniky
                </a>
                . Pro zvýšení Vaší bezpečnosti nebo odbornosti Vašich
                zaměstnanců Vám nabízíme{" "}
                <a
                  href="https://topspy.cz/skoleni"
                  className="text-blue underline hover:text-blue-400"
                  target="_blank"
                >
                  odposlechová školení
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Content: React.FC = () => {
  return (
    <>
      <div className="md:mt-16">
        <div className="px-0">
          <HeroSection />
        </div>
        <div className="md:px-10">
          <ContactsSection />
          <BankDetails />
          <PartnersSection />
          <ProjectsSection />
        </div>
      </div>
    </>
  );
};

export default Content;
