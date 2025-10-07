import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const text = `
Cisza poranka ma w sobie coś nieuchwytnego — to cisza, która nie jest brakiem dźwięków, lecz przestrzenią, w której dźwięki dopiero się rodzą. Kiedy świat jeszcze budzi się powoli, a pierwsze promienie słońca wpadają przez szczeliny w zasłonach, łatwiej dostrzec drobne szczegóły: oddech rośliny stojącej przy oknie, miękki stukot klawiatury, odległy świergot ptaków. Te pozornie nieistotne elementy tworzą tkankę poranka i przypominają, że życie składa się z małych, powtarzalnych aktów — równie ważnych, co wielkie wydarzenia.


W codziennym biegu łatwo zapomnieć o wartości tej uważności. Zamiast obserwować, co mamy przed oczami, rozmyślamy o tym, co będzie za godzinę, dniem, miesiącem. Tymczasem to, co tu i teraz, ma moc zmiany naszego postrzegania świata. Uważne przeżywanie chwili nie jest ucieczką od obowiązków — jest sposobem na ich pełniejsze przeżycie. Kiedy robimy coś z uwagą, nawet najprostsze zadanie staje się pełniejsze: ugotowanie posiłku, rozmowa z bliską osobą, spacer po osiedlu.


Poszukiwanie sensu często prowadzi nas w kierunku wielkich pytań: kim jestem, dokąd zmierzam, co zostawię po sobie. Warto jednak zauważyć, że sens często ukrywa się w drobnych czynnościach i relacjach. To drobne gesty życzliwości, poukładany poranek, chwila ciszy z kawą — tworzą one mozaikę, którą trudno zmierzyć miarą sukcesu czy porażki. Takie podejście nie umniejsza ambicji ani celów — raczej pozwala budować życie, które jest jednocześnie produktywne i pełne obecności.


Relacje międzyludzkie są jednym z najważniejszych wymiarów tej mozaiki. Często oczekujemy od innych wielkich gestów, a zapominamy, że to codzienna obecność buduje poczucie bezpieczeństwa. Warto inwestować czas i uwagę w te drobne akty: wysłuchanie, wspólne śmiechy, uprzejme pytanie o samopoczucie. Nawet krótka, szczera rozmowa może odmienić czyjś dzień. W świecie, w którym tempo życia przyspiesza, umiejętność obecności staje się cenniejsza niż kiedykolwiek.


Kreatywność i spokój ducha wydają się iść w parze. W ciszy łatwiej usłyszeć własne myśli, zobaczyć związki między pozornie niepowiązanymi ideami, dostrzec nowe rozwiązania. Wielu twórców podkreśla, że prawdziwa praca zaczyna się wtedy, gdy odrzucimy hałas narzucony z zewnątrz i damy przestrzeń własnej refleksji. To nie znaczy, że abandonujemy świat — przeciwnie: działamy w nim bardziej świadomie.


Codzienność jest źródłem zarówno rutyny, jak i możliwości. Rutyna potrafi usypiać – ale potrafi też dawać ramę, w której możemy działać bez zbędnego rozproszenia. Z kolei możliwość pojawia się tam, gdzie potrafimy zauważyć odstępstwo od normy — moment, w którym można wprowadzić zmianę, spróbować innej drogi, powiedzieć „tak” lub „nie”. Warto od czasu do czasu spojrzeć na swoje życie z perspektywy obserwatora: co działa, co sprawia radość, co męczy. Świadomość tego pomaga podejmować decyzje zgodne z własnymi wartościami.


Na koniec — pamiętajmy o prostocie. W świecie pełnym informacji i bodźców, proste rytuały przypominają nam, kim jesteśmy. Może to być chwila na rozruch poranka, notowanie trzech rzeczy, za które jesteśmy wdzięczni, albo wieczorny spacer bez telefonu. Proste czynności, powtarzane regularnie, kształtują charakter i dają poczucie tożsamości.


Uważność nie jest celem samym w sobie, lecz praktyką, która pomaga żyć pełniej. Nie trzeba przeobrażać całego życia jednego dnia. Wystarczy zacząć od małych kroków — od chwili ciszy przy porannej kawie, od wysłuchania przyjaciela, od zauważenia piękna w codzienności. To właśnie z tych drobnych elementów buduje się życie, które ma sens dla nas samych — spokojne, uważne i prawdziwe.
`;


  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center p-6">
      <main className="prose max-w-3xl bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Refleksje o chwili</h1>
        <article className="leading-relaxed text-justify">
          {text.split('\n\n').map((para, i) => (
            <p key={i} className="mb-4">{para.trim()}</p>
          ))}
        </article>
      </main>
    </div>
  );
}

export default App
