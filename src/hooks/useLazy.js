import {useState, useEffect, useRef} from 'react'

const useLazy = ({distance = 100, once=true}) => {  

  const [show, setShow] = useState(false);
  const elementRef = useRef();
  
  console.log("Renderizandose Hook useLazy");
  
  useEffect(() => {
    const element = elementRef ? elementRef.current : null;
    const callback = (entries, observer) => {
      if(entries[0].isIntersecting){
        setShow(true);
        // observer.disconnect();
        once && observer.disconnect();
        console.log("entrada visualizada");
      //En el else no tiene que poner nada pero puede un console.log, pero por la desconeccion ya no se volvera a ejecutar
      //! El else es cuando sales de la interseccion
      }else{
        !once && setShow(false);
        console.log("entrada no visualizada");
      }
    }
    const options = {
        rootMargin: `${distance}px`
    }

    Promise.resolve(
      IntersectionObserver || import("intersection-observer")
    ).then(() => {
      const observer = new IntersectionObserver(callback, options);
      if(element) observer.observe(element);
      
    });

  }, [distance, show, once])
 
 
  return [show, elementRef];
}
 
export default useLazy;