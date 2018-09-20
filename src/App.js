import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'


class App extends React.Component {
  state = {
	books: [],
  }

	//load the books into state
 componentDidMount() {
    BooksAPI.getAll()
      .then((books) => this.setState({
        	books: books
        })
      )
  }

  render() {
    console.log(this.state.books)
    return (

      <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                     //books go here 
                        
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <a onClick={'test'}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default App
