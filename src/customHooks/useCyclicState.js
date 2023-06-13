// REMEMBER THE RULES OF HOOKS
// ✅ Name begins with "use"
// ✅ Call them at the top level in the body of a function component.
// ✅ Call them at the top level in the body of a custom Hook.
// 🔴 Do not call Hooks inside conditions or loops.
// 🔴 Do not call Hooks after a conditional return statement.
// 🔴 Do not call Hooks in event handlers.
// 🔴 Do not call Hooks in class components.
// 🔴 Do not call Hooks inside functions passed to useMemo, useReducer, or useEffect.

import { useEffect, useState } from "react";

export default function useCyclicState(arrayOfChoices, startInd = 0) {
  let [index, setIndex] = useState(startInd);

  let startingValue = arrayOfChoices[index];
  let [choice, setChoice] = useState(startingValue);

  useEffect(() => {
    setChoice(arrayOfChoices[index]);
  }, [index]);

  function stateCycler() {
    let newIndex = index === arrayOfChoices.length - 1 ? 0 : index + 1;
    setIndex(newIndex);
  }

  return [choice, stateCycler];
}
