import { Header, Footer} from './components/layout';
import { Card, Dropdown } from './components';

function App() {
  const data = [
    {
      year: 2020,
      month: 'oktober',
      events: [
        {
          image: 'xpo-logo-dark.jpg',
          title: 'Digital First 2020',
          date: '21-22 oktober 2020',
          tags: ['Paper', 'Engels']
        },
        {
          image: 'dama-event.jpg',
          title: 'Lanceringsevenement Kenniscentrum Data & Maatschappij',
          date: '30 oktober 2020',
          tags: ['Tool', 'Artificiële Intelligentie']
        },
        {
          image: 'dama-event.jpg',
          title: 'Voorbeeld placeholder image',
          date: '30 oktober 2020',
          tags: ['Artificiële Intelligentie']
        },
      ]
    },
    {
      year: 2020,
      month: 'februari',
      events: [
        {
          image: 'IS-Logo-Symp20-BENELUX.jpg',
          title: 'InterSystems Symposium (Antwerpen)',
          date: '11-12 februari 2020',
          tags: ['Paper', 'Engels']
        },
        {
          image: 'AI__Smart_Texh-640x345-640x345.jpg',
          title: 'AI & Smart Tech',
          date: '20 februari 2020',
          tags: ['Tool', 'Artificiële Intelligentie']
        },
      ]
    },
    {
      year: 2020,
      month: 'januari',
      events: [
        {
          image: 'Impact_AI+2020.jpg',
          title: 'IMPACT:AI 2020',
          date: '16 januari 2020',
          tags: ['Paper', 'Engels']
        },
      ]
    },
    {
      year: 2019,
      month: 'december',
      events: [
        {
          image: 'AI-Forum-Banner-2aae4b-1024x579.jpg',
          title: 'AI Forum',
          date: '15 december 2019',
          tags: ['Paper', 'Engels']
        },
        {
          image: 'ai-developers-webinar-500x250.jpg',
          title: 'IntelAI',
          date: '11 december 2019',
          tags: ['Tool', 'Artificiële Intelligentie']
        },
        {
          image: 'artificial-intelligence-confusion-719504626-1068x601-2.jpg',
          title: 'Talk Prof. Blockeel',
          date: '5 december 2019',
          tags: ['Paper', 'Engels']
        },
      ]
    },
  ]

  return (
    <div className="App">
      <Header />
      <main>
        <div className="title-page">
          <h1>Events</h1>
        </div>
        <div className="content-container">
          <div className="container">
            <div className="row filter">
              <div className="col-12 col-md-1">
                <p className="filter__title">Filter</p>
              </div>
              <div className="col-12 col-md-11 filter__choices">
                <div className="filter__dropdowns">
                  <Dropdown title="Type event (1)" items={['Conferentie', 'Paper']}/>
                  <Dropdown title="Onderwerp" items={['AI']}/>
                </div>
                <div className="filter__chosen">
                  <p>Type event: <span>Conferentie</span></p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                {data.map((item, index) => (
                  <>
                    <div key={index} className="year-month">
                      <p>{item.month}</p>
                      <p>{item.year}</p>
                    </div>
                    <div className="cards">
                      {item.events.map((ev, index) => <Card key={index} data={ev} />)}
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
