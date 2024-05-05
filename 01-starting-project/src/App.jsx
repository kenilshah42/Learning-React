import { useState } from 'react';

import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';

import { CORE_CONCEPTS } from './data';
import { EXAMPLES } from './data';

function App() {
  const [selectedValue, setSelectedValue] = useState();
  function handleSelect(selectedButton) {
    setSelectedValue(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((coreConcept) => <CoreConcept key={coreConcept.title} {...coreConcept} />)}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedValue === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedValue === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedValue === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedValue === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {!selectedValue ?
            (<p>Please select a topic</p>
            ) : (<div id="tab-content">
              <h3>{EXAMPLES[selectedValue].title}</h3>
              <p>{EXAMPLES[selectedValue].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedValue].code}
                </code>
              </pre>
            </div>)}
        </section>
      </main>
    </div>
  );
}

export default App;
