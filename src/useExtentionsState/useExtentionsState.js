import { useState } from 'react';
export default initialValue => {
  const [extentions, setExtentions] = useState(initialValue);

  return {
    extentions,
    /* addTodo: todoText => {
      setTodos([...todos, todoText]);
    }, */
    deleteExtention: extentionIndex => {
      const newExtentions = extentions
        .filter((_, index) => index !== extentionIndex);

      setExtentions(newExtentions);
    }
  };
};