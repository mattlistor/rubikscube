import React, { Component } from 'react'
import UIfx from 'uifx'; 
import Side from './Side.js';
import Menu from './Menu.js';
import '../App.css';
import moveSound from "https://s1.vocaroo.com/media/download_temp/Vocaroo_s1O1gpbGjJ8v.mp3";

class Layout extends Component {
    solvedState = () =>{
        return {L: [["W", "W", "W"], ["W", "W", "W"], ["W", "W", "W"]],
                B: [["O", "O", "O"], ["O", "O", "O"], ["O", "O", "O"]],
                U: [["B", "B", "B"], ["B", "B", "B"], ["B", "B", "B"]],
                F: [["R", "R", "R"], ["R", "R", "R"], ["R", "R", "R"]],
                R: [["Y", "Y", "Y"], ["Y", "Y", "Y"], ["Y", "Y", "Y"]],
                D: [["G", "G", "G"], ["G", "G", "G"], ["G", "G", "G"]]}   
    }

    moveSet = () => {
        return ["U", "UC", "D", "DC", "R", "RC", "L", "LC", "F", "FC", "B", "BC", "Y", "YC", "X", "XC", "Z", "ZC"]

    }

    numberOScrambleMoves = () => {
        return 20
    }

    state = {
        orientation: this.solvedState(),
        scrambling: false
    }

    solve = () => {
        this.setState({
            orientation: this.solvedState()
        })
    }

    scramble = () => {
        const NUMBER_OF_MOVES = this.numberOScrambleMoves()

        this.setState({scrambling: !this.state.scrambling})
        let i = 1
        let t = setInterval(() => {
            if (i < NUMBER_OF_MOVES && this.state.scrambling){
                let move = this.moveSet()[Math.floor(Math.random()* this.moveSet().length)]
                console.log(move)
                this.setState({
                    orientation: this.rotate(move, this.state.orientation), 
                })
            }
            else {
                this.setState({
                    scrambling: false
                })
                clearInterval(t)
            }
            i += 1
        }, 80)            
    }

    pattern = () => {
        const NUMBER_OF_MOVES = this.numberOScrambleMoves()
        this.setState({scrambling: !this.state.scrambling})
        const sound = new UIfx({asset: moveSound});
        sound.play();

        let i = 0
        //blend
        // let localMoveSet = [["D", "Z", "UC", "D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC", "D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC"]]
        
        // blend back and forth
        // let localMoveSet = [["D", "Z", "UC", "D", "Z", "UC","D", "Z", "UC", "D", "Z", "UC", "D", "Z", "UC","D", "Z", "UC", "UC", "Z", "D", "UC", "Z", "D", "UC", "Z", "D", "UC", "Z", "D", "UC", "Z", "D", "UC", "Z", "D", "D", "Z", "UC", "D", "Z", "UC","D", "Z", "UC", "D", "Z", "UC", "D", "Z", "UC","D", "Z", "UC", "UC", "Z", "D", "UC", "Z", "D", "UC", "Z", "D", "UC", "Z", "D", "UC", "Z", "D", "UC", "Z", "D", "D", "Z", "UC", "D", "Z", "UC","D", "Z", "UC", "D", "Z", "UC", "D", "Z", "UC","D", "Z", "UC", "UC", "Z", "D", "UC", "Z", "D", "UC", "Z", "D", "UC", "Z", "D", "UC", "Z", "D", "UC", "Z", "D", "D", "Z", "UC", "D", "Z", "UC","D", "Z", "UC", "D", "Z", "UC"]]
        // let localMoveSet = [["D", "Z", "UC", "D", "DC", "U", "ZC", "DC", "D", "Z", "UC", "D", "D", "Z", "UC", "D", "D", "D"]]
        
        // cascade down 
        // let localMoveSet = [["BC", "X", "F", "BC", "X", "F", "BC", "X", "F", "BC", "X", "F", "BC", "X", "F", "BC", "X", "F", "BC", "X", "F", "BC", "X", "F", "BC", "X", "F", "BC", "X", "F", ]]

        // checkers
        // let localMoveSet = ["X", "Y", "Z", "X", "Y", "Z", "X", "Y", "Z", "X", "Y", "Z", "X", "Y", "Z", "X", "Y", "Z", "X", "Y", "Z", "X", "Y", "Z"]
        // let localMoveSet = ["X", "X", "Y", "Y", "Z", "Z"]

         
        let localMoveSet = [["D", "Z", "UC", "D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC", "D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC","D", "Z", "UC"],
                            ["D", "Z", "UC", "D", "Z", "UC","D", "Z", "UC", "D", "Z", "UC", "D", "Z", "UC","D", "Z", "UC", "UC", "Z", "D", "UC", "Z", "D", "UC", "Z", "D", "UC", "Z", "D", "UC", "Z", "D", "UC", "Z", "D", "D", "Z", "UC", "D", "Z", "UC","D", "Z", "UC", "D", "Z", "UC", "D", "Z", "UC","D", "Z", "UC", "UC", "Z", "D", "UC", "Z", "D", "UC", "Z", "D", "UC", "Z", "D", "UC", "Z", "D", "UC", "Z", "D", "D", "Z", "UC", "D", "Z", "UC","D", "Z", "UC", "D", "Z", "UC", "D", "Z", "UC","D", "Z", "UC", "UC", "Z", "D", "UC", "Z", "D", "UC", "Z", "D", "UC", "Z", "D", "UC", "Z", "D", "UC", "Z", "D", "D", "Z", "UC", "D", "Z", "UC","D", "Z", "UC", "D", "Z", "UC", "Z", "D", "D", "Z", "UC", "D", "Z", "UC","D", "Z", "U", "U"],
                            ["BC", "X", "F", "BC", "X", "F", "BC", "X", "F", "BC", "X", "F", "BC", "X", "F", "BC", "X", "F", "BC", "X", "F", "BC", "X", "F", "BC", "X", "F", "BC", "X", "F", ],
                            ["X", "Y", "Z", "X", "Y", "Z", "X", "Y", "Z", "X", "Y", "Z", "X", "Y", "Z", "X", "Y", "Z", "X", "Y", "Z", "X", "Y", "Z"],
                            ["X", "X", "Y", "Y", "Z", "Z"]]

        let chosenMoveSet = localMoveSet[Math.floor(Math.random()*localMoveSet.length)];
        let t = setInterval(() => {
            if (i < chosenMoveSet.length && this.state.scrambling){
                let move = chosenMoveSet[i]
                console.log(move)
                this.setState({
                    orientation: this.rotate(move, this.state.orientation), 
                })
            }
            else {
                this.setState({
                    scrambling: false
                })
                clearInterval(t)
            }
            i += 1
        }, 90)            
    }

    rotate = (key, orientation) => {
        // console.log(orientation)
        if (key){
            if(key === "U"){
                var nextOrientation = orientation
                let toprow1 = nextOrientation.B[2][2]
                let toprow2 = nextOrientation.B[2][1]
                let toprow3 = nextOrientation.B[2][0]
        
                nextOrientation.B[2][0] = nextOrientation.L[2][2]
                nextOrientation.B[2][1] = nextOrientation.L[1][2]
                nextOrientation.B[2][2] = nextOrientation.L[0][2]
        
                nextOrientation.L[0][2] = orientation.F[0][0]
                nextOrientation.L[1][2] = orientation.F[0][1]
                nextOrientation.L[2][2] = orientation.F[0][2]
        
                nextOrientation.F[0][0] = orientation.R[2][0]
                nextOrientation.F[0][1] = orientation.R[1][0]
                nextOrientation.F[0][2] = orientation.R[0][0]
        
                nextOrientation.R[2][0] = toprow1
                nextOrientation.R[1][0] = toprow2
                nextOrientation.R[0][0] = toprow3
        
                let one = orientation.U[0][0]
                let two = orientation.U[0][1]
                let three = orientation.U[0][2]
                let four = orientation.U[1][0]
                // let five = orientation.U[1][1]
                let six = orientation.U[1][2]
                let seven = orientation.U[2][0]
                let eight = orientation.U[2][1]
                let nine = orientation.U[2][2]
                nextOrientation.U[0][0] = seven
                nextOrientation.U[0][1] = four
                nextOrientation.U[0][2] = one
                nextOrientation.U[1][0] = eight
                //nextOrientation.U[1][1] = seven
                nextOrientation.U[1][2] = two
                nextOrientation.U[2][0] = nine
                nextOrientation.U[2][1] = six
                nextOrientation.U[2][2] = three
            }
            if(key === "UC"){
                var nextOrientation = this.rotate("U", this.rotate("U", this.rotate("U", orientation)))
            }
            if(key === "D"){
                var nextOrientation = this.rotate("DC", this.rotate("DC", this.rotate("DC", orientation)))
            }
            if(key === "DC"){
                var nextOrientation = orientation
                let toprow1 = nextOrientation.R[0][2]
                let toprow2 = nextOrientation.R[1][2]
                let toprow3 = nextOrientation.R[2][2]
    
                nextOrientation.R[0][2] = nextOrientation.B[0][0]
                nextOrientation.R[1][2] = nextOrientation.B[0][1]
                nextOrientation.R[2][2] = nextOrientation.B[0][2]
    
                nextOrientation.B[0][0] = orientation.L[2][0]
                nextOrientation.B[0][1] = orientation.L[1][0]
                nextOrientation.B[0][2] = orientation.L[0][0]
    
                nextOrientation.L[0][0] = orientation.F[2][0]
                nextOrientation.L[1][0] = orientation.F[2][1]
                nextOrientation.L[2][0] = orientation.F[2][2]
    
                nextOrientation.F[2][2] = toprow1
                nextOrientation.F[2][1] = toprow2
                nextOrientation.F[2][0] = toprow3
    
                // COUNTER-CLOCKWISE
                let one = orientation.D[0][0]
                let two = orientation.D[0][1]
                let three = orientation.D[0][2]
                let four = orientation.D[1][0]
                // let five = orientation.D[1][1]
                let six = orientation.D[1][2]
                let seven = orientation.D[2][0]
                let eight = orientation.D[2][1]
                let nine = orientation.D[2][2]
                nextOrientation.D[0][0] = three
                nextOrientation.D[0][1] = six
                nextOrientation.D[0][2] = nine
                nextOrientation.D[1][0] = two
                //nextOrientation.D[1][1] = five
                nextOrientation.D[1][2] = eight
                nextOrientation.D[2][0] = one 
                nextOrientation.D[2][1] = four
                nextOrientation.D[2][2] = seven 
            }
            if(key === "R"){
                var nextOrientation = orientation
                let toprow1 = nextOrientation.U[0][2] 
                let toprow2 = nextOrientation.U[1][2] 
                let toprow3 = nextOrientation.U[2][2] 
    
                nextOrientation.U[0][2] = nextOrientation.F[0][2]
                nextOrientation.U[1][2] = nextOrientation.F[1][2]
                nextOrientation.U[2][2] = nextOrientation.F[2][2]
    
                nextOrientation.F[2][2] = orientation.D[0][0]
                nextOrientation.F[1][2] = orientation.D[1][0]
                nextOrientation.F[0][2] = orientation.D[2][0]
    
                nextOrientation.D[2][0] = orientation.B[0][2]
                nextOrientation.D[1][0] = orientation.B[1][2]
                nextOrientation.D[0][0] = orientation.B[2][2]
    
                nextOrientation.B[0][2] = toprow1
                nextOrientation.B[1][2] = toprow2
                nextOrientation.B[2][2] = toprow3
    
                // CLOCKWISE
                let one = orientation.R[0][0]
                let two = orientation.R[0][1]
                let three = orientation.R[0][2]
                let four = orientation.R[1][0]
                // let five = orientation.R[1][1]
                let six = orientation.R[1][2]
                let seven = orientation.R[2][0]
                let eight = orientation.R[2][1]
                let nine = orientation.R[2][2]
                nextOrientation.R[0][0] = seven
                nextOrientation.R[0][1] = four
                nextOrientation.R[0][2] = one
                nextOrientation.R[1][0] = eight
                //nextOrientation.R[1][1] = five
                nextOrientation.R[1][2] = two
                nextOrientation.R[2][0] = nine
                nextOrientation.R[2][1] = six
                nextOrientation.R[2][2] = three 
            }
            if(key === "RC"){
                var nextOrientation = this.rotate("R", this.rotate("R", this.rotate("R", orientation)))
            }
            if(key === "L"){
                var nextOrientation = orientation
                let toprow1 = nextOrientation.D[2][2] 
                let toprow2 = nextOrientation.D[1][2] 
                let toprow3 = nextOrientation.D[0][2] 
    
                nextOrientation.D[0][2] = nextOrientation.F[2][0]
                nextOrientation.D[1][2] = nextOrientation.F[1][0]
                nextOrientation.D[2][2] = nextOrientation.F[0][0]
    
                nextOrientation.F[0][0] = orientation.U[0][0]
                nextOrientation.F[1][0] = orientation.U[1][0]
                nextOrientation.F[2][0] = orientation.U[2][0]
    
                nextOrientation.U[0][0] = orientation.B[0][0]
                nextOrientation.U[1][0] = orientation.B[1][0]
                nextOrientation.U[2][0] = orientation.B[2][0]
    
                nextOrientation.B[0][0] = toprow1
                nextOrientation.B[1][0] = toprow2
                nextOrientation.B[2][0] = toprow3
    
                // CLOCKWISE
                let one = orientation.L[0][0]
                let two = orientation.L[0][1]
                let three = orientation.L[0][2]
                let four = orientation.L[1][0]
                // let five = orientation.L[1][1]
                let six = orientation.L[1][2]
                let seven = orientation.L[2][0]
                let eight = orientation.L[2][1]
                let nine = orientation.L[2][2]
                nextOrientation.L[0][0] = seven
                nextOrientation.L[0][1] = four
                nextOrientation.L[0][2] = one
                nextOrientation.L[1][0] = eight
                //nextOrientation.L[1][1] = five
                nextOrientation.L[1][2] = two
                nextOrientation.L[2][0] = nine
                nextOrientation.L[2][1] = six
                nextOrientation.L[2][2] = three 
            }
            if(key === "LC"){
                var nextOrientation = this.rotate("L", this.rotate("L", this.rotate("L", orientation)))
            }
            if(key === "B"){
                var nextOrientation = orientation
                let toprow1 = nextOrientation.R[0][0] 
                let toprow2 = nextOrientation.R[0][1] 
                let toprow3 = nextOrientation.R[0][2] 
    
                nextOrientation.R[0][0] = nextOrientation.D[0][0]
                nextOrientation.R[0][1] = nextOrientation.D[0][1]
                nextOrientation.R[0][2] = nextOrientation.D[0][2]
    
                nextOrientation.D[0][0] = orientation.L[0][0]
                nextOrientation.D[0][1] = orientation.L[0][1]
                nextOrientation.D[0][2] = orientation.L[0][2]
    
                nextOrientation.L[0][0] = orientation.U[0][0]
                nextOrientation.L[0][1] = orientation.U[0][1]
                nextOrientation.L[0][2] = orientation.U[0][2]
    
                nextOrientation.U[0][0] = toprow1
                nextOrientation.U[0][1] = toprow2
                nextOrientation.U[0][2] = toprow3
    
                // CLOCKWISE
                let one = orientation.B[0][0]
                let two = orientation.B[0][1]
                let three = orientation.B[0][2]
                let four = orientation.B[1][0]
                // let five = orientation.B[1][1]
                let six = orientation.B[1][2]
                let seven = orientation.B[2][0]
                let eight = orientation.B[2][1]
                let nine = orientation.B[2][2]
                nextOrientation.B[0][0] = seven
                nextOrientation.B[0][1] = four
                nextOrientation.B[0][2] = one
                nextOrientation.B[1][0] = eight
                //nextOrientation.B[1][1] = five
                nextOrientation.B[1][2] = two
                nextOrientation.B[2][0] = nine
                nextOrientation.B[2][1] = six
                nextOrientation.B[2][2] = three 
            }
            if(key === "BC"){
                var nextOrientation = this.rotate("B", this.rotate("B", this.rotate("B", orientation)))
            }
            if(key === "F"){
                var nextOrientation = orientation
                let toprow1 = nextOrientation.L[2][0] 
                let toprow2 = nextOrientation.L[2][1] 
                let toprow3 = nextOrientation.L[2][2] 
    
                nextOrientation.L[2][0] = nextOrientation.D[2][0]
                nextOrientation.L[2][1] = nextOrientation.D[2][1]
                nextOrientation.L[2][2] = nextOrientation.D[2][2]
                
                nextOrientation.D[2][0] = orientation.R[2][0]
                nextOrientation.D[2][1] = orientation.R[2][1]
                nextOrientation.D[2][2] = orientation.R[2][2]
    
                nextOrientation.R[2][0] = orientation.U[2][0]
                nextOrientation.R[2][1] = orientation.U[2][1]
                nextOrientation.R[2][2] = orientation.U[2][2]
    
                nextOrientation.U[2][0] = toprow1
                nextOrientation.U[2][1] = toprow2
                nextOrientation.U[2][2] = toprow3
    
                // CLOCKWISE
                let one = orientation.F[0][0]
                let two = orientation.F[0][1]
                let three = orientation.F[0][2]
                let four = orientation.F[1][0]
                // let five = orientation.F[1][1]
                let six = orientation.F[1][2]
                let seven = orientation.F[2][0]
                let eight = orientation.F[2][1]
                let nine = orientation.F[2][2]
                nextOrientation.F[0][0] = seven
                nextOrientation.F[0][1] = four
                nextOrientation.F[0][2] = one
                nextOrientation.F[1][0] = eight
                //nextOrientation.F[1][1] = five
                nextOrientation.F[1][2] = two
                nextOrientation.F[2][0] = nine
                nextOrientation.F[2][1] = six
                nextOrientation.F[2][2] = three 
            }
            if(key === "FC"){
                var nextOrientation = this.rotate("F", this.rotate("F", this.rotate("F", orientation)))
            }
            if(key === "FC"){
                var nextOrientation = this.rotate("F", this.rotate("F", this.rotate("F", orientation)))
            }
            if(key === "Y"){
                var nextOrientation = orientation
                let toprow1 = nextOrientation.U[0][1] 
                let toprow2 = nextOrientation.U[1][1] 
                let toprow3 = nextOrientation.U[2][1] 
    
                nextOrientation.U[0][1] = nextOrientation.F[0][1]
                nextOrientation.U[1][1] = nextOrientation.F[1][1]
                nextOrientation.U[2][1] = nextOrientation.F[2][1]
                
                nextOrientation.F[0][1] = orientation.D[2][1]
                nextOrientation.F[1][1] = orientation.D[1][1]
                nextOrientation.F[2][1] = orientation.D[0][1]
    
                nextOrientation.D[2][1] = orientation.B[0][1]
                nextOrientation.D[1][1] = orientation.B[1][1]
                nextOrientation.D[0][1] = orientation.B[2][1]
    
                nextOrientation.B[0][1] = toprow1
                nextOrientation.B[1][1] = toprow2
                nextOrientation.B[2][1] = toprow3        
            }
            if(key === "YC"){
                var nextOrientation = this.rotate("Y", this.rotate("Y", this.rotate("Y", orientation)))
            }
            if(key === "X"){
                var nextOrientation = orientation
                let toprow1 = nextOrientation.U[1][0] 
                let toprow2 = nextOrientation.U[1][1] 
                let toprow3 = nextOrientation.U[1][2] 
    
                nextOrientation.U[1][0] = nextOrientation.L[1][0]
                nextOrientation.U[1][1] = nextOrientation.L[1][1]
                nextOrientation.U[1][2] = nextOrientation.L[1][2]
                
                nextOrientation.L[1][0] = orientation.D[1][0]
                nextOrientation.L[1][1] = orientation.D[1][1]
                nextOrientation.L[1][2] = orientation.D[1][2]
    
                nextOrientation.D[1][0] = orientation.R[1][0]
                nextOrientation.D[1][1] = orientation.R[1][1]
                nextOrientation.D[1][2] = orientation.R[1][2]
    
                nextOrientation.R[1][0] = toprow1
                nextOrientation.R[1][1] = toprow2
                nextOrientation.R[1][2] = toprow3        
            }
            if(key === "XC"){
                var nextOrientation = this.rotate("X", this.rotate("X", this.rotate("X", orientation)))
            }
            if(key === "Z"){
                var nextOrientation = this.rotate("ZC", this.rotate("ZC", this.rotate("ZC", orientation)))
            }
            if(key === "ZC"){
                var nextOrientation = orientation
                let toprow1 = nextOrientation.F[1][0] 
                let toprow2 = nextOrientation.F[1][1] 
                let toprow3 = nextOrientation.F[1][2] 
    
                nextOrientation.F[1][0] = nextOrientation.L[0][1]
                nextOrientation.F[1][1] = nextOrientation.L[1][1]
                nextOrientation.F[1][2] = nextOrientation.L[2][1]
                
                nextOrientation.L[0][1] = orientation.B[1][2]
                nextOrientation.L[1][1] = orientation.B[1][1]
                nextOrientation.L[2][1] = orientation.B[1][0]
    
                nextOrientation.B[1][0] = orientation.R[0][1]
                nextOrientation.B[1][1] = orientation.R[1][1]
                nextOrientation.B[1][2] = orientation.R[2][1]
    
                nextOrientation.R[2][1] = toprow1
                nextOrientation.R[1][1] = toprow2
                nextOrientation.R[0][1] = toprow3     
            }
            if(key === "1"){
                var nextOrientation = this.rotate("ZC", this.rotate("UC", this.rotate("D", orientation)))
            }
            if(key === "2"){
                var nextOrientation = this.rotate("Z", this.rotate("U", this.rotate("DC", orientation)))
            }
            if(key === "3"){
                console.log("3")
                var nextOrientation = this.rotate("X", this.rotate("BC", this.rotate("F", orientation)))
            }
            if(key === "4"){
                var nextOrientation = this.rotate("Z", this.rotate("U", this.rotate("DC", orientation)))
            }
        }
        return nextOrientation
    }

    move = (event, orientation, side) => {
        var nextOrientation = orientation
        event.preventDefault()

        // 0 = leftClick // 2 = rightClick 
        if (event.button === 2 && side === "U"){
            nextOrientation = this.rotate("U", orientation)
        }
        if(event.button === 0 && side === "U"){
            nextOrientation = this.rotate("UC", orientation)
        }
        if(event.button === 2 && side === "D"){
            nextOrientation = this.rotate("D", orientation)
        }
        if(event.button === 0 && side === "D"){
            nextOrientation = this.rotate("DC", orientation)
        }
        if(event.button === 2 && side === "R"){
            nextOrientation = this.rotate("R", orientation)
        }
        if(event.button === 0 && side === "R"){
            nextOrientation = this.rotate("RC", orientation)
        }
        if(event.button === 2 && side === "L"){
            nextOrientation = this.rotate("L", orientation)
        }
        if(event.button === 0 && side === "L"){
            nextOrientation = this.rotate("LC", orientation)
        }
        if(event.button === 2 && side === "B"){
            nextOrientation = this.rotate("B", orientation)
        }
        if(event.button === 0 && side === "B"){
            nextOrientation = this.rotate("BC", orientation)
        }
        if(event.button === 2 && side === "F"){
            nextOrientation = this.rotate("F", orientation)
        }
        if(event.button === 0 && side === "F"){
            nextOrientation = this.rotate("FC", orientation)
        }

        this.setState({
            orientation: nextOrientation
        })
        
    }

    moveFromButton = (event, key, orientation) => {
        this.setState({
            orientation: this.rotate(key, orientation)
        })  
    }
  
    render(){
    return (
    <>
      {/* <div className="title">Rubik's Cube</div> */}
      {/* <Menu orientation={this.state.orientation} scramble={this.scramble} solve={this.solve} moveFromButton={this.moveFromButton}/> */}

      <div className="Layout" orientation={this.state.orientation}>
        <div className="column1">
            {/* <button className="centerRowButton2" onClick={() => console.log("penguin")}></button> */}
            <Side face="L" move={this.move} orientation={this.state.orientation} sideOrientation={this.state.orientation.L}/>
        </div>
        <div className="column2">
            {/* <button className="centerRowButton" onClick={() => console.log("penguin")}></button> */}
            <Side face="B" move={this.move} orientation={this.state.orientation} sideOrientation={this.state.orientation.B}/>
            <Side face="U" move={this.move} orientation={this.state.orientation} sideOrientation={this.state.orientation.U}/>
            <Side face="F" move={this.move} orientation={this.state.orientation} sideOrientation={this.state.orientation.F}/>
            {/* <button className="centerRowButton" onClick={() => console.log("penguin")}></button> */}
        </div>
        <div className="column3">
            {/* <div className="blankTop"></div> */}
            <div className="blankMiddle">
                <Side face="R" move={this.move} orientation={this.state.orientation} sideOrientation={this.state.orientation.R}/>
                <Side face="D" move={this.move} orientation={this.state.orientation} sideOrientation={this.state.orientation.D}/>
            </div>
            {/* <div className="blankBottom">
                <Menu orientation={this.state.orientation} scramble={this.scramble} solve={this.solve} moveFromButton={this.moveFromButton}/>
            </div> */}
        </div>
        {/* <Menu orientation={this.state.orientation} scramble={this.scramble} solve={this.solve} moveFromButton={this.moveFromButton}/> */}

      </div>
      <Menu orientation={this.state.orientation} pattern={this.pattern} scramble={this.scramble} solve={this.solve} moveFromButton={this.moveFromButton}/>
    </>
    );
  }
  
}

export default Layout;
