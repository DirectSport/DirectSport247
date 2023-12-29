import React , {useState, useRef, useEffect}from "react"
import "../Styles/faq.css"
import gsap from "gsap"
function Faq(){
  const [openAccordion, setOpenAccordion] = useState(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const accordionRefs = useRef([]);
  const accordionContainer = useRef(null)
  const handleAccordionClick = (index) => {
    console.log(openAccordion, index);
    if (index !== openAccordion) {
        setOpenAccordion(index);
     } else {
       setOpenAccordion(null);
    }
    if (index === openAccordion) {
      gsap.to(
        accordionRefs.current[index].querySelector(".accordion__details"),
        {
          height: 0,
          duration: 1,
          ease: "power1.inOut",
         }
      );
    }
    else {
      if (openAccordion !== null) {
        gsap.to(
          accordionRefs.current[openAccordion].querySelector(
            ".accordion__details"
          ),
          {
            height: 0,
            duration: 1,
            ease: "power1.inOut",
          }
        );
      }
      setOpenAccordion(index);
      gsap.fromTo(
        accordionRefs.current[index].querySelector(".accordion__details"),
        { height: 0 },
        {
          height: "auto",
          duration: 1,
          ease: "power1.inOut",
        }
      );
    }
  };
    useEffect(() => {
    const options = {
      rootMargin : "0px",
      threshold : 0.5
    }
    const entry =  ([entry]) => {
        setIsIntersecting(entry.isIntersecting);

      
    }
    const observer = new IntersectionObserver(entry, options);
    observer.observe(accordionContainer.current);
  }, [isIntersecting]); 
return <div className="accorder">
<div className={`accordion__container ${isIntersecting ? "animate" : ""}`} ref={accordionContainer} id="Gideon">
<h2 className="accordion-title-faq ">Frequently Asked Questions <i class="fa-solid fa-question question-faq"></i></h2>
   <div className={`accordion__item  ${openAccordion === 0 ? "open" : ""} `} style={{"--index" : 1}} ref={(el) => (accordionRefs.current[0] = el)}> 
      <div className="accordion__header"     onClick={() => handleAccordionClick(0)}>
      <p className="accordion__number">01</p>
            <p className="accordion__name">Do We Cover Champions League</p>
      </div>
      <div className="accordion__details">
      <ul>
              <li>
                The current tallest building in the world is the Burj Khalifa,
                located in Dubai, United Arab Emirates.
              </li>
              <li>
                It stands at a height of 828 meters (2,716 feet) tall and has
                163 floors.
              </li>
              <li>
                The building took six years to construct and was completed in
                2010.
              </li>
            </ul>
      </div>
      </div>
   <div className={`accordion__item  ${openAccordion === 1 ? "open" : ""} `} style={{"--index" : 2}}  ref={(el) => (accordionRefs.current[1] = el)}>
      <div className="accordion__header"     onClick={() => handleAccordionClick(1)}>
      <p className="accordion__number">02</p>
            <p className="accordion__name">Do We Cover Premier League</p>
      </div>
      <div className="accordion__details">
      <ul>
              <li>
                The current tallest building in the world is the Burj Khalifa,
                located in Dubai, United Arab Emirates.
              </li>
              <li>
                It stands at a height of 828 meters (2,716 feet) tall and has
                163 floors.
              </li>
              <li>
                The building took six years to construct and was completed in
                2010.
              </li>
            </ul>
      </div>
   </div>
   <div className={`accordion__item   ${openAccordion === 2 ? "open" : ""}` } style={{"--index" : 3}}  ref={(el) => (accordionRefs.current[2] = el)}> 
      <div className="accordion__header"     onClick={() => handleAccordionClick(2)}>
      <p className="accordion__number">03</p>
            <p className="accordion__name">Do We Cover World Cup Also</p>
      </div>
      <div className="accordion__details">
      <ul>
              <li>
                The current tallest building in the world is the Burj Khalifa,
                located in Dubai, United Arab Emirates.
              </li>
              <li>
                It stands at a height of 828 meters (2,716 feet) tall and has
                163 floors.
              </li>
              <li>
                The building took six years to construct and was completed in
                2010.
              </li>
            </ul>
      </div>
   </div>
</div>
</div>
}
export default Faq