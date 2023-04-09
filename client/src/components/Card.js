import React from 'react'
import { Link } from 'react-router-dom'

function Card() {
  return (
    <div>
        <section>
  <div className="text-center container py-5">
    <h4 className="mt-4 mb-5"><strong>Bestsellers</strong></h4>

    <div className="row">
      <div className="col-lg-4 col-md-12 mb-4">
        <div className="card">
          <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
            data-mdb-ripple-color="light">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/belt.webp"
              className="w-100" />
          </div>
          <div className="card-body">
            <Link to="" className="text-reset">
              <h5 className="card-title mb-3">Product name</h5>
            </Link>
            <Link to="" className="text-reset">
              <p>Category</p>
            </Link>
            <h6 className="mb-3">$61.99</h6>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card">
          <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
            data-mdb-ripple-color="light">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp"
              className="w-100" />
          </div>
          <div className="card-body">
            <Link to="" className="text-reset">
              <h5 className="card-title mb-3">Product name</h5>
            </Link>
            <Link to="" className="text-reset">
              <p>Category</p>
            </Link>
            <h6 className="mb-3">$61.99</h6>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card">
          <div className="bg-image hover-zoom ripple" data-mdb-ripple-color="light">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/shoes%20(3).webp"
              className="w-100" />
          </div>
          <div className="card-body">
            <Link to="" className="text-reset">
              <h5 className="card-title mb-3">Product name</h5>
            </Link>
            <Link to="" className="text-reset">
              <p>Category</p>
            </Link>
            <h6 className="mb-3">
              <s>$61.99</s><strong className="ms-2 text-danger">$50.99</strong>
            </h6>
          </div>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-lg-4 col-md-12 mb-4">
        <div className="card">
          <div className="bg-image hover-zoom ripple" data-mdb-ripple-color="light">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(23).webp"
              className="w-100" />
          </div>
          <div className="card-body">
            <Link to="" className="text-reset">
              <h5 className="card-title mb-3">Product name</h5>
            </Link>
            <Link to="" className="text-reset">
              <p>Category</p>
            </Link>
            <h6 className="mb-3">
              <s>$61.99</s><strong className="ms-2 text-danger">$50.99</strong>
            </h6>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card">
          <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
            data-mdb-ripple-color="light">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(17).webp"
              className="w-100" />
           
          </div>
          <div className="card-body">
            <Link to="" className="text-reset">
              <h5 className="card-title mb-3">Product name</h5>
            </Link>
            <Link to="" className="text-reset">
              <p>Category</p>
            </Link>
            <h6 className="mb-3">$61.99</h6>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card">
          <div className="bg-image hover-zoom ripple" data-mdb-ripple-color="light">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(30).webp"
              className="w-100" />
            
          </div>
          <div className="card-body">
            <Link to="" className="text-reset">
              <h5 className="card-title mb-3">Product name</h5>
            </Link>
            <Link to="" className="text-reset">
              <p>Category</p>
            </Link>
            <h6 className="mb-3">
              <s>$61.99</s><strong className="ms-2 text-danger">$50.99</strong>
            </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Card