// REMEMBER THE RULES OF HOOKS
// ✅ Name begins with "use"
// ✅ Call them at the top level in the body of a function component.
// ✅ Call them at the top level in the body of a custom Hook.
// 🔴 Do not call Hooks inside conditions or loops.
// 🔴 Do not call Hooks after a conditional return statement.
// 🔴 Do not call Hooks in event handlers.
// 🔴 Do not call Hooks in class components.
// 🔴 Do not call Hooks inside functions passed to useMemo, useReducer, or useEffect.

import { useState } from "react";

export default function useToggleState() {
  const [state, stateSetter] = useState(true);

  function wrappedSetter() {
    stateSetter(!state);
  }

  return [state, wrappedSetter];
}
