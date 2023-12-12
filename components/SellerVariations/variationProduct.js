import { Ring } from "@uiball/loaders";
import Image from "next/image";
import { useState } from "react";
import Combination from "./Combination";

// function VariationProduct({
//   variation,
//   selectVariation,
//   deleteVariation,
//   isSelecting = true,
//   isDeleting,
// }) {
//   return (
//     <div
//       className={`w-full flex justify-around items-center py-2 border-b border-gray-300 `}
//     >
//       <p>{variation.name}</p>
//       <p>{variation.color}</p>
//       <p>{variation.size}</p>
//       <Image
//         src={variation.image}
//         alt={variation.name}
//         width={75}
//         height={75}
//       />
//       <div className="flex justify-center items-center space-x-2 w-[20%] h-full">
//         {isSelecting == true ? (
//           <div  className="px-2 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 min-w-[40%] min-h-[100%] flex justify-center items-center ">
//             <Ring size={20} speed={2} lineWeight={5} color="white" />
//           </div>
//         ) : (
//           <button
//             onClick={() => {
//               selectVariation(variation.id);
//             }}
//             className="px-2 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 min-w-[40%] "
//           >
//             Select
//           </button>
//         )}
//         <button
//           onClick={() => {
//             deleteVariation(variation.id);
//           }}
//           className="px-2 py-1 bg-red-500 text-white rounded-lg  hover:bg-red-600 min-w-[40%] "
//         >
//           Delete
//         </button>
//       </div>
//     </div>
//   );
// }

function cartesianProductWithIds(arrays) {
  return arrays.reduce((acc, curr) => {
    return (
      acc.flatMap((x) =>
        curr.map((y) => {
          const combined = { ...x, ...y };
          const ids = { ...x.id, [y.attribute + "_id"]: y.id };
          console.log({ option: combined, ids: ids });
          return { option: combined, ids: ids };
        })
      ),
      [{}]
    );
  });
}

// function generateCombinations(attributes, currentCombination = {}, currentIndex = 0) {
//   if (currentIndex === attributes.length) {
//     // If currentIndex is equal to the length of attributes, it means we have a complete combination
//     return [currentCombination];
//   }

//   const attributeKey = Object.keys(attributes[currentIndex])[0]; // Get the attribute key dynamically
//   const currentAttribute = attributes[currentIndex][attributeKey];
//   const combinations = [];

//   for (const option of currentAttribute) {
//     const newCombination = { ...currentCombination };
//     newCombination[attributeKey] = option.option;
//     newCombination[`${attributeKey}Id`] = option.id;

//     // Recursively generate combinations for the next attribute
//     const nextCombinations = generateCombinations(attributes, newCombination, currentIndex + 1);
//     combinations.push(...nextCombinations);
//   }

//   return combinations;
// }

function generateCombinations(
  attributes,
  currentCombination = {},
  currentIndex = 0
) {
  if (currentIndex === attributes.length) {
    const combinationWithIdsArray = { ...currentCombination };
    combinationWithIdsArray.idArray = Object.values(currentCombination).filter(
      (value) => typeof value === "number"
    );
    return [combinationWithIdsArray];
  }

  const attributeKey = Object.keys(attributes[currentIndex])[0];
  const currentAttribute = attributes[currentIndex][attributeKey];
  const combinations = [];

  for (const option of currentAttribute) {
    const newCombination = { ...currentCombination };
    newCombination[attributeKey] = option.option;
    newCombination[`${attributeKey}Id`] = option.id;

    const nextCombinations = generateCombinations(
      attributes,
      newCombination,
      currentIndex + 1
    );
    combinations.push(...nextCombinations);
  }

  return combinations;
}

function VariationProduct({ variations, image, productId }) {
  // const [selectedVariations, setSelectedVariations] = useState([]);
  const [selectedCombinations, setSelectedCombinations] = useState([]);
  const groupedVariations = {};
  variations["variations"].forEach((variation) => {
    const attribute = variation.attribute;
    if (!groupedVariations[attribute]) {
      groupedVariations[attribute] = [];
    }
    groupedVariations[attribute].push(variation);
  });
  const attributeArray = Object.entries(groupedVariations).map(
    ([key, value]) => ({ [key]: value })
  );
  const allCombinations = generateCombinations(attributeArray);
  // console.log(allCombinations);
  // function selectVariation(id) {
  //   const isSelected = selectedVariations.includes(id);

  //   if (isSelected) {
  //     setSelectedVariations((prevSelected) =>
  //       prevSelected.filter((selectedId) => selectedId !== id)
  //     );
  //   } else {
  //     setSelectedVariations((prevSelected) => [...prevSelected, id]);
  //   }
  // }

  // const handleCheckboxChange = (index) => {
  //   const updatedSelectedCombinations = [...selectedCombinations];
  //   updatedSelectedCombinations[index] = !selectedCombinations[index];
  //   // console.log(updatedSelectedCombinations);
  //   setSelectedCombinations(updatedSelectedCombinations);
  // };
  // console.log(`asdasdasd`);
  // console.log(allCombinationsWithIds);

  return (
    <div className={`w-full flex flex-col justify-around items-start py-2 `}>
      <p className="pb-3 text-xl">
        Please select the desired variations for your product :
      </p>
      <div className="flex justify-start w-full items-center space-y-3">
        <div className="w-full">
          {/* {Object.keys(groupedVariations).map((key, index) => {
            return (
              <div
                key={index}
                className="flex flex-col px-2 justify-start w-full items-start space-y-1 py-2"
              >
                <p className="text-lg">{key} :</p>
                <div className="flex flex-wrap w-full px-2 justify-start items-center space-x-3 ">
                  {groupedVariations[key].map((item) => {
                    const isSelected = selectedVariations.includes(item.id);

                    return (
                      <div
                        key={item.id}
                        onClick={() => {
                          selectVariation(item.id);
                        }}
                        className={`px-2 text-lg text-black cursor-pointer select-none border-b-2 border-gray-300 transition-all duration-300 ${
                          isSelected
                            ? "border-skin-primary opacity-100 "
                            : "opacity-60"
                        }`}
                      >
                        {item.option}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })} */}

          {allCombinations.map((combination, index) => {
            return (
              // <div
              //   key={index}
              //   className="flex flex-wrap space-x-4 px-2 py-2 border-b border-gray-200"
              // >
              //   {Object.entries(combination).map(([key, value]) => {
              //     return (
              //       <div className="flex justify-center w-max  items-center ">
              //         {!key.startsWith("id") ? (
              //           !key.endsWith("Id") && (
              //             <div
              //               key={key}
              //               className="text-center"
              //             >{`${key}: ${value}`}</div>
              //           )
              //         ) : (
              //           <button
              //             onClick={() => {console.log(value)}}
              //             className="justify-self-end flex-grow text-skin-primary "
              //           >click</button>
              //         )}
              //       </div>
              //     );
              //   })}
              // </div>
              <Combination
                key={index}
                combination={combination}
                productId={productId}
              />
            );
          })}

          {/* {allCombinationsWithIds.forEach(())} */}
        </div>
        {/* <Image src={image} width={150} height={150} alt="Product image" className="m-auto shadow-xl border border-gray-300 rounded-sm " /> */}
      </div>
    </div>
  );
}

export default VariationProduct;
