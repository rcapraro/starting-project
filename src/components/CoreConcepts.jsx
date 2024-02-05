import {CORE_CONCEPTS} from "../data.js";
import CoreConcept from "./CoreConcept.jsx";
import Section from "./Section.jsx";

export default function CoreConcepts() {

  return (
  <Section id="core-concepts" title="Core concepts">
    <ul>
      {CORE_CONCEPTS.map((conceptItem) =>
        (<CoreConcept key={conceptItem.title} {...conceptItem} />)
      )}
    </ul>
  </Section>
  );
}
