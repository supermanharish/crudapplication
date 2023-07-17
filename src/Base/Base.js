import React from 'react'

function Base({title, description, children})  {
    return (
      <div className='main-container'>
        <header>
          <nav>
              <div>App-name</div>
             <div className='nav-btn-group'>
                <button>Home</button>
                <button>Add</button>
                <button>Edit</button>
             </div>
          </nav>
        </header>
        <main>
            <h1>{title}</h1> 
            <h4>{description}</h4>
            <div className='contents'>
                  {children}
            </div>
        </main>
      </div>
    )
  }

export default Base 