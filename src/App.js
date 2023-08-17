import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomeMain from './Components/HomeMain/HomeMain';
import NavBar from './Components/HomeMain/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Abaya from './Components/Abaya/Abaya';
import Sharee from './Components/Sharee/Sharee';
import ThreePis from './Components/ThreePis/ThreePis';
import ShareeDetails from './Components/ShareeDetails/ShareeDetails';
import AbayaCardDetails from './Components/AbayaCardDetails/AbayaCardDetails';
import ThreePisDetails from './Components/ThreePisDetails/ThreePisDetails';
import Shop from './Components/Shop/Shop';
import BlogPage from './Components/BlogPage/BlogPage';
import BlogDetails from './Components/BlogDetails/BlogDetails';
import ManageProduct from './Components/ManageProduct/ManageProduct';
import About from './Components/About/About';
import Cart from './Components/Cart/Cart';
import AddNewProduct from './Components/AddNewProduct/AddNewProduct';
import UploadSharee from './Components/UploadSharee/UploadSharee';
import UploadThreePis from './Components/UploadThreePis/UploadThreePis';
import UploadAbaya from './Components/UploadAbaya/UploadAbaya';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import ShipingInfo from './Components/ShipingInfo/ShipingInfo';
import ConfirmOrder from './Components/ConfirmOrder/ConfirmOrder';
import UserProfile from './Components/UserProfile/UserProfile';
import MyOrders from './Components/MyOrders/MyOrders';
import AllOrders from './Components/AllOrders/AllOrders';
import AllUsers from './Components/AllUsers/AllUsers';
import TermsAndPrivacy from './Components/TermsAndPrivacy/TermsAndPrivacy';
import EditProfile from './Components/EditProfile/EditProfile';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeMain></HomeMain>}>
          <Route index element={<Sharee />}></Route>
          <Route path="/abaya" element={<Abaya />}></Route>
          <Route path="/3pis" element={<ThreePis />}></Route>
        </Route>
        <Route
          path="/shareeDetails/:shareeId"
          element={<ShareeDetails />}
        ></Route>
        <Route
          path="/abayaDetails/:abayaDetailsId"
          element={<AbayaCardDetails />}
        ></Route>
        <Route
          path="/threePisDetails/:threePisDetailsId"
          element={<ThreePisDetails />}
        ></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/blogs" element={<BlogPage />}></Route>
        <Route path="/blogDetails/:blogId" element={<BlogDetails />}></Route>
        <Route path="/manageProduct" element={<ManageProduct />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/addProduct" element={
          <AddNewProduct />
        }>
          <Route index element={<UploadSharee />}></Route>
          <Route path="uploadthreepis" element={<UploadThreePis />}></Route>
          <Route path="uploadabaya" element={<UploadAbaya />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/shipping" element={
          <ShipingInfo />
        }></Route>
        <Route path="/confirmOrder" element={
          <ConfirmOrder />
        }></Route>
        <Route path="/userprofile" element={
          <UserProfile />
        }>
          <Route index element={<MyOrders />}></Route>
          <Route path="allOrders" element={<AllOrders />}></Route>
          <Route path="allUsers" element={<AllUsers />}></Route>
        </Route>
        <Route path="/termsAndPrivacy" element={<TermsAndPrivacy />}></Route>
        <Route path="/editProfile" element={<EditProfile />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
