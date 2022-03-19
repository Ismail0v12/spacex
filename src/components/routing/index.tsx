import React, {Suspense, lazy} from 'react';
import {Route, Routes} from "react-router";

const HomePage = lazy(() => import("../../pages/home/home"));
const LauncheDetailPage = lazy(() => import("../../pages/launche-detail/launche-detail"));
const SearchPage = lazy(() => import("../../pages/search/search"));

function Routing() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/:id" element={<LauncheDetailPage/>}/>
        <Route path="/search" element={<SearchPage/>}/>
      </Routes>
    </Suspense>
  );
}

export default Routing;