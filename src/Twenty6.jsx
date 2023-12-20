import React, { useState } from "react";
import "./App.css";

const Twenty6 = () => {
  const [items, setItems] = useState(["item0","item1","item2"]);
   
const dragStart = (e,index)=>{
    e.dataTransfer.setData("index",index.toString())
}

  const handleDragOver = (e) =>{
    e.preventDefault();
  }


  const dragDrop= (e,newIndex) =>{
    const draggedIndex = parseInt(e.dataTransfer.getData('index'))
    console.log("draggedIndex",draggedIndex)

    const newItems = [...items]
    console.log("newItems",newItems)

    const [goingToDrag] = newItems.splice(draggedIndex,1)
    console.log("goingtodrag",[goingToDrag])
    console.log("newIndex",newIndex)
    newItems.splice(newIndex,0,goingToDrag) // againAdding back the removed item with new index
    console.log(newItems)

     setItems(newItems)
  }



  return (
    <div className="dragabble">
        <h1>26th Drag And Drop items</h1>
      {items.map((item, index) => {
        return (
           <div draggable key={index}
           onDragStart={(e)=>dragStart(e,index)}
           onDragOver={handleDragOver}
            onDrop={(e)=>dragDrop(e,index)}
           >
            {item}

           </div>
        );
      })}
        <hr />

    </div>
  );
};


export default Twenty6;

/*

    e.dataTransfer:
        e stands for the event object that contains information about the event.
        dataTransfer is a property within the event object that allows data to be transferred during drag-and-drop operations.

    e.dataTransfer.setData('index', index.toString());:
        setData() is a method that sets the data for a specific data type in the drag operation's drag data store.
        'index' is the data type or key for the data being set.
        index.toString() converts the index (usually a number) to a string and sets it as the data associated with the 'index' data type.

    Explanation in Layman's Terms:
    When an item is being dragged, we need a way to store information about that item. Imagine you have a box and want to label it with a unique number to remember its position. The setData function acts like a label maker, and the 'index' is the label we're creating. It helps us remember the index (position) of the item that's being dragged by attaching this label to it.

    parseInt(e.dataTransfer.getData('index'));:
        getData() is a method used to retrieve the data that was previously set using setData().
        'index' specifies the data type or key from which to retrieve the stored data.

    Explanation in Layman's Terms:
    When we drop the item somewhere, we want to remember where it came from. The getData function acts like reading the label we previously created with setData. By using parseInt, we convert the retrieved data (which was stored as a string) back to a number. This number helps us identify the original position of the item that was dragged.

In essence, e.dataTransfer.setData() allows us to attach information (like an index or identifier) to the item being dragged, while e.dataTransfer.getData() helps us retrieve that information when the item is dropped elsewhere. These functionalities are crucial for managing and identifying the dragged data during drag-and-drop operations in a web application.

*/
