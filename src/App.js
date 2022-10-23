import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./component/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import PrivateRoute from "./route/PrivateRoute";

// 페이지 구성) 1전체 상품, 2로그인, 3상품 상세
// 네비게이션 바 만들기
// 전체상품페이지- 전체상품
// 로그인 버튼 -> 로그인 페이지
// 상품 디테일을 클릭(로그인 X) -> 로그인 페이지
// 상품 디테일을 클릭(로그인 O) -> 상품 디테일
// 로그아웃 버튼 -> 로그아웃
// 로그아웃 -> 상품디테일 페이지를 볼 수 X
// 로그인 -> 로그아웃이 보이고 반대로
// 상품 검색 기능

function App() {
  const [authenticate, setAuthenticate] = useState(false); // true면 로그인이 됨, false면 안됨 
  useEffect(() => { 
    console.log(authenticate);
  }, [authenticate])
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />}></Route>
        <Route path="/login" element={<Login setAuthenticate={ setAuthenticate} />}></Route>
        <Route path="/product/:id" element={<PrivateRoute authenticate={ authenticate} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
