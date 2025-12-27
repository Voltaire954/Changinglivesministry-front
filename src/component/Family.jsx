import React from "react";
import { Link } from "react-router-dom";

export default function Family() {
  return (
    <>
      <div className="carousel">
        <div className="group">
          <Link className="proj">
            <img src="/Family1.jpg" alt="" />
          </Link>
          <Link className="proj">
            <img src="/Family2.jpg" alt="" />
          </Link>
          <Link className="proj">
            <img src="/Family3.jpg" alt="" />
          </Link>
          <Link className="proj">
            <img src="/Family4.jpg" alt="" />
          </Link>
          <Link className="proj">
            <img src="/Family5.jpg" alt="" />
          </Link>
          <Link className="proj">
            <img src="/Family6.jpg" alt="" />
          </Link>
          <Link className="proj">
            <img src="/Family7.jpg" alt="" />
          </Link>
          <Link className="proj">
            <img src="/Family8.jpg" alt="" />
          </Link>
        </div>

        <div aria-hidden className="group">
          <Link className="proj">
            <img src="/Family1.jpg" alt="" />
          </Link>
          <Link className="proj">
            <img src="/Family2.jpg" alt="" />
          </Link>
          <Link className="proj">
            <img src="/Family3.jpg" alt="" />
          </Link>
          <Link className="proj">
            <img src="/Family4.jpg" alt="" />
          </Link>
          <Link className="proj">
            <img src="/Family5.jpg" alt="" />
          </Link>
          <Link className="proj">
            <img src="/Family6.jpg" alt="" />
          </Link>
          <Link className="proj">
            <img src="/Family7.jpg" alt="" />
          </Link>
          <Link className="proj">
            <img src="/Family8.jpg" alt="" />
          </Link>
        </div>
      </div>
    </>
  );
}
