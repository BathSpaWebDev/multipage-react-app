import Accordion from '../../../components/Accordion';
import {data} from './data.js';

function FAQ() {
    return (
      <div className="FAQ">
        <h1>FAQ</h1>
        {
          // Use the map function to map the data to output multiple accordions 
          data.map(function(item, index){
            return (
              <Accordion title={item.question} > 
                  {item.answer}
              </Accordion>
            )
          })
        }
        
      </div>
    );
  }
  
  export default FAQ;
  