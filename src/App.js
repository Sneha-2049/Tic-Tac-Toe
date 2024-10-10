
import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    let boxes = document.querySelectorAll('.box');
    let count = 0;
    let resetBtn = document.querySelector('.reset-btn');
    let newBtn = document.querySelector('.new-btn');
    let msg = document.querySelector('.msg');
    const winningPair = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    Array.from(boxes).forEach((box) => {
      box.addEventListener('click', (e) => {
        ++count;
        if (count % 2 == 0) {
          box.innerHTML = 'X';
        }
        else {
          box.innerHTML = 'O';
        }
        box.style.pointerEvents = 'none';
        checkWinner();
      })
    })
    const showMessage = (winner) => {
      msg.innerText = `Congratulations!.. winner is ${winner}`;
      msg.classList.remove('hide');
      boxes.forEach((box) => {
        box.style.pointerEvents = 'none';
      })


    }
    const checkWinner = () => {
      for (let pattern of winningPair) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
          if (pos1val == pos2val && pos2val == pos3val) {
            showMessage(pos1val);
          }
        }
      }

    }

    resetBtn.addEventListener('click', () => {
      boxes.forEach((box) => {
        box.innerHTML = '';
        box.style.pointerEvents = 'auto';
      })
    })
    newBtn.addEventListener('click', () => {
      boxes.forEach((box) => {
        box.innerHTML = '';
        box.style.pointerEvents = 'auto';
      })
      msg.classList.add('hide');
    })
  })
  return (
    <div className='body'>
      <div className='msg-container'>
        <button className='new-btn btn'>
          New Game
        </button>
        <h4 className='msg hide'>
          Winner
        </h4>
      </div>
      <h2>
        Tic Tac Toe
      </h2>
      <div className='container'>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
      </div>
      <button type='reset' className='reset-btn btn'>
        Reset
      </button>
    </div>
  )
}


export default App;
