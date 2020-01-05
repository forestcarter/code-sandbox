import React, { useState, useCallback, useRef } from "react"
import "./GameOfLife.css"
import { Button } from "react-bootstrap"
import { produce } from "immer"

const numColumns = 50
const numRows = 25

const operations = [
  [0, 1],
  [0, -1],
  [1, 1],
  [1, -1],
  [1, 0],
  [-1, 1],
  [-1, -1],
  [-1, 0],
]

const generateEmptyGrid = () => {
  return Array(numRows).fill(Array(numColumns).fill(0))
}

const GOL = () => {
  const [grid, setGrid] = useState(() => {
    return generateEmptyGrid()
  })

  const [running, setRunning] = useState(false)
  const runningRef = useRef(running)
  runningRef.current = running

  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return
    }
    setGrid(g => {
      return produce(g, gridCopy => {
        for (let i = 0; i < numRows; i++) {
          for (let k = 0; k < numColumns; k++) {
            let neighbors = 0
            operations.forEach(([x, y]) => {
              const newI = i + x
              const newK = k + y
              if (
                newI >= 0 &&
                newI < numRows &&
                newK >= 0 &&
                newK < numColumns
              ) {
                neighbors += g[newI][newK]
              }
            })
            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][k] = 0
            } else if (g[i][k] === 0 && neighbors === 3) {
              gridCopy[i][k] = 1
            }
          }
        }
      })
    })

    setTimeout(runSimulation, 100)
  }, [])

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "0 10px",
        }}
      >
        <Button
          onClick={() => {
            setRunning(!running)
            if (!running) {
              runningRef.current = true
              runSimulation()
            }
          }}
        >
          {running ? "Stop" : "Start"}
        </Button>

        <Button
          onClick={() => {
            setGrid(generateEmptyGrid())
          }}
        >
          Clear
        </Button>

        <Button
          onClick={() => {
            const rows = []
            for (let i = 0; i < numRows; i++) {
              rows.push(
                Array.from(Array(numColumns), () =>
                  Math.random() > 0.7 ? 1 : 0
                )
              )
            }
            setGrid(rows)
          }}
        >
          Random
        </Button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${numColumns},1.8vw)`,
          marginTop: "20px",
        }}
      >
        {grid.map((rows, i) =>
          rows.map((col, k) => (
            <div
              id="test2"
              key={`${i}-${k}`}
              onClick={() => {
                const newGrid = produce(grid, gridCopy => {
                  gridCopy[i][k] = gridCopy[i][k] ? 0 : 1
                })
                setGrid(newGrid)
              }}
              style={{
                width: "1.8vw",
                height: "1.8vw",
                backgroundColor: grid[i][k] ? "pink" : undefined,
                border: "solid 1px black",
              }}
            />
          ))
        )}
      </div>
      <a id="kudos" href="https://www.youtube.com/watch?v=DvVt11mPuM0">
        Kudos to Ben Awad!
      </a>
    </>
  )
}

export default GOL
