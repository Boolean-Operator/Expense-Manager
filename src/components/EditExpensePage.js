import React from 'react';

const EditExpensePage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>
        Edit Expense Id: {props.match.params.id}
      </h1>
    </div>
  );
};
    

export default EditExpensePage;