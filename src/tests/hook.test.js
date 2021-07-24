import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import {renderHook, act} from "@testing-library/react-hooks";
import useSearch from '../hooks/useSearch';


describe("Testing en Hooks", () => {

 const paramsSearch = {
  initialSearch: "perra",
  initialRating: "g"
 }
 let result
 beforeEach(() => {
  let wrapper = renderHook(() => useSearch({...paramsSearch})); 
  result = wrapper.result;
 })

 test("should change keyword", () => {
  
  act(() => {
   result.current.updateSearch("nuevapalabra")
  })
  expect(result.current.search).toBe("nuevapalabra");
  expect(result.current.times).toBe(1);
 })

 test("should use initial values", () => {
   expect(result.current.search).toBe("perra");
 })

 test("should update correctly times when udes twice", () => {

   act(() => {
    result.current.updateSearch("b");
    result.current.updateSearch("ba");
    result.current.updateSearch("bc");
   })
   expect(result.current.times).toBe(3);
 })
})