import { useState } from 'react';
import TabButton from './TabButton';
import Tabs from './Tabs';
import { EXAMPLES } from '../data';
import Section from './Section';

export default function Examples(){
    const [selectedValue, setSelectedValue] = useState();
    function handleSelect(selectedButton) {
        setSelectedValue(selectedButton);
    }

    let tabContent = <p>Please select a topic</p>

    if(selectedValue){
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedValue].title}</h3>
                <p>{EXAMPLES[selectedValue].description}</p>
                <pre>
                    <code>
                        {EXAMPLES[selectedValue].code}
                    </code>
                </pre>
            </div>
        );
    }
    
    return (
        <Section id="examples">
            <Tabs tabButton={
                <>
                    <TabButton isSelected={selectedValue === 'components'} onClick={() => handleSelect('components')}>Components</TabButton>
                    <TabButton isSelected={selectedValue === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
                    <TabButton isSelected={selectedValue === 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
                    <TabButton isSelected={selectedValue === 'state'} onClick={() => handleSelect('state')}>State</TabButton>
                </>
            }>
            {tabContent}</Tabs>
        </Section>
    );

}