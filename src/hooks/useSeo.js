import { useEffect, useRef } from "react";
const useSeo = ({title, description}) => {
 const previousTitle = useRef(document.title);
 const previousDescription = useRef(document.querySelector("meta[name='description']"));

 useEffect(() => {
  const prevTitle = previousTitle.current
  if(title){
   document.title = `${title} | Gif`;
  }

  return () => document.title = prevTitle;
 }, [title])

 useEffect(() => {
  const prevDescription = previousDescription.current
  let metaDescription = document.querySelector("meta[name='description']");
   if(description){
   metaDescription.setAttribute("content", description);
  }

  return () => metaDescription.setAttribute("content", prevDescription.getAttribute("content"));
 }, [description])


}

export default useSeo
