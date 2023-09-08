import Home from '../Home'
const Review = () => {
    const returnDiv = () => {
        return <div>I'm from a function!</div>
    }
    let isLoggedIn = true;
  return (
    <div>

      {/* 1. More JSX */}
        <h1>Hello!</h1>

        {/* 2. components */}
        <Home />

        {/* 3. javascript (that returns something) */}
        {returnDiv()}
        { isLoggedIn ? <div>youre logged in!</div> : {name: "Chase"}}

        {/* 4.text */}

        I'm text


        {/* 5. arrays of jsx */}
        
        [<li><p></p> <img /></li>, <div>div2</div>, <div>div3</div>]

    </div>
  )
}

export default Review