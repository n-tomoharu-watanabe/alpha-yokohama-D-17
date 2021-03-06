import React, { useEffect, useState } from 'react'
import { DragDropContext, Droppable, Draggable, DropResult, DroppableProvided } from 'react-beautiful-dnd'
import { CloneElement } from '../CloneElement'

const moveItem = function <T>(list: T[], from: number, to: number) {
  console.log("move", from, "=>", to)

  const result = Array.from(list)
  const [removed] = result.splice(from, 1)
  result.splice(to, 0, removed)

  return result
}

interface DroppableList<T> {
  items: T[]
  children: (item: T, key: string, index: number) => React.ReactElement
  container?: React.ReactElement
  onDragEnd?: (items: T[]) => void
}

export const DraggableList = function <T>({ children, container, ...props }: DroppableList<T>) {
  const [items, setItems] = useState<({ key: string, value: T })[]>([])

  useEffect(() => {
    setItems(props.items.map((value, i) => ({ key: `key-${i}`, value })))
  }, [])

  function onDragEnd(result: DropResult) {
    if (!result.destination) { return }
    if (result.destination.index === result.source.index) { return }

    const from = result.source.index
    const to = result.destination.index
    const _items = moveItem(items, from, to)

    setItems(_items)

    props.onDragEnd?.(_items.map(item => item.value))
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list" direction="horizontal">
        {(provided) => (
          <CloneElement
            element={container ?? (<div className="flex justify-center"></div>)}
            props={{ children, ref: provided.innerRef, ...provided.droppableProps }}
          >
            {items.map((item, index) => (
              <Draggable draggableId={item.key} index={index} key={item.key}>
                {(provided) => (
                  React.cloneElement(
                    children(item.value, item.key, index),
                    {
                      ref: provided.innerRef,
                      key: item.key,
                      ...provided.draggableProps,
                      ...provided.dragHandleProps,
                    }
                  )
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </CloneElement>
        )}
      </Droppable>
    </DragDropContext>
  )
}