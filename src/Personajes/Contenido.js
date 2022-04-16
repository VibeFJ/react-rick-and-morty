import React from 'react'

const Contenido = ({caracteres = [], info, onNext, onPrev}) => {

  const Next = () => {
    onNext();
  }
  
  const Prev = () => {
    onPrev();
  }

  return (
    <section class="blog-posts grid-system">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="all-blog-posts">
              <div class="row">
                {
                  caracteres.map((personaje, id) => (
                    <div key={id} class="col-lg-3">
                      <div class="blog-post">
                        <div class="blog-thumb">
                          <img src={personaje.image} alt=""></img>
                        </div>
                        <div class="down-content">
                          <span>{personaje.species}</span>
                          <a href="post-details.html"><h4>{personaje.name}</h4></a>
                          <ul class="post-info">
                            <li><a href="#">{personaje.gender}</a></li>
                            <li><a href={personaje.location.url}>{personaje.location.name}</a></li>
                            <li><a href={personaje.origin.url}>Origen: {personaje.origin.name}</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))
                }
                <div class="col-lg-12">
                  <ul class="page-numbers">
                    {
                      info.prev !== null ? (
                        <li><a onClick={Prev}><i class="fa fa-angle-double-left"></i></a></li>
                      )
                      : null
                    }
                    <li class="active"><a href="#">1</a></li>
                    {
                      info.next !== null ? (
                        <li><a onClick={Next}><i class="fa fa-angle-double-right"></i></a></li>
                      )
                      : null
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contenido