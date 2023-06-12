import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const DragAndDropPage = () => {
    const items = [
        { id: 'item-1', content: 'Item 1' },
        { id: 'item-2', content: 'Item 2' },
        { id: 'item-3', content: 'Item 3' },
        { id: 'item-4', content: 'Item 4' },
    ];

    const onDragEnd = (result) => {
        // 处理拖拽结束的逻辑
        // ...
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
                {(provided) => (
                    <ul {...provided.droppableProps} ref={provided.innerRef}>
                        {items.map((item, index) => (
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                                {(provided, snapshot) => (
                                    <li
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={{
                                            ...provided.draggableProps.style,
                                            background: snapshot.isDragging ? 'lightblue' : 'white',
                                        }}
                                    >
                                        {item.content}
                                    </li>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </ul>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default DragAndDropPage;
